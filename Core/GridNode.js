/**
* This is a node in the graph.
*/
function GridNode (x, y, walkable) {
  this.x = x;
  this.y = y;
  this.walkable = (walkable === undefined ? true : walkable)
}
