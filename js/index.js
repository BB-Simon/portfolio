const name = document.querySelector("#name")
const email = document.querySelector("#email")
const message = document.querySelector("#message")

const inputValues = {
  name,
  email,
  message
}

const validatorInput = (value) => {
  if (name === "") {
    console.error("name is required");
  }
  if (email === "") {
    console.error("email is required");
  }
  if (message === "") {
    console.error("message is required");
  }
} 

validatorInput(inputValues)