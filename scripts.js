const backCardCvc = document.getElementById("back-card-cvc");
const cvcInput = document.getElementById("cvc-input");


cvcInput.addEventListener("input", function () {
    console.log("hello");
    backCardCvc.textContent = cvcInput.value;
    if (cvcInput.value === '') {
        backCardCvc.textContent = "000";
    }
});

const frontCardName = document.getElementById("front-card-name");
const cardholderNameInput = document.getElementById("cardholder-name-input");

cardholderNameInput.addEventListener("input", function () {
    console.log("hello");
    frontCardName.textContent = cardholderNameInput.value;
    if (cardholderNameInput.value === '') {
        frontCardName.textContent = "Dupont Dupond";
    }
});

const cardMonth = document.getElementById("card-month");
const cardMonthInput = document.getElementById("exp-date-m-input");

cardMonthInput.addEventListener("input", function () {
    console.log("hello");
    cardMonth.textContent = cardMonthInput.value;
    if (cardMonthInput.value === '') {
        cardMonth.textContent = "MM";
    }
});

const cardYear = document.getElementById("card-year");
const cardYearInput = document.getElementById("exp-date-y-input");

cardYearInput.addEventListener("input", function () {
    console.log("hello");
    cardYear.textContent = cardYearInput.value;
    if (cardYearInput.value === '') {
        cardYear.textContent = "YY";
    }
});

const cardNumberInput = document.getElementById("card-number-input");
const cardNumber = document.getElementById("front-card-number");

cardNumberInput.addEventListener("input", function () {
    console.log("hello");
    
    cardNumber.textContent = cardNumberInput.value;

    if (cardNumberInput.value === '') {
        cardNumber.textContent = "0000000000000000";
    }
});