function solveMaze(maze) {

    var row;
    var col;

    for (var i = 0; i < maze.length; i++) {
        for (var j = 0; j < maze[i].length; j++) {
            if (maze[i][j] == 's') {
                row = i;
                col = j;
            }
        }
    }

    var stopLoop = false;
    stopPathfinding = false;

    window.requestAnimationFrame(gameLoop);

    function gameLoop(timeStamp){

        draw();

        if (!stopLoop && !stopPathfinding) {
            window.requestAnimationFrame(gameLoop);
        }
    }

    function draw(){

        var time = 0;
        while (time < 20) {
            if (stopPathfinding) {
                break;
            }

            var dir = Math.floor(Math.random() * 4);
            if (dir == 0) {         // UP
                if (row > 0 && maze[row - 1][col] == 'o') {
                    if (maze[row][col] != 's') {
                        maze[row][col] = 'F';
                        View.setUnwalkable(col, row, grid, '#555555');
                    }
                    row -= 1;
                } else if (row > 0 && maze[row - 1][col] == 'f') {
                    maze[row][col] = 'F';
                    View.setUnwalkable(col, row, grid, '#555555');
                }
            } else if (dir == 1) {  // DOWN
                if (row < maze.length - 1 && maze[row + 1][col] == 'o') {
                    if (maze[row][col] != 's') {
                        maze[row][col] = 'F';
                        View.setUnwalkable(col, row, grid, '#555555');
                    }
                    row += 1;
                } else if (row < maze.length - 1 && maze[row + 1][col] == 'f') {
                    maze[row][col] = 'F';
                    View.setUnwalkable(col, row, grid, '#555555');
                }
            } else if (dir == 2) {  // LEFT
                if (col > 0 && maze[row][col - 1] == 'o') {
                    if (maze[row][col] != 's') {
                        maze[row][col] = 'F';
                        View.setUnwalkable(col, row, grid, '#555555');
                    }
                    col -= 1;
                } else if (col > 0 && maze[row][col - 1] == 'f') {
                    maze[row][col] = 'F';
                    View.setUnwalkable(col, row, grid, '#555555');
                }
            } else {                // RIGHT
                if (col < maze[0].length - 1 && maze[row][col + 1] == 'o') {
                    if (maze[row][col] != 's') {
                        maze[row][col] = 'F';
                        View.setUnwalkable(col, row, grid, '#555555');
                    }
                    col += 1;
                } else if (col < maze[0].length - 1 && maze[row][col + 1] == 'f') {
                    maze[row][col] = 'F';
                    View.setUnwalkable(col, row, grid, '#555555');
                }
            }

            if ((row > 0 && maze[row - 1][col] == 'f') || (row < maze.length - 1 && maze[row + 1][col] == 'f') || (col > 0 && maze[row][col - 1] == 'f') || (col < maze[0].length - 1 && maze[row][col + 1] == 'f')) {
                maze[row][col] = 'F';
                View.setUnwalkable(col, row, grid, '#555555');
                stopLoop = true;
                break;
            }

            if (stopLoop == false) {
                if ((row == 0 || maze[row - 1][col] != 'o') &&
                        (row == maze.length - 1 || maze[row + 1][col] != 'o') &&
                        (col == 0 || maze[row][col - 1] != 'o') &&
                        (col == maze[0].length - 1 || maze[row][col + 1] != 'o')) {

                        if (row > 0 && maze[row - 1][col] == 'F') {                       // UP
                            maze[row][col] = 'Q';
                            View.setUnwalkable(col, row, grid, '#ffff00');
                            row -= 1;
                        } else if (row < maze.length - 1 && maze[row + 1][col] == 'F') {  // DOWN
                            maze[row][col] = 'Q';
                            View.setUnwalkable(col, row, grid, '#ffff00');
                            row += 1;
                        } else if (col > 0 && maze[row][col - 1] == 'F') {                // LEFT
                            maze[row][col] = 'Q';
                            View.setUnwalkable(col, row, grid, '#ffff00');
                            col -= 1;
                        } else {                                                          // RIGHT
                            maze[row][col] = 'Q';
                            View.setUnwalkable(col, row, grid, '#ffff00');
                            col += 1;
                        }
                    
                }
            }

            time++;
        }
    }
}