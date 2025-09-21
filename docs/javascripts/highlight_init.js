document.addEventListener('DOMContentLoaded', () => {
  // 确保 Highlight.js 已加载
  if (typeof hljs !== 'undefined') {
    document.querySelectorAll('pre code').forEach((block) => {
      hljs.highlightElement(block);
    });
  } else {
    console.error('Highlight.js not loaded');
  }
});

// 如果页面动态加载内容，添加 MutationObserver
let observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    if (mutation.addedNodes.length) {
      document.querySelectorAll('pre code:not(.hljs)').forEach((block) => {
        hljs.highlightElement(block);
      });
    }
  });
});
observer.observe(document.body, { childList: true, subtree: true });