// script.js

const canvas = document.getElementById('simulationCanvas');
const ctx = canvas.getContext('2d');
const gravityInput = document.getElementById('gravity');

canvas.width = 600;
canvas.height = 400;

let ball = {
    x: canvas.width / 2,
    y: 0,
    radius: 20,
    velocity: 0,
    color: 'red'
};

function drawBall() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
    ctx.fillStyle = ball.color;
    ctx.fill();
    ctx.closePath();
}

function updateBallPosition(gravity) {
    ball.velocity += gravity; // Update velocity based on gravity
    ball.y += ball.velocity; // Update position based on velocity

    if (ball.y + ball.radius > canvas.height) {
        ball.y = canvas.height - ball.radius;
        ball.velocity *= -0.8; // Simulate bounce with damping
    }
}

function startSimulation() {
    const gravity = parseFloat(gravityInput.value);

    function animate() {
        drawBall();
        updateBallPosition(gravity);
        requestAnimationFrame(animate);
    }

    animate();
}
