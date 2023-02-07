const textInput = document.querySelector('#validation-input');

textInput.addEventListener('blur', event => {
if (textInput.value.trim().length === Number(textInput.dataset.length)) {
        textInput.classList.remove("invalid");
        return textInput.classList.add("valid");
    
    
    }

    textInput.classList.add('invalid') || 
    textInput.classList.replace ('valid', 'invalid')
})



