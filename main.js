let form = document.getElementsByTagName("form")[0];

let statusUsername = document.querySelector(".statusMessage.username");
let statusPassword = document.querySelector(".statusMessage.password");
let statusFornavn = document.querySelector(".statusMessage.forNavn");
let statusEfternavn = document.querySelector(".statusMessage.efterNavn");
let statusEmail = document.querySelector(".statusMessage.email");
let statusGade = document.querySelector(".statusMessage.gade");
let statusBy = document.querySelector(".statusMessage.by");
let statusRegion = document.querySelector(".statusMessage.region");
let statusPostnummer = document.querySelector(".statusMessage.postNummer");
let statusEtage = document.querySelector(".statusMessage.etage");
let statusHusnr = document.querySelector(".statusMessage.husnr");
let statusLand = document.querySelector(".statusMessage.land");
const atpos = form.email.value.indexOf("@");
const dotpos = form.email.value.lastIndexOf(".");

let status = true;

form.addEventListener("submit", function(event) {
  event.preventDefault();


  statusFornavn.innerText = "";
  document.getElementById("forNavn").style.backgroundColor = "inherit";
  if (form.forNavn.value == "") {
    statusFornavn.innerText = "Indtast fornavn";
    document.getElementById("forNavn").style.backgroundColor = "rgba(240, 95, 95, 0.281)";
    status = false;
  }
  statusEfternavn.innerText = "";
  document.getElementById("efterNavn").style.backgroundColor = "inherit";
  if (form.efterNavn.value == "") {
    statusEfternavn.innerText = "Indtast efternavn";
    document.getElementById("efterNavn").style.backgroundColor = "rgba(240, 95, 95, 0.281)";
    status = false;
  }
  statusEmail.innerText = "";
  document.getElementById("email").style.backgroundColor = "inherit";
  if (form.email.value == "" || atpos < 1 || dotpos < atpos + 2 || form.email1.value.length <= dotpos + 2) {
    statusEmail.innerText = "Angiv gyldig E-mail";
    document.getElementById("email").style.backgroundColor = "rgba(240, 95, 95, 0.281)";
    form.email.focus();
    status = false;
  }
  statusGade.innerText = "";
  document.getElementById("gade").style.backgroundColor = "inherit";
  if (form.gade.value == "") {
    statusGade.innerText = "Indtast gadenavn";
    document.getElementById("gade").style.backgroundColor = "rgba(240, 95, 95, 0.281)";
    form.gade.focus();
    status = false;
  }
  statusBy.innerText = "";
  document.getElementById("by").style.backgroundColor = "inherit";
  if (form.by.value == "") {
    statusBy.innerText = "Indtast by";
    document.getElementById("by").style.backgroundColor = "rgba(240, 95, 95, 0.281)";
    form.by.focus();
    status = false;
  }
  statusBy.innerText = "";
  document.getElementById("etage").style.backgroundColor = "inherit";
  if (form.etage.value == "") {
    statusEtage.innerText = "Indtast etage";
    document.getElementById("etage").style.backgroundColor = "rgba(240, 95, 95, 0.281)";
    form.etage.focus();
    status = false;
  }
  statusHusnr.innerText = "";
  document.getElementById("husnr").style.backgroundColor = "inherit";
  if (form.husnr.value == "") {
    statusHusnr.innerText = "Indtast hus nr";
    document.getElementById("husnr").style.backgroundColor = "rgba(240, 95, 95, 0.281)";
    form.husnr.focus();
    status = false;
  }
  statusRegion.innerText = "";
  document.getElementById("region").style.backgroundColor = "inherit";
  if (form.region.value == "") {
    statusRegion.innerText = "Vælg region";
    document.getElementById("region").style.backgroundColor = "rgba(240, 95, 95, 0.281)";
    form.region.focus();
    status = false;
  }
  statusPostnummer.innerText = "";
  document.getElementById("postNummer").style.backgroundColor = "inherit";
  if (form.postNummer.value == "" || isNaN(form.postNummer.value) || (form.postNummer.value < 4) || (form.postNummer.value > 4)) {
    statusPostnummer.innerText = "Skal indeholde fire tal";
    document.getElementById("postNummer").style.backgroundColor = "rgba(240, 95, 95, 0.281)";
    form.postNummer.focus();
    status = false;
  }
  statusLand.innerText = "";
  document.getElementById("land").style.backgroundColor = "inherit";
  if (form.land.value == "") {
    statusLand.innerText = "Vælg land";
    document.getElementById("land").style.backgroundColor = "rgba(240, 95, 95, 0.281))";
    form.land.focus();
    status = false;
  }
  statusUsername.innerText = "";
  document.getElementById("username").style.backgroundColor = "inherit";
  if (form.username.value == "") {
    statusUsername.innerText = "udfyld feltet";
    document.getElementById("username").style.backgroundColor = "rgba(240, 95, 95, 0.281)";
    form.username.focus();
    status = false;
  }

  statusPassword.innerText = "";
  document.getElementById("password").style.backgroundColor = "inherit";
  if (form.password.value == "" || form.password.length < 1) {
    statusPassword.innerText = "udfyld feltet";
    document.getElementById("password").style.backgroundColor = "rgba(240, 95, 95, 0.281)";
    form.password.focus();
    status = false;
  }


  // if (!status) return;
  if (status == false) {
    return; //springer ud af den funktion vi er i gang med at udføre
  }


});
// ────────────────────────────────────────────────────────────────────────────────