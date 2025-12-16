<script setup>
// 使用 Tailwind CSS 的 Vue 组件示例
</script>

<template>
  <!-- 
    使用 Tailwind CSS 工具类的示例容器
    - min-h-screen: 最小高度为视口高度
    - flex: 弹性布局
    - items-center: 垂直居中
    - justify-center: 水平居中
    - bg-gradient-to-r: 从左到右的渐变背景
  -->
  <div class="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
    <!-- 
      卡片容器
      - bg-white: 白色背景
      - rounded-lg: 大圆角
      - shadow-2xl: 大阴影
      - p-8: 内边距 2rem
      - max-w-md: 最大宽度
      - w-full: 宽度 100%
      - mx-4: 左右外边距
    -->
    <div class="bg-white rounded-lg shadow-2xl p-8 max-w-md w-full mx-4">
      <!-- 
        标题
        - text-3xl: 大字体
        - font-bold: 粗体
        - text-gray-800: 深灰色文字
        - mb-4: 下外边距
        - text-center: 居中对齐
      -->
      <h1 class="text-3xl font-bold text-gray-800 mb-4 text-center">
        欢迎使用 Tailwind CSS
      </h1>
      
      <!-- 描述文字 -->
      <p class="text-gray-600 mb-6 text-center">
        这是一个使用 Tailwind CSS 的示例页面
      </p>
      
      <!-- 
        按钮示例
        - bg-blue-500: 蓝色背景
        - hover:bg-blue-600: 悬停时变深蓝
        - text-white: 白色文字
        - font-semibold: 半粗体
        - py-3: 上下内边距
        - px-6: 左右内边距
        - rounded-lg: 圆角
        - transition: 过渡动画
        - duration-300: 动画时长
        - transform: 启用变换
        - hover:scale-105: 悬停时放大
        - active:scale-95: 点击时缩小
      -->
      <button class="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 transform hover:scale-105 active:scale-95">
        开始使用
      </button>
      
      <!-- 特性列表 -->
      <div class="mt-8 space-y-3">
        <div class="flex items-center space-x-3">
          <div class="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full"></div>
          <span class="text-gray-700">快速开发</span>
        </div>
        <div class="flex items-center space-x-3">
          <div class="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full"></div>
          <span class="text-gray-700">响应式设计</span>
        </div>
        <div class="flex items-center space-x-3">
          <div class="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full"></div>
          <span class="text-gray-700">高度可定制</span>
        </div>
      </div>
    </div>
  </div>
</template>
