function generateMaze() {

    var width = Math.floor(View.canvas.width / View.nodeSize / 2) - 1;
    var height = Math.floor(View.canvas.height / View.nodeSize / 2) - 1;
    
    var row = (height * 2) - 1;
    var col = 1;

    var maze = new Array(height * 2 + 1);
    for (var i = 0; i < maze.length; i++) {
        maze[i] = new Array(width * 2 + 1);
    }

    for (var i = 0; i < maze.length; i++) {
        for (var j = 0; j < maze[0].length; j++) {
            maze[i][j] = 'x';
        }
    }

    for (var i = 1; i < maze.length - 1; i+=2) {
        for (var j = 1; j < maze[0].length; j+=2) {
            maze[i][j] = 'o';
        }
    }

    // HERE
    while (true) {
        if (row == 1) {
            maze[row][col + 1] = 'o';
            col += 2;
            if (col == width * 2 - 1) {
                break;
            }
        } else {
            var coin = Math.floor(Math.random() * 2);
            if (coin == 0) {
                maze[row - 1][col] = 'o';
            } else {
                maze[row][col + 1] = 'o';
            }
            col += 2;
            if (col == width * 2 - 1) {
                maze[row - 1][col] = 'o';
                row -= 2;
                col = 1;
            }
        }
    }

    for (var i = 0; i < maze.length; i++) {
        for (var j = 0; j < maze[i].length; j++) {
            if (maze[i][j] == 'x') {
                View.setUnwalkable(j, i, grid);
            }
        }
    }

}