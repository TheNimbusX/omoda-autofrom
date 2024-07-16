////////////////////////////////////////////// функция для кастомного селекта
const customSelect = document.querySelector(".select-wrapper");
const selectBtn = document.querySelector(".select-button");

const selectedValue = document.querySelector(".selected-value");
const optionsList = document.querySelectorAll(".select-dropdown li");

// добавляем клик event на кнопку select button
selectBtn.addEventListener("click", () => {
  // добавление\удаление active class
  customSelect.classList.toggle("active");
  // обновление атрибура aria-expanded based в текущем состоянии
  selectBtn.setAttribute(
    "aria-expanded",
    selectBtn.getAttribute("aria-expanded") === "true" ? "false" : "true"
  );
});

optionsList.forEach((option) => {
  function handler(e) {
    // клик ивенты
    if (e.type === "click" && e.clientX !== 0 && e.clientY !== 0) {
      selectedValue.textContent = this.children[1].textContent;
      customSelect.classList.remove("active");
    }
    // ключ ивенты
    if (e.key === "Enter") {
      selectedValue.textContent = this.textContent;
      customSelect.classList.remove("active");
    }
  }

  option.addEventListener("keyup", handler);
  option.addEventListener("click", handler);
});

const customSelectModel = document.querySelector(".select-wrapper-model");
const selectBtnModel = document.querySelector(".select-button-model");

const selectedValueModel = document.querySelector(".selected-value-model");
const optionsListModel = document.querySelectorAll(".select-dropdown-model li");

// добавляем клик event на кнопку select button
selectBtnModel.addEventListener("click", () => {
  // добавление\удаление active class
  customSelectModel.classList.toggle("active");
  // обновление атрибура aria-expanded based в текущем состоянии
  selectBtnModel.setAttribute(
    "aria-expanded",
    selectBtnModel.getAttribute("aria-expanded") === "true" ? "false" : "true"
  );
});

optionsListModel.forEach((option) => {
  function handler(e) {
    // клик ивенты
    if (e.type === "click" && e.clientX !== 0 && e.clientY !== 0) {
      selectedValueModel.textContent = this.children[1].textContent;
      customSelectModel.classList.remove("active");
    }
    // ключ ивенты
    if (e.key === "Enter") {
      selectedValueModel.textContent = this.textContent;
      customSelectModel.classList.remove("active");
    }
  }

  option.addEventListener("keyup", handler);
  option.addEventListener("click", handler);
});

const customSelectComplectations = document.querySelector(
  ".section__complectations-select-wrapper"
);
const selectBtnComplectations = document.querySelector(
  ".section__complectations-select-button"
);

const selectedValueComplectations = document.querySelector(
  ".section__complectations-selected-value"
);
const optionsListComplectations = document.querySelectorAll(
  ".section__complectations-select-dropdown li"
);

// добавляем клик event на кнопку select button
selectBtnComplectations.addEventListener("click", () => {
  // добавление\удаление active class
  customSelectComplectations.classList.toggle("active");
  // обновление атрибура aria-expanded based в текущем состоянии
  selectBtnComplectations.setAttribute(
    "aria-expanded",
    selectBtnComplectations.getAttribute("aria-expanded") === "true"
      ? "false"
      : "true"
  );
});

optionsListComplectations.forEach((option) => {
  function handler(e) {
    // клик ивенты
    if (e.type === "click" && e.clientX !== 0 && e.clientY !== 0) {
      selectedValueComplectations.textContent = this.children[1].textContent;
      customSelectComplectations.classList.remove("active");
    }
    // ключ ивенты
    if (e.key === "Enter") {
      selectedValueComplectations.textContent = this.textContent;
      customSelectComplectations.classList.remove("active");
    }
  }

  option.addEventListener("keyup", handler);
  option.addEventListener("click", handler);
});

////////////////////////////////////////////// таймер
let days = document.getElementById('days');
let hours = document.getElementById('hours');
let minutes = document.getElementById('minutes');
let seconds = document.getElementById('seconds');

let dd = document.getElementById('dd');
let hh = document.getElementById('hh');
let mm = document.getElementById('mm');
let ss = document.getElementById('ss');

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
  let s = Math.floor((distance % (1000 * 60)) / (1000));

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
    document.querySelector('.text').innerText = `Предложение закончилось${currentYear}`;
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

////////////////////////////////////////////// функция смены фото в карточке комплектации
function changeImage(elem) {
  var imageUrl = elem.getAttribute("image");
  document.getElementById("car-img2").setAttribute("src", imageUrl);
  document.getElementById("car-img3").setAttribute("src", imageUrl);
  document.getElementById("car-img4").setAttribute("src", imageUrl);
}
document.querySelector('[value="c5"]').click();
