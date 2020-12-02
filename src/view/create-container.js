const createContainer = (template, {tag, descriptionMain, descriptionAd}, space) => {
  const newElement = document.createElement(tag);
  if (descriptionMain !== ``) {
    newElement.classList.add(descriptionMain);
  }
  if (descriptionAd !== ``) {
    newElement.classList.add(descriptionAd);
  }
  newElement.innerHTML = template;
  return space.appendChild(newElement);
};

export {createContainer};
