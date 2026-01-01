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
        // 主要颜色系列 - 蓝色调 (更新为新设计)
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bedbff',
          300: '#8ec5ff',
          400: '#51a2ff',
          500: '#2b7fff',
          600: '#155dfc',
          700: '#1447e6',
          800: '#193cb8',
          900: '#1c398e',
          950: '#162456',
        },
        // 中性色系列 (更新为新设计)
        neutral: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
          950: '#030712',
        },
        // 保留旧的 secondary 以防破坏兼容性，映射到 neutral
        secondary: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
          950: '#030712',
        },
        // 强调色系列 - 亮蓝色调 (保留但调整为接近 primary)
        accent: {
          50: '#eff6ff',
          100: '#dbeafe', 
          200: '#bedbff',
          300: '#8ec5ff',
          400: '#51a2ff',
          500: '#2b7fff',
          600: '#155dfc',
          700: '#1447e6',
          800: '#193cb8',
          900: '#1c398e',
          950: '#162456',
        },
        // 警告色系列 - 黄色调 (保留)
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
        sans: ['Clash-Grotesk', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Clash-Display', 'Lexend', 'system-ui', 'sans-serif'],
        headings: ['Clash-Display', 'Lexend', 'system-ui', 'sans-serif'], // 新增 headings
        body: ['Clash-Grotesk', 'Inter', 'system-ui', 'sans-serif'],     // 新增 body
      },
      // 自定义动画配置
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-in-out',
        'slide-down': 'slideDown 0.5s ease-in-out',
        'scale-in': 'scaleIn 0.5s ease-in-out',
        'rotate-in': 'rotateIn 0.5s ease-in-out',
        'bounce-slow': 'bounce 2s infinite',
        'pulse-slow': 'pulse 3s infinite',
        // 新增动画
        'dropdown': 'dropdown 300ms ease-in-out forwards',
        'fadeUp': 'fadeUp 500ms ease-in-out forwards',
        'marquee': 'marquee 120s linear infinite',
        'marqueeFollowup': 'marqueefollowup 120s linear infinite',
        'pulsing': 'pulsing 8s ease-in-out infinite',
      },
      // 自定义关键帧动画
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
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
        // 新增关键帧
        dropdown: {
          '0%': { transform: 'translateY(-1rem)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeUp: {
          '0%': { transform: 'translateY(1rem)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marqueefollowup: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        pulsing: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
          '100%': { transform: 'scale(1)' },
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
