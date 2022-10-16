/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game{
    constructor(){
      this.activePhrase = null;  
      this.phrases =
      ['got your back',
      'how are you',
      'let it go',
      'never give up',
      'good vibes only'];
      this.missed = 0;
    }

    //Clears overlays and add the active phrase
    startGame(){
        overlay.style.display = "none";
        overlay.classList.remove('win');
        overlay.classList.remove('lose');
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay(phrase);
    }

    //Selects phrase at random from array of phrases
    getRandomPhrase() {
        const number = this.phrases.length;
        const randomNumber = Math.floor(Math.random() * number);
        return new Phrase(this.phrases[randomNumber]);
    }

    //Disables button that was selected and checks if letter is in phrase
    handleInteraction(e) {
        e.disabled = true;
        if(phrase.checkLetter(e)) {
            e.classList.add('chosen');
            e.classList.add('correct');
            phrase.showMatchedLetter(e);
            this.checkForWin();
        } else {
            e.classList.add('chosen');
            e.classList.add('wrong');
            this.removeLife(e);
            this.checkForWin();
            }
    }

    //Checks win or loss condition and runs game over if met
    checkForWin(){
        const hidden = document.getElementsByClassName('letter');
        const show = document.getElementsByClassName('show');
        if (hidden.length === show.length) {
            this.gameOver(true);
    
        } else if(this.missed > 4) {
            this.gameOver(false);
        }
    }

    //Displays win or loss screen and runs reset game
    gameOver(win) {
        if(win === true) {
            h2.innerHTML = 'YOU WIN!!'
            overlay.classList.add('win');
            overlay.style.display = 'flex';
            buttonReset.textContent = 'reset game';
            game.resetGame();  
        }
        else if(win === false){
            h2.innerHTML = 'GAME OVER'
            overlay.classList.add('lose');
            overlay.style.display = 'flex';
            buttonReset.textContent = 'play again';
            game.resetGame();
        }
    }

    //Resets game
    resetGame () {
        const ul = document.getElementById('phrase');
        const img = document.querySelectorAll('IMG');
        ul.innerHTML = '';
        const button = document.querySelectorAll('button');
        for (let i = 0; i < button.length; i++) {
            button[i].classList.remove('chosen');
            button[i].classList.remove('wrong');
            button[i].classList.remove('correct');
            button[i].disabled = false;
        }
        this.missed = 0;
        for (let i= 0; i<hearts.length; i++) {
            img[i].src = 'images/liveHeart.png';
        }
    }
    removeLife(e) {
        hearts[this.missed].src = 'images/lostHeart.png';
        this.missed ++;
    }
}
