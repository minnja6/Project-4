class Game{
    constructor(){
        //Phrases for the Game 
       this.phrases = [
          new Phrase('Hit the nail on the head'),
          new Phrase('You cant judge a book by its cover'),
          new Phrase('To kill two birds with one stone'),
          new Phrase('When life gives you lemons make lemonade'),
          new Phrase('Dance like no one is watching')
       ];
       this.activePhrase = null;
    }
    //gets the phrases and randomizes them
    getRandomPhrase() {
        const index = Math.floor(Math.random() * this.phrases.length);
        return this.phrases[index];
    }
    //starts the game with 0 misses, adds the random phrases to the display and hides the overlay
    startGame(){
        this.missed = 0;
        $('#overlay').hide();
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    }
    //adding the chosen class to the chosen letters and the wrong class to the wrong letters
    handleInteraction(e){
       e.disabled = true;
       if(this.activePhrase.checkLetter(e.target.textContent)){
        this.activePhrase.showMatchedLetter(e.target.textContent);
        event.target.classList.add('chosen');
        this.checkForWin();
       } else {
            event.target.classList.add('wrong');  
            this.removeLife();
    }
    }
    //removes a heart/life when the wrong letters are chosen
    removeLife(){
            const live = document.querySelector(`img[src*=live]`);
            this.missed++;
            //when a try is missed, remove a heart
            if(this.missed <= 5){
               live.src = "images/lostHeart.png";
            }
            //if missed tries is 5, you lose the game
            if(this.missed === 5) {
                this.gameOver(false);
            }
    }
    //checking for if the player wins, and showing the gameover screen to a winning screen reset the game and hearts   
    checkForWin(){
            const letter = $('.letter');
            const show = $('.show');
        if(letter.length === show.length){
            $('#overlay').addClass('win').show();
            $('#game-over-message').text('Congratulations! You have won the game.');
            $('#btn__reset').textContent = "Reset";
            this.resetGame();
            this.resetLife();
            return true;
        }  else {
            return false;
        }
    }
    //if you've lost the game, show the game over message to you've lost, reset the game and hearts
    gameOver(){
        if(this.missed === 5){
            $('#overlay').addClass('lose').show();
            $('#game-over-message').text("You've lost!"); 
            this.resetGame();
            this.resetLife();
            }  
            
     }
    //resets the game back to its original screen  
    resetGame(){
            const resetButton = document.getElementById('btn__reset');
            const phraseText = document.getElementById('phrase');
            const keyboard = document.getElementsByClassName('key');
            resetButton.innerText = "Play Again"; //Changes start button to say 'Play Again'
            phraseText.innerHTML = '<ul></ul>'; //Removes phrase from display
            for (let i = 0; i < keyboard.length; i++) { //resets onscreen keyboard
              keyboard[i].className = 'key';
              keyboard[i].removeAttribute('disabled');
              
            }
        }
    //resets the lives/hearts when the player choses to play again
    resetLife(){
        const hearts = document.querySelectorAll('img');
        hearts.forEach(heart => {
            heart.src  = "images/liveHeart.png";
        })
    };
}     