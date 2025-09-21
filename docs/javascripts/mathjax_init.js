document.addEventListener('DOMContentLoaded', function () {
  if (typeof MathJax !== 'undefined') {
    MathJax.typesetPromise().then(() => {
      console.log('MathJax typesetting triggered on page load');
    }).catch((err) => console.error('MathJax typesetting error:', err));
  }
});