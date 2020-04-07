const container = document.getElementById('container');
const resetButton = document.getElementById('reset');
let cellCount = getComputedStyle(document.documentElement)
  .getPropertyValue('--cell-count'); 

resetButton.addEventListener('click', resetPrompt);

reset();


function createTable(size) {
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      let cell = document.createElement('div');
      cell.className = 'cell';
      container.appendChild(cell);
    }
  }
}

function changeColor(e) {
  e.target.style.backgroundColor = 'black';
}

function resetPrompt() {
  let count = prompt("How large do you want the table to be? (Select between 1 - 255");
  document.documentElement.style.setProperty('--cell-count', count);
  cellCount = count;
  reset();
}

function reset() {
  removeTable();

  createTable(cellCount);
  
  let cells = document.querySelectorAll('.cell');

  cells.forEach( (cell) => {
    cell.style.backgroundColor = '#FFF';
  });
  
  cells.forEach( (cell) => {
    cell.addEventListener('mouseenter', changeColor);
  });
}

function removeTable() {
  let table = document.getElementById('container');
  let child = table.lastElementChild;
  while (child) {
    table.removeChild(child);
    child = table.lastElementChild;
  }
}