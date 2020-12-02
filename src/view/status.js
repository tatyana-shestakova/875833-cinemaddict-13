const header = document.querySelector(`header`);

const getTemplateHeader = ({rating, avatar}) => {
  return `
    <p class="profile__rating">${rating}</p>
    <img class="profile__avatar" src="${avatar}" alt="Avatar" width="35" height="35">
  `;
};

export {header, getTemplateHeader};
