import docTools, { defineConfig } from "@modern-js/doc-tools";
import path from "path";

export default defineConfig({
  doc: {
    root: path.join(__dirname, "docs"),
    themeConfig: {
      nav: [
        {
          text: "介绍",
          link: "introduce",
        },
        {
          text: "React原理",
          link: "react",
        },
        {
          text: "基础篇",
          link: "base",
        },
        {
          text: "进阶篇",
          link: "improve",
        },
        {
          text: "高频篇",
          link: "high-frequency",
        },
        {
          text: "精选篇",
          link: "excellent",
        },
        {
          text: "手写篇",
          link: "handwritten",
        },
        {
          text: "原理篇",
          link: "principle",
        },
        {
          text: "面经篇",
          link: "interview",
        },
      ],
      sidebar: {
        excellent: [
          {
            text: "1 HTML模块",
            items: [
              {
                text: "如何理解HTML语义化",
                link: "/",
              },
              {
                text: "H5的新特性有哪些",
                link: "/",
              },
            ],
          },
          {
            text: "2 CSS模块",
            items: [],
          },
          {
            text: "3 JS模块",
            items: [],
          },
          {
            text: "4 ES6模块",
            items: [],
          },
          {
            text: "5 浏览器模块",
            items: [],
          },
          {
            text: "6 React模块",
            items: [],
          },
          {
            text: "7 Vue模块",
            items: [],
          },
          {
            text: "8 Node模块",
            items: [],
          },
          {
            text: "9 前端工程相关",
            items: [],
          },
          {
            text: "10 移动多端开发",
            items: [],
          },
          {
            text: "11 小程序模块",
            items: [],
          },
          {
            text: "12 前端安全模块",
            items: [],
          },
          {
            text: "13 性能优化相关",
            items: [],
          },
          {
            text: "14 HTTP模块",
            items: [],
          },
          {
            text: "15 常用设计模式",
            items: [],
          },
          {
            text: "16 框架通识",
            items: [],
          },
          {
            text: "17 排序算法",
            items: [],
          },
          {
            text: "18 计算机通识",
            items: [],
          },
        ],
      },
      footer: {
        message: "版权所有",
      },
      outlineTitle: "目录",
    },
    title: "前端面试资源",
    icon: "https://www.rspack.dev/static/image/logo.3e9ad8f8.png",
  },
  plugins: [docTools()],
});
