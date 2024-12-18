document.addEventListener('DOMContentLoaded', () => {
    const countdown = () => {
        const now = new Date();
        const currentYear = now.getFullYear();
        const christmas = new Date(`December 25, ${currentYear} 00:00:00`);
        
        if (now > christmas) {
            christmas.setFullYear(currentYear + 1);
        }

        const diff = christmas - now;

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        document.getElementById('days').textContent = days;
        document.getElementById('hours').textContent = hours;
        document.getElementById('minutes').textContent = minutes;
        document.getElementById('seconds').textContent = seconds;
    };

    countdown();
    setInterval(countdown, 1000);
});