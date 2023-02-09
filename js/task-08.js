const formEl = document.querySelector('.login-form')

const loginSubmitFormHandler = (event) => {
    event.preventDefault();
    const email = event.currentTarget.elements.email.value;
    const password = event.currentTarget.elements.password.value;
    const formData = {
    email,
    password,
    };
    if (email === "" || password === "") {
        alert("Заповніть форму")
    }
    else {console.log ({login: email, password: password}), event.currentTarget.reset()}
}



formEl.addEventListener("submit", loginSubmitFormHandler);
console.dir (loginSubmitFormHandler)