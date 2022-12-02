const tabs = Array.from(document.querySelectorAll('.tab'));
const content = Array.from(document.querySelectorAll('.tab__content'));

function delActiveClass() {
    tabs.forEach(e => e.classList.remove('tab_active'));
    content.forEach(e => e.classList.remove('tab__content_active'));
}

function addActiveClass(i) {
    tabs[i].classList.add('tab_active');
    content[i].classList.add('tab__content_active');
}

tabs.forEach((e, i) => {
    e.onclick = () => {
        delActiveClass();
        addActiveClass(i);
    }
})