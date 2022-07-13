// Get the IDs from the HTML 
const color = document.querySelector("#color");
const outputValue = document.querySelector("#salida"); 
const list = document.querySelector('#lista');
const colorCounter = document.querySelector('#colorCounter');
// Get the items from the localStorage setted in the saveColor function
const storage = JSON.parse(localStorage.getItem("colorValue")) || "#ffffff";
const colorList = JSON.parse(localStorage.getItem("colorList")) || [];

// Set the color selected in the input and show it in the HTML
const setColor = () => {        
    const colorSelected = color.value;
    

    outputValue.innerHTML = colorSelected;
    outputValue.style.background = colorSelected;
    outputValue.style.color = "#ffffff";
}     

// Get the colors and show them in the HTML when u save it
const getColors = () => {
    colorCounter.innerHTML = colorList.length;
    
    list.innerHTML = ""; 
    
    for (const color of colorList) {
        list.innerHTML += `<li style="background: ${color}">${color}</li>`
    }
}

// Save the color in the local storage as a single value and as array
const saveColor = (value) => {
    colorList.push(value);
    
    // Set the items to save them in the localStorage, a key and the value
    localStorage.setItem("colorValue", JSON.stringify(value));
    localStorage.setItem("colorList", JSON.stringify(colorList));
  
    getColors();
} 

// Run the functions
getColors();
setColor();

color.addEventListener("input", setColor);

