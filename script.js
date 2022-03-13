const body = document.body;
let container = document.querySelector('.grid-container');
let cell;
let clearButton = document.querySelector('.clear-button');

function cellTrail(cell) {
    cell.classList.add('MouseOn');
}

function generateInitialSketch() {

    for (let i = 0; i < 256; i++) {
        cell = document.createElement('div');
        container.appendChild(cell);
        cell.classList.add('cell');
        cell.innerHTML = '<p></p>';
    }

    let initialCellArr = document.querySelectorAll('.cell');

    initialCellArr.forEach(cell => {

        cell.addEventListener('mouseover', () => { cellTrail(cell) })

    });
}
generateInitialSketch();

clearButton.addEventListener('click', () => {

    container.innerHTML = '';
    generateSketch()

})

function generateSketch() {
    userInput = window.prompt(
        'Type a number of squares per line', 'The number should be less than 101')

    if (userInput < 101) {
        userInput *= userInput;

        for (let i = 0; i < userInput; i++) {
            cell = document.createElement('div');
            container.appendChild(cell);
            cell.classList.add('cell');
            cell.innerHTML = '<p></p>';
        }
        let nextCellArr = document.querySelectorAll('.cell');
        nextCellArr.forEach(cell => {

            cell.addEventListener('mouseover', () => { cellTrail(cell) })

        });

    }
}


