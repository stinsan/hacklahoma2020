min_button = document.getElementById("min_button");
max_button = document.getElementById("max_button");
panel = document.getElementById("settings_panel");
min_button.onclick = function()
{
  //minimizing the settings panel
  panel.style.width = "0";
  panel.style.marginLeft = "251px";
  min_button.style.visibility = "hidden";
  max_button.style.visibility = "visible";
};
max_button.onclick = function()
{
  //maximizing the settings panel
  //panel.style.visibility = "visible";
  panel.style.width = "250px";
  panel.style.mariginLeft = "0px";
  panel.overflow_x = "hidden";
  panel.left = calc("100%" - "250px");
  min_button.style.visibility = "visible";
  max_button.style.visibility = "hidden";
};

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
    document.getElementById("maze_facts").innerHTML = "test1";
  }
  else if(mazeAlgorithm === "maze2")
  {
    document.getElementById("maze_facts").innerHTML = "test2";
  }
  else if(mazeAlgorithm === "maze3")
  {
    document.getElementById("maze_facts").innerHTML = "test3";
  }

  //change the fun facts based on the chosen path finding algorithm
  if(pathAlgorithm === "path1")
  {
    document.getElementById("path_facts").innerHTML = "test1";
  }
  else if(pathAlgorithm === "path2")
  {
    document.getElementById("path_facts").innerHTML = "test2";
  }
  else if(pathAlgorithm === "path3")
  {
    document.getElementById("path_facts").innerHTML = "test3";
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
