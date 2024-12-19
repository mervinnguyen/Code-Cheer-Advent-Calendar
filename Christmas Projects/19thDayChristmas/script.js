document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('glowButton');

    button.addEventListener('click', () => {
        button.classList.toggle('glow');
    });
});