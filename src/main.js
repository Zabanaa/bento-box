import Paddle from './Paddle.js'
import { COLORS } from './constants.js';
const canvas = document.getElementById('screen');
const ctx = canvas.getContext('2d');
let keysDown = {};

// TODO: dynamically compute x and y positions
const paddleLeft = new Paddle({
    x: 15,
    y: (canvas.height / 2) - 75,
    color: COLORS.PINK
});

const paddleRight = new Paddle({
    x: (canvas.width) - 15 - 15,
    y: (canvas.height / 2) - 75,
    color: COLORS.PINK
});

function drawCanvas() {
    ctx.fillStyle = COLORS.BLUE;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function updateGame() {
    for (const key in keysDown) {
        const keyPressed = Number(key);
        if( keyPressed === 38)
        {
            paddleLeft.moveUp();
        }
        if( keyPressed === 40)
        {
            paddleLeft.moveDown();
        }
    }
}

function renderGame() {
    drawCanvas();
    paddleLeft.draw(ctx);
    paddleRight.draw(ctx);
}

function gameLoop() {
    updateGame();
    renderGame();
    window.requestAnimationFrame(gameLoop);
}

window.addEventListener('keydown', e => keysDown[e.keyCode] = true);
window.addEventListener('keyup', e => delete keysDown[e.keyCode]);

gameLoop(); // later to be CyberPong.start()

// TODO:
// - handle keyup events

// 1. Smoother Animations (delta time thing, velocity, friction etc);
// 2. Implement AI
// 3. Ball control and collision (it should bounce back and forth);