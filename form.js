let form = document.getElementsByTagName("form")[0];

let statusUsername = document.querySelector(".statusMessage.username");
let statusPassword = document.querySelector(".statusMessage.password");
let status = true;
let inputFields = document.querySelectorAll("input");



form.addEventListener("submit", function(event) {
  event.preventDefault();

  inputFields.forEach(function(input) {

    //nulstille fejlbesked og farve
    input.style.backgroundColor = "inherit";
    form.querySelector(".statusMessage" + input.name).innerText = "udfyld";

    //hvis der er fejæ, viser denne besked
    if (input.hasAttribute("required") && input.value == "") {
      input.style.backgroundColor = "red";
      form.querySelector(".statusMessage" + input.name).innerText = "udfyld";
      status = false;
    }
  });

  // if (!status) return;
  if (status == false) {
    return; //springer ud af den funktion vi er i gang med at udføre
  }


});