---
title: "react admin权限设计"
description: "react router6在后台管理系统中实现的权限方案"
authors: tyz
tags: [react, react-router6]
date: 2022-07-15
---

<!--truncate-->

react admin 权限控制方案大体上有两种方案：前端控制路由表和后端控制路由表

## 前端控制路由

前文[react-ts-admin 路由权限设计方案](https://sunburst89757.github.io/my-blogs/blog/react-login-design)的权限是由前端控制的路由表，根据后端给予当前用户的角色，在前端生成对应路由表来实现权限管理（权限管理方案基于[vue-element-admin](https://github.com/PanJiaChen/vue-element-admin)的权限管理方案），但是此种方案缺点明显

- 每个用户对应的角色生成的路由表由前端固定，一旦后期新增角色，需要重新部署前端应用。
- 用户对应角色的映射路由表的生成方式不够灵活。
- 此种方案需要前端手动注册所有的路由，router 书写繁杂

## 后端控制路由

### 前端动态注册路由

1. 后端根据用户直接返回当前用户的可访问路由 accessRoutes(后端可以根据角色映射),前端根据返回的路由动态生成对应的组件。如此，当用户访问当前用户不允许访问的路由，由于前端根本没有注册这种路由，因此直接就会匹配到\*,重定向 404，因此实现页面权限管理。
2. 实现时需要考虑几个问题
   - 系统在后端获取可访问的路由时，需要注册几个基本的路由，比如 /login 等页面
   - 动态生成路由组件，必须使系统重新渲染，故而路由组件必须存储在 store 内（本文使用 redux）
   - <font color="red">刷新带来的问题</font>
   - 一旦在用户的权限页面（后端返回的可访问页面）刷新必然会导致 store 里维护的路由组件置空，刷新后的页面重新访问改页面，路由组件没有注册必然系统崩溃。
     - 思路一：在路由拦截组件内部，根据某个状态条件判断，重新获取 accessRoutes，但是此方法只适用于 vue-router，因为 vue-router 的拦截器是全局的，不需要确定当前路由是否注册就进入路由拦截；但是 react router 的拦截组件是在当前路由注册的条件下进行拦截，因此路由不注册，不可能进行拦截组件内部重新获取可访问路由，因此此方案不可行。
     - 思路二：由于 react-router 拦截组件是在路由注册时才能够实现拦截，故可以于登录后生成 accessRoutes，并存储于缓存里，刷新后从缓存里读取 accessRoutes 注册路由来实现访问，但是从缓存读取的 accessRoutes 经 useRoutes 注册<font color = "red">提示失败，原因未知,后续研究</font>
3. 实现细节---根据思路二实现

   - 路由配置

     ```ts
     //  路由配置 ---类似如下
     const routes = [
       {
         path: "/",
         element: <MyLayout></MyLayout>,
         meta: {
           title: "布局",
         },
         children: [
           {
             path: "dashboard",
             element: <LazyLoad path="/Dashboard"></LazyLoad>,
             meta: {
               title: "首页",
             },
           },
         ],
       },
     ];
     //  生成react router dom 6需要的结构
     const generateRouterForReactRouter = (routes: RouteObject[]) => {
       return routes.map((route) => {
         if (route.children) {
           route.children = generateRouterForReactRouter(route.children);
         }
         // 路由拦截器 登录和授权页面不需要鉴权
         if (isInterceptRoute(route)) {
           route.element = (
             <RouterBeforeEach title={route.meta.title}>
               {route.element}
             </RouterBeforeEach>
           );
         }
         return route;
       });
     };
     ```

   - 登录后获取后端生成路由

     ```ts
     const { run: handleLogin } = useRequest(
       (params: userType) => login(params),
       {
         manual: true,
         onSuccess: async (res) => {
           if (res.success) {
             cache.setItem("token", res.data.token);
             const { data: userRoutes } = await getUserRoutes();
             const accessRoutes =
               generateAccessRoutesForReactRouter(userRoutes);
             cache.setItem("accessRoutes", accessRoutes);
             dispatch(gener);
             navigate("/dashboard");
           }
         },
         onError: (error) => {
           console.log(error, "错误信息");
         },
       }
     );
     ```

   - 注册路由

     ```ts
     export const MyRoutes = React.memo(() => {
       let myRouter: RouteObject[] = [];
       const accessRoutes = useAppSelector(
         (state) => state.permission.accessRoutes
       );
       // 已经成功登录后 路由从store里读取
       if (accessRoutes.length > 2) {
         myRouter = accessRoutes;
       } else {
         // 刷新后 accessRoutes会重置，路由就从缓存里读取，刷新路由重新进入刷新前的路由，在拦截器里重新获取accessRoutes
         myRouter = cache.getItem("accessRoutes");
       }
       const routes = useRoutes(myRouter);
       return <div style={{ height: "100vh" }}>{routes}</div>;
     });
     ```

   - 路由拦截器

     ```ts
     const RouterBeforeEach = ({ children, title }: interceptOBj) => {
       const accessRoutes = useAppSelector((state) => state.permission.accessRoutes);
       const location = useLocation();
       // 验证是否登录（刷新）
       const authLogin = useMemo(() => {
         const token = cache.getItem("token");
         if (!token) {
           return false;
         } else {
           //获取用户的角色 菜单路由 权限信息
           if (accessRoutes.length === 2) {
           //   刷新导致store数据丢失，重新获取
             getUserRoutes().then(res=>{
             const  accessRoutes = generateAccessRoutesForReactRouter(res.data);
           }
         })
           return true;
         }
       }, []);
       useEffect(() => {
         document.title = title;
       });
       return (
         <div>
           {authLogin?children:<Redirect to="/login"></Redirect>}
         </div>
       );
     };
     ```

前文[react-ts-admin 路由权限设计方案](https://sunburst89757.github.io/my-blogs/blog/react-login-design#%E4%B8%80react-router-%E4%B8%8E-vue-router-%E7%9A%84%E5%8C%BA%E5%88%AB)已详细说明，这里不再赘述。

### 前端注册全部路由

1. 由于前面方案刷新后缓存读取的 routes 配置不能够在 useRoutes 里生效，因此选择了前端手动注册全部路由，根据后端返回的路由生成一个可访问的路由进行鉴权来生成 404。
2. 实现时考虑的问题

   - 前端手动注册全部路由，因此需要在路由拦截组件里除了需要判断是否登录，也需要进行逻辑校验是否有权限，无权限进入 404 的判断。

   - 逻辑校验权限需要后端发送可访问的路由，这个请求存放的位置需要思考
     - 思路一：登录的时候直接发送这个请求，将获取的 accessRoutes 由 store 维护，避免刷新时造成 store 丢失存于缓存，但是刷新后 store 丢失的数据还需要及时获取,思路是直接存放于拦截器里再一次请求恢复 store，但是 authRoute 维护就从缓存里读取，避免计算过慢直接返回 404 了。
     - 思路二：将请求直接存放于 layout 组件，layout 不需要鉴权，并且刷新的每一个页面都是 layout 作为一级组件，就避免了 login 和拦截组件的两次请求冗余，并且也不会让登陆页面请求过多造成页面渲染阻塞

3. 实现细节

   - 注册路由

     ```ts
     import { myRouter } from "./config";

     // 注册所有路由
     export const MyRoutes = React.memo(() => {
       const routes = useRoutes(myRouter);
       return <div style={{ height: "100vh" }}>{routes}</div>;
     });
     ```

   - layout 获取可访问路由

     ```ts
     export default function MyLayout() {
       const dispatch = useAppDispatch();
       const accessRoutes = useAppSelector(
         (state) => state.permission.accessRoutes
       );
       // 首次渲染执行  刷新时重新获取
       useAsyncEffect(async () => {
         if (accessRoutes.length === 0) {
           const { data: menuRoutes } = await getUserMenuList();
           const realMenuRoutes = generateAccessRoutes(menuRoutes);
           const siderRoutes = generateRouterForBackEnd(menuRoutes);
           cache.setItem("accessRoutes", realMenuRoutes);
           // 生成菜单路由
           dispatch(addRoutes(siderRoutes));
           // 生成可以访问的路由结构
           dispatch(updateAccessRoutes(realMenuRoutes));
         }
       }, []);
       return (
         <>
           <Layout style={{ height: "100vh" }}>
             <MyHeader onClick={toggle}></MyHeader>
             <Layout>
               <MySider></MySider>
               <MyContent></MyContent>
             </Layout>
           </Layout>
         </>
       );
     }
     ```

   - 拦截器

     ```ts
     const RouterBeforeEach = ({ children, title }: interceptOBj) => {
       const accessRoutes = useAppSelector(
         (state) => state.permission.accessRoutes
       );
       const location = useLocation();
       // 验证是否登录
       const authLogin = useMemo(() => {
         const token = cache.getItem("token");
         if (!token) {
           return false;
         }
         return true;
       }, []);
       const authRoute = useMemo(() => {
         if (!cache.getItem("accessRoutes")) {
           return accessRoutes.includes(location.pathname);
         }
         return cache.getItem("accessRoutes").includes(location.pathname);
       }, [location.pathname, accessRoutes]);
       useEffect(() => {
         document.title = title;
       });
       return (
         <div>
           {authLogin ? (
             authRoute ? (
               children
             ) : (
               <Redirect to="/404"></Redirect>
             )
           ) : (
             <Redirect to="/login"></Redirect>
           )}
         </div>
       );
     };
     ```
