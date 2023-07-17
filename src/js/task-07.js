const fontSizeControl = document.getElementById("font-size-control");
const text = document.getElementById("text");

fontSizeControl.addEventListener('input', onInputSizeControl);


function onInputSizeControl(event) {
    const fontSizeValue = event.target.value;
    text.style.fontSize =fontSizeValue+"px";
      return
};
   
