const buttonMenu = document.getElementById('barraMenu-accion');
const mainMenu = document.getElementById('mainMenu');

const itemMainMenuIndex = document.getElementById('main-menu-item__index');
const itemMainMenuWe = document.getElementById('main-menu-item__we');
const itemMainMenuServices = document.getElementById('main-menu-item__services');
const itemMainMenuContact = document.getElementById('main-menu-item__contact');


buttonMenu.addEventListener('click', () => {
    if (mainMenu.className == "main-menu main-menu-hidden") {
        console.log('Click');
        mainMenu.classList.replace('main-menu-hidden', 'main-menu-visible');
    } else {
        mainMenu.classList.replace('main-menu-visible', 'main-menu-hidden');
    }
})