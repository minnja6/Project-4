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
        console.log(letter);
        let li = $('#phrase li');
        for(let i = 0; i < li.length; i++){
            if(li[i].textContent.toLowerCase() == letter.toLowerCase()){
                $(li[i]).removeClass('hide').addClass('show');
            }
        }
    }
}
