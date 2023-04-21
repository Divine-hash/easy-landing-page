export default class Dropdown {
  constructor() {
    this.hamburger = document.querySelector('.nav-hamburger');
  }

  onClick() {
    this.hamburger.addEventListener('click', this.#changeHamburgerState);
  }

  #changeHamburgerState() {
    const nav = this.closest('.nav');
    if (!nav) return;
    nav.classList.toggle('active');

    if (nav.classList.contains('active')) {
      document.body.style.overflow = 'hidden';
    }
  }
}