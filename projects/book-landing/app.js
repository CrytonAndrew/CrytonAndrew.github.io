gsap.from(".main-image", {duration: 1.5, opacity: 0, scale: 0.3, ease: "back"}); // Starts with this animation

gsap.to(".main-image", {duration: 2, x: 200}); // Moves the element from its current position to 300 pixels down 

gsap.to(".main-title", {duration: 2, y: 100});

gsap.to(".main-description", {duration: 2, y: 100});

const sr = ScrollReveal({
    origin: "top",
    distance: "80px", 
    duration: 2000,
    reset: true,
});


// About Section Reveal 
sr.reveal(".about-book-icon", {});
sr.reveal(".about-book-title", {});
sr.reveal(".about-book-p", {delay: 200});
sr.reveal(".about-book-quote", {delay: 200});
sr.reveal(".vl", {delay: 200});


// Review Section Reveal 
sr.reveal(".")