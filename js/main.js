// console.log('Привет МИР!');
// console.log(12 + 1 +'привет, максимка');

// alert('Учись, блеать!');


var swiper = new Swiper(".slider-cars .mySwiper", {
  // autoplay: {
  //   delay: 5000,
  // },
  spaceBetween: 32,
  slidesPerView: 1,
  pagination: {
    el: ".slider-cars .swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".slider-cars .swiper-button-next",
    prevEl: ".slider-cars .swiper-button-prev",
  },
});

// Находим все элементы с классом .accordeon
var accordeonItems = document.querySelectorAll('.accordeon');

// Перебираем найденные элементы
accordeonItems.forEach(function(item) {
  // Находим в каждом элементе вложенный элемент с классом .accordeon__question
  var question = item.querySelector('.accordeon__question');

  // Слушаем событие клика по вложенному элементу .accordeon__question
  question.addEventListener('click', function() {
    // Проверяем, есть ли у текущего элемента активный класс .active
    var isActive = item.classList.contains('active');

    // Если у элемента есть активный класс, то удаляем его, иначе добавляем
    if (isActive) {
      item.classList.remove('active');
    } else {
      item.classList.add('active');
    }
  });
});


