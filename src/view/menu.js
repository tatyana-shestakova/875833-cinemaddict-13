const main = document.querySelector(`main`);
const sortClass = `sort__button--active`;

const getTemplateMain = ({watchlist, history, favorites}) => {
  return `
  <div class="main-navigation__items">
    <a href="#all" class="main-navigation__item main-navigation__item--active">All movies</a>
    <a href="#watchlist" class="main-navigation__item">Watchlist <span class="main-navigation__item-count">${watchlist}</span></a>
    <a href="#history" class="main-navigation__item">History <span class="main-navigation__item-count">${history}</span></a>
    <a href="#favorites" class="main-navigation__item">Favorites <span class="main-navigation__item-count">${favorites}</span></a>
  </div>
  <a href="#stats" class="main-navigation__additional">Stats</a>
  `;
};

const getTemplateSort = (isActive) => {
  return `
    <li><a href="#" class="sort__button ${isActive}">Sort by default</a></li>
    <li><a href="#" class="sort__button">Sort by date</a></li>
    <li><a href="#" class="sort__button">Sort by rating</a></li>
  `;
};

export {main, sortClass, getTemplateMain, getTemplateSort};
