document.addEventListener("DOMContentLoaded", function () {
    const loadingDuration = 2000; // загрузка в мс
    const preloader = document.getElementById("preloader");
    const header = document.querySelector("header");
    const content = document.getElementById("content");

    header.classList.add("hidden");
    content.classList.add("hidden");

    setTimeout(() => {
        preloader.style.opacity = "0";

        setTimeout(() => {
            preloader.style.display = "none";
            header.classList.remove("hidden");
            content.classList.remove("hidden");
            content.style.opacity = "1";

            ymaps.ready(initMap);
        }, 500);
    }, loadingDuration);
});

// Функция карты
function initMap() {
    var map = new ymaps.Map("map", {
        center: [43.247949, 76.947960],
        zoom: 17,
        controls: ["zoomControl", "fullscreenControl"]
    });

    var placemark = new ymaps.Placemark([43.247949, 76.947960], {
        balloonContent: "Гимназия №56 им. К. Сатпаева"
    });

    map.geoObjects.add(placemark);
}

function togglePhone(button) {
    var phoneNumber = button.nextElementSibling;
    if (phoneNumber.style.display === 'none') {
      phoneNumber.style.display = 'block';
      phoneNumber.style.opacity = 0;
      setTimeout(function() {
        phoneNumber.style.opacity = 1;
      }, 10);
    } else {
      phoneNumber.style.opacity = 0;
      setTimeout(function() {
        phoneNumber.style.display = 'none';
      }, 300);
    }
  }