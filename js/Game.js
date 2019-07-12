class Game{
    constructor(){
       this.phrases = [
        //   new Phrase('Hit the nail on the head'),
        //   new Phrase('You cant judge a book by its cover'),
        //   new Phrase('To kill two birds with one stone'),
        //   new Phrase('When life gives you lemons make lemonade'),
        //   new Phrase('Dance like no one is watching')
        new Phrase('Hi'),
        new Phrase('You'),
        new Phrase('To'),
        new Phrase('When'),
        new Phrase('Dance')
       ];
       this.activePhrase = null;
    }
    getRandomPhrase() {
        const index = Math.floor(Math.random() * this.phrases.length);
        return this.phrases[index];
    }
    startGame(){
        this.missed = 0;
        $('#overlay').hide();
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    }
    handleInteraction(e){
       const phraseDiv = document.querySelector('#phrase ul');
       //const e = event.target.textContent;
       e.disabled = true;

       if(this.activePhrase.checkLetter(e.target.textContent)){
        console.log('chosen');
        this.activePhrase.showMatchedLetter(e.target.textContent);
        event.target.classList.add('chosen');
        this.checkForWin();
       } else {
            //console.log('wrong');
            event.target.classList.add('wrong');  
            this.removeLife();
    }
    }
    removeLife(){
            const live = document.querySelector(`img[src*=live]`);
            this.missed++;
            if(this.missed <= 5){
               live.src = "images/lostHeart.png";
            } if(this.missed === 5) {
                this.gameOver(false);
            }
    }
        
    checkForWin(){
             if($('.letter').length === $('.letter'.show).length){
                $('#overlay').show();
                $('#game-over-message').text('Congratulations! You have won the game. Play again!');
                $('#btn__reset').on("click", function(){
                    //location.reload();
             });
             return true
            }
    }
    gameOver(gameWon){
            if(this.missed === 5){
                let gameOverMessage = '';
                $('#overlay').show();
                $('#game-over-message').text("You've lost, try again!"); 
                $('#btn__reset').text('Play Again');
                $('#btn__reset').on("click", function(){
                    location.reload();
             });
            }
            }
}            