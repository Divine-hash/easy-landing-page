function fadeInEvent(reasons) {
  const selector = '[class^="reasons"]:not(.reasons-list)';
  const elements = reasons.querySelectorAll(selector);
  document.addEventListener('scroll', () => fadeIn('fade-in', ...elements));
}

function fadeIn(selector, ...elements) {
  const fade = elem => {
    const coords = elem.getBoundingClientRect();
    const isVisible = coords.top < document.documentElement.clientHeight;
    const test = {
      "true": () => elem.classList.add(selector),
      "false": () => elem.classList.remove(selector)
    };
    test[!!isVisible]();
  }
  elements.forEach(fade);
}

export {fadeInEvent};