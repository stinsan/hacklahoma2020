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

    while (true) {
        var start = Math.floor(Math.random() * width * 2);
        if (maze[height * 2 - 1][start] == 'o') {
            maze[height * 2][start] = 's';
            break;
        }
    }

    while (true) {
        var finish = Math.floor(Math.random() * height * 2);
        if (maze[finish][1] == 'o') {
            maze[finish][0] = 'f';
            break;
        }
    }

    var stopLoop = false;

    window.requestAnimationFrame(gameLoop);

    function gameLoop(timeStamp){

        draw();

        // Keep requesting new frames
        if (!stopLoop ) {
            window.requestAnimationFrame(gameLoop);
        }
    }

    var col = 0;
    var row = 0;

    function draw(){
        var test = 0;
        while (test < 150) {
            if (maze[row][col] == 'x') {
                View.setUnwalkable(col, row, grid, '#000000', 'wall');
            } else if (maze[row][col] == 's') {
                View.setUnwalkable(col, row, grid, '#03ff03');
            } else if (maze[row][col] == 'f') {
                View.setUnwalkable(col, row, grid, '#ff0000');
            }
            col++;
            if (col == width * 2 + 1) {
                col = 0;
                if (row < height * 2) {
                    row++;
                } else {
                    stopLoop = true;
                    generatingMaze = false;
                    if (pathAlgorithm == 'path1') {
                        solveMazeRandom(maze);
                    } else {
                        solveMazeWall(maze);
                    }
                    break;
                }
            }
            test++
        }
    }

    return maze;

}