var canvas = document.getElementById('canvas');
var c = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

document.addEventListener('keydown', aim, true);
document.addEventListener('keyup', aim2, true);

// Variables
let g = 0;
let f = 1;
let bulletCount = 0;
var left = false;
var right = false;
var up = false;
var down = false;
let jump = 0;
let jumpBot = 0;
let bullet_index = 0;
let bullet_index_bot = 0;
let mouse_pos = null;
let angle = null;
let angleBot = null;
var shoot = false;

canvas.addEventListener("mousemove", e => {

    mouse_pos = {
        x: e.clientX - canvas.offsetLeft,
        y: e.clientY - canvas.offsetTop
    }
});

canvas.onmousedown = function(e){
    shoot = true;
    bullet_index = 35;

    mouseIsDown = true;
}
canvas.onmouseup = function(e){
    shoot = false;
}

function Player(x, y, infected){
    this.x = x;
    this.y = y;
    this.dx = 0;
    this.dy = 0;
    this.r = 15;
    this.m = 2.5;
    this.colliding = true;
    this.infected = infected;
    this.vel = 1;
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
        c.drawImage(img, this.x, this.y, 40, 40)

        // Movement
        if (left == true && this.x > 1){
            playerVariable.dx = -5;
        }

        else if (right == true && this.x < window.innerWidth - 41){
            playerVariable.dx = 5;
        }

        else{
            playerVariable.dx = 0;
        }

        if (up == true && this.colliding == true){
            jump = 20;
            jump_vel = 12.5;
        }

        // Jump
        if (jump > 0){
            if (jump_vel >= 0){
                jump_vel -= 0.5;
            }
            this.y -= jump_vel;
            jump -= 1;
        }
        else{
            playerVariable.dy = 0;
        }

        // Gravity
        if (this.y < window.innerHeight - 300 - 40 && this.move_y_down == true){
            if (this.vel < 10){
                this.vel *= 1.075;
            }

            this.y += this.vel;

            this.colliding = false;
        }
        else{
            this.vel = 1;
            this.colliding = true;
        }

        if (this.y > window.innerHeight - 300 - 40){
            this.y = window.innerHeight - 299 - 40;
        }

        // Movement
        this.x += this.dx;
        this.y += this.dy;
    }
}

var playerVariable = new Player(canvas.width / 2, canvas.height / 2);

function aim(e){
    if(e.keyCode == 37 || e.keyCode == 65){
        left = true;
    }

    if(e.keyCode == 39 || e.keyCode == 68){
        right = true;
    }

    if(e.keyCode == 38 || e.keyCode == 87 || e.keyCode == 32){
        up = true;
    }

    if(e.keyCode == 40 || e.keyCode == 83){
        down = true;
    }
}

function aim2(e){
    if((e.keyCode == 37 && left == true) || (e.keyCode == 65 && left == true)){
        playerVariable.dx = 0;
        playerVariable.dy = 0;
        left = false;
    }

    if((e.keyCode == 39 && right == true) || (e.keyCode == 68 && right == true)){
        playerVariable.dx = 0;
        playerVariable.dy = 0;
        right = false;
    }

    if((e.keyCode == 38 && up == true) || (e.keyCode == 87 && up == true) || (e.keyCode == 32 && up == true)){
        playerVariable.dx = 0;
        playerVariable.dy = 0;
        up = false;
    }

    if((e.keyCode == 40 && down == true) || (e.keyCode == 83 && down == true)){
        playerVariable.dx = 0;
        playerVariable.dy = 0;
        down = false
    }
}

function animate(){
    requestAnimationFrame(animate);
    c.clearRect(0, 0, canvas.width, canvas.height);

    c.beginPath();
    c.rect(0, window.innerHeight - 300, window.innerWidth - 1, 300);
    c.fillStyle = "#f9af40";
    c.fill();

    playerVariable.draw();
    c.restore();
}

animate();