document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('.big-button');
  if (btn) {
    btn.addEventListener('click', () => {
      // Placeholder interaction - can be replaced with real navigation or auth hook
      console.log('Sign In CTA clicked');
      btn.classList.add('clicked');
      setTimeout(() => btn.classList.remove('clicked'), 200);
    });
  }
});
