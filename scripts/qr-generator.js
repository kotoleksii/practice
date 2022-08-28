const wrapper = document.querySelector(".qr-wrapper");
const qrInput = wrapper.querySelector(".form input");
const generateBtn = wrapper.querySelector(".form button");
const qrImg = wrapper.querySelector(".qr-code img");
let preValue;

generateBtn.addEventListener("click", () => {
    let qrValue = qrInput.value.trim();
    let color = 'ffffff';
    let bgcolor = '151a30';
    if(!qrValue || preValue === qrValue) return;
    preValue = qrValue;
    generateBtn.innerText = "Generating...";
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=180x180&color=${color}&bgcolor=${bgcolor}&data=${qrValue}`;
    qrImg.addEventListener("load", () => {
        wrapper.classList.add("active");
        generateBtn.innerText = "Generate";
    });
});

qrInput.addEventListener("keyup", () => {
    if(!qrInput.value.trim()) {
        wrapper.classList.remove("active");
        preValue = "";
    }
});