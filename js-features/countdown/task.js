const timer = document.getElementById('timer');
let interval
 interval = setInterval(() => {
    timer.textContent = Number(timer.textContent) - 1;
    if(timer.textContent == 0) {
        alert('Вы победили в конкурсе!');
        clearInterval(interval);
    }
}, 1000);