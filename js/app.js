//Gets the game started and connects the keyboard and button
let game;
const keyButtons = document.querySelectorAll('.key');
$('#btn__reset').on("click", function(){
    game = new Game(); 
    game.startGame();
 });
 $('.key').on("click", function(event){
     game.handleInteraction(event);    
 });
 //preventing the user from highlighting answer to phrase
 document.addEventListener('mousedown', (event) =>{
     event.preventDefault();
 })
 $(document).on('keydown', function (e) {
    const pressedLetter = e.key.toLowerCase();
    const alph = "abcdefghijklmnopqrstuvwxyz";
    const keyBoard = $('.key');
    if (alph.includes(pressedLetter)) {
        for (let key of keyBoard) {
            if (key.innerText == pressedLetter) {
                key.click();
            }
        }
    }
    
});
