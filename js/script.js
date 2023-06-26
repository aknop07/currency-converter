{
    const calculateResult = (amount, currency) => {
        const rateEUR = 4.45;
        const rateGBP = 5.21;
        const rateUSD = 4.07;

        switch (currency) {
            case "EUR":
                return amount / rateEUR;

            case "GBP":
                return amount / rateGBP;

            case "USD":
                return amount / rateUSD;
        };
    };

    const updateResultText = (result, currency) => {
        const resultElement = document.querySelector(".js-result");
        resultElement.innerText = `${result.toFixed(2)} ${currency}`;
    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        const amountElement = document.querySelector(".js-amount");
        const currencyElement = document.querySelector(".js-currency");

        const currency = currencyElement.value;
        const amount = +amountElement.value;

        const result = calculateResult(amount, currency);

        updateResultText(result, currency);
    };

    const init = () => {
        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("submit", onFormSubmit);
    };

    init();
}