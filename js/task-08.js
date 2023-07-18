const form = document.querySelector('.login-form');




form.addEventListener('submit', onSubmit);


function onSubmit(event){
    event.preventDefault();
    const {
    elements: { email, password }
  } = event.currentTarget;

    if (email.value === "" || password.value==="") {
        alert("Please fill in all the fields!")
    }
   if (email.value !== "" && password.value !== "") {
     const date = {
       email: email.value,
       password: password.value,
     };
     console.dir(date);
  }
    form.reset()
    return
}
