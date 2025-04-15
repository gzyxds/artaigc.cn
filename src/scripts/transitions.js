// Enhanced page transitions
document.addEventListener('astro:page-load', () => {
  // 为具有data-animate属性的元素添加动画类
  const animatedElements = document.querySelectorAll('[data-animate]');
  
  // 遍历每个动画元素并应用动画效果
  animatedElements.forEach((element, index) => {
    const animationType = element.getAttribute('data-animate');
    const delay = element.getAttribute('data-delay') || index * 100;
    
    // 设置动画延迟时间
    element.style.animationDelay = `${delay}ms`;
    
    // 根据data-animate属性添加动画类
    setTimeout(() => {
      element.classList.add(animationType);
      element.classList.add('animated');
    }, 10);
  });
  
  // 为具有data-parallax属性的元素添加视差效果
  const parallaxElements = document.querySelectorAll('[data-parallax]');
  
  if (parallaxElements.length > 0) {
    // 处理视差滚动效果
    const handleParallax = () => {
      parallaxElements.forEach(element => {
        const speed = element.getAttribute('data-parallax') || 0.1;
        const yPos = -(window.scrollY * speed);
        element.style.transform = `translateY(${yPos}px)`;
      });
    };
    
    window.addEventListener('scroll', handleParallax);
  }
  
  // 为锚点链接添加平滑滚动效果
  const anchorLinks = document.querySelectorAll('a[href^="#"]:not([href="#"])');
  
  anchorLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      
      const targetId = link.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        const offsetTop = targetElement.getBoundingClientRect().top + window.pageYOffset;
        
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });
  
  // 应用页面过渡效果
  const pageTransitionElements = document.querySelectorAll('[data-page-transition]');
  
  pageTransitionElements.forEach(element => {
    const transitionType = element.getAttribute('data-page-transition');
    element.classList.add(`transition-${transitionType}`);
  });
});

// 处理导航事件
document.addEventListener('astro:before-preparation', ({ from, to, direction }) => {
  // 将导航方向存储在localStorage中以在页面加载后使用
  if (from && to) {
    const fromPath = new URL(from).pathname;
    const toPath = new URL(to).pathname;
    
    // 根据路径深度确定导航方向
    const fromDepth = fromPath.split('/').filter(Boolean).length;
    const toDepth = toPath.split('/').filter(Boolean).length;
    
    let navDirection = 'same';
    
    if (toDepth > fromDepth) {
      navDirection = 'deeper';
    } else if (toDepth < fromDepth) {
      navDirection = 'shallower';
    }
    
    localStorage.setItem('navigationDirection', navDirection);
  }
});

// 应用特定方向的过渡效果
document.addEventListener('astro:page-load', () => {
  const navDirection = localStorage.getItem('navigationDirection');
  
  if (navDirection) {
    document.documentElement.setAttribute('data-navigation', navDirection);
    
    // 过渡完成后清理
    setTimeout(() => {
      localStorage.removeItem('navigationDirection');
    }, 1000);
  }
});
