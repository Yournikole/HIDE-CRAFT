document.addEventListener("DOMContentLoaded", function() {

  // Подсветка подвала
  const contactsLink = document.getElementById('contacts-link');
  const footer = document.querySelector('footer');

  if (contactsLink && footer) {
    contactsLink.addEventListener('click', function(e) {
      e.preventDefault();

      footer.scrollIntoView({ behavior: 'smooth' });

      footer.classList.remove('highlight');
      void footer.offsetWidth; // перезапуск анимации
      footer.classList.add('highlight');
    });
  }

  // Бургер-меню
  const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');

burger.addEventListener('click', () => {
  menu.classList.toggle('active'); // переключаем видимость меню
});


});
