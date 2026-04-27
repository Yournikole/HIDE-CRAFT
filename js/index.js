document.addEventListener("DOMContentLoaded", function() {

  const burger = document.querySelector('.burger');
  const menu = document.querySelector('.menu-burger');
  const contactsLinks = document.querySelectorAll('.contacts-link');
  const footer = document.querySelector('footer');

  // Плавный скролл к футеру
  contactsLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();

      footer.scrollIntoView({ behavior: 'smooth' });

      footer.classList.remove('highlight');
      void footer.offsetWidth;
      footer.classList.add('highlight');

      // Закрываем меню
      menu.classList.remove('active');
      burger.classList.remove('active');
    });
  });

  // Бургер
  burger.addEventListener('click', () => {
    menu.classList.toggle('active');
    burger.classList.toggle('active');
  });

});