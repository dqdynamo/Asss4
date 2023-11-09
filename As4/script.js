
const ctaButton = document.querySelector('.cta-button');

ctaButton.addEventListener('click', () => {
    alert('the button explodes!!!');
});

function playClickSound() {
    var clickSound = document.getElementById("clickSound");
    clickSound.play();
}
document.getElementById('exploreButton').addEventListener('click', function () {
    var exploreButton = document.getElementById('exploreButton');
    exploreButton.classList.add('explode');

    // Удалите класс explode после завершения анимации
    setTimeout(function () {
        exploreButton.classList.remove('explode');
    }, 500); // 500ms соответствует времени анимации
});
