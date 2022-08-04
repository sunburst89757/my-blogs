---
title: "ref在react中的使用"
description: "react useRef的使用"
authors: tyz
tags: [react]
date: 2022-08-04
---

<!--truncate-->

## ref 的使用场景

根据官方文档，ref 变量的值由 react 来维护，但是 ref 的值的变化并不会触发页面的重新渲染，因此 ref 的值实际上主要有两种使用场景。

1. 维护需要变化但是不影响页面渲染的值。
2. 用于获取 DOM 实现父组件调用子组件的方法。

## 使用 ref 进行接口的查询

一个很常见的场景：查表业务中，更改了每页显示的数量后立刻调接口刷新页面数据,实现如下。

```ts
const [formData, setFormData] = useState(……);
const handleChangePageSize = useCallback(() => {
  setFormData(formData)
  getDataList()
}, []);
const getDataList = useCallback(
  () => {
   fetchData(formData)
  },
  [],
)

```

实现的时候经常会出现页面数据仍然是上次的结果，查看 formData 确实是 set 过之后的结果，原因是 setData 引发的渲染 react 做的是批量更新的处理，是等所有的 state 都更新过后才会执行，所以 fetchData 拿到的数据是上一次渲染前的数据，因此页面的数据不会更新。

出现的问题是由于两次渲染前后 state 的变化导致的，那么我们就可以选择一个不影响渲染但是有 react 维护的值来存储查表业务即可实现，这时可以使用 ref 来保存查表需要的参数，state 用来维护页面的状态不参与查表的业务即可实现。实现如下

```ts
const [formData, setFormData] = useState(……);
const [queryData, setQueryDataData] = useRef(……);

const handleChangePageSize = useCallback(() => {
  setFormData(formData)
  queryData.current = 新的querYData
  getDataList()
}, []);
const getDataList = useCallback(
  () => {
   fetchData(queryData.current)
  },
  [],
)

```

## 实现父组件调用子组件的方法

### 子组件是原生 DOM

子组件是原生的 html 的 DOM 可以直接使用 ref 调用原生 DOM 上的方法

```ts
const Father = () => {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <div>
      <Button
        onClick={() => {
          ref.current?.focus();
        }}
      >
        点击实现input Focus
      </Button>
      <input type="text" ref={ref} />
    </div>
};
```

### 子组件是自定义组件

对于自定义组件 React 默认是不允许组件访问其他组件的 DOM 节点，即使是父子组件也不可以，想使用子组件的方法，必须使用 forwardRef 将组件暴露出来。

#### 调用用自定义组件内原生 DOM 组件的方法

通过 forwardRef 选择接收传递的 inputRef,进而传递到 input 的 ref 上,这样就实现了对自定义组件内部原生组件的 DOM 获取

```ts
const Father = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <div>
      <Button
        onClick={() => {
          inputRef.current?.focus();
        }}
      >
        点击实现input Focus
      </Button>
      <Children ref={inputRef}></Children>
    </div>
};
const Children = forwardRef((props, ref: Ref<HTMLInputElement>) => {
  return (
    <div>
      <input type="text" ref={ref} />
    </div>
  );
});
```

#### 调用用自定义组件内自定义方法

这个应该是最为常用的使用场景，通过 useImperativeHandle 暴露指定的方法,需要暴露什么方法只需要在指定的 useImperativeHandle 下暴露即可

```ts
interface IMyRef {
  sayHi: () => any;
}
export default function Father() {
  const ref = useRef<IMyRef>(null);
  return (
    <div>
      <Button
        onClick={() => {
          ref.current?.sayHi();
        }}
      >
        调用Children的handleTest方法
      </Button>
      <Children ref={ref}></Children>
    </div>
  );
}
const Children = forwardRef((props, ref: Ref<IMyRef>) => {
  const handleTest = useCallback(() => {
    console.log("test");
  }, []);
  useImperativeHandle(ref, () => ({
    sayHi: handleTest,
  }));
  return (
    <div>
      <input type="text" />
    </div>
  );
});
```

#### 泛型组件内暴露子组件的方法给父组件

在封装高级组件时经常会遇到这种需求，组件需要接受泛型，forwardRef 也需要接受泛型，传递 ref 时类型经常会犯错，这里我采用迂回的方法，不直接传递 ref，使用变量 myRef 做 props 的一个值，给 myRef 定义类型骗过 useImperativeHandle，避免使用 forwardRef 也可以实现，实现如下

```ts
interface IMyRef {
  sayHi: () => any;
}
export default function JsErr() {
  const ref = useRef<IMyRef>(null);
  return (
    <div>
      <Button
        onClick={() => {
          ref.current?.sayHi();
        }}
      >
        调用Children的handleTest方法
      </Button>
      <Children myRef={ref}></Children>
    </div>
  );
}
const Children = ({ myRef }: { myRef: Ref<IMyRef> }) => {
  // myRef并不是ref传递的，是通过props传递的，这样就避免使用forwardRef了
  const handleTest = useCallback(() => {
    console.log("test");
  }, []);
  useImperativeHandle(myRef, () => ({
    sayHi: handleTest,
  }));
  return (
    <div>
      <input type="text" />
    </div>
  );
};
```
