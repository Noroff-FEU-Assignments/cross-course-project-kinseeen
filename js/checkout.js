const form = document.querySelector("#checkoutinput");
const firstname = document.querySelector("#firstName");
const nameError = document.querySelector("#nameError");
const lastname = document.querySelector("#lastName");
const address = document.querySelector("#address");
const addressError = document.querySelector("#addressError");
const phonenumber = document.querySelector("#phoneNumber");
const phoneError = document.querySelector("#phoneError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const cardname = document.querySelector("#cardName");
const cardnameError = document.querySelector("#cardNameError");
const cardnumber = document.querySelector("#cardNumber");
const cardnumberError = document.querySelector ("#cardNumberError");
const expirydate = document.querySelector("#expiryDate");
const expirydateError = document.querySelector("#expiryDateError");
const cvv = document.querySelector("#cvv");
const cvvError = document.querySelector("#cvvError");




function validateForm(formevent) {
  formevent.preventDefault();

  if (checkIfValidLength(firstname.value, 2) === true) {
    nameError.style.display = "none";
  } else {
    nameError.style.display = "block";
  }

  if (checkIfValidLength(lastname.value, 2) === true) {
    nameError.style.display = "none";
  } else {
    nameError.style.display = "block";
  }

  if (checkIfValidLength(address.value, 6) === true) {
    addressError.style.display = "none";
  } else {
    addressError.style.display = "block";
  }

  if (validateEmail(email.value) === true) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
  }

  if (checkIfValidLength(cardname.value, 6) === true) {
    cardnameError.style.display = "none";
  } else {
    cardnameError.style.display = "block";
  }

  if (checkIfValidLength(cardnumber.value, 12) === true) {
    cardnumberError.style.display = "none";
  } else {
    cardnumberError.style.display = "block";
  }

  if (checkIfValidLength(expirydate.value, 4) === true) {
    expirydateError.style.display = "none";
  } else {
    expirydateError.style.display = "block";
  }

  if (checkIfValidLength(cvv.value, 2) === true) {
    cvvError.style.display = "none";
  } else {
    cvvError.style.display = "block";
  }

}

form.addEventListener("submit", validateForm);

function checkIfValidLength(value, len) {
  if (value.trim().length > len) {
    return true;
  } else {
    return false;
  }
}

function validateEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(email);
  return patternMatches;
}

function validatephone(phonenumber) {
    const patternMatches = regEx.test(phone);
    return patternMatches;
  }

CheckFormValidity();