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
};