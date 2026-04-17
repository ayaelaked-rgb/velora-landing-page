// ===============================
// SAFE GSAP (NO DISAPPEARING BUG)
// ===============================

document.addEventListener("DOMContentLoaded", () => {

    gsap.registerPlugin(ScrollTrigger);

    // HERO
    gsap.from(".hero-title", {
        y: 60,
        opacity: 0,
        duration: 1
    });

    gsap.from(".hero img", {
        x: 80,
        opacity: 0,
        duration: 1
    });

    // PRODUCTS (SAFE)
    gsap.utils.toArray(".product-card").forEach(card => {

        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: "top 85%",
                toggleActions: "play none none none"
            },
            y: 60,
            opacity: 0,
            duration: 0.8
        });

    });

    // HOVER
    document.querySelectorAll(".product-card").forEach(card => {

        card.addEventListener("mouseenter", () => {
            gsap.to(card, { scale: 1.05, duration: 0.3 });
        });

        card.addEventListener("mouseleave", () => {
            gsap.to(card, { scale: 1, duration: 0.3 });
        });

    });

});