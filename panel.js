panelButton = document.getElementById("panel_button");
panel = document.getElementById("settings_panel");
var panelIsOpen = true;
function minimizePanel () {
  //minimizing the settings panel
  panel.style.width = "0";
  panel.style.marginLeft = "251px";
  panelButton.style.marginLeft = "251px";
}

function maximizePanel () {
  panel.style.width = "250px";
  panel.style.marginLeft = "0px";
  panelButton.style.marginLeft = "0px";
}

function openClosePanel () {
  if (panelIsOpen) {
    minimizePanel();
    panelIsOpen = false;
    panelButton.innerHTML = "+";
  }
  else {
    maximizePanel();
    panelIsOpen = true;
    panelButton.innerHTML = "&times;";
  }
}

panel_button.addEventListener("click", openClosePanel);


open_button = document.getElementById("info_button");
modal = document.getElementById("modal");
close_button = document.getElementById("close_button");

open_button.onclick = function()
{
  modal.style.display = "block";
};

close_button.onclick = function()
{
  modal.style.display = "none";
};


var mazeAlgorithm = "0";
var pathAlgorithm = "0";
//get the algorithms that were chosen
function getAlgo()
{

  var mazes = document.getElementsByName('maze_algorithm');
  for(i = 0; i < mazes.length; i++)
  {
    if(mazes[i].checked)
    {
        mazeAlgorithm = mazes[i].value;
        console.log(mazeAlgorithm);
    }
  }

  var paths = document.getElementsByName('path_algorithm');
  for(i = 0; i < paths.length; i++)
  {
    if(paths[i].checked)
    {
      pathAlgorithm = paths[i].value;
      console.log(pathAlgorithm);
    }
  }

  //change the fun facts based on the chosen maze generating algorithm
  if(mazeAlgorithm === "maze1")
  {
    document.getElementById("maze_facts").innerHTML = "The Binary Tree algorithm starts its root in the south-west corner and randomly carves a passage either north or east.";
  }
  else if(mazeAlgorithm === "maze2")
  {
    document.getElementById("maze_facts").innerHTML = "Kruskal's algorithm works by randomly selecting edges from the graph, and adding them to the maze if they connected disjoint trees.";
  }
  else if(mazeAlgorithm === "maze3")
  {
    document.getElementById("maze_facts").innerHTML = "Prim's algorithm works by building a tree one vertex at a time, and at each step adding the cheapest possible connection from the tree to another vertex.";
  }

  //change the fun facts based on the chosen path finding algorithm
  if(pathAlgorithm === "path1")
  {
    document.getElementById("path_facts").innerHTML = "Random Mouse path finding will take a random turn at every intersection, and if it hits a dead end it back tracks.";
  }
  else if(pathAlgorithm === "path2")
  {
    document.getElementById("path_facts").innerHTML = "Wall follower path finding hugs the right wall through the maze.";
  }
  else if(pathAlgorithm === "path3")
  {
    document.getElementById("path_facts").innerHTML = "BFS or Breadth-first Search explores all of the neighbor squares at the present depth prior to moving on to the squares at the next depth level.";
  }

  // if (mazeAlorithm = something) {
  //  document.getElementBy
}

run = document.getElementById("run_button");
var generatingMaze = false;

run.onclick = function() {
  if(mazeAlgorithm == "0" || pathAlgorithm == "0")
  {
     //the user has not selected both a maze and a path algorithm
     alert("You must select a Maze Generating Algorithm and a Path Finding Algorithm!");
  }
  else if (generatingMaze) {
     alert("Please let the maze finish generating!");
  } else {
    View.reinitializeGrid();
    generateMaze();
    generatingMaze = true;
  }
};
