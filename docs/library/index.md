---
title: React原理篇
---

# React 原理篇

## 01 JSX 本质

- `React.createElement`即`h`函数，返回`vnode`

- `React.createElement` 与 `React.cloneElement` 的区别是什么？

- 第一个参数，可能是组件，也可能是`html tag`

- 组件名，首字母必须是大写【React 规定】

```jsx
React.createElement(type, [props], [...children]);

// 第1个参数必填，传入的是似HTML标签名称，eg: ul、li
// 第2个参数选填，表示的是属性 eg: className
// 第3个参数选填，子节点 eg: 要显示的文本或者子组件
```

```jsx
React.createElement的用法;
React.createElement("tag", null, [child1, child2]);
React.createElement("tag", props, child1, child2, child3);
React.createElement(Component, props, child1, child2, "文本节点");
```

```jsx title=jsx 的基本用法
<div className="container">
  <p>text</p>
  <img src={imgSrc} />
</div>;

// 转换后
React.createElement(
  "div",
  {
    className: "container",
  },
  React.createElement("p", null, "text"),
  React.createElement("img", { src: imgSrc })
);
```

```jsx title=转换style
const styleData = { fontSize: "20px", color: "#f00" };
const styleElem = <p style={styleData}>设置style</p>;

// 转换后
React.createElement(
  "p",
  {
    style: styleDate,
  },
  "\u8BBE\u7F6Estyle"
);
```

```jsx title="jsx加载组件"
const app = (
  <div>
    <Input submitTitle={onSubmitTitle} />
    <List list={list} />
  </div>
);

// 转换后
React.createElement(
  "div",
  null,
  React.createElement(Input, { submitTitle: onSubmitTitle }),
  React.createElement(List, { list: list })
);
```

```jsx title=jsx转换事件
const eventList = <p onClick={this.clickHandler}>text</p>;

// 转换后
React.createElement("p", { onClick: this.clickHandle }, "text");
```

```jsx title=jsx列表
const listElement = (
  <ul>
    {this.state.list.map((item, index) => {
      return (
        <li key={index}>
          index:{index},title:{item.title}
        </li>
      );
    })}
  </ul>
);

// 转换后
React.createElement(
  "ul",
  null,
  this.state.list.map((item, index) => {
    return React.createElement(
      "li",
      { key: index },
      "index:",
      index,
      ",title:",
      item.title
    );
  })
);
```

babel 链接：https://babeljs.io/repl
