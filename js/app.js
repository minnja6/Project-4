let game;
$('#btn__reset').on("click", function(){
    game = new Game(); 
    game.startGame();
 });
 $('.key').on("click", function(e){
     game.handleInteraction(e);    
 });