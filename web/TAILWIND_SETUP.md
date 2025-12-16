# Tailwind CSS v4 集成说明

## 🎉 版本说明

本项目使用的是 **Tailwind CSS v4**，这是 Tailwind 的最新主要版本，带来了许多改进：

- 🚀 更快的构建速度（基于 Rust 引擎 Oxide）
- 📦 更小的包体积
- 🎨 全新的配置方式（主要通过 CSS 配置）
- ⚡ 更好的性能

## 📦 已完成的配置

### 1. 安装的依赖包

```json
{
  "tailwindcss": "^4.1.18", // Tailwind CSS v4 核心库
  "@tailwindcss/postcss": "^4.x.x", // Tailwind CSS v4 PostCSS 插件（v4 新增）
  "postcss": "^8.x.x", // CSS 后处理器
  "autoprefixer": "^10.x.x" // 自动添加浏览器前缀
}
```

### 2. 配置文件

#### `tailwind.config.js`

- **作用**: Tailwind CSS 的主配置文件
- **content**: 指定需要扫描的文件路径，Tailwind 会分析这些文件中的类名
- **theme**: 自定义主题配置，可以扩展颜色、字体、间距等
- **plugins**: 添加 Tailwind 插件以扩展功能

#### `postcss.config.js`

- **作用**: PostCSS 配置文件，用于处理 CSS
- **@tailwindcss/postcss**: Tailwind CSS v4 的 PostCSS 插件（v4 中已独立成包）
- **autoprefixer**: 自动添加浏览器厂商前缀

**重要提示**: Tailwind CSS v4 将 PostCSS 插件移到了独立的包 `@tailwindcss/postcss` 中，必须单独安装。

### 3. 样式文件更新

#### `src/assets/main.css`

使用 Tailwind CSS v4 的新导入语法：

- `@import "tailwindcss"`: 一行导入所有 Tailwind 功能
  - 包括：theme（主题）、preflight（样式重置）、utilities（工具类）

**v4 vs v3 语法对比：**

```css
/* v3 旧语法（已弃用） */
@tailwind base;
@tailwind components;
@tailwind utilities;

/* v4 新语法（推荐） */
@import "tailwindcss";
```

## 🚀 使用方法

### 基础用法

在任何 Vue 组件的模板中直接使用 Tailwind 类名：

```vue
<template>
  <div class="flex items-center justify-center h-screen">
    <h1 class="text-4xl font-bold text-blue-600">Hello Tailwind!</h1>
  </div>
</template>
```

### 常用工具类

#### 布局

- `flex`, `grid` - 弹性布局和网格布局
- `items-center`, `justify-center` - 对齐方式
- `w-full`, `h-screen` - 宽度和高度

#### 间距

- `p-4`, `px-8`, `py-2` - 内边距
- `m-4`, `mx-auto`, `my-8` - 外边距
- `space-x-4`, `space-y-2` - 子元素间距

#### 颜色

- `bg-blue-500`, `text-white` - 背景和文字颜色
- `hover:bg-blue-600` - 悬停状态
- `border-gray-300` - 边框颜色

#### 文字

- `text-xl`, `text-2xl` - 字体大小
- `font-bold`, `font-semibold` - 字体粗细
- `text-center`, `text-left` - 文字对齐

#### 圆角和阴影

- `rounded`, `rounded-lg` - 圆角
- `shadow`, `shadow-lg` - 阴影

#### 过渡和动画

- `transition`, `duration-300` - 过渡效果
- `transform`, `hover:scale-105` - 变换效果

### 响应式设计

使用断点前缀实现响应式设计：

```vue
<div class="w-full md:w-1/2 lg:w-1/3">
  <!-- 移动端全宽，平板半宽，桌面 1/3 宽 -->
</div>
```

断点说明：

- `sm:` - ≥640px
- `md:` - ≥768px
- `lg:` - ≥1024px
- `xl:` - ≥1280px
- `2xl:` - ≥1536px

### 自定义样式

#### 方法 1: 使用 `@theme` 指令（v4 推荐）

在 `main.css` 中直接配置主题：

```css
@import "tailwindcss";

@theme {
  /* 自定义颜色 */
  --color-brand-blue: #1e40af;
  --color-brand-green: #10b981;

  /* 自定义字体 */
  --font-sans: "Inter", system-ui, sans-serif;

  /* 自定义间距 */
  --spacing-custom: 2.5rem;
}
```

使用：`bg-brand-blue`, `text-brand-green`

#### 方法 2: 在 `tailwind.config.js` 中扩展

```js
theme: {
  extend: {
    colors: {
      'brand-blue': '#1e40af',
      'brand-green': '#10b981',
    },
  },
}
```

#### 方法 3: 使用 `@layer` 指令创建自定义组件

在 `main.css` 中：

```css
@layer components {
  .btn-primary {
    @apply bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600;
  }
}
```

## 🔍 注意事项

1. **Tailwind v4 新特性**:

   - 使用 `@import "tailwindcss"` 代替旧的 `@tailwind` 指令
   - PostCSS 插件已移至独立包 `@tailwindcss/postcss`
   - 推荐使用 `@theme` 在 CSS 中配置主题
   - 更快的构建速度和更好的性能

2. **开发服务器**: 修改配置文件后需要重启开发服务器

3. **生产构建**: Tailwind 会自动删除未使用的样式，大大减小文件体积

4. **编辑器支持**: 推荐安装 "Tailwind CSS IntelliSense" VS Code 插件

5. **类名顺序**: 建议安装 "Prettier Plugin Tailwind" 自动排序类名

6. **迁移提示**: 如果你熟悉 Tailwind v3，请注意 v4 的语法变化

## 📚 参考资源

- [Tailwind CSS 官方文档](https://tailwindcss.com/docs)
- [Tailwind CSS 中文文档](https://www.tailwindcss.cn/docs)
- [Tailwind Play 在线编辑器](https://play.tailwindcss.com/)

## 🎯 示例

查看 `src/views/HomeView.vue` 文件，里面包含了详细的 Tailwind CSS 使用示例和注释。

## 🛠️ 运行项目

```bash
# 启动开发服务器
npm run dev

# 构建生产版本
npm run build
```

---

**集成完成！** 现在你可以在项目中自由使用 Tailwind CSS 了！🎉
