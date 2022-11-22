const modalCloseTimes = Array.from(document.querySelectorAll('.modal__close_times'));
const modalMain = document.querySelectorAll('.modal');
modalMain[0].className = "modal modal_active";
const showSucces = document.getElementsByClassName('show-success');

showSucces[0].onclick = () => {
    modalMain[0].className = "modal";
    modalMain[1].className = "modal modal_active";
}

for (let modalClose of modalCloseTimes) {
    modalClose.onclick = function() {
        modalClose.closest('.modal').classList.remove('modal_active');
    }
}