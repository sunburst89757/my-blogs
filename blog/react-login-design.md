---
title: "react-ts-admin路由权限设计方案"
description: "react后台管理系统路由权限实现方案"
authors: tyz
tags: [react]
date: 2022-06-06
---

<!--truncate-->

## 一、react-router 与 vue-router 的区别

1. react-router 没有提高拦截器的 API 设计，因为为了权限拦截的功能，需要手动封装拦截组件，根据用户权限来决定是否渲染对应的路由组件。
2. vue-router 设计有动态添加路由的 api，因此可以在登录后通过角色权限的验证来动态添加权限路由，但是 react-router 并不存在动态添加路由的 api,因此必须 react 的路由组件必须在刚开始就全局注册好。根据指定的路由，在拦截组件里进行角色校验放行。
3. react-router 不存在类似 vue-router 对路由的配置方式，在 generateRouter 函数中将配置对象转化为 useRouts 接收的配置方式。

```tsx
const generateRouter = (routes: RouteObject[]) => {
  return routes.map((route) => {
    if (route.children) {
      route.children = generateRouter(route.children);
    }
    // 路由拦截器 登录和授权页面不需要鉴权
    if (route.path !== "/login" && route.path !== "/404") {
      route.element = (
        <RouterBeforeEach role={route.meta.role} title={route.meta.title}>
          {route.element}
        </RouterBeforeEach>
      );
    }
    return route;
  });
};
```

## 二、登录设计要点

1. 登录流程：
   1. 表单验证通过后发起登录请求，
   2. 根据获取的 role 权限，
   3. 生成对应的侧面菜单路由。
2. react 的路由组件得全部注册（前端控制路由的方式），角色访问与否，在拦截组件中进行拦截。
3. 菜单的注册方式
   1. 配置路由时单独对应设计 siderRoutes 这个配置项。
   2. 在 sider 组件中对路由进行两次配置
      1. 根据角色权限生成可访问的侧边路由
      2. 生成的侧边路由配置生成满足 antd 生成菜单对应的路由结构。
4. 拦截组件的设计：类比 Vue-admin 的设计理念，token 做一次登录校验，角色做一次路由放行校验。

```tsx
const RouterBeforeEach = ({ children, role, title }: interceptOBj) => {
  const userInfo = useAppSelector((state) => state.user.userInfo);
  // 验证是否登录（刷新）
  const authLogin = useMemo(() => {
    const token = cache.getItem("token");
    if (!token) {
      return false;
      // } else {
      //   if (!userInfo.role) {
      //     // 说明没有获取用户的角色，第一次登录需要获取用户信息
      //     dispatch(getUserInfoAction());
      //   }
    }
    // 不用考虑刷新，因为role已经数据持久化了刷新不会丢失
    return true;
  }, []);
  // 验证权限路由
  const authRoute = useMemo(() => {
    //  配置路由时不传递或者说用户的角色是超级管理员时直接放行
    if (!role || userInfo.role === "super-admin") {
      return true;
    }
    return role.includes(userInfo.role);
  }, [role, userInfo.role]);
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

## 三、tabs 的设计

1. tab 的设计探索见[vue 设计 tabs 和菜单联动](https://sunburst89757.github.io/my-blogs/blog/vue-login-design)

1. 总原则：监视路由的变化实现 tab 和 menu 的联动。由于进行了跨组件通信，且状态数量过多，使用 redux 管理。
1. 菜单点击路由跳转，tab 监听路由变化，生成新的 tab 或者 tab 跳转。

```tsx
useEffect(() => {
  const matchRoute = matchRoutes(siderRoutes, location.pathname)!;
  const newTab: tabObject = {
    key: matchRoute[matchRoute.length - 1].pathname,
    title: matchRoute[matchRoute.length - 1].route.meta!.title,
  };
  // 解决直接关闭页面后，重新打开页面，生成一个/路径 ----对应的tab
  if (newTab.title === "布局") {
    // 有redux的数据持久化，因此直接找到离开前激活的页面进行跳转即可
    navigate(tabActive);
  } else {
    dispatch(changeTab(newTab));
  }
}, [location.pathname, dispatch, navigate]);
```

3. tab 本身的操作，只处理 tab 本身，对 tab 进行增删跳转由 redux 管理 tabActive，真正实现路由跳转由对 tabActive 的监视实现。
