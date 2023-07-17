const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const valueBtn = document.querySelector('#value');

let counterValue = 0;

decrementBtn.addEventListener('click', clickHandlerFirstBtn);
incrementBtn.addEventListener('click', clickHandlerLastBtn);

function clickHandlerFirstBtn() {
   counterValue -= 1; 
    console.log(counterValue);
valueBtn.innerHTML = counterValue;
};

function clickHandlerLastBtn(){
    counterValue +=1; 
    console.log(counterValue);
valueBtn.innerHTML = counterValue;
};

  
