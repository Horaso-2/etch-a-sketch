container = document.querySelector('.container')

let dim = 16;

for (let i=0; i<16; i++) {
    for (let j=0; j<16; j++) {
        const new_div = document.createElement('div');
        new_div.setAttribute('class', `square`);
        container.appendChild(new_div);
    }
}

const square_dim = 960/dim;
const squares = document.querySelectorAll('.square');
squares.forEach((square) => {
    square.style.display = 'flex';
    square.style.width = `${square_dim}px`;
    square.style.height = `${square_dim}px`;
    // square.style.flex = '';
});
