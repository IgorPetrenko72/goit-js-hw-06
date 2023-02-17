const refs = {
    form: document.querySelector('.login-form'),
};

refs.form.addEventListener("submit", (event) => {
    event.preventDefault();
    
  const {
    elements: { email, password }
  } = event.currentTarget;

    console.log(email.value, password.value);
     if (email.value === "" || password.value === "") {
    return console.log("Напиши у ці прямокутнички хоть щось!");
  }

  console.log(`Login: ${email.value}, Password: ${password.value}`);
  event.currentTarget.reset();
});