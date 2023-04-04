---
title: React原理篇
---

# day02 React 合成事件机制

- React16 事件绑定到 document 上
- React17 事件绑定到 root 组件上，有利于多个 react 版本共存，例如微前端
- event 不是原生的，是 SyntheticEvent 合成事件对象
- 和 Vue 不同，和 DOM 事件也不同

> 为了解决跨浏览器兼容性问题，React 会将浏览器原生事件（Browser Native Event）封装为合成事件（SyntheticEvent）传入设置的事件处理器中。这里的合成事件提供了与原生事件相同的接口，不过它们屏蔽了底层浏览器的细节差异，保证了行为的一致性。另外有意思的是，React 并没有直接将事件附着到子元素上，而是以单一事件监听器的方式将所有的事件发送到顶层进行处理。这样 React 在更新 DOM 的时候就不需要考虑如何去处理附着在 DOM 上的事件监听器，最终达到优化性能的目的
