import '../css/style.scss';
import '../images/image-restaurant.jpg';
import {bindHamburgerEvent} from './navigation.mjs';
import {fadeInEvent} from './fade_in.mjs';
require.context('../images', false, /\.(png|svg|jpg)$/);

const components = [
  {
    func: bindHamburgerEvent,
    selector: '[data-id="nav-id"]'
  },
  {
    func: fadeInEvent,
    selector: '[data-id="reasons-id"]'
  }
];

function init() {
  const assign = component => {
    const elem = document.querySelector(component.selector);
    if (!elem) return;
    component.func(elem);
  }
  components.forEach(assign);
}

document.addEventListener('DOMContentLoaded', init);