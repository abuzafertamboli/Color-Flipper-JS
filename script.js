"use strict";

const colors = ['#ed1c24', '#2e3192', '#fff568', '#baff57'];

// cLick me button
const button = document.querySelector('.btn');

// color-code
let colorCode = document.querySelector('.color-code');


button.addEventListener('click', (event) => {
    const randomNumber = getRandomNumber();

    document.body.style.backgroundColor = colors[randomNumber];
    colorCode.innerHTML = colors[randomNumber];
})

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}