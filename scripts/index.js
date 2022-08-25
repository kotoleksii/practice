const body = document.querySelector('body');
const modalCurrencyConverter = document.getElementById('currencyConverterModal');
const modalTodo = document.getElementById('todoModal');
const modalQr = document.getElementById('qrModal');
const btnBack = document.querySelector('.btn-back');
const burger = document.querySelector('.burger');


body.addEventListener('click', e => {
  if (e.target == modalCurrencyConverter) {
    popupToggleCurrency();
  }
  if (e.target == modalTodo) {
    popupToggleTodo();
  }
  if (e.target == modalQr) {
    popupToggleQr();
  }
});

function popupToggleCurrency(){
  modalCurrencyConverter.classList.toggle('active') 
  ? burger.style.pointerEvents = 'none' 
  : burger.style.pointerEvents = 'auto';
}

function popupToggleTodo(){
  modalTodo.classList.toggle('active') 
  ? burger.style.pointerEvents = 'none' 
  : burger.style.pointerEvents = 'auto';
}

function popupToggleQr(){
  modalQr.classList.toggle('active') 
  ? burger.style.pointerEvents = 'none' 
  : burger.style.pointerEvents = 'auto';
}

btnBack.addEventListener('click', e => {
  burger.style.pointerEvents = 'auto';
});

const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');

  burger.addEventListener('click', ()=>{
    nav.classList.toggle('nav-active');

    navLinks.forEach((link, index) => {
      if(link.style.animation) {
        link.style.animation = '';
      }else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
      }
    });

    burger.classList.toggle('toggle');
  });
}

navSlide();