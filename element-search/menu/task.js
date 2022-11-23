(function menu() {
    const allLinks = Array.from(document.querySelectorAll('.menu__link'));
    const menuLinks = allLinks.filter(item => item.nextElementSibling !== null);

    for (let menuLink of menuLinks) {
        menuLink.onclick = function () {
            if (menuLink.closest('.menu__item').querySelector('.menu_sub').classList.contains
                    ('menu_active')) {
                        menuLink.closest('.menu__item').querySelector('.menu_sub').classList.toggle('menu_active');
                        return false
                    }
        else if (menuLink.closest('.menu__item').querySelector('.menu_sub')) {
                closeMenu();
                menuLink.closest('.menu__item').querySelector('.menu_sub').classList.toggle('menu_active');
                return false;
            }
        }
    }
})()

function closeMenu() {
    const menuSubs = Array.from(document.querySelectorAll('ul.menu_sub'));
    for (let menuSuElement of menuSubs) {
        menuSuElement.classList.remove('menu_active');
    }
}