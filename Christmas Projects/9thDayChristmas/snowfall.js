document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementbyId('snowfall-container');
    const snowflakeCount = 100;

    for (let i = 0; i < snowflakeCount; i++) {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        snowflake.style.left = `${Math.random() * 100}vw`;
        snowflake.style.animationDuration = `${Math.random() * 3 + 2}s`;
        snowflake.style.opacity = Math.random();
        snowflake.style.fontSize = `${Math.random() * 10 + 10}px`;
        snowflake.innerHTML = '❄️';
        container.appendChild(snowflake);
    }
});