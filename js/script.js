{
    const calculateResult = (amount, currency) => {
        const rateEUR = 4.45;
        const rateGBP = 5.21;
        const rateUSD = 4.07;

        switch (currency) {
            case "EUR":
                return rate = amount / rateEUR;

            case "GBP":
                return rate = amount / rateGBP;

            case "USD":
                return rate = amount / rateUSD;
        };
    }

    const updateResultText = (amount, rate, currency) => {
        const resultElement = document.querySelector(".js-result");
        const result = (amount / rate).toFixed(2);
        resultElement.innerText = `${result} ${currency}`;
    }

    const onFormSubmit = (event) => {
        event.preventDefault();

        const amountElement = document.querySelector(".js-amount");
        const currencyElement = document.querySelector(".js-currency");

        const currency = currencyElement.value;
        const amount = +amountElement.value;

        calculateResult(amount, currency);

        updateResultText(amount, rate, currency);
    }

    const init = () => {
        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("submit", onFormSubmit);
    }

    init();
}