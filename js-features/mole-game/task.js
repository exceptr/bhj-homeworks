const dead = document.getElementById('dead');
const lost = document.getElementById('lost');

for (let index = 1; index <= 9; index++) {
    function getHole(index) {
        let holeClick = document.getElementById(`hole${index}`);
        return holeClick;
    }
    let hole = getHole(index);

    hole.onclick = () => {
        if (hole.className.includes( 'hole_has-mole' ) === true) {
            dead.textContent = Number(dead.textContent) + 1
        } else {
            lost.textContent = Number(lost.textContent) + 1
        }
        if (dead.textContent == 10) {
            alert("Вы победили!");
            dead.textContent = 0;
            lost.textContent = 0;
        } else if (lost.textContent == 5) {
            alert("Вы проиграли!");
            dead.textContent = 0;
            lost.textContent = 0;
        }
    }
}