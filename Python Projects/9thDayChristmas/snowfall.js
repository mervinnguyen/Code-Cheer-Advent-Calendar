document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementbyId('snowfall-container');
    const snowflakeCount = 100;

    for (let i = 0; i < snowflakeCount; i++) {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        snowflake.style.left = `${Math.random() * 100}vw`;
        snowflake.style.animationDuration = `${Math.random() * 3 + 2}s`;
        snowflake.style.animationDelay = `${Math.random() * 2}s`;
        container.appendChild(snowflake);
    }
}))