const headerTime = document.querySelector(".date");
const dropListCountries = document.querySelectorAll(".drop-list select");
const fromCurrency = document.querySelector(".from select");
const toCurrency = document.querySelector(".to select");
const btnCalculate = document.querySelector("form button");

for(let i = 0; i < dropListCountries.length; i++) {
    for(currency_code in country_list){
        let selected;
        if(i == 0) {
            selected = currency_code == "USD" ? "selected" : "";
        }else if (i == 1){
            selected = currency_code == "UAH" ? "selected" : "";
        }
        let optionTag = `<option value="${currency_code}" ${selected}>${currency_code}</option>`
        dropListCountries[i].insertAdjacentHTML("beforeend", optionTag);
    }
    dropListCountries[i].addEventListener("change", e => {
        loadFlag(e.target);
    });
}

function loadFlag(flag){
    for(code in country_list){
        if(code == flag.value){
            let imgTag = flag.parentElement.querySelector("img");
            imgTag.src = `https://countryflagsapi.com/png/${country_list[code]}`;
        }
    }
}

window.addEventListener("load", () => {
    getExchangeRate();
});
btnCalculate.addEventListener("click", e => {
    e.preventDefault();
    getExchangeRate();
});

const exchangeIcon = document.querySelector(".drop-list .icon");
exchangeIcon.addEventListener("click", () => {
    let temp = fromCurrency.value;
    fromCurrency.value = toCurrency.value;
    toCurrency.value = temp;
    loadFlag(fromCurrency);
    loadFlag(toCurrency);
    getExchangeRate();
});

function getExchangeRate() {
    const amount = document.querySelector(".amount input");
    const txtExchangeRate = document.querySelector(".exchange-rate");
    let amountVal = amount.value;

    if(amountVal == "" || amountVal == "0"){
        amount.value = "1";
        amountVal = 1; 
    }
    txtExchangeRate.innerText = "Getting exchange rate data...";
    let url = `https://v6.exchangerate-api.com/v6/${exchangeApiKey}/latest/${fromCurrency.value}`;
    
    fetch(url).then(response => response.json()).then(result=>{
        let exchangeRate = result.conversion_rates[toCurrency.value];
        let totalExchangeRate = (amountVal * exchangeRate).toFixed(2);

        if(fromCurrency.value == "RUB" || toCurrency.value == "RUB"){
            txtExchangeRate.innerText = "Russian warship, go fuck yourself🖕";
        }else{
            txtExchangeRate.innerText = `${amountVal} ${fromCurrency.value} = ${totalExchangeRate} ${toCurrency.value}`;
        }

    }).catch(()=>{
        txtExchangeRate.InnerText = "Something went wrong... Pls try again...";
    });
}