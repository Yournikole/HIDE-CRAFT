document.addEventListener("DOMContentLoaded", function() {

  // Плавный скролл к футеру и подсветка
  const contactsLinks = document.querySelectorAll('.contacts-link');
  const footer = document.querySelector('footer');

  contactsLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();

    footer.scrollIntoView({ behavior: 'smooth' });

    footer.classList.remove('highlight');
    void footer.offsetWidth;
    footer.classList.add('highlight');

    // Закрываем бургер-меню
    const menu = document.querySelector('.menu-burger');
    const burger = document.querySelector('.burger');

    menu.classList.remove('active');
    burger.classList.remove('active');
  });
});

  // Бургер-меню
  const burger = document.querySelector('.burger');
  const menu = document.querySelector('.menu-burger');

  burger.addEventListener('click', () => {
    menu.classList.toggle('active');
    burger.classList.toggle('active');
  });


});
