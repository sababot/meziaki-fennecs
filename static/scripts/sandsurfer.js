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

// CANVAS FUNCTIONS
canvas.onmousedown = function(e){
    up = true;
}
canvas.onmouseup = function(e){
    up = false;
}

function keysdown(e){
    if(e.keyCode == 38 || e.keyCode == 87 || e.keyCode == 32){
        up = true;
    }
}

function keysup(e){
    if((e.keyCode == 38 && up == true) || (e.keyCode == 87 && up == true) || (e.keyCode == 32 && up == true)){
        up = false;
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
        img.src = '../static/images/logo.png';
        c.drawImage(img, this.x, this.y, 60, 60)
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
        if (this.y < ((window.innerHeight * 0.6) - 61) && this.move_y_down == true){
            this.y += this.vel * delta;

            this.colliding = false;
        }
        else{
            this.vel = 0.45;
            this.colliding = true;
        }

        if (this.y > (window.innerHeight * 0.6) - 60){
            this.y = ((window.innerHeight * 0.6) - 60);
        }

        // Movement
        this.x += (this.dx * delta);
        this.y += (this.dy * delta);

        console.log(this.y);

        this.draw();
    }
}
var playerVariable = new Player((canvas.width / 2) - 30, canvas.height / 2);

function setDelta() {
    now = Date.now();
    delta = (now - then);
    then = now;
}

function Obstacle(speed) {
    this.x = (canvas.width / 2) - 30;
    this.speed = speed;

    this.draw = function(){
        // Graphics
        var img = new Image();
        img.src = '../static/images/cactussvg.png';
        c.drawImage(img, this.x, canvas.height / 2, 60, 60);
    }

    this.update = function() {
        // Movement
        this.x += (this.speed * delta);

        this.draw();
    }
}

function SpawnObstacles() {
    obstacleArray.push = new Obstacle(-0.5);
}

var obstacleArray = [];

//UPDATE
function main(timeStamp){
    requestAnimationFrame(main);
    c.clearRect(0, 0, canvas.width, canvas.height);

    setDelta();

    c.beginPath();
    c.rect(0, window.innerHeight * 0.595, window.innerWidth - 1, window.innerHeight * 0.405);
    c.fillStyle = "#FFA973";
    c.fill();

    playerVariable.update();
}

main();