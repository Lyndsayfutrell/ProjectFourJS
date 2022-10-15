/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const phrase = new Phrase();
const game = new Game();

//Event listener to start/restart game
const buttonReset = document.querySelector('#btn__reset');
buttonReset.addEventListener ('click', (e) => {
    game.startGame();

});

//Event Listener for buttons
const hearts = document.querySelectorAll('img');
const qwerty = document.getElementById('qwerty');
const h2 = document.querySelector('.title');
qwerty.addEventListener('click', e => {
    if(e.target.textContent.length === 1) {
        game.handleInteraction(e.target);
    }
});

qwerty.addEventListener('keyup', e => {
    game.handleInteraction(e.target);
    console.log(e.target);
 });