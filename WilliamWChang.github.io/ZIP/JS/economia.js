document.addEventListener('DOMContentLoaded', function() {
    const image = document.querySelector('#eye-image');
    const text = document.querySelector('#text');
    let isDefaultText = true; // Estado para controlar o texto

    image.addEventListener('click', function() {
        if (isDefaultText) {
            text.textContent = 'R$ 5.000,00';
            isDefaultText = false;
            image.src = 'img/eye-open.png';
        } else {
            text.textContent = 'R$ -----';
            isDefaultText = true;
            image.src = 'img/eye-closed.png';
        }
    });
});