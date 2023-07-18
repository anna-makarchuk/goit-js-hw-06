const controls = document.getElementById('controls');
console.log(controls.firstElementChild.value);
const boxes = document.getElementById('boxes');

const btn = controls.dataset.create;
console.log(btn);




function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


// function createBoxes(amount)(){
    
// };


// function destroyBoxes() {
  
// };