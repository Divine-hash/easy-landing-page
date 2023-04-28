function bindHamburgerEvent(nav) {
  nav.addEventListener('click', showMenu);
}

function showMenu(event) {
  const hamburger = event.target.closest('[data-id="hamburger"]');
  if (!hamburger) return;

  this.classList.toggle('active');
  const isNavActive = this.classList.contains('active');
  document.body.style.overflow = isNavActive ? 'hidden' : '';
}

export {bindHamburgerEvent};
