function Game() {

    this.isOver = false;
    this.board = new Array(3);

    for (var i = 0; i < 3; i++) {
        this.board[i] = new Array(3);
    }

    this.reset = function() {
        for (var i = 0; i < 3; i++) {
            for (var j = 0; j < 3; j++) {
                this.board[i][j] = null;
                var id = (i + 1) + "" + (j + 1);
                document.getElementById(id).className = 'empty';
            }
        }
        this.isOver = false;

    }

    this.isEmpty = function(x, y) {
        if (this.board[x][y] == null) {
            return true;
        } else {
            return false;
        }
    }

    this.mark = function(x, y, event) {
        this.board[x][y] = 'X';
        document.getElementById(event.target.id).className = 'x';
    }

    this.doNextMove = function() {
        for (var i = 0; i < 3; i++) {
            for (var j = 0; j < 3; j++) {
                if (this.board[i][j] == null) {
                    this.board[i][j] = 'O';
                    var id = (i + 1) + "" + (j + 1);
                    document.getElementById(id).className = 'o';
                    return;
                }
            }
        }
        this.isOver = true;

    }

    this.findWinner = function() {
        for (var i = 0; i < 3; i++) {
            if (this.board[i][0] == this.board[i][1] && this.board[i][0] == this.board[i][2]) {
                return this.board[i][0];
            }
            if (this.board[0][i] == this.board[1][i] && this.board[0][i] == this.board[2][i]) {
                return this.board[0][i];
            }
        }

        if (this.board[0][0] == this.board[1][1] && this.board[0][0] == this.board[2][2]) {
            return this.board[1][1];
        }

        if (this.board[2][0] == this.board[1][1] && this.board[2][0] == this.board[0][2]) {
            return this.board[1][1];
        }

        return null;

    }

    this.getX = function(id) {
        return id.substring(0, 1);
    }

    this.getY = function(id) {
        return id.substring(1, 2);
    }
}