function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const buttonChangeColorEl = document.querySelector('.change-color');
const textEl = document.querySelector('.color');
buttonChangeColorEl.addEventListener('click', () => {
  document.body.style.backgroundColor = getRandomHexColor();
    textEl.textContent = document.body.style.backgroundColor
})
console.dir (textEl)