---
title: "typescript高级类型"
description: "字节青训营关于typescript高级类型的思考"
authors: tyz
tags: ["字节青训营", "TypeScript"]
date: 2022-08-02
---

<!--truncate-->

## Record

`Record<K,V>` 创建一个以 K 为属性的类型，以 V 为值类型的对象。

- 使用 Record 快速创建具有约束性质的对象类型

```ts
type ISubject = "Math" | "Chinese" | "English";
type IGrade = Record<ISubject, number>;

const myGrade: IGrade = {
  Math: 99,
  Chinese: 100,
  English: 99,
};
```

## Partial

`Partial<T>` T 是一个对象类型，这是取 T 这个对象的部分键值对作为属性，原理如下：

- keyof 是取对象类型的所有的属性 in 是取其中属性之一

```ts
type IPartial<T extends Record<any, any>> = {
  [P in keyof T]?: T[P];
};
const mathGrade: IPartial<IGrade> = {
  Math: 100,
};
```

- Record 结合 Partial 实现 AB 对象合并,A 对象如果有 B 对象的值就替换 B 对象
- A 对象是 B 对象的一部分故而就是 Partial 实现，T 也需要泛型约束

```ts
type IMerge<T extends Record<string, any>> = (
  sourceObj: Partial<T>,
  targetObj: T
) => T;
type ITargetObj = {
  name: "hhhh";
  age: 999;
};
const merge: IMerge<ITargetObj> = (sourceObj, targetObj) => {
  for (let key in targetObj) {
    const itemVal = sourceObj[key];
    itemVal && (targetObj[key] = itemVal);
  }
  return targetObj;
};
```

## 条件类型

extends 的使用

- 如果在泛型`<>`中使用就是表示泛型约束 比如` <T extends Record<string,any>>`表示的是传入的泛型 T 必须是属性是字符串，值任意类型的对象
- 如果 extends 紧跟泛型后面就表示条件类型,T 继承 U 那么结果就是 X 类型，否则就是 Y 类型

```ts
type Test<T, U, V> = T extends Record<string, string> ? U : V;
```

## infer

infer 表示在 extends 条件语句中待推断的类型变量

```ts
type ParamType<T> = T extends (arg: infer P) => any ? P : T;
```

- 在这个条件语句 T extends (arg: infer P) => any ? P : T 中，infer P 表示待推断的函数参数。 整句表示为：如果 T 能赋值给 (arg: infer P) => any，则结果是 (arg: infer P) => any 类型中的参数 P，否则返回为 T。

```ts
interface User {
  name: string;
  age: number;
}

type Func = (user: User) => void;

type Param = ParamType<Func>; // Param = User
type AA = ParamType<string>; // string
```

## ReturnType

`ReturnType<T>` 表示函数返回值的类型，实现原理如下

- T 如果是这个函数，则把函数返回值的类型导出即可，这里使用到了 infer，infer 是等待推断的类型，这里需要推断的类型是返回值的类型，就是把 infer 的值当做一个变量来使用

```ts
type IReturnType<T extends (...args: any) => any> = T extends (
  ...args: any
) => infer R
  ? R
  : any;
```
