const nameCard = document.getElementById("card-name");
const numberCard = document.getElementById("card-number");
const dataVenc = document.getElementById("card-expiration");
const numberCvc = document.getElementById("card-cvc");
const nameClient = document.getElementById("name");
const numberClient = document.getElementById("number");
const monthVenc = document.getElementById("month");
const yearVenc = document.getElementById("year");
const cvc = document.getElementById("cvc");
const btnConfirm = document.getElementById("btn-confirm");
const btnContinue = document.getElementById("btn-continue");
const error = document.querySelectorAll("small");
const input = document.querySelectorAll("input");
const form = document.getElementById("form");
const thanks = document.getElementById("thanks");

function validateName() {
  const name = nameClient.value.trim();
  if (name === "") {
    error[0].classList.add("error");
    error[0].innerText = "Type a valid value";
    nameClient.style.border = "1px solid red";
    return false;
  }

  error[0].classList.remove("error");
  error[0].innerText = "";
  nameClient.style.border = "";
  return true;
}

function validateCardNumber() {
  const cardNumber = numberClient.value.trim().replace(/\s/g, "");
  if (cardNumber === "") {
    error[1].classList.add("error");
    error[1].innerText = "Type a valid value";
    numberClient.style.border = "1px solid red";
    return false;
  }
  error[1].classList.remove("error");
  error[1].innerText = "";
  numberClient.style.border = "";
  return true;
}

function validateExpirationDate() {
  const month = monthVenc.value.trim();
  const year = yearVenc.value.trim();
  const dataAtual = new Date();
  const anoAtual = dataAtual.getFullYear() % 100;
  if (
    month === "" ||
    year === "" ||
    month < 1 ||
    month > 12 ||
    year < anoAtual
  ) {
    error[2].classList.add("error");
    error[2].innerText = "Type a valid value";
    monthVenc.style.border = "1px solid red";
    yearVenc.style.border = "1px solid red";
    return false;
  }

  error[2].classList.remove("error");
  error[2].innerText = "";
  monthVenc.style.border = "";
  yearVenc.style.border = "";
  return true;
}

function validateCVC() {
  const cvcValue = cvc.value.trim();
  if (cvcValue === "" || cvcValue.length !== 3 || !/^\d+$/.test(cvcValue)) {
    error[3].classList.add("error");
    error[3].innerText = "Type a valid value";
    cvc.style.border = "1px solid red";
    return false;
  }
  error[3].classList.remove("error");
  error[3].innerText = "";
  cvc.style.border = "";
  return true;
}

function validateForm(event) {
  event.preventDefault();

  const isValidName = validateName();
  const isValidCardNumber = validateCardNumber();
  const isValidExpirationDate = validateExpirationDate();
  const isValidCVC = validateCVC();

  if (isValidName && isValidCardNumber && isValidExpirationDate && isValidCVC) {
    thanks.classList.remove("visibility");
    form.classList.add("visibility");
  }
}

btnConfirm.addEventListener("click", validateForm);

btnContinue.addEventListener("click", (event) => {
  event.preventDefault();
  thanks.classList.add("visibility");
  form.classList.remove("visibility");
});

nameClient.addEventListener("input", () => {
  const nameClientValue = nameClient.value;
  nameCard.innerText = nameClientValue;
});

numberClient.addEventListener("input", () => {
  const numberClientValue = numberClient.value;
  numberCard.innerText = numberClientValue;
  limitCardNumber();
});

function formatCardNumber(value) {
  const formattedValue = value.replace(/\s/g, "").replace(/(\d{4})/g, "$1 ");
  return formattedValue.trim();
}

function limitCardNumber() {
  const maxDigits = 16;
  let formattedValue = numberClient.value
    .replace(/\D/g, "")
    .slice(0, maxDigits);
  const formattedNumber = formatCardNumber(formattedValue);
  numberClient.value = formattedNumber;
  numberCard.textContent =
    formattedNumber !== "" ? formattedNumber : "0000 0000 0000 0000";
}

function insertDataVenc() {
  const yearVencValue = yearVenc.value;
  const monthVencValue = monthVenc.value;
  dataVenc.innerText = `${monthVencValue}/${yearVencValue}`;
}

function handleNumericInput(event) {
  const allowedKeys = ["Backspace", "Tab", "ArrowLeft", "ArrowRight"];
  if (!/^\d$/.test(event.key) && !allowedKeys.includes(event.key)) {
    event.preventDefault();
  }
}

function handleMonthInput(event) {
  const maxDigits = 2;
  const monthValue = monthVenc.value.replace(/\D/g, "").slice(0, maxDigits);
  monthVenc.value = monthValue;
}

function handleYearInput(event) {
  const maxDigits = 2;
  const yearValue = yearVenc.value.replace(/\D/g, "").slice(0, maxDigits);
  yearVenc.value = yearValue;
}

nameClient.addEventListener("keypress", (e) => {
  if (/^\d$/.test(e.key)) {
    e.preventDefault();
  }
});

[numberClient, monthVenc, yearVenc].forEach((input) => {
  input.addEventListener("keydown", handleNumericInput);
});

monthVenc.addEventListener("input", insertDataVenc);
yearVenc.addEventListener("input", insertDataVenc);
monthVenc.addEventListener("input", handleMonthInput);
yearVenc.addEventListener("input", handleYearInput);

cvc.addEventListener("input", () => {
  const cvcValue = cvc.value;
  numberCvc.innerText = cvcValue.slice(0, 3);
  if (cvcValue.length > 3) {
    cvc.value = cvcValue.slice(0, 3);
  }
});
