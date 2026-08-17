document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();

    const titleText = "@aekoray";
    let titleIdx = 0;
    let isRemoving = false;
    let titleTimeout;

    function animateTitle() {
        document.title = titleText.slice(0, titleIdx + 1);
        const speed = isRemoving ? 150 : 250;

        if (!isRemoving) {
            titleIdx++;
            if (titleIdx === titleText.length) {
                isRemoving = true;
                titleTimeout = setTimeout(animateTitle, 2000);
                return;
            }
        } else {
            titleIdx--;
            if (titleIdx === 0) isRemoving = false;
        }

        titleTimeout = setTimeout(animateTitle, speed);
    }

    animateTitle();

    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxClose = document.querySelector('.lightbox-close');

    document.querySelectorAll('.gallery-item img').forEach(img => {
        img.addEventListener('click', () => {
            lightbox.style.display = 'flex';
            lightboxImg.src = img.src;
            lightboxImg.alt = img.alt;
        });
    });

    function closeLightbox() {
        lightbox.style.display = 'none';
    }

    lightboxClose.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) closeLightbox();
    });
});