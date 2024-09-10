container = document.querySelector('.container');
container.style.border = '3px solid black';

let dim = 16;

for (let i=0; i<16; i++) {
    for (let j=0; j<16; j++) {
        const new_div = document.createElement('div');
        new_div.setAttribute('class', `square`);
        container.appendChild(new_div);
    }
}

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



let increaseOpacity = (element) => {
    const newOpacity = +getComputedStyle(element).opacity + 0.1;
    element.style.opacity = `${newOpacity}`;
}
