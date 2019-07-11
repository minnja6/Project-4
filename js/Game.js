class Game{
    constructor(){
       this.missed = 0;
       this.phrases = [
          new Phrase('Hit the nail on the head'),
          new Phrase('You cant judge a book by its cover'),
          new Phrase('To kill two birds with one stone'),
          new Phrase('When life gives you lemons make lemonade'),
          new Phrase('Dance like no one is watching')
       ];
       this.activePhrase = null;
    }
    getRandomPhrase() {
        const index = Math.floor(Math.random() * this.phrases.length);
        return this.phrases[index];
    }
    startGame(){
        $('#overlay').hide();
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    }
    handleInteraction(key){
        const keyboard = document.querySelectorAll('.keyrow button.key');
        //disables the selected letters on the keyboard buttons
        key.disabled = true;

        if(this.activePhrase.checkLetter(key.textContent)){
            this.activePhrase.showMatchedLetter(key.textContent);
            key.addClass('chosen');
            }else{
                this.removeLife();
                key.addClass('wrong');           
            }
        }

    // checkForWin(){
    //         if(){

    //         } else {

    //         }
    // }
    removeLife(){
        const live = document.querySelector(`img[src*=live]`);
        this.missed++;
        if(this.missed < 5){
           live.src = "images/lostHeart.png";
        } else {
            gameOver();
        }
    }
        gameOver(gameWon){
            $('#overlay').show();
            if(this.missed === 5){
                let gameOverMessage = '';
                $('#overlay').addClass('lose');
                gameOverMessage = "You've lost, try again!"; 
            } else {
                $('#overlay').addClass('win');
                gameOverMessage = "Congratulations! You have won the game. Play again!"
            }
        }
    
}