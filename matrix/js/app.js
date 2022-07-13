// Get the canvas from the html to manipulate 
const element = document.querySelector('#canvas');

// Get the context 2d from the canvas to draw on it  
const ctx = element.getContext("2d");

// Get the width and height of the body to enlarge the canvas
const w = document.body.clientWidth; 
const h = document.body.clientHeight; 

// Apply the width and height of the body in the canvas
element.width = w;
element.height = h; 

// Set the array where the positions of letters and symbols will be 
const position = Array(300).join(0).split(""); 

const initMatrix = () => {

    // Set the style of the rectangle from the context
    ctx.fillStyle = "rgba(0, 15, 2, 0.15)"; 
    ctx.fillRect(0, 0, w, h);

    // Set the style of the text from the context
    ctx.fillStyle = "rgba(0, 255, 0, 0.7)"
    ctx.font = '11pt'

    // Generate and apply the randoms letters and symbols into the array called position 
    position.map((y, index) => {
        // Returns a string created by using a specified sequence of Unicode values.
        const text = String.fromCharCode(1e3 + Math.random() * 30); 
        const x = index * 15;
        
        // Draw the canvas with the text :)
        canvas.getContext("2d").fillText(text, x, y);
 
        // The y-axis change randomly using the math.random
        y > 100 + Math.random() * 1e5 
            ? (position[index] = 0) 
            : (position[index] = y + 15);
    });
};

// Set the interval to execute each 70ms the function initMatrix
setInterval(initMatrix, 70)