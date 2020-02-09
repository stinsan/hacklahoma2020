function solveMazeWall(maze) {

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

    var dir;

    // Determine first direction
    if (row == 0) {
        dir = 'd';
    } else if (col == 0) {
        dir = 'r';
    } else if (row == maze.length - 1) {
        dir = 'u';
    } else {
        dir = 'l';
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

    function draw() {

        var time = 0;
        while (time < 20) {
            if (stopPathfinding) {
                break;
            }

            time++;

            var color = '#34918b';

            if (dir == 'u') { // UP
                if (col < maze[0].length - 1 && maze[row][col + 1] == 'o') {      // R
                    maze[row][col] = 'F';
                    View.setUnwalkable(col, row, grid, color, 'path');
                    col++;
                    dir = 'r';
                } else if (row > 0 && maze[row - 1][col] == 'o') {                // U
                    maze[row][col] = 'F';
                    View.setUnwalkable(col, row, grid, color, 'path');
                    row--;
                    dir = 'u';
                } else if (col > 0 && maze[row][col - 1] == 'o') {                // L
                    maze[row][col] = 'F';
                    View.setUnwalkable(col, row, grid, color, 'path');
                    col--;
                    dir = 'l';
                } else if (row < maze.length - 1 && maze[row + 1][col] == 'o') {  // D
                    maze[row][col] = 'F';
                    View.setUnwalkable(col, row, grid, color, 'path');
                    row++;
                    dir = 'd';
                }
            } else if ('d') { // DOWN
                if (col > 0 && maze[row][col - 1] == 'o') {                           // L
                    maze[row][col] = 'F';
                    View.setUnwalkable(col, row, grid, color, 'path');
                    col--;
                    dir = 'l';
                } else if (row < maze.length - 1 && maze[row + 1][col] == 'o') {      // D
                    maze[row][col] = 'F';
                    View.setUnwalkable(col, row, grid, color, 'path');
                    row++;
                    dir = 'd';
                } else if (col < maze[0].length - 1 && maze[row][col + 1] == 'o') {   // R
                    maze[row][col] = 'F';
                    View.setUnwalkable(col, row, grid, color, 'path');
                    col++;
                    dir = 'r';
                } else if (row > 0 && maze[row - 1][col] == 'o') {                    // U
                    maze[row][col] = 'F';
                    View.setUnwalkable(col, row, grid, color, 'path');
                    row--;
                    dir = 'u';
                }
            } else if ('l') { // LEFT
                if (row > 0 && maze[row - 1][col] == 'o') {                          // U
                    maze[row][col] = 'F';
                    View.setUnwalkable(col, row, grid, color, 'path');
                    row--;
                    dir = 'u';
                } else if (col > 0 && maze[row][col - 1] == 'o') {                   // L
                    maze[row][col] = 'F';
                    View.setUnwalkable(col, row, grid, color, 'path');
                    col--;
                    dir = 'l';
                } else if (row < maze.length - 1 && maze[row + 1][col] == 'o') {     // D
                    maze[row][col] = 'F';
                    View.setUnwalkable(col, row, grid, color, 'path');
                    row++;
                    dir = 'd';
                } else if (col < maze[0].length - 1 && maze[row][col + 1] == 'o') {  // R
                    maze[row][col] = 'F';
                    View.setUnwalkable(col, row, grid, color, 'path');
                    col++;
                    dir = 'r';
                }
            } else {          // RIGHT
                if (row < maze.length - 1 && maze[row + 1][col] == 'o') {            // D
                    maze[row][col] = 'F';
                    View.setUnwalkable(col, row, grid, color, 'path');
                    row++;
                    dir = 'd';
                } else if (col < maze[0].length - 1 && maze[row][col + 1] == 'o') {  // R
                    maze[row][col] = 'F';
                    View.setUnwalkable(col, row, grid, color, 'path');
                    col++;
                    dir = 'r';
                } else if (row > 0 && maze[row - 1][col] == 'o') {                   // U
                    maze[row][col] = 'F';
                    View.setUnwalkable(col, row, grid, color, 'path');
                    row--;
                    dir = 'u';
                } else if (col > 0 && maze[row][col - 1] == 'o') {                   // L
                    maze[row][col] = 'F';
                    View.setUnwalkable(col, row, grid, color, 'path');
                    col--;
                    dir = 'l';
                }
            }

            if ((row > 0 && maze[row - 1][col] == 'f') || (row < maze.length - 1 && maze[row + 1][col] == 'f') || (col > 0 && maze[row][col - 1] == 'f') || (col < maze[0].length - 1 && maze[row][col + 1] == 'f')) {
                maze[row][col] = 'F';
                View.setUnwalkable(col, row, grid, color, 'path');
                stopLoop = true;
                break;
            }

            var backColor = '#fcff5c';

            if (stopLoop == false) {
                if ((row == 0 || maze[row - 1][col] != 'o') &&
                                (row == maze.length - 1 || maze[row + 1][col] != 'o') &&
                                (col == 0 || maze[row][col - 1] != 'o') &&
                                (col == maze[0].length - 1 || maze[row][col + 1] != 'o')) {

                                if (row > 0 && maze[row - 1][col] == 'F') {                       // UP
                                    maze[row][col] = 'Q';
                                    View.setUnwalkable(col, row, grid, backColor, 'dot');
                                    row -= 1;
                                } else if (row < maze.length - 1 && maze[row + 1][col] == 'F') {  // DOWN
                                    maze[row][col] = 'Q';
                                    View.setUnwalkable(col, row, grid, backColor, 'dot');
                                    row += 1;
                                } else if (col > 0 && maze[row][col - 1] == 'F') {                // LEFT
                                    maze[row][col] = 'Q';
                                    View.setUnwalkable(col, row, grid, backColor, 'dot');
                                    col -= 1;
                                } else {                                                          // RIGHT
                                    maze[row][col] = 'Q';
                                    View.setUnwalkable(col, row, grid, backColor, 'dot');
                                    col += 1;
                                }
                            
                        }

                }
        }
        }

}