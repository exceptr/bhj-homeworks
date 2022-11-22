const menuLinks = Array.from(document.querySelectorAll('.menu__link'));

for (let menuLink of menuLinks) {
    menuLink.onclick = function () {
        const parent = menuLink.parentElement;
        if (parent.querySelector('.menu_sub').classList.contains('menu_active')) {
            parent.querySelector('.menu_sub').classList.remove('menu_active');
            return false;
        }
        else if (parent.querySelector('.menu_sub')) {
            parent.querySelector('.menu_sub').classList.toggle('menu_active');
            return false;
        }
    }
}