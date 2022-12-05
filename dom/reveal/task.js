function isVisible(e) {
    const { top, bottom } = e.getBoundingClientRect();
    if (bottom < 0) {
        return false;
    }
    if (top > window.innerHeight) {
        return false;
    }
    return true;
}

(function visibleElementScroll() {
    const reveal = document.querySelector('.reveal');
    window.addEventListener('scroll', () => {
        isVisible(reveal) === true ? reveal.classList.add('reveal_active') : reveal.classList.remove('reveal_active');
    })
})()