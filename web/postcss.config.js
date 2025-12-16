// PostCSS 配置文件
// PostCSS 是一个用 JavaScript 工具和插件转换 CSS 代码的工具
export default {
  plugins: {
    // Tailwind CSS v4 PostCSS 插件 - 处理 Tailwind 的指令和类名
    // 注意：v4 版本的 PostCSS 插件在单独的包 @tailwindcss/postcss 中
    '@tailwindcss/postcss': {},
    
    // Autoprefixer 插件 - 自动添加浏览器厂商前缀，提高 CSS 兼容性
    // 例如：transform 会自动添加 -webkit-transform、-moz-transform 等
    autoprefixer: {},
  },
}

