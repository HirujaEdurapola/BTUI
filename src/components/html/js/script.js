document.addEventListener('DOMContentLoaded', function () {
    const rainContainer = document.getElementById('rain');
    const lightning = document.getElementById('lightning');

    function createRaindrop() {
        const raindrop = document.createElement('div');
        raindrop.classList.add('raindrop');

        raindrop.style.left = Math.random() * 100 + 'vw';
        raindrop.style.animationDuration = (Math.random() * 0.5 + 0.5) + 's';
        raindrop.style.height = Math.random() * 30 + 30 + 'px';

        rainContainer.appendChild(raindrop);

        setTimeout(() => {
            raindrop.remove();
        }, 2000);
    }

    setInterval(createRaindrop, 100);

    function triggerLightning() {
        const lightningInterval = Math.random() * 1000 + 500;

        gsap.to(lightning, { opacity: 1, duration: 0.1, ease: "power2.inOut", yoyo: true, repeat: 1 });
        setTimeout(triggerLightning, lightningInterval);
    }

    triggerLightning();
});


