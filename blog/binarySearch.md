---
title: "二分查找"
description: "数组二分查找的原理及使用实例"
authors: tyz
tags: [algorithm, array]
date: 2022-06-27
---

<!--truncate-->

本文理解基于此[labuladong 算法小抄](https://labuladong.github.io/algo/1/10/)

## 寻找指定目标

1. 场景：有序无重复数组寻找 target。
2. 基本原理：寻找有序数列当中的中间值，与中间值作比较，不断收缩序列大小直至找到目标值
   - 选择闭区间[left,right]就要表明 right 是能够取到的值，所以 right 的初值是 nums.length - 1 不是 nums.length;
   - 因为[]区间闭合，所以 left<=right，区间的右边 left 是可以取到的，所以有等号
   - middle 不取(left+right)/2 是因为，数据的存储是有上限的，避免数值整型溢出。
   - 如果目标值比中间值要大，显然 target 位于(middle,right],所以要更新 left，已经验证过 nums[middle] !== target,因此 left 更新值比 middle 大一，right 的更新同理。
   - <font color="red">退出循环的条件:left = right + 1</font>
   - 当二分查找最终都查不出来的时候就返回-1
3. 代码实现

   ```typescript
   function getTarget(nums: number[], target: number): number {
     let left: number = 0;
     //   右边界取数组的最右侧边是[left,right] 闭区间，所有的点都可取到
     let right: number = nums.length - 1;
     //   因为所有的点都可以取到所以可以取等号
     while (left <= right) {
       //    防止溢出边界
       let middle: number = left + Math.floor((right - left) / 2);
       if (nums[middle] > target) {
         right = middle - 1;
       } else if (nums[middle] < target) {
         left = middle + 1;
       } else if (nums[middle] === target) {
         return middle;
       }
     }
     return -1;
   }
   ```

## 寻找左右边界

1. 场景： 有序数组，但内部数值序列有重复的情况。
2. 基本原理：在二分查找的时候不断收缩左右边界，直至找到。
   - 大体遍历和上面的原理相同，只是在等于目标值的处理方式不同。
     - 寻找左边界，碰到了目标值不代表结束，应该收缩边界，找左边界，那么就要让上限不断的向左靠近 所以就对 right = middle - 1,同样的找有边界，就是 left = middle + 1 靠近右边界。
   - <font color = "red">左边界的意义，比如说左边界是 2，就表明数组有 2 个数小于 target，通过二分的循环只能找到这一点，但是不能确定边界值是不是等于 target，所以需要出来要判断一下，除此之外需要判断一下是否存在遍历的时候溢出的情况，故而需要判断是否小于 0 是否溢出数组的边界</font>
   - 左右边界显然对应的就是 left 和 right 对应的对象。
3. 代码实现

   ```typescript
   function getLeftBorder(nums: number[], target: number): number {
     let left: number = 0;
     let right: number = nums.length - 1;
     while (left <= right) {
       let middle: number = left + Math.floor((right - left) / 2);
       if (nums[middle] > target) {
         right = middle - 1;
       } else if (nums[middle] < target) {
         left = middle + 1;
       } else if (nums[middle] === target) {
         // 收缩边界，寻找左边界，那么有边界需要不停的向左边收缩靠近
         right = middle - 1;
       }
     }
     // 边界溢出 和 实际的边界值和目标值没找到，就返回-1
     if (left < 0 || left >= nums.length || nums[left] !== target) {
       return -1;
     }
     return left;
   }
   function getRightBorder(nums: number[], target: number): number {
     let left: number = 0;
     let right: number = nums.length - 1;
     while (left <= right) {
       let middle: number = left + Math.floor((right - left) / 2);
       if (nums[middle] > target) {
         right = middle - 1;
       } else if (nums[middle] < target) {
         left = middle + 1;
       } else if (nums[middle] === target) {
         // 收缩边界，寻找右边界，那么左边界需要不停的向右边收缩靠近
         left = middle + 1;
       }
     }
     if (right < 0 || right >= nums.length || nums[right] !== target) {
       return -1;
     }
     return right;
   }
   ```
