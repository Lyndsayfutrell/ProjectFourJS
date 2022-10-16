/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */


class Phrase{
    constructor(phrase) {
        this.phrase = phrase;
        this.match = null;
    }

    //Adds active phrase to display
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

    //Checks if letter is in active phrase
    checkLetter(e) {
        console.log(game.activePhrase.phrase);
        if(game.activePhrase.phrase.includes(e.innerHTML)){
            return true;
        }
    }
    
    showMatchedLetter(button) {
        const letter = document.getElementsByClassName('letter');
        for (let i = 0; i < letter.length; i++) {
            if (letter[i].textContent === button.textContent) {
                letter[i].classList.add('show');
            }
        }
    }
}
