// Initial variable declarations

const body = document.body;
let container = document.querySelector('.grid-container');
let clearButton = document.querySelector('.clear-button');
const COLOURED_ATTR = "cellColoured";

//This draws the first 16x16 sketch

generateSketch(16);

// The button clears the first sketch then runs the next function

clearButton.addEventListener('click', () => {

    container.innerHTML = '';
    checkInput()

})

// The function that draws a Sketch

function generateSketch(userInput) {
    userInput *= userInput;

    for (let i = 0; i < userInput; i++) {

        let cell = document.createElement('div');
        container.appendChild(cell);
        cell.classList.add('cell');

        let cellHeight = 78 / parseInt(Math.sqrt(userInput));
        let cellWidth = 50 / parseInt(Math.sqrt(userInput));
        cell.style = `height : ${cellHeight}vh; width : ${cellWidth}vw`;

        cell.addEventListener('mouseover', () => handleCellInteraction(cell));

    }
}


// This function draws the new sketch only if the input is valid

function checkInput() {

    let userInput = Number(window.prompt(

        'Type a number of squares per line . The number should be less than 101'))

    while (userInput > 100 || userInput < 1 || isNaN(userInput)) {

        userInput = window.prompt(

            'MAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAARSSSSSSSSSSSSSSSSS'

        )
    }

    generateSketch(userInput);

}

// This event runs either of the functions if the cell is colored or not already

function handleCellInteraction(cell) {

    if (cell.getAttribute(COLOURED_ATTR)) {

        darkenColor(cell);

    } else {

        cell.setAttribute(COLOURED_ATTR, true);
        colorPick(cell);

    }
}

// This function generates every cell color RGB value 

function colorPick(cell) {

    const [red, green, blue] = [generateRGBInt(), generateRGBInt(), generateRGBInt()];

    cell.style.backgroundColor = `rgb(${red} ${green} ${blue})`;
}

// This generates a random number between 1 and 255 to be used as a RGV value

function generateRGBInt() {

    return Math.floor(Math.random() * 255);

}

/* This transforms the string returned from the colorPick function
   into an array of integers so it can be used later*/

function rgbCSSToIntArray(rgbString) {

    const onlyValuesString = rgbString.slice(4, rgbString.length - 2).replaceAll(" ", "");

    const strArray = onlyValuesString.split(",");

    return strArray.map(Number);

}

/* Each time you pass through the same cell, this function darkens it's color
   by 10% */

function darkenColor(cell) {

    let [red, green, blue] = rgbCSSToIntArray(cell.style.backgroundColor);

    red = red - (red * 10 / 100);
    green = green - (green * 10 / 100);
    blue = blue - (blue * 10 / 100);

    cell.style.backgroundColor = `rgb(${red} ${green} ${blue})`;

}