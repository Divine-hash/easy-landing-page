import '../css/style.scss';
import '../images/image-restaurant.jpg';
import data from './data.json';
import {bindHamburgerEvent, ShowHeaderOnScrollUp} from './navigation.mjs';
import {fadeInAnimation, showArticles} from './scrollAnimations.mjs';
require.context('../images', false, /\.(png|svg|jpg)$/);

const components = [
  {
    func: bindHamburgerEvent,
    selector: '[data-id="nav-id"]'
  },
  {
    func: ShowHeaderOnScrollUp,
    selector: '[data-id="header"]'
  },
  {
    func: fadeInAnimation,
    selector: '[data-id="reasons-id"]'
  },
  {
    func: showArticles,
    selector: '[data-id="latest-articles"]',
    options: {
      data,
    }
  }
];

function init() {
  const assign = component => {
    const elem = document.querySelector(component.selector);
    if (!elem) return;
    component.func(elem, component.options);
  }
  components.forEach(assign);
}

document.addEventListener('DOMContentLoaded', init);