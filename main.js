/* Función para interactividad al dar click sobre las cards
-------------------------------------------------------------*/

let images = document.querySelectorAll('.card img');
let cards = document.querySelectorAll('.card');

images.forEach(function (image, index) {
    image.addEventListener('click', function () {
        cards[index].classList.toggle('active');
        let row = event.target.closest('.row');
        if (row) {
            row.classList.toggle('rowdirection');
        }
        let activeImage = document.querySelector('.card.active img');
        if (activeImage) {
            activeImage.scrollIntoView();
        }
    });
});

/* Función para el menú
-------------------------------------------------------------*/

let menu = document.querySelector('.menu');
let menuContainer = document.querySelector('.menu-container');
let options = document.querySelectorAll('.option');

menu.addEventListener('click', function () {
    menuContainer.classList.toggle('active-menu');
});

// Función para ocultar el contenedor de secciones del menú
options.forEach(function (option) {
    option.addEventListener('click', function () {
        menuContainer.classList.remove('active-menu');
    });
});

