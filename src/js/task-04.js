const changeBtn = {
  del: document.querySelector("[data-action='increment']"),
  add: document.querySelector("[data-action='decrement']"),

};
let counterValue = 0;
const incrementBtn = () => {
  counterValue += 1;

  document.getElementById('value').textContent = counterValue;
};

const decrementBtn = () => {
  counterValue -= 1;

  document.getElementById('value').textContent = counterValue;
};
changeBtn.del.addEventListener('click', incrementBtn);
changeBtn.add.addEventListener('click', decrementBtn);