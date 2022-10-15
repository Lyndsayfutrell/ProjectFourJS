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
    startGame(){
        overlay.style.display = "none";
        overlay.classList.remove('win');
        overlay.classList.remove('lose');
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay(phrase);
    }

    getRandomPhrase() {
        const number = this.phrases.length;
        const randomNumber = Math.floor(Math.random() * number);
        return new Phrase(this.phrases[randomNumber]);
    }

    handleInteraction(e) {
        phrase.showMatchedLetter(e);
        phrase.checkLetter(e);
        this.removeLife(e);
        phrase.match = null;

    }

    checkForWin(){
        this.gameOver();
    }

    gameOver() {
        const hidden = document.getElementsByClassName('letter');
        const show = document.getElementsByClassName('show');
        if (hidden.length === show.length) {
            h2.innerHTML = 'YOU WIN!!'
            overlay.classList.add('win');
            overlay.style.display = 'flex';
            buttonReset.textContent = 'reset game';
            game.resetGame();
    
        }
        if (this.missed > 4) {
            h2.innerHTML = 'GAME OVER'
            overlay.classList.add('lose');
            overlay.style.display = 'flex';
            buttonReset.textContent = 'play again';
            game.resetGame();
        };
    }
    resetGame () {
        const ul = document.getElementById('phrase');
        const img = document.querySelectorAll('IMG');
        ul.innerHTML = '';
        const button = document.querySelectorAll('button');
        for (let i = 0; i < button.length; i++) {
            button[i].classList.remove('chosen');
            button[i].classList.remove('wrong');
            button[i].classList.remove('correct');
        }
        this.missed = 0;
        for (let i= 0; i<hearts.length; i++) {
            img[i].src = 'images/liveHeart.png';
        }
    }
    removeLife(e) {
            if (phrase.match === null) {
                e.classList.add('wrong');
                hearts[this.missed].src = 'images/lostHeart.png';
                this.missed ++;
                this.gameOver();
            } else {
                e.classList.add('correct');
            }
        }

}
