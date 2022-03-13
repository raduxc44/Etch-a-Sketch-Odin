const body = document.body;
let container = document.querySelector('.grid-container');
let cell;
let clearButton = document.querySelector('.clear-button');
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
        clearButton.addEventListener('click', () => {
            clearGrid(cell);
        })
    });
}
generateInitialSketch();

clearButton.addEventListener('click', () => { generateSketch() })
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
            clearButton.addEventListener('click', () => {
                clearGrid(cell);
            })
        });

    }
}




function cellTrail(cell) {
    cell.classList.add('MouseOn');
}
function clearGrid(cell) {
    container.removeChild(cell);
}

// Pentru butonul de clear adaugam event pe buton
// care sa apeleze la o functie ce scoate clasa mouseon
// de pe toate casutele
