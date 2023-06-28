const numberCard = document.getElementById("card-number");
const nameClient = document.getElementById("card-name");
const dataVenc = document.getElementById("card-expiration");
const numberCvc = document.getElementById("card-cvc");
const name = document.getElementById("name");
const number = document.getElementById("number");
const month = document.getElementById("month");
const year = document.getElementById("year");
const cvc = document.getElementById("cvc");
const btnConfirm = document.getElementById("btn-confirm");
const error = document.querySelectorAll("small");

btnConfirm.addEventListener("click", (event) => {
  event.preventDefault();

  const inputFields = [name, number, month, year, cvc];
  inputFields.forEach((element, index) => {
    const elementValue = element.value;
    if (elementValue === "") {
      error[index].classList.add("error");
      error[index].innerText = "Can't be blank";
      element.style.border = "1px solid red";
    } else {
      error[index].classList.remove("error");
      error[index].innerText = "";
      element.style.border = "";
    }
  });
});


