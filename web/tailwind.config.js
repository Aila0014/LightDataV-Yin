/** 
 * Tailwind CSS v4 配置文件
 * @type {import('tailwindcss').Config} 
 * 
 * 注意：Tailwind CSS v4 主要通过 CSS 文件配置主题
 * 这个 JS 配置文件主要用于：
 * - 配置内容扫描路径（content）
 * - 添加插件（plugins）
 * - 进行复杂的 JS 配置
 */
export default {
  // 配置需要处理的文件路径
  // Tailwind 会扫描这些文件中的类名来生成对应的 CSS
  content: [
    "./index.html",                    // 入口 HTML 文件
    "./src/**/*.{vue,js,ts,jsx,tsx}",  // src 目录下所有 Vue、JS、TS 等文件
  ],
  
  // Tailwind v4 推荐在 CSS 文件中使用 @theme 指令来自定义主题
  // 但如果需要，仍然可以在这里配置
  theme: {
    extend: {
      // 在这里扩展默认主题配置
      // 例如：自定义颜色、字体、断点等
      // colors: {
      //   primary: '#your-color',
      // },
    },
  },
  
  // 插件配置 - 用于扩展 Tailwind 功能
  plugins: [
    // 可以在这里添加 Tailwind 官方或第三方插件
    // 例如：require('@tailwindcss/forms')
  ],
}

