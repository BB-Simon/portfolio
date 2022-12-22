const contactForm = document.querySelector('#contactForm');


contactForm.addEventListener('submit', onSubmit);

const onSubmit = e => {
  e.preventDefault();
  console.log(e);
  // saveFormDataToLocalStorage(inputValues)
}