const formEl = document.querySelector(".form");
const submitBtn = formEl.querySelector("button");
const lablesArr = Array.from(formEl.children); 

// const inputsArr = lablesArr.map(item =>{item.lastChild})
 
console.log(formEl);
console.log(submitBtn);
console.log(lablesArr);
// console.log(inputsArr);

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}



submitBtn.addEventListener("click", )