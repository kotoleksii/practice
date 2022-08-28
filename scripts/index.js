const body = document.querySelector('body');
const modalCurrencyConverter = document.getElementById('currencyConverterModal');
const modalTodo = document.getElementById('todoModal');
const modalQr = document.getElementById('qrModal');
const btnBack = document.querySelector('.btn-back');
const burger = document.querySelector('.burger');
const ball = body.querySelector('.switch');



const modeToggle = body.querySelector(".mode-toggle");
let getMode = localStorage.getItem("mode");
if(getMode && getMode ==="dark"){
    body.classList.toggle("dark");
    addDarkModeIcon();
}else {
    addLightModeIcon();
}

modeToggle.addEventListener("click", () =>{
  body.classList.toggle("dark");
  if(body.classList.contains("dark")){
      localStorage.setItem("mode", "dark");
      addDarkModeIcon();
  }else{
      localStorage.setItem("mode", "light");
      addLightModeIcon();
  }
});

function addDarkModeIcon() {
  ball.classList.remove('fa-solid', 'fa-moon');
  ball.classList.add('fa-solid', 'fa-sun');
  ball.style.color = '#fff';
}

function addLightModeIcon() {
  ball.classList.remove('fa-solid', 'fa-sun');
  ball.classList.add('fa-solid', 'fa-moon');
  ball.style.color = '#111';
}


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