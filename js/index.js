const contactForm = document.querySelector('#contactForm');


contactForm.addEventListener('submit', onSubmit);

const onSubmit = e => {
  e.preventDefault();
  console.log(e);
  // saveFormDataToLocalStorage(inputValues)
}


const saveFormDataToLocalStorage = (inputValues) => {
  const formdata = {};
  if(inputValues.name) {
    formdata.name = inputValues.name;
  }
  if(inputValues.email) {
    formdata.name = inputValues.email;
  }
  if(inputValues.message) {
    formdata.name = inputValues.message;
  }

  window.localStorage.setItem('formdata', formdata);
}