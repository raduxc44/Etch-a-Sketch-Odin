// Initial variable declarations

const body = document.body;
let container = document.querySelector('.grid-container');
let cell;
let clearButton = document.querySelector('.clear-button');
let red;
let green;
let blue;

function colorPick(cell) {
    red = Math.floor(Math.random() * 255);
    green = Math.floor(Math.random() * 255);
    blue = Math.floor(Math.random() * 255);
    cell.style.backgroundColor = `rgb(${red} ${green} ${blue})`;
}

function darkenColor(cell) {
    red = red - (red * 10 / 100);
    green = green - (green * 10 / 100);
    blue = blue - (blue * 10 / 100);
    cell.style.backgroundColor = `rgb(${red} ${green} ${blue})`;
}



// The function that draws the first Sketch

function generateInitialSketch() {

    for (let i = 0; i < 256; i++) {

        cell = document.createElement('div');
        container.appendChild(cell);
        cell.classList.add('cell');
        cell.innerHTML = '<p></p>';
        let cellHeight = 78 / parseInt(16);
        let cellWidth = 50 / parseInt(16);
        cell.style = `height : ${cellHeight}vh; width : ${cellWidth}vw`;

    }

    let initialCellArr = document.querySelectorAll('.cell');
    initialCellArr.forEach(cell => {

        cell.addEventListener('mouseover', () => { colorPick(cell) }, { once: true });
        cell.addEventListener('mouseover', () => { darkenColor(cell), { once: true } })

    });
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