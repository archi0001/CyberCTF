document.addEventListener("DOMContentLoaded", function () {
    console.log("Animation started");

    const ball = document.getElementById("ball");
    if (!ball) {
        console.log("Ball not found");
        return;
    }

    let position = 0;
    let direction = 1;

    function animate() {
        position += 2 * direction;

        if (position >= 350) direction = -1;
        if (position <= 0) direction = 1;

        ball.style.transform = `translateX(${position}px)`;

        requestAnimationFrame(animate);
    }

    animate();
});