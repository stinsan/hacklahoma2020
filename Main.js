var stopPathfinding = false;

var View = {
  nodeSize: 15, // Size of a grid square.

  // Initialize the canvas.
  init: function () {
    // Get canvas element and set its size.
    this.canvas = document.getElementById('myCanvas');
    this.context = this.canvas.getContext('2d');
    this.canvas.width = document.documentElement.clientWidth;   // Set width to browser width.
    this.canvas.height = document.documentElement.clientHeight; // Set height to browser height.
    this.context.lineWidth = "0.3";
    this.context.strokeStyle = "green";
    this.makeGrid(); // Makes the grid.
    this.canvas.addEventListener('keydown', doKeyDown, true);
    function doKeyDown(e) {
      console.log("HELLO");
    }
  },

  // Makes the grid.
  makeGrid: function() {
    context = this.context;   // Get the canvas context.
    nodeSize = this.nodeSize; // Get the size of a grid square.

    context.beginPath(); // Begin drawing squares.
    // Draw the whole grid.
    for (var i = 0; i < Math.floor(this.canvas.height / nodeSize); i++) {
      for (var j = 0; j < Math.floor(this.canvas.width / nodeSize); j++) {
        context.rect(j*nodeSize, i*nodeSize, nodeSize, nodeSize);
      }
    }

    context.stroke(); // Show the grid on the screen.
  },

  reinitializeGrid: function() {
    stopPathfinding = true;
    context = this.context;   // Get the canvas context.
    nodeSize = this.nodeSize; // Get the size of a grid square.
    context.clearRect(0, 0, this.canvas.width, this.canvas.height); // Clear canvas
    context.beginPath(); // Begin drawing squares.
    // Draw the whole grid.
    for (var i = 0; i < Math.floor(this.canvas.height / nodeSize); i++) {
      for (var j = 0; j < Math.floor(this.canvas.width / nodeSize); j++) {
        context.rect(j*nodeSize, i*nodeSize, nodeSize, nodeSize);
      }
    }

    context.stroke(); // Show the grid on the screen.
  },

  // Helper function to convert the page coordinate to grid coordinate
  toGridCoordinate: function(pageX, pageY) {
      return [
          Math.floor(pageX / this.gridSize),
          Math.floor(pageY / this.gridSize)
      ];
  },

  // Helper function to convert the grid coordinate to page coordinate
  toPageCoordinate: function(gridX, gridY) {
      return [
          gridX * this.nodeSize,
          gridY * this.nodeSize
      ];
  },

  setUnwalkable: function(gridX, gridY, grid, color, type) {
    context = this.context;
    nodeSize = this.nodeSize;
    pageCoords = View.toPageCoordinate(gridX, gridY);

    if (type != 'wall') {
      context.fillStyle = color;
      context.fillRect(pageCoords[0], pageCoords[1], nodeSize, nodeSize);
    }

    if (type == 'wall') {
      base_image = new Image();
      base_image.src = 'art/pencil_wall.png';
      var xPos = pageCoords[0];
      var yPos = pageCoords[1];
      base_image.onload = function(){
          context.drawImage(base_image, xPos, yPos);
      }
    }

    grid.setWalkableAt(gridX, gridY, false);
  },
}

var Controller = {
  initGrid: function(width, height) {
    var matrix = [];

    for (var i = 0;   i < height; i++) {
      matrix[i] = [];
      for (var j = 0; j < width; j++) {
        matrix[i][j] = 0;
      }
    }

    return new Grid(width, height, matrix);
  }
}

// Initialize everything on website load.
window.onload = function () {
  View.init();
  grid = Controller.initGrid(View.canvas.width, View.canvas.height);
}
