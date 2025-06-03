
document.addEventListener("DOMContentLoaded", function () {
    const scroll = new LocomotiveScroll({
        el: document.querySelector('[data-scroll-container]'),
        smooth: true
    });

    // Capturar clics de los botones del nav y hacer scroll animado manualmente
    document.querySelectorAll('a[data-scroll]').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault(); // Prevenir el salto automático

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                scroll.scrollTo(targetElement);
            }
        });
    });


    // Animaciones de entrada
    gsap.from("header h1", {
        y: -50,
        opacity: 0,
        duration: 1,
        ease: "power2.out"
    });

    gsap.from("header p", {
        y: 20,
        opacity: 0,
        delay: 0.5,
        duration: 1,
        ease: "power2.out"
    });

    gsap.from("nav .nav-btn", {
        opacity: 0,
        y: 10,
        delay: 0.7,
        duration: 0.5,
        stagger: 0.2
    });

    const backToTopBtn = document.getElementById('backToTop');

    // Mostrar/ocultar el botón según scroll
    scroll.on('scroll', (instance) => {
        const scrollY = instance.scroll.y;
        if (scrollY > 100) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    });

    // Hacer scroll al inicio al hacer clic
    backToTopBtn.addEventListener('click', () => {
        scroll.scrollTo(0);
    });

    // resto del código (botón volver al top, eventos, etc.)
});



