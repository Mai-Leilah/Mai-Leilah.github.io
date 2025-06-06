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

    // TODO 2 - Create Platforms
    createPlatform(150, 650, 150, 20, "hotpink");
    createPlatform(470, 570, 150, 20, "hotpink");
    createPlatform(380, 200, 150, 20, "hotpink");
    createPlatform(760, 420, 150, 20, "hotpink");
    createPlatform(1100, 250, 150, 20, "hotpink");
    createPlatform(720, 160, 150, 20, "hotpink");
    createPlatform(300, 300, 150, 20, "hotpink");
    createPlatform(110, 460, 180, 20, "hotpink");

    // TODO 3 - Create Collectables
    createCollectable("database", 480, 380, 0.9, 0.8);
    createCollectable("database", 1130, 220, 0.9, 0.8);
    createCollectable("database", 800, 130, 0.9, 0.8);

    // TODO 4 - Create Cannons
    createCannon("top", 1220, 200);
    createCannon("right", 300, 2000);
    createCannon("top", 605, 1000);

    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
