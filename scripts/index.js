const modalCurrencyConverter = document.getElementById("currencyConverterModal");
const btnCurrencyConverter = document.getElementById("btnCurrencyConverter");

btnCurrencyConverter.addEventListener('click', () => {
  modalCurrencyConverter.style.display = "flex";
});

document.querySelector('body').addEventListener('click', e => {
  if (e.target == modalCurrencyConverter) {
    modalCurrencyConverter.style.display = "none";
  }
});