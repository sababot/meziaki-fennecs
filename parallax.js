var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

window.addEventListener('resize', function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
})

window.onscroll = function(e){
    window.addEventListener('wheel', function(e){
        for (var i = 0; i < backgroundArray.length; i++){
            backgroundArray[i].dx = -1 * e.deltaY * 0.5;
        }
    })
}

var length = 3;
var count = 20;

function background(speed, source){

    this.x = 0;
    this.y = 0;
    this.dx = 0;
    this.dy = 0;

    this.target_x;

    this.source = source;

    this.width1 = 0;
    this.width2 = 0;

    this.speed = speed;

    this.draw = function(){
        this.width = window.innerWidth;

        for (var i = 0; i < length * this.speed; i++){
            var img = new Image();
            img.src = this.source;
            c.drawImage(img, this.x + (i * this.width), this.y, window.innerWidth, window.innerHeight);
        }
    }

    this.update = function(){
        this.x += this.dx * speed;

        if (this.x > 0){
            this.x = 0;
        }

        if (this.x < -1 * (this.width * length * this.speed) + (this.width * this.speed)){
            this.x = -1 * (this.width * length * this.speed) + (this.width * this.speed);
        }

        if (this.target_x > this.x){
            this.dx = 5;
        }
        else if (this.target_x < this.x){
            this.dx = -5;
        }
        else{
            this.dx = 0;
        }

        this.draw();
    }
}

function nft_meteorites(source){
    this.x = Math.floor(Math.random() * canvas.width);
    this.y = 0;
    this.dx = -5;
    this.dy = (Math.random() * 15) + 5;

    this.source = source;

    this.draw = function(){
        var img = new Image();
        img.src = this.source;
        c.drawImage(img, this.x, this.y, (window.innerWidth / 100) * 5, (window.innerWidth / 100) * 5);
    }

    this.update = function(){
        this.x += this.dx;
        this.y += this.dy;

        this.draw();
    }
}

var backgroundArray = [];

backgroundArray.push(new background(1, "images/background1.png"));
backgroundArray.push(new background(2, "images/background3.png"));
backgroundArray.push(new background(3, "images/background2.png"));

function animate(){
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);

    for (var i = 0; i < backgroundArray.length; i++){
        backgroundArray[i].update();
    }

    for (var i = 0; i < backgroundArray.length; i++){
        backgroundArray[i].dx = 0;
    }
}

animate();