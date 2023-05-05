function fadeInAnimation(reasons) {
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
    test[isVisible]();
  }
  elements.forEach(fade);
}

function showArticles(parentElem, options) {
  const cards = parentElem.querySelectorAll('.card');
  document.addEventListener('scroll', () => scrollHandler(cards, options.data));
}

function scrollHandler(cards, data) {
  cards.forEach(card => {
    const coords = card.getBoundingClientRect();

    if (coords.bottom <= document.documentElement.clientHeight) {
      if (card.dataset.loaded == "true") return;
      card.dataset.loaded = "true";
      const elements = card.querySelectorAll('.animation-bg');

      setTimeout(() => {
        removeAnimationClass(elements, 'animation-bg', 'animation-bg-text');
        uploadContent(card, data);
      }, 2500);
    }
  });
}

function removeAnimationClass(elem, ...selectors) {
  elem.forEach(el => el.classList.remove(...selectors));
}

function uploadContent(card, data) {
  const elem = {
    cardImg: card.querySelector('.card-img'),
    cardAuthor: card.querySelector('.author'),
    cardHeading: card.querySelector('h3'),
    cardParagraph: card.querySelector('p')
  };

  const cardData = data.find(obj => obj.id == card.id);
  elem.cardImg.innerHTML = `<a href="#"><img src="${cardData.img}"></a>`;
  elem.cardAuthor.textContent = cardData.author;
  elem.cardHeading.textContent = cardData.heading;
  elem.cardParagraph.textContent = cardData.paragraph;
}

export {fadeInAnimation, showArticles};