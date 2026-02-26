document.addEventListener("DOMContentLoaded", function() {

    /* =====================================================
       1. КНОПКА "НАВЕРХ"
       Плавная прокрутка страницы к началу
    ===================================================== */
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    // Делаем функцию глобальной, чтобы её можно было вызвать из HTML (onclick)
    window.scrollToTop = scrollToTop;


    /* =====================================================
       2. LIGHTBOX (Открытие изображений)
    ===================================================== */

    // Получаем все изображения портфолио
    const images = document.querySelectorAll('.portfolio-item img');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.querySelector('.close');
    const leftBtn = document.querySelector('.left');
    const rightBtn = document.querySelector('.right');

    let currentIndex = 0; // Текущий индекс открытого изображения

    if (images.length && lightbox && lightboxImg) {

        // Клик по изображению — открыть lightbox
        images.forEach((img, index) => {
            img.addEventListener('click', () => {
                currentIndex = index;
                openLightbox();
            });
        });

        // Функция открытия lightbox
        function openLightbox() {
            lightbox.style.display = 'flex';
            lightboxImg.src = images[currentIndex].src;
        }

        // Закрытие по кнопке
        closeBtn?.addEventListener('click', () => {
            lightbox.style.display = 'none';
        });

        // Переключение влево
        leftBtn?.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            openLightbox();
        });

        // Переключение вправо
        rightBtn?.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % images.length;
            openLightbox();
        });

        // Закрытие при клике вне картинки
        lightbox.addEventListener('click', e => {
            if (e.target === lightbox) {
                lightbox.style.display = 'none';
            }
        });
    }


    /* =====================================================
       3. КНОПКА "НАЗАД НАВЕРХ"
       Появляется при прокрутке страницы
    ===================================================== */

    const backToTop = document.querySelector('.back-to-top');

    if (backToTop) {
        window.addEventListener('scroll', () => {

            const scrollY = window.scrollY;
            const windowHeight = window.innerHeight;

            // Показываем кнопку если прокрутка больше 10% высоты экрана
            if (scrollY > windowHeight * 0.1) {
                backToTop.classList.add('show');
            } else {
                backToTop.classList.remove('show');
            }
        });
    }

});