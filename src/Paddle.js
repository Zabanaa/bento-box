class Paddle {

    constructor(opts) {
        this.x = opts.x;
        this.y = opts.y;
        this.width = opts.width || 15;
        this.height = opts.height || 75;
        this.color = opts.color;
        this.velocity = 6;
    }

    draw(ctx) {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    moveDown() {
        this.y += this.velocity;
        if(this.y + this.height > 480) {
            this.y = 480 - this.height;
        }
    }

    moveUp() {
        this.y -= this.velocity;
        if (this.y < 0) {
            this.y = 0;
        }
    }

}

export default Paddle;