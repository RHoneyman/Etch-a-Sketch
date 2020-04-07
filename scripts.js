const container = document.getElementById('container');
const resetButton = document.getElementById('reset');
const inputCount = document.getElementById('cell-count-input');
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
  if(e.shiftKey && e.target.style.backgroundColor == 'rgb(255, 255, 255)'){
    e.target.style.backgroundColor = randomColor();
  }
}

function resetColor(e) {
  e.target.style.backgroundColor = '#FFFFFF';
}

function resetPrompt(e) {
  e.preventDefault();
  let count = inputCount.value;
  if (count < 1 || count > 100) {
    return;
  }
  document.documentElement.style.setProperty('--cell-count', count);
  cellCount = count;
  reset();
}

function reset() {
  removeTable();

  createTable(cellCount);
  
  let cells = document.querySelectorAll('.cell');

  cells.forEach( (cell) => {
    cell.style.backgroundColor = '#FFFFFF';
  });
  
  cells.forEach( (cell) => {
    cell.addEventListener('mouseenter', changeColor);
    cell.addEventListener('click', resetColor);
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

function randomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function randomColor() {
  let r,g,b;
  r = randomInRange(0,255);
  g = randomInRange(0,255);
  b = randomInRange(0,255);

  return `rgb(${r}, ${g}, ${b})`;
}