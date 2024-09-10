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
        // square.style.flex = '';
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

const header = document.createElement('div');
const btnClear = document.createElement('button');
const btnResetDim = document.createElement('button');

btnClear.textContent = 'Clear Grid';
btnResetDim.textContent = 'Reset Grid Size';

let resetDimension = () => {
    newDim = prompt('New grid dimension?');
    if (newDim > 100){
        prompt('Dimension cannot exceed 100');
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

wrapper.appendChild(header);
// header.style.display = 'flex';
// header.style.alignItems = 'center';
// header.style.justifyContent = 'center';
header.appendChild(btnResetDim);
header.appendChild(btnClear);

