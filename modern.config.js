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
    },
    title: '前端面试资源',
    icon: 'https://www.rspack.dev/static/image/logo.3e9ad8f8.png',
  },
  plugins: [docTools()],
});
