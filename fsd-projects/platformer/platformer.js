$(function () {
   //initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    toggleGrid();


    // TODO 2 - Create Platforms
createPlatform(120,600,200,20, "blue");
createPlatform(500,500,200,20, "blue");
createPlatform(350,300,200,20, "blue");
createPlatform(800,420,200,20, "blue");
createPlatform(1100,250,200,20, "blue");
createPlatform(720,160,200,20, "blue");




    // TODO 3 - Create Collectables
createCollectable("database",880,380,0.9,0.8);
createCollectable("database",450,270,0.9,0.8);
createCollectable("database",800,130,0.9,0.8);


    
    // TODO 4 - Create Cannons
createCannon("top",1220,200);
createCannon("right",400,100);
createCannon("top",700,200);

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
