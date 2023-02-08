function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const buttonChangeColorEl = document.querySelector('.change-color');
const textEl = document.querySelector('.color');
buttonChangeColorEl.addEventListener('click', () => {
  const color = getRandomHexColor();
  document.body.style.backgroundColor = color;
  textEl.textContent = color;
})
console.dir(textEl)



