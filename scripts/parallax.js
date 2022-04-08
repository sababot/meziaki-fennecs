var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

function round(value, step) {
    step || (step = 1.0);
    var inv = 1.0 / step;
    return Math.round(value * inv) / inv;
}

window.addEventListener('resize', function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

window.addEventListener('scroll', (event) => {
    back.alpha = round(this.scrollY * (1 / (window.innerHeight / 2)), 0.05);
    back.size = round(this.scrollY * (1 / (window.innerHeight / 2)), 0.05);
});

function background(source){
    this.source = source;
    var x = 0;
    var y = 0;
    var width = window.innerWidth;
    var height = window.innerHeight;
    this.size = 0;
    this.alpha = 0;

    this.draw = function(){
        // Alpha
        if (this.alpha < 0){
            this.alpha = 0;
        }

        else if (this.alpha > 1){
            this.alpha = 1;
        }

        // Size
        if (this.size < 0){
            this.size = 0;
        }

        else if (this.size > 1){
            this.size = 1;
        }

        x = -1 * this.size * 150;
        y = -1 * this.size * 150;
        width = (this.size * 300) + window.innerWidth;
        height = (this.size * 160) + window.innerHeight;

        // Image Rendering
        c.globalAlpha = 1;
        var img = new Image();
        img.src = this.source;
        c.drawImage(img, x, y, width, height);

        c.globalAlpha = this.alpha;
        c.rect(0, 0, window.innerWidth, window.innerHeight);
        c.fillStyle = "#bc5a03";
        c.fill();
    }
}

var back = new background("images/desert_background_gif.gif")

function animate(){
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);

    back.draw();
}

animate();