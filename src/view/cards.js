const COUNT = 5;
const COUNT_MIN = 2;
const hidden = `visually-hidden`;

const getTemplateContainerCards = (isHidden, cards) => {
  return `
  <section class="films-list">
    <h2 class="films-list__title ${isHidden}">All movies. Upcoming</h2>
    <div class="films-list__container">
      ${getSortCards(cards, COUNT)}
    </div>
    <button class="films-list__show-more">Show more</button>
  </section>

  <section class="films-list films-list--extra">
    <h2 class="films-list__title">Top rated</h2>
    <div class="films-list__container">
    ${getSortCards(cards, COUNT_MIN)}
    </div>
  </section>

  <section class="films-list films-list--extra">
    <h2 class="films-list__title">Most commented</h2>
    <div class="films-list__container">
    ${getSortCards(cards, COUNT_MIN)}
    </div>
  </section>
  `;
};

const getTemplateCard = ({title, rating, year, duration, genre, poster, description, comments, watchlist, watched, favorite}) => {
  return `
    <h3 class="film-card__title">${title}</h3>
    <p class="film-card__rating">${rating}</p>
    <p class="film-card__info">
      <span class="film-card__year">${year}</span>
      <span class="film-card__duration">${duration}</span>
      <span class="film-card__genre">${genre}</span>
    </p>
    <img src="${poster}" alt="" class="film-card__poster">
    <p class="film-card__description">${description}</p>
    <a class="film-card__comments">${comments} comments</a>
    <div class="film-card__controls">
      <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist ${watchlist}" type="button">Add to watchlist</button>
      <button class="film-card__controls-item button film-card__controls-item--mark-as-watched ${watched}" type="button">Mark as watched</button>
      <button class="film-card__controls-item button film-card__controls-item--favorite ${favorite}" type="button">Mark as favorite</button>
    </div>
  `;
};

const getSortCards = (cards, count) => {
  const newElementCardList = document.createElement(`div`);
  for (let i = 0; i < count; i++) {
    const newElementCard = document.createElement(`article`);
    newElementCard.classList.add(`film-card`);
    if (cards.length <= 1) {
      newElementCard.innerHTML = getTemplateCard(cards[0]);
    } else {
      newElementCard.innerHTML = getTemplateCard(cards[i]);
    }
    newElementCardList.appendChild(newElementCard);
  }
  return newElementCardList.innerHTML;
};

export {hidden, getTemplateContainerCards};
