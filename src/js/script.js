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
const form = document.querySelector(".form");
const thanks = document.querySelector(".thanks");

btnConfirm.addEventListener("click", (event) => {
  event.preventDefault();

  input.forEach((element, index) => {
    const elementValue = element.value;
    if (elementValue === "") {
      error[index].classList.add("error");
      error[index].innerText = "Can't be blank";
      element.style.border = "1px solid red";
    } else {
      error[index].classList.remove("error");
      error[index].innerText = "";
      element.style.border = "";
      thanks.classList.remove("visibility");
      form.classList.add("visibility");
    }
  });
});

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
});

monthVenc.addEventListener("input", insertDataVenc);
yearVenc.addEventListener("input", insertDataVenc);

cvc.addEventListener("input", () => {
  const cvcValue = cvc.value;
  numberCvc.innerText = cvcValue;
});

function insertDataVenc() {
  const yearVencValue = yearVenc.value;
  const monthVencValue = monthVenc.value;
  dataVenc.innerText = `${monthVencValue}/${yearVencValue}`;
}

numberClient.addEventListener("keydown", (event) => {
  const codigoTecla = event.keyCde || event.which;
  if (
    !(
      (codigoTecla >= 48 && codigoTecla <= 57) ||
      codigoTecla == 8 ||
      codigoTecla == 9 ||
      codigoTecla == 37 ||
      codigoTecla == 39
    )
  ) {
    event.preventDefault();
  }
});

monthVenc.addEventListener("keydown", (event) => {
  const codigoTecla = event.keyCde || event.which;
  if (
    !(
      (codigoTecla >= 48 && codigoTecla <= 57) ||
      codigoTecla == 8 ||
      codigoTecla == 9 ||
      codigoTecla == 37 ||
      codigoTecla == 39
    )
  ) {
    event.preventDefault();
  }
});

yearVenc.addEventListener("keydown", (event) => {
  const codigoTecla = event.keyCde || event.which;
  if (
    !(
      (codigoTecla >= 48 && codigoTecla <= 57) ||
      codigoTecla == 8 ||
      codigoTecla == 9 ||
      codigoTecla == 37 ||
      codigoTecla == 39
    )
  ) {
    event.preventDefault();
  }
});

cvc.addEventListener("keydown", (event) => {
  const codigoTecla = event.keyCde || event.which;
  if (
    !(
      (codigoTecla >= 48 && codigoTecla <= 57) ||
      codigoTecla == 8 ||
      codigoTecla == 9 ||
      codigoTecla == 37 ||
      codigoTecla == 39
    )
  ) {
    event.preventDefault();
  }
});
