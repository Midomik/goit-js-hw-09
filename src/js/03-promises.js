import Notiflix from 'notiflix';

const formEl = document.querySelector(".form");

 

function startFunc(e) {
    e.preventDefault();
    const { delay, step, amount } = e.currentTarget.elements;
    if(delay.value < 0 || step.value < 0 || amount.value < 0){
        Notiflix.Notify.warning(`Please enter a positive number`);
        return;
    } 
    else{


    for (let i=0; i<=Number(amount.value)-1; i++){
        const delays= +step.value * i + +delay.value; 
        let position = i+1;
        createPromise(position, delays,e).then(()=>{
            Notiflix.Notify.success(
                `✅ Fulfilled promise ${position} in ${delays}ms`
              );
        }).catch(()=>{
            Notiflix.Notify.failure(
                `❌ Rejected promise ${position} in ${delays}ms`
              );
        })

    }
    e.currentTarget.reset();
}
}

function createPromise(position, delays, e) {
    const { delay, step, amount } = e.currentTarget.elements;

        console.log(delays);
      return new Promise((resolve, reject) => {
          const shouldResolve = Math.random() > 0.3;
          setTimeout(()=>{
            if (shouldResolve) {
                resolve({ position, delays });
            } else {
                reject({ position, delays });
            }
          }, delays);
          

      })
      
  }

  
  




formEl.addEventListener("submit", startFunc);













