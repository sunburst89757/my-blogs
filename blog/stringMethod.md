---
title: "字符串操作方法总结"
description: "ES6常用字符串操作方法总结"
authors: tyz
tags: [JavaScript高级程序设计读书笔记]
date: 2022-07-05
---

<!--truncate-->

## String 类型

只有引用对象类型才具有属性和方法，string 作为原始值是不会拥有对应的属性和方法的，但是使用`"abc".indexof("a")`是可以正常执行的。这是什么原因呢？

1. js 给 string 做了原始封装类型 String（大写）,在使用`let str = "abc";str.indexof("a")`的过程中执行了以下几个步骤
   - `let str = new String("abc") ` 创建了 String 类型的实例
   - 实例调用对应的方法和属性 `str.indexof("a")`
   - 销毁这个实例 `str = null`
2. 声明字符串可以使用字面量声明也可以使用构造函数声明，但建议使用声明字符串的形式声明，避免类型上造成混乱理解不清。

   ```js
   const str = "ABC"; // 推荐写法
   const str1 = new String("abc"); // 不推荐
   str instanceof String; // false
   str instanceof String; // true
   typeof str; // string
   typeof str1; // object
   ```

3. 数值型和布尔型也有对应类似的 Number 和 Boolean 原始类型，使用上和注意事项与 String 相同。

## String 常用操作方法

### 截取字符串

`substring(start,end)`和 `slice(start,end)` 方法,都是返回一个新的字符串，不修改原字符串，从起点开始，不包括终点。<font color = "red">推荐使用 substring</font>

- 当 end 为负数时
  - 对于 substring 来说视为 0，自动将两个参数按照大小顺序互换
  - 对于 slice 来说负数视为字符串的长度+ 负数视为 end 然后按照大小顺序互换

```js
const str = "abcd";
str.substring(0, 2); // ab
str.slice(0, 1); //a
str.substring(2, -3); // =>str.substring(0,2) ab
str.slice(2, -3); // =>str.slice(2,1) =>str.slice(1,2) b
```

### 字符串位置

`indexof(char, start)` ` lastIndexof(char,start)`第一个顺序从 start 查找 char 字符，找到就停止；第二个是末尾从头查找 char 字符，查到停止。

- 查找字符串中所有对应的 char 字符:找到之后序号加一继续向下找即可
- <font color = "red">既能寻找一个字符"a"也能寻找类似"ab"这种</font>

  ```ts
  function searchAllChar(str: string, target: string): number[] {
    let position: number = str.indexOf(target, 0);
    const arr: number[] = [];
    while (position >= 0) {
      arr.push(position);
      position = str.indexOf(target, position + 1);
    }
    return arr;
  }
  ```

### 字符串包含

`includes(str,start)` 从 start 开始搜寻，匹配到 str 就返回 true

```ts
const str = "foobarbaz";
str.includes("foo"); // true
str.includes("foo", 1); //false
```

### 字符串母大小写

`toLowerCase()` 全部替换小写 `toUpperCase()` 全部替换大写

### 去除空格

`trim()`去除字符串前后空格，不改变原字符串

### 字符串转数组方法

1. 利用字符串解构实现

   ```ts
   const str: string = "abc";
   console.log([...str]); // ["a","b","c"]
   ```

2. `split()`方法，接收一个参数，以间隔的形式分割字符串形成数组

   ```ts
   const str: string = "abc";
   console.log(str.split("")); // ["a","b","c"]

   const str1: string = "1.1.1";
   console.log(str.split(".")); // ["1","1","1"]
   ```

### 字符串模式匹配

1.  `match()` 接收一个参数：正则表达式，返回值同 RegExp 对象的`exec()`方法的返回值相同。
2.  `search()` 接收正则表达式，返回找到的第一个字符的位置。
    - 与`indexOf()` 的区别是 search 可以通过正则查询

```ts
const text: string = "cat bat sat";
const position: number = text.search(/at/); //1
```

3. `replace()` 方法替换字符串方法，接收两个参数。第二个参数是字符串，替换第一个参数的值。
   - 第一个是字符串，第二个字符串替换第一个字符串，只能替换一个。
   - 第一个是正则，第二个字符串，当正则有全局匹配时才会替换用第二个字符串替换全局。
