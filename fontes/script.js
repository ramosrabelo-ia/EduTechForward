document.querySelectorAll('article, .timeline div').forEach((el, index) => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(18px)';
  setTimeout(() => {
    el.style.transition = 'all .6s ease';
    el.style.opacity = '1';
    el.style.transform = 'translateY(0)';
  }, index * 120);
});
