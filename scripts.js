const buttonMenu = document.getElementById('barraMenu-accion');
const mainMenu = document.getElementById('mainMenu');

buttonMenu.addEventListener('click', () => {
    if (mainMenu.className == "main-menu main-menu-hidden") {
        console.log('Click');
        mainMenu.classList.replace('main-menu-hidden', 'main-menu-visible');
    } else {
        mainMenu.classList.replace('main-menu-visible', 'main-menu-hidden');
    }
})