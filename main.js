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
        } else {
            let header = document.querySelector('header');
            if (header) {
                header.scrollIntoView();
            }
        }
    });
});