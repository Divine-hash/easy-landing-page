import '../css/style.scss';
import '../images/image-restaurant.jpg';
import Dropdown from './dropdown.mjs';
require.context('../images', false, /\.(png|svg|jpg)$/);

const components = [
  {
    class: Dropdown,
    selector: '.nav-hamburger'
  }
];

function init() {
  components.forEach(component => {
    if (document.querySelector(component.selector)) {
      document.querySelectorAll(component.selector).forEach(element => {
        new component.class(element);
      });
    }
  });
}

document.addEventListener('DOMContentLoaded', init);