let amountElement = document.querySelector(".js-amount");
let currencyElement = document.querySelector(".js-currency");
let resultElement = document.querySelector(".js-result");
let formElement = document.querySelector(".js-form");

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let rateEUR = 4.45;
    let rateGBP = 5.21;
    let rateUSD = 4.07;

    let currency = currencyElement.value;
    let amount = +amountElement.value;

    switch (currency) {
        case "EUR":
            resultElement.innerText = (amount / rateEUR).tofixed(2);
            break;

        case "GBP":
            resultElement.innerText = (amount / rateGBP).toFixed(2);
            break;

        case "USD":
            resultElement.innerText = (amount / rateUSD).toFixed(2);
            break;
    };
});