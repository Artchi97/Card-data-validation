// DOM Elements
const nameInput = document.getElementById("nameInput");
const cardNumberInput = document.querySelector("#cardNumber");
const mmInput = document.querySelector("#expDateInputMM");
const yyInput = document.querySelector("#expDateInputYY");
const cvcInput = document.querySelector("#cvcInput");
const confirmBtn = document.querySelector("#confirmBtn");
const continueBtn = document.querySelector(".continueBtn");
const frontNumber = document.querySelector(".frontCardNumber");
const frontName = document.querySelector(".fullNameOnFrontCard");
const frontMonth = document.querySelector("#month");
const frontYear = document.querySelector("#year");
const cvcOnCard = document.querySelector("#cvcBackSide");
const inputsForm = document.querySelector("#inputsForm");
const thankDiv = document.querySelector(".thanks");
const nameError = document.getElementById("nameError");
const cardNumberError = document.getElementById("cardNumberError");
const expDateError = document.getElementById("expDateError");
const cvcError = document.getElementById("cvcError");

// funkcja, która sprawdza czy w inpucie są cyfry
// function containDigits(nameValue) {
//   const regex = /\d/;
//   return regex.test(nameValue);
// }

// funkcja, która sprawdza czy w inpucie są litery

const validation = (e) => {
  e.preventDefault();
  let errors = [];
  const regex = /[a-zA-Z]/;

  let nameValue = nameInput.value;
  let cardNumberValue = cardNumberInput.value;
  let monthValue = mmInput.value;
  let yearValue = yyInput.value;
  let cvcValue = cvcInput.value;

  if (nameValue === "") {
    errors.push("Wypełnij poprawnie pole CARDHOLDER NAME");
    nameInput.classList.add("errorInput");
    nameError.innerText = "Wypełnij poprawnie to pole!";
  } else {
    nameInput.classList.remove("errorInput");
    nameError.innerText = "";
  }

  if (cardNumberValue.length !== 16 || cardNumberValue.match(regex)) {
    errors.push("Wypełnij poprawnie pole CARD NUMBER!");
    cardNumberInput.classList.add("errorInput");
    cardNumberError.innerText = "Wypełnij poprawnie to pole!";
  } else {
    cardNumberInput.classList.remove("errorInput");
    cardNumberError.innerText = "";
  }

  if (
    monthValue.length !== 2 ||
    monthValue <= 0 ||
    monthValue > 12 ||
    monthValue.match(regex)
  ) {
    errors.push("Wypełnij poprawnie pole expDate!");
    mmInput.classList.add("errorInput");
    expDateError.innerText = "Wypełnij poprawnie to pole!";
  } else {
    mmInput.classList.remove("errorInput");
    expDateError.innerText = "";
  }

  if (yearValue.length !== 2 || yearValue.match(regex) || yearValue < 0) {
    errors.push("Wypełnij poprawnie pole expDate!");
    yyInput.classList.add("errorInput");
    expDateError.innerText = "Wypełnij poprawnie to pole!";
  } else {
    yyInput.classList.remove("errorInput");
    expDateError.innerText = "";
  }

  if (cvcValue.length !== 3 || cvcValue.match(regex)) {
    errors.push("Wypełnij poprawnie pole CVC!");
    cvcInput.classList.add("errorInput");
    cvcError.innerText = "Wypełnij poprawnie to pole!";
  } else {
    cvcInput.classList.remove("errorInput");
    cvcError.innerText = "";
  }

  if (errors.length === 0) {
    frontName.innerText = nameInput.value;
    frontNumber.innerText = cardNumberInput.value;
    frontMonth.innerText = mmInput.value;
    frontYear.innerText = yyInput.value;
    cvcOnCard.innerHTML = cvcInput.value;

    nameValue = "";
    cardNumberValue = "";
    monthValue = "";
    yearValue = "";
    cvcValue = "";

    inputsForm.classList.add("hidden");
    thankDiv.classList.remove("hidden");
  }
};

const continueFunction = () => {
  inputsForm.classList.remove("hidden");
  thankDiv.classList.add("hidden");

  frontName.innerText = "JANE APPLESEED";
  frontNumber.innerText = "0000 0000 0000 0000";
  frontMonth.innerText = "00";
  frontYear.innerText = "00";
  cvcOnCard.innerHTML = "000";
};

inputsForm.addEventListener("submit", validation);
continueBtn.addEventListener("click", continueFunction);
