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
    const leftBtn = document.querySelector('.arrow.left');
    const rightBtn = document.querySelector('.arrow.right');
    const lightboxTitle = document.getElementById('lightbox-title');
    const lightboxDesc = document.getElementById('lightbox-desc');
    const counter = document.getElementById('lightbox-counter');
    

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
    updateLightboxContent();
    updateArrows(); // 👈 ВОТ ЭТО КРИТИЧНО

    backToTop.classList.remove('show');
    document.body.classList.add('no-scroll'); // 👈 блокируем скролл
}
        function updateLightboxContent() {
    const item = images[currentIndex].closest('.portfolio-item');

    const title = item.querySelector('h3')?.textContent;
    const desc = item.querySelector('p')?.textContent;

    lightboxTitle.textContent = title || '';
    lightboxDesc.textContent = desc || '';

    lightboxImg.src = images[currentIndex].src;

    counter.textContent = `${currentIndex + 1} / ${images.length}`;
}

        // Переключение влево
leftBtn?.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateLightboxContent();
        updateArrows();
    }
});

rightBtn?.addEventListener('click', () => {
    if (currentIndex < images.length - 1) {
        currentIndex++;
        updateLightboxContent();
        updateArrows();
    }
});

function closeLightbox() {
    lightbox.style.display = 'none';
    document.body.classList.remove('no-scroll');
     backToTop.classList.add('show');
}

closeBtn?.addEventListener('click', closeLightbox);

lightbox.addEventListener('click', e => {
    if (e.target === lightbox) closeLightbox();
});


    }

    function updateArrows() {
    leftBtn.style.display = currentIndex === 0 ? 'none' : 'block';
    rightBtn.style.display = currentIndex === images.length - 1 ? 'none' : 'block';
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