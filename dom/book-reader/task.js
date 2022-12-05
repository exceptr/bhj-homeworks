const fontSizes = document.querySelectorAll('.font-size');
const bColor = document.querySelector('.book__control_color').querySelectorAll('.color');
const background = document.querySelector('.book__control_background').querySelectorAll('.color');
const bookContent = document.querySelector('.book__content');

function bookFs(i) {
    delActiveClassFs();
    fontSizes[i].className = 'font-size font-size_active';
    if (i === 0) {
        fontSizes[i].closest('.book').className = 'book book_fs-small';
    }
    if (i === 1) {
        fontSizes[i].closest('.book').className = 'book';
    }
    if (i === 2) {
        fontSizes[i].closest('.book').className = 'book book_fs-big';
    }
}

function delActiveClassFs() {
    fontSizes.forEach(e => e.classList.remove('font-size_active'));
}

function delActiveClassColor() {
    bColor.forEach(e => e.classList.remove('color_active'));
}

function delActiveClassBg() {
    background.forEach(e => e.classList.remove('color_active'));
}

function bookColor(i) {
    delActiveClassColor();
    bColor[i].classList.toggle('color_active');
    bookContent.style.color = bColor[i].dataset.textColor;
}

function bookBg(i) {
    delActiveClassBg();
    background[i].classList.toggle('color_active');
    bookContent.style.backgroundColor = background[i].dataset.bgColor;
}

bColor.forEach((e, i) => {
    e.onclick = () => {
        bookColor(i);
        return false;
    }
})

fontSizes.forEach((e, i) => {
    e.onclick = () => {
        bookFs(i);
        return false;
    }
})

background.forEach((e, i) => {
    e.onclick = () => {
        bookBg(i);
        return false;
    }
})