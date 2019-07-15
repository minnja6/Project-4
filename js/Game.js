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
       e.disabled = true;

       if(this.activePhrase.checkLetter(e.target.textContent)){
        console.log('chosen');
        this.activePhrase.showMatchedLetter(e.target.textContent);
        event.target.classList.add('chosen');
        this.checkForWin();
       } else {
            console.log('wrong');
            event.target.classList.add('wrong');  
            this.removeLife();
    }
    }
    removeLife(){
            const live = document.querySelector(`img[src*=live]`);
            this.missed++;
            if(this.missed <= 5){
               live.src = "images/lostHeart.png";
            }
            if(this.missed === 5) {
                this.gameOver(false);
            }
    }
        
    checkForWin(){
            const letter = $('.letter');
            const show = $('.show');
        if(letter.length === show.length){
            $('#overlay').addClass('win').show();
            $('#game-over-message').text('Congratulations! You have won the game.');
            $('#btn__reset').textContent = "Reset";
            this.resetGame();
            this.resetLife();
        }  
    }
    gameOver(){
        if(this.missed === 5){
            //let gameOverMessage = '';
            $('#overlay').addClass('lose').show();
            $('#game-over-message').text("You've lost!"); 
            this.resetGame();
            this.resetLife();
            }  
            
     }
    resetGame(){
            const startButton = document.getElementById('btn__reset');
            const phraseCont = document.getElementById('phrase');
            const keyboard = document.getElementsByClassName('key');
            const hearts = document.getElementById('scoreboard');
            const heartsLi = hearts.firstElementChild.children;
            startButton.innerText = "Play Again"; //Changes start button to say 'Play Again'
            phraseCont.innerHTML = '<ul></ul>'; //Removes phrase from display
            for (let i = 0; i < keyboard.length; i++) { //resets onscreen keyboard
              keyboard[i].className = 'key';
              keyboard[i].removeAttribute('disabled');
            }
        }
    resetLife(){
        const hearts = document.querySelectorAll('img');
        hearts.forEach(heart => {
            heart.src  = "images/liveHeart.png";
        })
    };
}     