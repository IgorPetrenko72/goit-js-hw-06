const refs = {
  form: document.querySelector('.login-form'),
  objectWithData: {},
};

refs.form.addEventListener("submit", (event) => {
  event.preventDefault();
    
  const {
    elements: { email, password }
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    alert("Напиши у ці прямокутнички хоть щось!");
    return false;
  }

  console.log(refs.objectWithData = { Login: email.value, Password: password.value});
  
  event.currentTarget.reset();
});