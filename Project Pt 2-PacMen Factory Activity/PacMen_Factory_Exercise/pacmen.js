const pacMen = []; //array holds all the pacmen

//returns an object with random values
function setToRandom(scale) {
  return {
    x: Math.random() * scale,
    y: Math.random() * scale,
  };
}

//make a PacMan at a random position with random velocity
function makePac() {
  // returns an object with random values scaled
  let velocity = setToRandom(10);
  let position = setToRandom(200);

  // Add image to div id = game
  let game = document.getElementById('game');
  let newimg = document.createElement('img');
  newimg.style.position = 'absolute';
  newimg.src = './images/PacMan1.png';
  newimg.width = 100;

  //set random position
  newimg.style.top = position.y;
  newimg.style.left = position.x;

  //add new pacman image to game
  game.appendChild(newimg);

  // return details in an object
  return {
    position,
    velocity,
    newimg,
  };
}

function update() {
  // loop over pacmen array and move each one
  pacMen.forEach((item) => {
    checkCollisions(item);
    item.position.x += item.velocity.x;
    item.position.y += item.velocity.y;

    item.newimg.style.left = item.position.x;
    item.newimg.style.top = item.position.y;
  });
  setTimeout(update, 20);
}

function checkCollisions(item) {
  //detect collision with all walls and make pacman bounce
  if(item.position.x > window.innerWidth-item.newimg.width || item.position.x < 0){
    item.velocity.x = -item.velocity.x;
  }
  if(item.position.y>window.innerHeight-item.newimg.height || item.position.y < 0){
    item.velocity.y = -item.velocity.y;
  }
}

function makeOne() {
  pacMen.push(makePac()); // add a new PacMan
}

//don't change this line
if (typeof module !== 'undefined') {
  module.exports = { checkCollisions, update, pacMen };
}