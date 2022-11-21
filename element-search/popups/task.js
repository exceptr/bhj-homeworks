const modal__close_times = document.getElementsByClassName('modal__close_times');
const modal_main = document.querySelectorAll('.modal');
modal_main[0].className = "modal modal_active";
const show_success = document.getElementsByClassName('show-success');

modal__close_times[0].onclick = () => {
    modal_main[0].className = "modal modal__close";
}
modal__close_times[1].onclick = () => {
    modal_main[1].className = "modal modal__close";
}

show_success[0].onclick = () => {
    modal_main[0].className = "modal";
    modal_main[1].className = "modal modal_active";
}