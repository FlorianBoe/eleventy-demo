const toggleBtn = document.querySelector('[data-nav-toggle]')

toggleBtn?.addEventListener('click', (e) => {
  toggleBtn.setAttribute('aria-expanded', (toggleBtn.getAttribute('aria-expanded') === "false").toString())
});