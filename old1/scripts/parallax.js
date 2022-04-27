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
    back.alpha = round(this.scrollY * (1 / (window.innerHeight)), 0.05);
    back.size = round(this.scrollY * (1 / (window.innerHeight)), 0.05);
});

function background(source){
    this.source = source;
    var x = 0;
    var y = 0;
    var width = (window.innerHeight * 2.086);
    var height = window.innerHeight;
    var booster = window.innerWidth / (window.innerWidth / 500);
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

        x = -1 * this.size * (booster / 2);
        y = -1 * this.size * (booster / 2);
        width = (this.size * booster) + (window.innerHeight * 2.086);
        height = (this.size * (booster / 2)) + window.innerHeight;

        // Image Rendering
        c.globalAlpha = 1 - this.alpha;
        var img = new Image();
        img.src = this.source;
        c.drawImage(img, x, y, width, height);
    }
}

var back = new background("images/desert_background_front.png")

function animate(){
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);
    c.imageSmoothingEnabled = false;

    back.draw();
}

animate();