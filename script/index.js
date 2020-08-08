const activeMenuClassName = 'card__footer--active';
const activeButtonClassName = 'card__share-button--active';
const footerId = 'card-footer';
const tooltipId = 'tooltip';
const shareButtonId = 'share-button';
const socialMediaLinksId = 'social-media-links';

const toggleMenu = () => {
  if (window.matchMedia('(min-width: 768px)').matches) {
    const button = document.getElementById(shareButtonId);
    button.classList.toggle(activeButtonClassName);
    return;
  }

  const footer = document.getElementById(footerId);
  footer.classList.toggle(activeMenuClassName);
}

const addLinkClickEvent = () => {
  const links = document.querySelectorAll('.card__social-media a');

  Array.from(links).forEach(node => {
    node.addEventListener('click', event => {
      event.stopPropagation();
    })
  });
}

const checkOutsideClickForDesktop = () => {
  const button = document.getElementById(shareButtonId);
  const tooltip = document.getElementById(tooltipId);
  const isClickInside = tooltip.contains(event.target);
  const isButtonClick = button.contains(event.target);

  return isClickInside || isButtonClick;
}

const checkOutsideClickForMobile = () => {
  const footer = document.getElementById(footerId);
  return footer.contains(event.target);
}

const removeActiveClass = (elementId, classToRemove) => {
  const { classList } = document.getElementById(elementId);

  if (classList.contains(classToRemove)) {
    classList.remove(classToRemove);
  }
}

const onDocumentClick = () => {
  if (window.matchMedia('(min-width: 768px)').matches) {
    if (checkOutsideClickForDesktop()) {
      return;
    }

    removeActiveClass(shareButtonId, activeButtonClassName);
  }

  if (checkOutsideClickForMobile()) {
    return;
  }

  removeActiveClass(footerId, activeMenuClassName);
}

window.addEventListener('load', addLinkClickEvent);
document.addEventListener('click', onDocumentClick);
