const inputEl = document.querySelector(`#font-size-control`);
const textEl = document.querySelector(`#text`);

textEl.style.fontSize = inputEl.value + 'px';

function handleInputTextSize() {
   textEl.style.fontSize = inputEl.value + 'px'; 
}
inputEl.addEventListener('input', (event) => {
    return inputEl = handleInputTextSize('$(event.currentTarget.value)px');
})
