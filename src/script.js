window.onload = () => {
  const buttonLoginElement = document.getElementById('button-login');
  const buttonSubmitElement = document.getElementById('facebook-register');
  const inputs = document.querySelectorAll('#inputs-container input');

  buttonLoginElement.onclick = showAlert;
  buttonSubmitElement.onclick = onFormSubmit;
  for (let index = 0; index < inputs.length; index += 1) {
    inputs[index].onclick = () => showCustomGenderOptions(inputs[index]);
  }
};

function showAlert(e) {
  e.preventDefault();
  const emailInputElement = document.getElementById('user-email-phone');
  alert(emailInputElement.value);
}

function onFormSubmit(event) {
  event.preventDefault();
  if (!validateForm()) return
  handleFormSubmit();
}

function validateForm() {
  const inputs = document.querySelectorAll('.text-class');
  const registerForm = document.querySelector('#register-form');
  for (let index = 0; index < inputs.length; index += 1) {
    if (inputs[index].value === '') {
      const invalidField = createElement("Campos inválidos", 'span')
      registerForm.appendChild(invalidField);
      return false;
    }
  }
  return true
}

function handleFormSubmit() {
  const nameElement = createElement(`"Olá, ${document.getElementById('firstname').value} ${document.getElementById('lastname').value}`);
  const emailElement = createElement(document.getElementById('email').value);
  const birthdateElement = createElement(document.getElementById('birthdate').value);
  const genderElement = createElement(getGenderValue());

  setRightContent([nameElement, emailElement, birthdateElement, genderElement]);
}

function getGenderValue() {
  const genderElements = document.getElementsByName('gender');
  for (let index = 0; index < genderElements.length; index += 1) {
    if (genderElements[index].checked) {
      return genderElements[index].value;
    }
  }
}

function setRightContent(elements) {
  const rightContent = document.querySelector('.right-content');
  rightContent.innerHTML = '';

  elements.forEach(element => rightContent.appendChild(element))
}


function createElement(content, element = 'p') {
  const htmlElement = document.createElement(element);
  htmlElement.innerHTML = content;
  return htmlElement;
}

function showCustomGenderOptions(input) {
  const containerElement = document.getElementById('custom-gender-container');
  if (input.id === 'custom-gender' && input.checked) {
    containerElement.style.display = 'flex';
  } else {
    containerElement.style.display = 'none';
  }
}

