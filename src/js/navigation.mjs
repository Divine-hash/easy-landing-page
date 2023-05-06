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

function ShowHeaderOnScrollUp(header) {
  let prevY;
  let currentY;

  const handler = () => {
    currentY = window.pageYOffset;
    if (currentY < prevY) {
      header.classList.add('scrollup');
    } else {
      header.classList.remove('scrollup');
    }
    prevY = currentY;
  }
  document.addEventListener('scroll', handler);
}
export {bindHamburgerEvent, ShowHeaderOnScrollUp};
