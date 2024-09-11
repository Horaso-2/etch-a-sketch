const wrapper = document.querySelector('.content-wrapper');
const container = document.querySelector('.container');
container.style.border = '3px solid black';

let dim = 16;

let createGrid = (dim) => {
    container.replaceChildren();
    for (let i=0; i<dim; i++) {
        for (let j=0; j<dim; j++) {
            const new_div = document.createElement('div');
            new_div.setAttribute('class', `square`);
            container.appendChild(new_div);
        }
    }
}

let populateGrid = (dim) => {
    const square_dim = 880/dim;
    const squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
        square.style.display = 'flex';
        square.style.width = `${square_dim}px`;
        square.style.height = `${square_dim}px`;
        square.style.backgroundColor = "#" + ((1 << 24) * Math.random() | 0).toString(16).padStart(6, "0");

        square.addEventListener('mouseover', () => {
            increaseOpacity(square);
        });
        square.style.opacity = 0;
    });
}

createGrid(dim);
populateGrid(dim);

let increaseOpacity = (element) => {
    const newOpacity = +getComputedStyle(element).opacity + 0.1;
    element.style.opacity = `${newOpacity}`;
}

const btnClear = document.createElement('button');
const btnResetDim = document.createElement('button');

let styleButtons = (button) => {
    button.style.backgroundColor = 'white';
    button.style.border = '3px solid black';
    button.style.padding = '20px 30px';
    button.style.borderRadius = '15px'
}

styleButtons(btnClear);
styleButtons(btnResetDim);

btnClear.textContent = 'Clear Grid';
btnClear.style.fontSize = '32px';
btnResetDim.textContent = 'Reset Grid Size';
btnResetDim.style.fontSize = btnClear.style.fontSize;

let resetDimension = () => {
    let newDim = prompt('How big do you want a grid side to be?');
    dim = newDim;
    if (newDim > 100){
        alert('Grid side cannot exceed 100');
        resetDimension();
    } else {
        createGrid(newDim);
        populateGrid(newDim);
    }
}

let clearGrid = () => {
    container.replaceChildren();
    createGrid(dim);
    populateGrid(dim);
}

btnResetDim.addEventListener('click', () => {
    resetDimension();
});

btnClear.addEventListener('click', () => {
    clearGrid();
})

const buttons = document.createElement('div');
buttons.style.display = 'flex';
buttons.style.flexDirection = 'column';
buttons.style.height = '200px';
buttons.style.padding = '0 50px'
buttons.style.justifyContent = 'space-evenly';
buttons.appendChild(btnResetDim);
buttons.appendChild(btnClear);
wrapper.appendChild(buttons);


