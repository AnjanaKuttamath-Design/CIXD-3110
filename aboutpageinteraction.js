document.addEventListener('mousemove', function(e) {
    // Add black background when cursor moves
    document.body.classList.add('cursor-move');

    // Create bubbles
    const bubble = document.createElement('div');
    bubble.classList.add('bubble');

    // Random bubble size
    const size = Math.random() * 20 + 10;
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;

    // Position bubble near cursor
    bubble.style.left = `${e.clientX + (Math.random() * 100 - 50)}px`;
    bubble.style.top = `${e.clientY + (Math.random() * 100 - 50)}px`;

    // Random bubble color with transparency
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    bubble.style.background = `rgba(${r}, ${g}, ${b}, 0.3)`;

    // Add bubble to body
    document.body.appendChild(bubble);

    // Remove bubble after animation
    setTimeout(() => {
        bubble.remove();
    }, 3000);
});

// Remove black background when cursor stops
let moveTimer;
document.addEventListener('mousemove', function() {
    clearTimeout(moveTimer);
    moveTimer = setTimeout(() => {
        document.body.classList.remove('cursor-move');
    }, 1000);
});