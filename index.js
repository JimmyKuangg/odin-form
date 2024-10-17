const inputs = document.querySelectorAll("input");
const submitBtn = document.querySelector("#main-form-button");

function addInputValidOutlines() {
  for (let input of inputs) {
    input.addEventListener('click', (e) => {
      e.target.classList.add("input-invalid")
    })
  }
}

submitBtn.addEventListener('click', (e) => {
  const numbers = "0123456789";
  const phoneInput = document.querySelector("#input-phone-number");
  const passwordInput = document.querySelector("#input-password");
  const passwordConfirm = document.querySelector("#input-confirm-password");
  let formValid = true;

  for (let input of inputs) {
    input.classList.add("input-invalid");
  }

  
  for (char of phoneInput.value) {
    if (!numbers.includes(char)) {
      phoneInput.setAttribute("oninvalid", "this.setCustomValidity('Please enter at least 7 numbers')");
      formValid = false;
    }
  }

  if (passwordInput.value !== passwordConfirm.value) {
    passwordInput.setAttribute("oninvalid", "this.setCustomValidity('Please make sure your passwords match')");
    passwordConfirm.setAttribute("oninvalid", "this.setCustomValidity('Please make sure your passwords match')");
    formValid = false;
  }

  if (!formValid) {
    e.preventDefault();
    return false;
  }
})

addInputValidOutlines();