class Phrase{
    constructor(phrase){
        //makes the phrases lowercase
        this.phrase = phrase.toLowerCase(); 
    }
    //creating a for loop and if and else statement to add the phrases with spaces to the screen
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
    //checking if the letter matches those in the phrases
    checkLetter(letter){
        if(this.phrase.includes(letter)){
            return true;
        } else {
            return false;
        }
    }
    //showing the letters that match the phrases
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
