const body = document.body;
let container = document.querySelector('.grid-container');
let cell;

for (let i = 0; i < 256; i++) {
    cell = document.createElement('div');
    container.appendChild(cell);
    cell.classList.add('cell');
    cell.innerHTML = '<p>Hatz</p>';
}
let cellArr = document.querySelectorAll('.cell');

cellArr.forEach(cell => {
    cell.addEventListener('mouseover', () => { cellTrail(cell) })
});

function cellTrail(cell) {
    cell.classList.add('MouseOn');
}


