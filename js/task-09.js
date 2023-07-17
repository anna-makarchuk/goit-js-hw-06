const buttonChangeColor = document.querySelector('.change-color');
const spanColor = document.querySelector('.color');


buttonChangeColor.addEventListener('click', changeColorBody)


function changeColorBody() {
  document.body.style.backgroundColor = getRandomHexColor();
  spanColor.textContent = getRandomHexColor();
}


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
