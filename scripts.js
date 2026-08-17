document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialisation sécurisée des icônes Lucide
    function initIcons() {
        if (typeof lucide !== 'undefined' && lucide.createIcons) {
            lucide.createIcons();
        } else {
            setTimeout(initIcons, 50);
        }
    }
    initIcons();

    // 2. Animation dynamique du titre de l'onglet navigateur
    const titleText = "@aekoray";
    let titleIdx = 0;
    let isRemoving = false;
    let titleTimeout = null;

    function animateTitle() {
        document.title = titleText.slice(0, titleIdx + 1);
        const speed = isRemoving ? 140 : 220;

        if (!isRemoving) {
            titleIdx++;
            if (titleIdx === titleText.length) {
                isRemoving = true;
                titleTimeout = setTimeout(animateTitle, 2200);
                return;
            }
        } else {
            titleIdx--;
            if (titleIdx === 0) {
                isRemoving = false;
            }
        }

        titleTimeout = setTimeout(animateTitle, speed);
    }

    animateTitle();

    // 3. Gestion de la Lightbox accessible
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const lightboxClose = document.getElementById('lightbox-close');
    let lastActiveElement = null;

    function openLightbox(item) {
        lastActiveElement = document.activeElement;
        const src = item.getAttribute('data-src') || item.querySelector('img')?.src;
        const caption = item.getAttribute('data-caption') || item.querySelector('img')?.alt || '';

        if (src && lightboxImg) {
            lightboxImg.src = src;
            lightboxImg.alt = caption;
            if (lightboxCaption) {
                lightboxCaption.textContent = caption;
            }
            lightbox.classList.add('active');
            lightbox.setAttribute('aria-hidden', 'false');
            lightboxClose?.focus();
            document.body.style.overflow = 'hidden';
        }
    }

    function closeLightbox() {
        if (lightbox) {
            lightbox.classList.remove('active');
            lightbox.setAttribute('aria-hidden', 'true');
            document.body.style.overflow = '';
            if (lastActiveElement && typeof lastActiveElement.focus === 'function') {
                lastActiveElement.focus();
            }
        }
    }

    document.querySelectorAll('.gallery-item').forEach(item => {
        item.addEventListener('click', () => openLightbox(item));
        item.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                openLightbox(item);
            }
        });
    });

    if (lightboxClose) {
        lightboxClose.addEventListener('click', closeLightbox);
    }

    if (lightbox) {
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) closeLightbox();
        });
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightbox && lightbox.classList.contains('active')) {
            closeLightbox();
        }
    });
});