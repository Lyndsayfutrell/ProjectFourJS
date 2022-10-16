/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const phrase = new Phrase();


//Event listener to start/restart game
let game;
const buttonReset = document.querySelector('#btn__reset');
buttonReset.addEventListener ('click', (e) => {
    game = new Game();
    game.startGame();

});

//Event Listener for buttons
const hearts = document.querySelectorAll('img');
const qwerty = document.getElementById('qwerty');
const h2 = document.querySelector('.title');
const keyboard = document.querySelectorAll("button");
qwerty.addEventListener('click', e => {
    if(e.target.textContent.length === 1) {
        game.handleInteraction(e.target);
    }
});

//Event listener for keyboard
document.addEventListener('keydown', e => {
    if(overlay.style.display != 'flex'){
    letter = e.key
    for (let i = 0; i<keyboard.length;i++){
        if (keyboard[i].textContent === letter && keyboard[i].className !== 'key chosen wrong') {
            console.log(keyboard[i].className);
            e = keyboard[i];
            game.handleInteraction(e);
            }
        }
    }
 });