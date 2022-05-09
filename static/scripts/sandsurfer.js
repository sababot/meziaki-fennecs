var canvas = document.getElementById('canvas');
var c = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

document.addEventListener('keydown', keysdown, true);
document.addEventListener('keyup', keysup, true);

// VARIABLES
var up = false;
let jump = 0;
var delta = 0;
var now = 0;
var then = 0;
var countdown = 10;
var obstacle_step = 0;
var score = 1;
var width = 60;
var running = true;

// CANVAS FUNCTIONS
canvas.onmousedown = function(e){
    up = true;
    if (running == false){
        running = true;
    }
}
canvas.onmouseup = function(e){
    up = false;
}

function keysdown(e){
    if(e.keyCode == 38 || e.keyCode == 87 || e.keyCode == 32){
        up = true;
        if (running == false){
            running = true;
        }
    }
}

function keysup(e){
    if((e.keyCode == 38 && up == true) || (e.keyCode == 87 && up == true) || (e.keyCode == 32 && up == true)){
        up = false;
        if (running == false){
            running = true;
        }
    }
}

// RENDER
function Player(x, y, infected){
    this.x = x;
    this.y = y;
    this.dx = 0;
    this.dy = 0;
    this.r = 15;
    this.m = 2.5;
    this.colliding = true;
    this.infected = infected;
    this.vel = 0.45;
    this.jump_vel = 10;
    this.colliding = false;
    this.health = 100;
    this.move_x_left = true;
    this.move_x_right = true;
    this.move_y_up = true;
    this.move_y_down = true;

    this.draw = function(){
        // Graphics
        var img = new Image();
        img.src = '../static/images/logocompressed.png';
        c.drawImage(img, this.x, this.y, width, width)
    }

    this.update = function() {
        if (up == true && this.colliding == true){
            jump = 20;
            jump_vel = 1.15;
        }

        // Jump
        if (jump > 0){
            if (jump_vel >= 0){
                jump_vel -= 0.00175 * delta;
            }
            this.y -= (jump_vel * delta);
            jump -= 0.00175 * delta;
        }
        else{
            playerVariable.dy = 0;
        }

        // Gravity
        if (this.y < ((window.innerHeight * 0.75) - (width + 1)) && this.move_y_down == true){
            this.y += this.vel * delta;

            this.colliding = false;
        }
        else{
            this.vel = 0.45;
            this.colliding = true;
        }

        if (this.y > (window.innerHeight * 0.75) - width){
            this.y = ((window.innerHeight * 0.75) - width);
        }

        // Movement
        this.x += (this.dx * delta);
        this.y += (this.dy * delta);

        this.draw();
    }
}
var playerVariable = new Player((canvas.width / 2) - (width / 2), canvas.height / 2);

function setDelta() {
    now = Date.now();
    delta = (now - then);
    then = now;
}

function Obstacle(x, speed) {
    this.x = canvas.width - 1;
    this.y = (canvas.height * 0.75);
    this.speed = speed;

    this.draw = function(){
        // Graphics
        var img = new Image();
        img.src = '../static/images/cactussvgcompressed.png';
        c.drawImage(img, this.x, (canvas.height * 0.75) - width, width, width);
    }

    this.update = function() {
        // Movement
        this.x += (this.speed * delta);

        this.draw();
    }
}

function SpawnObstacles() {
    if (obstacle_step > 4) {
        obstacle_step = 0;
        obstacleArray[obstacle_step].x = canvas.width + width;
    }

    else {
        obstacle_step++;
        obstacleArray[obstacle_step].x = canvas.width + width;
    }
}

function restart() {
    for (var i = 0; i < obstacleArray.length; i++){
        obstacleArray[i].x = -width;
    }

    score = 0;

    running = false;

    c.globalAlpha = 0.75;
}

rect_collision = function(x1, y1, size1, x2, y2, size2) {
  var bottom1, bottom2, left1, left2, right1, right2, top1, top2;
  left1 = x1 - size1;
  right1 = x1 + size1;
  top1 = y1 - size1;
  bottom1 = y1 + size1;
  left2 = x2 - size2;
  right2 = x2 + size2;
  top2 = y2 - size2;
  bottom2 = y2 + size2;
  return !(left1 > right2 || left2 > right1 || top1 > bottom2 || top2 > bottom1);
};

function collision() {
    for (var i = 0; i < obstacleArray.length; i++) {
        if(rect_collision(playerVariable.x, playerVariable.y, width, obstacleArray[i].x, obstacleArray[i].y, 2)){
            restart();
        }
    }
}

var obstacleArray = [];
for (var i = 0; i < 6; i++) {
    obstacleArray.push(new Obstacle(canvas.width - 1, -0.35));
}

//UPDATE
function main(timeStamp){
    requestAnimationFrame(main);
    c.clearRect(0, 0, canvas.width, canvas.height);

    setDelta();

    // FLOOR
    c.beginPath();
    c.rect(0, window.innerHeight * 0.745, window.innerWidth - 1, window.innerHeight * 0.255);
    c.fillStyle = "#FFA973";
    c.fill();

    // PLAYER
    playerVariable.update();

    // SCORE
    if (running) {
        score += Math.floor(Date.now() * 0.000000000001);
    }
    c.font = "12vh LowRes";
    c.textAlign = "center";
    c.fillText(score, canvas.width * 0.5, canvas.height * 0.2);

    // HIGH SCORE
    c.font = "5vh LowRes";
    c.textAlign = "left";
    c.fillStyle = "#FFA973";
    c.fillText(score, canvas.width * 0.03, canvas.height * 0.165);

    if (running){
        // OBSTACLES
        for (var i = 0; i < obstacleArray.length; i++) {
            obstacleArray[i].update();
        }

        if (countdown <= 0) {
            SpawnObstacles();
            countdown = Math.floor(Math.random() * 1000) + 700;
        }

        else {
            countdown -= 1 * delta;
        }

        // COLLISION
        collision();

        c.globalAlpha = 1;
    }

    else {

        c.globalAlpha = 0.5;
        c.beginPath();
        c.rect(0, 0, window.innerWidth, window.innerHeight);
        c.fillStyle = "grey";
        c.fill();

        c.globalAlpha = 1;
        c.font = "5vh LowRes";
        c.textAlign = "center";
        c.fillStyle = "#595959";
        c.fillText("press any button to start", canvas.width * 0.5, canvas.height * 0.5);
    }
}

main();