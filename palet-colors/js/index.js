const color = document.querySelector("#color");
let outputValue = document.querySelector("#salida");


color.addEventListener("input", () => {
    const colorSelected = color.value;
    outputValue.innerHTML = colorSelected;
    outputValue.style.background = colorSelected;
    outputValue.style.color = "#fff"
})