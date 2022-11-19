const clicker__counter = document.getElementById('clicker__counter')
const img = document.getElementById('cookie')
const clicker__timer = document.getElementById('clicker__timer')

timeLastClick = 0

img.onclick = () => {
    if(clicker__counter.textContent % 2 == 0) {
        img.width += 20;
        clicker__counter.textContent = Number(clicker__counter.textContent) + 1;
        const time2 = new Date();
        timeSpeed = (1 /  ((timeLastClick - time2) * - 1) * 1000).toFixed(2)
        clicker__timer.textContent = timeSpeed
        timeLastClick = time2
    }
    else if(clicker__counter.textContent % 2 != 0) {
        img.width -= 20;
        clicker__counter.textContent = Number(clicker__counter.textContent) + 1;  
        const time3 = new Date()  
        timeSpeed = (1 /  ((timeLastClick - time3) * - 1) * 1000).toFixed(2)
        clicker__timer.textContent = timeSpeed
        timeLastClick = time3
    }
}