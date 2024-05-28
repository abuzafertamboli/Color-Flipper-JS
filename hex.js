const hex = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];

// cLick me button
const button = document.querySelector('.btn');

// color-code
let colorCode = document.querySelector('.color-code');

button.addEventListener('click', (e) => {
    let herxColor = "#";

    for(let i = 0; i < 6; i++){
        herxColor += hex[getRandomNumber()];
    }

    document.body.style.backgroundColor = herxColor;
    colorCode.innerHTML = herxColor;
})

function getRandomNumber(){
    return Math.floor(Math.random() * hex.length);
}