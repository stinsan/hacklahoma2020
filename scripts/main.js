// Autodetect, create and append the renderer to the body element
var renderer = PIXI.autoDetectRenderer(720, 364, { backgroundColor: 0xffffff, antialias: false });
document.body.appendChild(renderer.view);
renderer.backgroundColor = 0xffffff;

// Create the main stage for your display objects
var stage = new PIXI.Container();

// Initialize the pixi Graphics class
var graphics = new PIXI.Graphics();

// Set style
graphics.beginFill(0xffffff);
graphics.lineStyle(1, 0x000000);

// Generate squares
var x = 1;
var y = 0;
for (var i = 0; i < 10; i++) {
    for (var j = 0; j < 10; j++) {
        graphics.drawRect(x, y, 25, 25, 10); // drawRoundedRect(x, y, width, height, radius)
        x += 25;
    }
    x = 1;
    y += 25;
}
graphics.endFill();

// Add the graphics to the stage
stage.addChild(graphics);

// Start animating
animate();
function animate() {
    //Render the stage
    renderer.render(stage);
    requestAnimationFrame(animate);
}