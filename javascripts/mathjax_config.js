window.MathJax = {
  tex: {
    inlineMath: [['$', '$'], ['\\(', '\\)']],
    displayMath: [['$$', '$$'], ['\\[', '\\]']],
    processEscapes: true,
    processEnvironments: true,
    tags: 'ams'  // 开启自动编号，使用AMS样式
  },
  options: {
    skipHtmlTags: ['script', 'noscript', 'style', 'textarea', 'pre'],
    ignoreHtmlClass: 'tex2jax_ignore',
    processHtmlClass: 'tex2jax_process'
  },
  startup: {
    ready: () => {
      MathJax.startup.defaultReady();
      // Reprocess the page after MathJax is ready
      MathJax.typesetPromise().then(() => {
        console.log('MathJax initial typesetting complete');
      });
    }
  }
};