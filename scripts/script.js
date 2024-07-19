
////////////////////////////////////////////// таймер
let days = document.getElementById("days");
let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");

let dd = document.getElementById("dd");
let hh = document.getElementById("hh");
let mm = document.getElementById("mm");
let ss = document.getElementById("ss");

let countdown = document.getElementById("countdown");
let wishDays = 10;

let x = setInterval(function () {
  let currentYear = new Date().getFullYear();
  let saleEnd = new Date(`Aug 1, ${currentYear + 0} 00:00:00`);
  let now = new Date().getTime();
  let distance = saleEnd - now;

  // time calculation
  let d = Math.floor(distance / (1000 * 60 * 60 * 24));
  let h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let s = Math.floor((distance % (1000 * 60)) / 1000);

  // output the result
  days.innerHTML = d + "<br><span>Дней</span>";
  hours.innerHTML = h + "<br><span>Часов</span>";
  minutes.innerHTML = m + "<br><span>Минут</span>";
  seconds.innerHTML = s + "<span>Секунд</span>";

  // animate stroke
  dd.style.strokeDashoffset = 440 - (440 * d) / 365;
  hh.style.strokeDashoffset = 440 - (440 * h) / 24;
  mm.style.strokeDashoffset = 440 - (440 * m) / 60;
  ss.style.strokeDashoffset = 440 - (440 * s) / 60;

  // if countdown is over, change the innerText of .text
  if (distance < 0) {
    document.querySelector(
      ".text"
    ).innerText = `Предложение закончилось${currentYear}`;
  }
}, 1000);
// animation loop
function animate() {
  requestAnimationFrame(animate);
}
animate();

////////////////////////////////////////////// popups

////////////////////////////////////////////// проверка номера телефона

IMask(document.getElementById("tel"), {
  mask: "+{7}(000)000-00-00",
});
IMask(document.getElementById("tel2"), {
  mask: "+{7}(000)000-00-00",
});
IMask(document.getElementById("tel4"), {
  mask: "+{7}(000)000-00-00",
});

////////////////////////////////////////////// бургер меню
const hamb = document.querySelector("#hamb");
const popup = document.querySelector("#popup");
const body = document.body;

// Клонируем меню, чтобы задать стили для мобильной версии
const menu = document.querySelector("#menu").cloneNode(1);

hamb.addEventListener("click", hambHandler);

function hambHandler(e) {
  e.preventDefault();
  popup.classList.toggle("open");
  hamb.classList.toggle("active");
  body.classList.toggle("noscroll");
  renderPopup();
}

// Здесь мы рендерим элементы в наш попап
function renderPopup() {
  popup.appendChild(menu);
}
const links = Array.from(menu.children);
links.forEach((link) => {
  link.addEventListener("click", closeOnClick);
});

// Закрытие попапа при клике на меню
function closeOnClick() {
  popup.classList.remove("open");
  hamb.classList.remove("active");
  body.classList.remove("noscroll");
}

//////////////////////////////////////////////  swiper
const swiper = new Swiper(".mySwiper", {
  direction: "horizontal",
  loop: true,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: "true",
    horizontalClass: "swiper-pagination-vertical",
    dynamicBullets: "true",
    dynamicMainBullets: 8,
    bulletClass: "swiper-pagination-bullet",
  },

  breakpoints: {
    360: {
      pagination: {
        dynamicMainBullets: 3,
      },
    },
    768: {
      pagination: {
        dynamicMainBullets: 8,
      },
    },
    1024: {
      pagination: {
        dynamicMainBullets: 8,
      },
    },
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  scrollbar: {
    el: ".swiper-scrollbar",
  },
  mousewheel: true,
  keyboard: true,
});

var swiper2 = new Swiper(".mySwiper2", {
  direction: "horizontal",
  loop: true,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: "true",
    horizontalClass: "swiper-pagination-vertical",
    dynamicBullets: "true",
    dynamicMainBullets: 8,
    bulletClass: "swiper-pagination-bullet",
  },

  breakpoints: {
    360: {
      pagination: {
        dynamicMainBullets: 3,
      },
    },
    768: {
      pagination: {
        dynamicMainBullets: 8,
      },
    },
    1024: {
      pagination: {
        dynamicMainBullets: 8,
      },
    },
  },

  navigation: {
    nextEl: ".swiper-button-next2",
    prevEl: ".swiper-button-prev2",
  },
  scrollbar: {
    el: ".swiper-scrollbar",
  },
  mousewheel: true,
  keyboard: true,
});

var swiper3 = new Swiper(".mySwiper3", {
  direction: "horizontal",
  loop: true,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: "true",
    horizontalClass: "swiper-pagination-vertical",
    dynamicBullets: "true",
    dynamicMainBullets: 8,
    bulletClass: "swiper-pagination-bullet",
  },

  breakpoints: {
    360: {
      pagination: {
        dynamicMainBullets: 3,
      },
    },
    768: {
      pagination: {
        dynamicMainBullets: 8,
      },
    },
    1024: {
      pagination: {
        dynamicMainBullets: 8,
      },
    },
  },

  navigation: {
    nextEl: ".swiper-button-next3",
    prevEl: ".swiper-button-prev3",
  },
  scrollbar: {
    el: ".swiper-scrollbar",
  },
  mousewheel: true,
  keyboard: true,
});


/////////////////////////////////////////// yandex.api

ymaps.ready(init);
function init() {

    var myMap = new ymaps.Map("map", {
        center: [55.632407, 37.467188],
        zoom: 16.5,
        controls: []
    });
    var placemark = new ymaps.Placemark([55.632907, 37.465710], {
        hintContent: 'Omoda',
    }, {
        iconLayout: 'default#image',
        iconImageHref: './images/pin.png',
        iconImageSize: [65, 85],
        iconImageOffset: [-16, -16],
        'preset': 'islands#green',
    });

    myMap.geoObjects.add(placemark);
    myMap.controls.remove('geolocationControl'); // удаляем геолокацию
    myMap.controls.remove('searchControl'); // удаляем поиск
    myMap.controls.remove('trafficControl'); // удаляем контроль трафика
    myMap.controls.remove('typeSelector'); // удаляем тип
    myMap.controls.remove('rulerControl'); // удаляем контрол правил
    myMap.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)
    map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
    // map.controls.remove('zoomControl'); // удаляем контрол зуммирования
}

//////////////////////////////////////////// complectations menu

document.querySelectorAll('#show-cards, #show-cards2, #show-cards3').forEach(function(el){
  el.addEventListener("change", function() {
    if (document.getElementById('show-cards').checked) {
      document.getElementById('complect-card-1').style.display = 'block';
      document.getElementById('complect-card-2').style.display = 'block';
      document.getElementById('complect-card-3').style.display = 'block';
      document.getElementById('complect-card-4').style.display = 'none';
      document.getElementById('complect-card-5').style.display = 'none';
      document.getElementById('complect-card-6').style.display = 'none';
      document.getElementById('complect-card-7').style.display = 'none';
      document.getElementById('complect-card-8').style.display = 'none';
      document.getElementById('complect-card-9').style.display = 'none';
    } else if (
      document.getElementById('show-cards2').checked) {
        document.getElementById('complect-card-1').style.display = 'none';
        document.getElementById('complect-card-2').style.display = 'none';
        document.getElementById('complect-card-3').style.display = 'none';
        document.getElementById('complect-card-4').style.display = 'block';
        document.getElementById('complect-card-5').style.display = 'block';
        document.getElementById('complect-card-6').style.display = 'block';
        document.getElementById('complect-card-7').style.display = 'none';
        document.getElementById('complect-card-8').style.display = 'none';
        document.getElementById('complect-card-9').style.display = 'none';
      } else if (
        document.getElementById('show-cards3').checked) {
          document.getElementById('complect-card-1').style.display = 'none';
          document.getElementById('complect-card-2').style.display = 'none';
          document.getElementById('complect-card-3').style.display = 'none';
          document.getElementById('complect-card-4').style.display = 'none';
          document.getElementById('complect-card-5').style.display = 'none';
          document.getElementById('complect-card-6').style.display = 'none';
          document.getElementById('complect-card-7').style.display = 'block';
          document.getElementById('complect-card-8').style.display = 'block';
          document.getElementById('complect-card-9').style.display = 'block';
        }  
  });
});

document.getElementById('sel').addEventListener('change', function(){
  if(this.options[this.selectedIndex].classList.contains("show-cards")){
    document.getElementById('complect-card-1').style.display = 'block';
    document.getElementById('complect-card-2').style.display = 'block';
    document.getElementById('complect-card-3').style.display = 'block';
    document.getElementById('complect-card-4').style.display = 'none';
    document.getElementById('complect-card-5').style.display = 'none';
    document.getElementById('complect-card-6').style.display = 'none';
    document.getElementById('complect-card-7').style.display = 'none';
    document.getElementById('complect-card-8').style.display = 'none';
    document.getElementById('complect-card-9').style.display = 'none';
  } 
  else if(this.options[this.selectedIndex].classList.contains("show-cards2")) {
      document.getElementById('complect-card-1').style.display = 'none';
      document.getElementById('complect-card-2').style.display = 'none';
      document.getElementById('complect-card-3').style.display = 'none';
      document.getElementById('complect-card-4').style.display = 'block';
      document.getElementById('complect-card-5').style.display = 'block';
      document.getElementById('complect-card-6').style.display = 'block';
      document.getElementById('complect-card-7').style.display = 'none';
      document.getElementById('complect-card-8').style.display = 'none';
      document.getElementById('complect-card-9').style.display = 'none';
    } 
    else if(this.options[this.selectedIndex].classList.contains("show-cards3"))
       {
        document.getElementById('complect-card-1').style.display = 'none';
        document.getElementById('complect-card-2').style.display = 'none';
        document.getElementById('complect-card-3').style.display = 'none';
        document.getElementById('complect-card-4').style.display = 'none';
        document.getElementById('complect-card-5').style.display = 'none';
        document.getElementById('complect-card-6').style.display = 'none';
        document.getElementById('complect-card-7').style.display = 'block';
        document.getElementById('complect-card-8').style.display = 'block';
        document.getElementById('complect-card-9').style.display = 'block';
      }  
});


/////////////////////////////////////////// select2 lib 


$(document).ready(function() {
  $('.js-example-basic-single').select2();
});

$(document).ready(function() {
  $('.js-example-basic-single2').select2();
});