const menuLinks = Array.from(document.querySelectorAll('.menu__link'));

for (let menuLink of menuLinks) {
    menuLink.onclick = function () {
        const parent = menuLink.parentElement;
        if (parent.querySelector('.menu_sub')) {
            parent.querySelector('.menu_sub').classList.toggle('menu_active');
            return false;
        }
    }
}