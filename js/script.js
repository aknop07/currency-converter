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
    let rate;

    switch (currency) {
        case "EUR":
            rate = rateEUR;
            break;

        case "GBP":
            rate = rateGBP;
            break;

        case "USD":
            rate = rateUSD
            break;
    };

    let result = (amount / rate).toFixed(2);
    resultElement.innerText = `${result} ${currency}`;
});