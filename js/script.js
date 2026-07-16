// ===========================
// dark mode
// ===========================

const darkModeButton = document.querySelector(".dark-mode");

if (darkModeButton) {

    darkModeButton.addEventListener("click", function () {

        document.body.classList.toggle("dark-mode-on");

    });

}


// ===========================
// about page carousel
// ===========================

const carousel = document.querySelector(".carousel");

if (carousel) {

    let currentImage = 0;

    const images = carousel.querySelectorAll("img");

    function showImage(index) {

        images.forEach(function (image) {

            image.style.display = "none";

        });

        images[index].style.display = "block";

    }

    showImage(currentImage);

    setInterval(function () {

        currentImage++;

        if (currentImage >= images.length) {

            currentImage = 0;

        }

        showImage(currentImage);

    }, 3000);

}