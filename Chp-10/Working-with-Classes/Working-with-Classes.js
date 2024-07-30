const menuClicked = (CurrEl) => {
    const menuItem = document.getElementsByClassName('menu-item');

    for (let i = 0; i < menuItem.length; i++) {
        menuItem[i].classList.remove('active');
}
    CurrEl.classList.add('active');
}