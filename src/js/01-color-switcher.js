const body= document.querySelector('body');
const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
let id = 0;


function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }

function changeColor() {
    body.style.backgroundColor=getRandomHexColor();
    
}

function startChangeColor() {
    id = setInterval(changeColor, 1000);
    startBtn.disabled = true;
    stopBtn.disabled = false;
    console.log(id);

}

function stopChangeColor(){
    clearInterval(id);
    startBtn.disabled = false;
    stopBtn.disabled = true;
    console.log(id);
}



startBtn.addEventListener("click", startChangeColor);
stopBtn.addEventListener("click", stopChangeColor)