const buttonMenu = document.getElementById('barraMenu-accion');
const mainMenu = document.getElementById('mainMenu');

const itemMainMenuIndex = document.getElementById('main-menu-item__index');
const itemMainMenuWe = document.getElementById('main-menu-item__we');
const itemMainMenuServices = document.getElementById('main-menu-item__services');
const itemMainMenuContact = document.getElementById('main-menu-item__contact');


buttonMenu.addEventListener('click', () => {
    if (mainMenu.className == "main-menu hidden") {
        console.log('Click');
        mainMenu.classList.replace('hidden', 'visible');
        itemMainMenuIndex.classList.replace('hidden-item-menu', 'visible-item-menu');
        itemMainMenuWe.classList.replace('hidden-item-menu', 'visible-item-menu');
        itemMainMenuServices.classList.replace('hidden-item-menu', 'visible-item-menu');
        itemMainMenuContact.classList.replace('hidden-item-menu', 'visible-item-menu');
    } else {
        mainMenu.classList.replace('visible', 'hidden');
        itemMainMenuIndex.classList.replace('visible-item-menu', 'hidden-item-menu');
        itemMainMenuWe.classList.replace('visible-item-menu', 'hidden-item-menu');
        itemMainMenuServices.classList.replace('visible-item-menu', 'hidden-item-menu');
        itemMainMenuContact.classList.replace('visible-item-menu', 'hidden-item-menu');
    }
})