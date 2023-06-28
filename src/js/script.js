const input = document.querySelectorAll("input");
const btnConfirm = document.getElementById("btn-confirm");
const error = document.querySelectorAll("small");

btnConfirm.addEventListener("click", (event) => {
  event.preventDefault();

  input.forEach((element,index) => {
     const elementValue = element.value
    if(elementValue === ""){
        error[index].classList.add("error");
        error[index].innerText = "Can't be blank";
    }else{
        error[index].classList.remove("error");
        error[index].innerText = ""
       
    }
  });

  
});
