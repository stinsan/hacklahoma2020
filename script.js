var View = {
  // Initialize the canvas.
  init: function () {
    // Get canvas element and set its size.
    this.canvas = document.getElementById('myCanvas');
    this.context = this.canvas.getContext('2d');
    this.canvas.width = document.documentElement.clientWidth;   // Set width to browser width.
    this.canvas.height = document.documentElement.clientHeight; // Set height to browser height.

    this.gridSize = 20; // Size of a grid square.

    this.makeGrid(); // Makes the grid.
  },

  // Makes the grid.
  makeGrid: function() {
    context = this.context; // Get the canvas context.
    context.beginPath(); // Begin drawing squares.

    // Draw the whole grid.
    for (var i = 0; i < this.canvas.height / this.gridSize; i++) {
      for (var j = 0; j < this.canvas.width / this.gridSize; j++) {
        context.rect(j*this.gridSize, i*this.gridSize, this.gridSize, this.gridSize);
      }
    }

    context.stroke(); // Show the grid on the screen.
  },
}

// Initialize everything on website load.
window.onload = function () {
  View.init();
}
