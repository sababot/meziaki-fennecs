function round(value, step) {
    step || (step = 1.0);
    var inv = 1.0 / step;
    return Math.round(value * inv) / inv;
}

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

        // Image Rendering
        document.getElementById("back_img").style.opacity = 1 - this.alpha;
        document.getElementById("back_img").style.height = 50 * this.size + 100 + "%";
        document.getElementById("back_img").style.transform = "translate(0%, -" + (this.size * 15) + "%)";
    }
}

var back = new background("images/desert_background_front.png")

function animate(){
    requestAnimationFrame(animate);

    back.draw();
}

animate();