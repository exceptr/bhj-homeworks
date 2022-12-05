const card = document.querySelector('.card');
const rotatorCases= Array.from(card.querySelectorAll('.rotator__case'))

function delActiveClass() {
    rotatorCases.forEach(e => e.classList.remove('rotator__case_active'));
}

function addActiveClass(i) {
    rotatorCases[i].classList.add('rotator__case_active');
    rotatorCases[i].style.color = rotatorCases[i].dataset.color;
}

let timeSpeed = setTimeout(function speedSwitch() {
    let i = rotatorCases.findIndex(e => e.classList.contains('rotator__case_active'));
        if (i >= rotatorCases.length - 1) {
            i = -1;
        }
        delActiveClass();
        addActiveClass(i + 1);
        let speed = rotatorCases[i + 1].dataset.speed;
        timeSpeed = setTimeout(speedSwitch, speed);
}, 1000)