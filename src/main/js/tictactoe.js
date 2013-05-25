var game = new Game();

function addXMark(event) {

    var x = game.getX(event.target.id) - 1;
    var y = game.getY(event.target.id) - 1;

    if (game.isEmpty(x, y) && !game.isOver) {
        game.mark(x, y, event);
        game.doNextMove();
        var winner = game.findWinner();

        if (winner != null) {
            alert("Winner is:" + winner);
            game.isOver = true;
        }

    } else if (game.isOver){
        alert("The game is over, please reset to play again.");
    }
}

function reset() { 
    game.reset();
}
