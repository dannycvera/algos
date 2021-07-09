// compute distance traveled of a projectile
//
// pass initial angle and initial velocity
// output height, distance traveled, and time in the air

var myArgs = process.argv.slice(2);
myArgs = [Number(myArgs[0]), Number(myArgs[1])];

function range(angle, velocity) {
  // Math.sin and Math.cos require the degrees to be converted to "radians"!
  var rad = (Math.PI * angle) / 180;

  var gravity = 9.81;
  var velocityY = velocity * Math.sin(rad);
  var velocityX = velocity * Math.cos(rad);
  var time = (2 * velocityY) / gravity;
  var height = (velocityY * velocityY) / (2 * gravity);
  var distance = velocityX * time;
  return [distance, time, height];
}

console.log(range(myArgs[0], myArgs[1]));
