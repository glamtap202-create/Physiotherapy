document.querySelectorAll('.cond-card__head').forEach(head => {
  head.addEventListener('click', () => {
    head.parentElement.classList.toggle('collapsed');
  });
});