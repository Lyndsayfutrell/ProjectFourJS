/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */


class Phrase{
    constructor(phrase) {
        this.phrase = phrase;
        this.match = null;
    }

    addPhraseToDisplay() {
        const ul = document.getElementById('phrase');
        for (let i = 0; i < this.phrase.length; i++) {
            const letter = this.phrase.charAt(i); 
            const li = document.createElement('li');
            if (letter !== ' ') {
                li.textContent = letter;
                li.className = 'letter';
                ul.appendChild(li);
    
            } else {
                li.textContent = letter;
                li.className = 'space';
                ul.appendChild(li);
    
            }
        };
    }
    checkLetter(e) {
        if (e.tagName === 'BUTTON' && e.className !== 'chosen') {
            this.match = phrase.showMatchedLetter(e.textContent);
            e.classList.add('chosen');
            game.checkForWin();
            return this.match;
        } else {
            game.removeLife(e);
        }
    }
    showMatchedLetter(button) {
        const letter = document.getElementsByClassName('letter');
        for (let i = 0; i < letter.length; i++) {
            if (letter[i].textContent === button) {
            this.match = button;
            letter[i].classList.add('show')
                }
            };
        return this.match;
    }

}