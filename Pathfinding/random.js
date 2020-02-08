var maze = [['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'f', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'],
           ['x', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'x', 'o', 'o', 'o', 'x'],
           ['x', 'o', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'o', 'x', 'o', 'x', 'o', 'x', 'o', 'x'],
           ['x', 'o', 'o', 'o', 'o', 'o', 'x', 'o', 'o', 'o', 'o', 'o', 'x', 'o', 'x', 'o', 'o', 'o', 'x', 'o', 'x'],
           ['x', 'o', 'x', 'x', 'x', 'o', 'x', 'o', 'x', 'o', 'x', 'o', 'x', 'x', 'x', 'o', 'x', 'x', 'x', 'x', 'x'],
           ['x', 'o', 'x', 'o', 'o', 'o', 'x', 'o', 'x', 'o', 'x', 'o', 'o', 'o', 'x', 'o', 'x', 'o', 'o', 'o', 'x'],
           ['x', 'o', 'x', 'o', 'x', 'x', 'x', 'o', 'x', 'x', 'x', 'o', 'x', 'o', 'x', 'x', 'x', 'o', 'x', 'o', 'x'],
           ['x', 'o', 'x', 'o', 'x', 'o', 'o', 'o', 'x', 'o', 'o', 'o', 'x', 'o', 'o', 'o', 'o', 'o', 'x', 'o', 'x'],
           ['x', 'o', 'x', 'o', 'x', 'o', 'x', 'x', 'x', 'o', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'o', 'x'],
           ['x', 'o', 'x', 'o', 'o', 'o', 'o', 'o', 'x', 'o', 'x', 'o', 'o', 'o', 'o', 'o', 'x', 'o', 'o', 'o', 'x'],
           ['x', 'o', 'x', 'x', 'x', 'x', 'x', 'o', 'x', 'o', 'x', 'x', 'x', 'x', 'x', 'o', 'x', 'o', 'x', 'o', 'x'],
           ['x', 'o', 'o', 'o', 'x', 'o', 'o', 'o', 'x', 'o', 'o', 'o', 'o', 'o', 'x', 'o', 'o', 'o', 'x', 'o', 'x'],
           ['x', 'x', 'x', 'o', 'x', 'x', 'x', 'o', 'x', 'x', 'x', 'x', 'x', 'o', 'x', 'o', 'x', 'x', 'x', 'x', 'x'],
           ['x', 'o', 'o', 'o', 'x', 'o', 'o', 'o', 'x', 'o', 'o', 'o', 'o', 'o', 'x', 'o', 'x', 'o', 'o', 'o', 'x'],
           ['x', 'o', 'x', 'x', 'x', 'o', 'x', 'x', 'x', 'o', 'x', 'x', 'x', 'x', 'x', 'o', 'x', 'o', 'x', 'o', 'x'],
           ['x', 'o', 'x', 'o', 'o', 'o', 'x', 'o', 'o', 'o', 'x', 'o', 'o', 'o', 'x', 'o', 'x', 'o', 'x', 'o', 'x'],
           ['x', 'o', 'x', 'x', 'x', 'x', 'x', 'o', 'x', 'x', 'x', 'x', 'x', 'o', 'x', 'o', 'x', 'o', 'x', 'o', 'x'],
           ['x', 'o', 'o', 'o', 'x', 'o', 'o', 'o', 'x', 'o', 'o', 'o', 'x', 'o', 'x', 'o', 'o', 'o', 'x', 'o', 'x'],
           ['x', 'x', 'x', 'o', 'x', 'o', 'x', 'x', 'x', 'o', 'x', 'o', 'x', 'o', 'x', 'o', 'x', 'x', 'x', 'o', 'x'],
           ['x', 'o', 'o', 'o', 'x', 'o', 'o', 'o', 'o', 'o', 'x', 'o', 'x', 'o', 'o', 'o', 'x', 'o', 'o', 'o', 'x'],
           ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 's', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x']];

var row = 20;
var col = 11;

while (true) {
    var dir = Math.floor(Math.random() * 4);
    if (dir == 0) {         // UP
        if (row > 0 && maze[row - 1][col] == 'o') {
            if (maze[row][col] != 's') {
                maze[row][col] = 'F';
            }
            row -= 1;
        } else if (row > 0 && maze[row - 1][col] == 'f') {
            maze[row][col] = 'F';
            break;
        }
    } else if (dir == 1) {  // DOWN
        if (row < maze.length - 1 && maze[row + 1][col] == 'o') {
            if (maze[row][col] != 's') {
                maze[row][col] = 'F';
            }
            row += 1;
        } else if (row < maze.length - 1 && maze[row + 1][col] == 'f') {
            maze[row][col] = 'F';
            break;
        }
    } else if (dir == 2) {  // LEFT
        if (col > 0 && maze[row][col - 1] == 'o') {
            if (maze[row][col] != 's') {
                maze[row][col] = 'F';
            }
            col -= 1;
        } else if (col > 0 && maze[row][col - 1] == 'f') {
            maze[row][col] = 'F';
            break;
        }
    } else {                // RIGHT
        if (col < maze[0].length - 1 && maze[row][col + 1] == 'o') {
            if (maze[row][col] != 's') {
                maze[row][col] = 'F';
            }
            col += 1;
        } else if (col < maze[0].length - 1 && maze[row][col + 1] == 'f') {
            maze[row][col] = 'F';
            break;
        }
    }

    if ((row > 0 && maze[row - 1][col] == 'f') || (row < maze.length - 1 && maze[row + 1][col] == 'f') || (col > 0 && maze[row][col - 1] == 'f') || (col < maze[0].length - 1 && maze[row][col + 1] == 'f')) {
        maze[row][col] = 'F';
        break;
    }

    if ((row == 0 || maze[row - 1][col] != 'o') &&
            (row == maze.length - 1 || maze[row + 1][col] != 'o') &&
            (col == 0 || maze[row][col - 1] != 'o') &&
            (col == maze[0].length - 1 || maze[row][col + 1] != 'o')) {

        while ((row == 0 || maze[row - 1][col] != 'o') &&
                (row == maze.length - 1 || maze[row + 1][col] != 'o') &&
                (col == 0 || maze[row][col - 1] != 'o') &&
                (col == maze[0].length - 1 || maze[row][col + 1] != 'o')) {

            if (row > 0 && maze[row - 1][col] == 'F') {                       // UP
                maze[row][col] = 'Q';
                row -= 1;
            } else if (row < maze.length - 1 && maze[row + 1][col] == 'F') {  // DOWN
                maze[row][col] = 'Q';
                row += 1;
            } else if (col > 0 && maze[row][col - 1] == 'F') {                // LEFT
                maze[row][col] = 'Q';
                col -= 1;
            } else {                                                          // RIGHT
                maze[row][col] = 'Q';
                col += 1;
            }
        }
    }
}

for (var i = 0; i < maze.length; i++) {
    for (var j = 0; j < maze[i].length; j++) {
        if (maze[i][j] == 'F') {
            maze[i][j] = String.fromCharCode(9632);
        }
        if (maze[i][j] == 'x') {
            maze[i][j] = String.fromCharCode(9633);
        }
        if (maze[i][j] == 'o') {
            maze[i][j] = ' ';
        }
        if (maze[i][j] == 'Q') {
            maze[i][j] = ' ';
        }
    }
}

console.clear();
console.log();
for (var i = 0; i < maze.length; i++) {
    var s = '  ';
    for (var j = 0; j < maze[0].length; j++) {
        s += maze[i][j] + ' ';
    }
    console.log(s);
}