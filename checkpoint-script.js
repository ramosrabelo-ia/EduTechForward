const items = document.querySelectorAll('article, .intro, .highlight');

items.forEach((item, index) => {
  item.style.opacity = '0';
  item.style.transform = 'translateY(18px)';
  setTimeout(() => {
    item.style.transition = 'all .7s ease';
    item.style.opacity = '1';
    item.style.transform = 'translateY(0)';
  }, index * 120);
});
