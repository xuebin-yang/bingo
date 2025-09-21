document.addEventListener('DOMContentLoaded', () => {
  // 图片悬停特效
  document.querySelectorAll('.post-image, .gallery-image').forEach(img => {
    img.addEventListener('mouseenter', () => {
      img.style.filter = 'brightness(1.2)';
    });
    img.addEventListener('mouseleave', () => {
      img.style.filter = 'brightness(1)';
    });
  });
});