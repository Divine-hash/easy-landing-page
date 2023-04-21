import '../css/style.scss';
import '../images/image-restaurant.jpg';
import Dropdown from './dropdown.mjs';
require.context('../images', false, /\.(png|svg|jpg)$/);

function init() {
  new Dropdown().onClick();
}

document.addEventListener('DOMContentLoaded', init);