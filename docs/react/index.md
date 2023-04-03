---
title: React原理篇
---

# React 原理篇

## 01 JSX 本质

- `React.createElement`即`h`函数，返回`vnode`

- createElement 与 cloneElement 的区别是什么？

- 第一个参数，可能是组织间，也可能是`html tag`

- 组件名，首字母必须是大写【React 规定】

```jsx
React.createElement(type, [props], [...children]);

// 第1个参数必填，传入的是似HTML标签名称，eg: ul、li
// 第2个参数选填，表示的是属性 eg: className
// 第3个参数选填，子节点 eg: 要显示的文本或者子组件
```
