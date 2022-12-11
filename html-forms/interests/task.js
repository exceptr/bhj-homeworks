const checkInterests = document.getElementsByClassName('interest__check');

for (let checkInterest of checkInterests) {
    checkInterest.addEventListener('click', () => {
        const checkInterestChild = Array.from(checkInterest.closest('.interest').getElementsByClassName('interest__check'));
    if (checkInterest.checked) {
        checkInterestChild.forEach(e => e.checked = true);
    } 
    else {
        checkInterestChild.forEach(e => e.checked = false);
    }
    function chechParent(interestCheck) {
        if (!interestCheck.closest('.interests').classList.contains('interests_main')) {
            const interestSibling = Array.from(interestCheck.closest('.interests').getElementsByClassName('interest__check'));
            const checkInterestParent = interestCheck.closest('.interests').closest('.interest').querySelector('.interest__check');
            if (interestSibling.every(e => e.checked === false)) {
                checkInterestParent.indeterminate = false;
                checkInterestParent.checked = false;
            }
            else if (interestSibling.some(e => e.checked === false)) {
                checkInterestParent.indeterminate = true;
                checkInterestParent.checked = false;  
            }
            else {
                checkInterestParent.indeterminate = false;
                checkInterestParent.checked = true; 
            }
            chechParent(checkInterestParent);
        }
    }
    chechParent(checkInterest);
    })
}