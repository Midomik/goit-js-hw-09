import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const inputDate = document.querySelector("#datetime-picker");
const startBtn = document.querySelector('[data-start]');
const reserBtn = document.querySelector('[data-reset]');
const timerEl = document.querySelector(".timer");
const fieldEl = timerEl.children;


const fieldElArr= Array.from(fieldEl);

timerEl.style.display="flex";
timerEl.style.gap="10px";
timerEl.style.fontSize="20px";
timerEl.style.fontWeight="500";
timerEl.style.marginTop="10px";
fieldElArr.map((item) => {
    item.style.display = "flex";
    item.style.flexDirection = "column";
    item.querySelector(".value").style.textAlign="center";
} )

const elements ={
    days: document.querySelector('[data-days]'),
    hours: document.querySelector('[data-hours]'),
    minutes: document.querySelector('[data-minutes]'),
    seconds: document.querySelector('[data-seconds]'),
}

//##########################################

const currentDate = new Date(); 
let selectedDate = "";
let timerId = 0;



const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
       setTimeout(checkDate,0,selectedDates) 
        // console.log(selectedDates[0]);
    },
  };



function checkDate(selectedDates){
    // console.log(currentDate);


    if (selectedDates[0]>currentDate){
        startBtn.disabled = false; 
        selectedDate=selectedDates[0];

    } else{
        startBtn.disabled = true;
        Notiflix.Notify.failure('Please choose a date in the future');
    }
}

function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds };
  }


function addLeadingZero(value){
    let result = '';
    value=String(value);
   
    if (value.length<=1){
        result=value.padStart(2, "0");
        // console.log("first-log");
    }
    else{
        result=value; 
        // console.log("second-log");
    }

    return result;
}


  let currentSeconds = currentDate.getTime();

function fillTimer(){
    inputDate.disabled = true;
    startBtn.disabled = true;
    // console.log(timerId);
    const {days, hours, minutes, seconds}=elements;


    const selectedSeconds = selectedDate.getTime();
    const resSeconds=selectedSeconds-currentSeconds;

    const resultDate = convertMs(resSeconds);


    days.textContent = addLeadingZero(resultDate.days);
    hours.textContent = addLeadingZero(resultDate.hours);
    minutes.textContent = addLeadingZero(resultDate.minutes);
    seconds.textContent = addLeadingZero(resultDate.seconds);

    currentSeconds=currentSeconds+1000;
    // console.log(resultDate);

    if (days.textContent==="00" && 
        hours.textContent==="00" && 
        minutes.textContent === "00" && 
        seconds.textContent==="00"){clearInterval(timerId)}

}




function startTimer(){
    timerId = setInterval(fillTimer, 1000);
}

function resetTimer(){
    location.reload();
}


startBtn.disabled = true;
flatpickr("#datetime-picker", options);

startBtn.addEventListener("click", startTimer);
reserBtn.addEventListener("click", resetTimer)

