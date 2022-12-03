const dropdowns = Array.from(document.querySelectorAll('.dropdown__value'));
const links = Array.from(document.querySelectorAll('.dropdown__link'));

function clickDropdown() {
    const dropList = this.closest('.dropdown').querySelector('.dropdown__list');
    if (dropList.classList.contains('dropdown__list_active')) {
        dropList.classList.toggle('dropdown__list_active');
    }
    else {
        closeMenu();
        dropList.classList.toggle('dropdown__list_active');
    }

}

for (let dropdown of dropdowns) {
    dropdown.addEventListener('click', clickDropdown);
}

function clickLinks(event) {
    const dropValue = this.closest('.dropdown').querySelector('.dropdown__value');
    dropValue.textContent = this.textContent;
    closeMenu()
    event.preventDefault();
}

for (let link of links) {
    link.addEventListener('click', clickLinks);
}

function closeMenu() {
    for (let dropdown of dropdowns) {
        dropdown.closest('.dropdown').querySelector('.dropdown__list').classList.remove('dropdown__list_active');
    }
}