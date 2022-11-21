const sliderItems = Array.from(document.querySelectorAll('.slider__item'));
const dot = Array.from(document.querySelectorAll('.slider__dot'));

const prevBtn = document.querySelector('.slider__arrow_prev');
const nxtBtn = document.querySelector('.slider__arrow_next');

function delActiveClass() {
    sliderItems.forEach((element) => element.classList.remove('slider__item_active'));
    dot.forEach((elememt) => elememt.classList.remove('slider__dot_active'));
}

function addActiveClass(i) {
    sliderItems[i].classList.add('slider__item_active');
    dot[i].classList.add('slider__dot_active');
}

nxtBtn.onclick = () => {
    let i = sliderItems.findIndex((element) => element.classList.contains('slider__item_active'));
    if (i >= sliderItems.length - 1) {
        i = -1;
    }
    delActiveClass();
    addActiveClass(i + 1);
}

prevBtn.onclick = () => {
    let i = sliderItems.findIndex((element) => element.classList.contains('slider__item_active'));
    if (i <= 0) {
        i = sliderItems.length;
    }
    delActiveClass();
    addActiveClass(i - 1);
}

dot.forEach((elememt, i) => {
    elememt.onclick = () => {
        delActiveClass();
        addActiveClass(i);
    }
})