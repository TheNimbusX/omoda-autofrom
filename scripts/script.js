// функция для кастомного селекта// функция для кастомного селекта// функция для кастомного селекта// функция для кастомного селекта

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

const customSelectComplectations = document.querySelector(".section__complectations-select-wrapper");
const selectBtnComplectations = document.querySelector(".section__complectations-select-button");

const selectedValueComplectations = document.querySelector(".section__complectations-selected-value");
const optionsListComplectations = document.querySelectorAll(".section__complectations-select-dropdown li");

// добавляем клик event на кнопку select button
selectBtnComplectations.addEventListener("click", () => {
  // добавление\удаление active class
  customSelectComplectations.classList.toggle("active");
  // обновление атрибура aria-expanded based в текущем состоянии
  selectBtnComplectations.setAttribute(
    "aria-expanded",
    selectBtnComplectations.getAttribute("aria-expanded") === "true" ? "false" : "true"
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


// таймер// таймер// таймер// таймер// таймер// таймер// таймер// таймер// таймер// таймер// таймер

document.addEventListener('DOMContentLoaded', function() {
  // конечная дата
  const deadline = new Date(2024, 07, 15);
  // id таймера
  let timerId = null;
  // склонение числительных
  function declensionNum(num, words) {
    return words[(num % 100 > 4 && num % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(num % 10 < 5) ? num % 10 : 5]];
  }
  // вычисляем разницу дат и устанавливаем оставшееся времени в качестве содержимого элементов
  function countdownTimer() {
    const diff = deadline - new Date();
    if (diff <= 0) {
      clearInterval(timerId);
    }
    const days = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0;
    const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
    const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
    const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;
    $days.textContent = days < 10 ? '0' + days : days;
    $hours.textContent = hours < 10 ? '0' + hours : hours;
    $minutes.textContent = minutes < 10 ? '0' + minutes : minutes;
    $seconds.textContent = seconds < 10 ? '0' + seconds : seconds;
    $days.dataset.title = declensionNum(days, ['день', 'дня', 'дней']);
    $hours.dataset.title = declensionNum(hours, ['час', 'часа', 'часов']);
    $minutes.dataset.title = declensionNum(minutes, ['минута', 'минуты', 'минут']);
    $seconds.dataset.title = declensionNum(seconds, ['секунда', 'секунды', 'секунд']);
  }
  // получаем элементы, содержащие компоненты даты
  const $days = document.querySelector('.days');
  const $hours = document.querySelector('.hours');
  const $minutes = document.querySelector('.mins');
  const $seconds = document.querySelector('.secs');
  // вызываем функцию countdownTimer
  countdownTimer();
  // вызываем функцию countdownTimer каждую секунду
  timerId = setInterval(countdownTimer, 500);
});


