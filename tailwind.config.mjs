/** @type {import('tailwindcss').Config} */
export default {
  // 指定要处理的文件类型和路径
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  // 设置暗色模式的类名
  darkMode: 'class',
  theme: {
    extend: {
      // 自定义颜色配置
      colors: {
        // 主要颜色系列 - 蓝色调
        primary: {
          50: '#eef7ff',  //最浅色
          100: '#e0efff',
          200: '#c7e1ff',
          300: '#94cbff',
          400: '#29acfe',
          500: '#2468f2', //基准色
          600: '#1d54d9',
          700: '#1642b3',
          800: '#123594',
          900: '#0f2b78',
          950: '#091a4d',  //最深色
        },
        // 次要颜色系列 - 灰色调
        secondary: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617',
        },
        // 强调色系列 - 亮蓝色调
        accent: {
          50: '#e6f3ff',
          100: '#cce7ff', 
          200: '#99d0ff',
          300: '#66b8ff',
          400: '#29acfe',
          500: '#2468f2',
          600: '#1d54d9',
          700: '#1642b3',
          800: '#123594',
          900: '#0f2b78',
          950: '#091a4d',
        },
        // 警告色系列 - 黄色调
        warning: {
          50: '#fefce8',
          100: '#fef9c3',
          200: '#fef08a',
          300: '#fde047',
          400: '#facc15',
          500: '#eab308',
          600: '#ca8a04',
          700: '#a16207',
          800: '#854d0e',
          900: '#713f12',
          950: '#422006',
        },
      },
      // 自定义字体族配置
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],     // 无衬线字体
        display: ['Lexend', 'system-ui', 'sans-serif'], // 展示用字体
      },
      // 自定义动画配置
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',    // 淡入动画
        'slide-up': 'slideUp 0.5s ease-in-out',  // 向上滑动动画
        'slide-down': 'slideDown 0.5s ease-in-out', // 向下滑动动画
        'scale-in': 'scaleIn 0.5s ease-in-out',
        'rotate-in': 'rotateIn 0.5s ease-in-out',
        'bounce-slow': 'bounce 2s infinite',
        'pulse-slow': 'pulse 3s infinite',
      },
      // 自定义关键帧动画
      keyframes: {
        // 淡入动画关键帧
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        // 向上滑动动画关键帧
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        // 向下滑动动画关键帧
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        rotateIn: {
          '0%': { transform: 'rotate(-5deg)', opacity: '0' },
          '100%': { transform: 'rotate(0)', opacity: '1' },
        },
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        'glass-sm': '0 4px 16px 0 rgba(31, 38, 135, 0.25)',
      },
      backdropBlur: {
        'glass': '4px',
      },
    },
  },
  // Tailwind 插件配置
  plugins: [],
}
