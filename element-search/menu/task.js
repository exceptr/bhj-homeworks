const menu_links = Array.from(document.querySelectorAll('.menu__link'));
const menu_subs = Array.from(document.querySelectorAll('ul.menu_sub'));

function closeMenu() {
    for (let menu_sub_element of menu_subs) {
        menu_sub_element.classList.remove('menu_active');
    }
}

for (let menu_link of menu_links) {
    menu_link.onclick = function () {
        const parent = menu_link.parentElement;
        closeMenu();
        if (parent.querySelector('.menu_sub')) {
            parent.querySelector('.menu_sub').classList.toggle('menu_active');
        }
        return false;
    }
}