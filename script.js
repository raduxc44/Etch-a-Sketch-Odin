// Initial variable declarations
const COLOURED_ATTR = "cellColoured";

const body = document.body;
let container = document.querySelector('.grid-container');
let clearButton = document.querySelector('.clear-button');

function rgbCSSToIntArray(rgbString) {
    const onlyValuesString = rgbString.slice(4, rgbString.length - 2).replaceAll(" ", "");

    const strArray = onlyValuesString.split(",");

    return strArray.map(Number);
}

function generateRGBInt() {
    return Math.floor(Math.random() * 255);
}

function colorPick(cell) {
    const [red, green, blue] = [generateRGBInt(), generateRGBInt(), generateRGBInt()];

    cell.style.backgroundColor = `rgb(${red} ${green} ${blue})`;
}

function darkenColor(cell) {
    let [red, green, blue] = rgbCSSToIntArray(cell.style.backgroundColor);

    red = red - (red * 10 / 100);
    green = green - (green * 10 / 100);
    blue = blue - (blue * 10 / 100);

    cell.style.backgroundColor = `rgb(${red} ${green} ${blue})`;
}

function handleCellInteraction(cell) {
    if (cell.getAttribute(COLOURED_ATTR)) {
        darkenColor(cell);
    } else {
        cell.setAttribute(COLOURED_ATTR, true);
        colorPick(cell);
    }
}


// The function that draws the first Sketch

function generateInitialSketch() {

    for (let i = 0; i < 256; i++) {
        let cell = document.createElement('div');
        container.appendChild(cell);
        cell.classList.add('cell');
        cell.innerHTML = '<p></p>';
        let cellHeight = 78 / parseInt(16);
        let cellWidth = 50 / parseInt(16);
        cell.style = `height : ${cellHeight}vh; width : ${cellWidth}vw`;
        cell.addEventListener('mouseover', () => handleCellInteraction(cell));
    }

    let initialCellArr = document.querySelectorAll('.cell');
}
generateInitialSketch();

// The button clears the first sketch then runs the next function

clearButton.addEventListener('click', () => {

    container.innerHTML = '';
    checkInput()

})

// This function runs draws the new sketch only if the input is valid

function checkInput() {

    userInput = window.prompt(
        'Type a number of squares per line',
        'The number should be less than 101')

    function generateSketch() {
        userInput *= userInput;

        for (let i = 0; i < userInput; i++) {
            cell = document.createElement('div');
            container.appendChild(cell);
            cell.classList.add('cell');
            cell.innerHTML = '<p></p>';
            let cellHeight = 78 / parseInt(Math.sqrt(userInput));
            let cellWidth = 50 / parseInt(Math.sqrt(userInput));
            cell.style = `height : ${cellHeight}vh; width : ${cellWidth}vw`;
        }

        let nextCellArr = document.querySelectorAll('.cell');
        nextCellArr.forEach(cell => {

            cell.addEventListener('mouseover', () => { cellTrail(cell) })

        })
    }

    while (userInput > 100) {

        userInput = window.prompt(
            'Type a number of squares per line',
            'The number should be less than 101')

    }

    generateSketch();
}