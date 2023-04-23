class Dropdown {
  constructor(elem) {
    this.nav = document.querySelector('.nav');
    this.showMenu = this.showMenu.bind(this);
    elem.addEventListener('click', this.showMenu);
  }

  showMenu(event) {
    this.nav.classList.toggle('active');
  }
}

export default Dropdown;