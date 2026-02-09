document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();

    const titleText = "@aekoray";
    let titleIdx = 0;
    let isRemoving = false;

    function animateTitle() {
        document.title = titleText.slice(0, titleIdx + 1);
        if (!isRemoving) {
            titleIdx++;
            if (titleIdx === titleText.length) {
                isRemoving = true;
                setTimeout(animateTitle, 2000);
                return;
            }
        } else {
            titleIdx--;
            if (titleIdx === 0) isRemoving = false;
        }
        setTimeout(animateTitle, isRemoving ? 150 : 250);
    }
    animateTitle();
});