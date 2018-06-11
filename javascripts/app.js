// Rover Object Goes Here
var rover = {
  direction : "N",
  x : 0,
  y : 0,
};

function moveForward(rover){
  switch(rover.direction){
    case "N":
      rover.y -= 1;
      break;
    case "E":
      rover.x += 1;
      break;
    case "S":
      rover.y += 1;
      break;
    case "W":
      rover.x -= 1;
      break;
  }
  console.log("The Rover is currently facing " + rover.direction);
  console.log("New Rover Position: [" + rover.x + "," + rover.y + "]");
}
 function moveBackward(rover){
   switch(rover.direction){
     case "N":
       rover.y += 1;
       break;
     case "E":
       rover.x -= 1;
       break;
     case "S":
       rover.y += 1;
       break;
     case "W":
       rover.x -= 1;
       break;
   }
   console.log("The Rover is currently facing " + rover.direction);
   console.log("New Rover Position: [" + rover.x + "," + rover.y + "]");
 }

function turnLeft(rover){
  switch(rover.direction) {
    case "N":
      rover.direction = "W";
      break;
    case "E":
      rover.direction = "N";
      break;
    case "S":
      rover.direction = "E";
      break;
    case "W":
      rover.direction = "S";
      break;
  }
  console.log("New Rover Direction: " + rover.direction);
  console.log("New Rover Position: [" + rover.x + "," + rover.y + "]");

}

function turnRight(rover){
  switch(rover.direction) {
    case "N":
      rover.direction = "E";
      break;
    case "E":
      rover.direction = "S";
      break;
    case "S":
      rover.direction = "W";
      break;
    case "W":
      rover.direction = "N";
      break;
  }
  console.log("New Rover Direction: " + rover.direction);
  console.log("New Rover Position: [" + rover.x + "," + rover.y + "]");
}

function commands(){
  var commands = "rffrfflrfrr";

  for(var i = 0; i < commands.length; i++){
    if(commands[i] == "f"){
      moveForward(rover);
    }
    else if (commands[i] == "b"){
      moveBackward(rover);
    }
    else if (commands[i] == "l"){
      turnLeft(rover);
    }
    else if (commands[i] == "r"){
      turnRight(rover);
    }
    else {
      console.log("ALERT INVALID INPUT");
    }
  }
}
