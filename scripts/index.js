const modalCurrencyConverter = document.getElementById("currencyConverterModal");
const QrModal = document.getElementById("QrModal");


document.querySelector('body').addEventListener('click', e => {
  if (e.target == modalCurrencyConverter) {
    popupToggle();
  }
  if (e.target == QrModal) {
    popupToggleQr();
  }
});

function popupToggle(){
  modalCurrencyConverter.classList.toggle('active');
}

function popupToggleQr(){
  QrModal.classList.toggle('active');
}