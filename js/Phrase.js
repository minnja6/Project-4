class Phrase{
    constructor(phrase){
        this.phrase = phrase.toLowerCase();
    }

    addPhraseToDisplay(){
        let list =  $('#phrase ul');
        for (let i = 0; i < this.phrase.length; i++){
            let character = this.phrase.charAt(i);
            if (character === ' '){
                list.append(`<li class="space"> </li>`);
            } else {
                list.append(`<li class="hide letter ${character}">${character}</li>`);
            }
        }
    }
    checkLetter(letter){
        if(this.phrase.includes(letter)){
            return true;
        } else {
            return false;
        }
    }
    showMatchedLetter(letter){
        let letters = $('#phrase li');
        letters.forEach(key => {
            if(key.textContent === letter){
                key.attr('class', 'show');
            }
        });
    }
}