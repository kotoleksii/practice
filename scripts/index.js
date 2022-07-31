const modalCurrencyConverter = document.getElementById("currencyConverterModal");

document.querySelector('body').addEventListener('click', e => {
  if (e.target == modalCurrencyConverter) {
    popupToggle();
  }
});

function popupToggle(){
  modalCurrencyConverter.classList.toggle('active');
}