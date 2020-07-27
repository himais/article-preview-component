const activeClassName = 'card__footer--active';
const footerId = 'card-footer';

const toggleMenu = () => {
  const footer = document.getElementById(footerId);

  footer.classList.toggle(activeClassName);
}

document.addEventListener('click', event => {
  const footer = document.getElementById(footerId);
  var isClickInside = footer.contains(event.target);

  if (isClickInside) {
    return;
  }

  if(footer.classList.contains(activeClassName)) {
    footer.classList.remove(activeClassName);
  }
});