gsap.from(".main-image", {duration: 1.5, opacity: 0, scale: 0.3, ease: "back"}); // Starts with this animation

gsap.to(".main-image", {duration: 2, x: 200}); // Moves the element from its current position to 300 pixels down 

gsap.to(".main-title", {duration: 2, y: 100});

gsap.to(".main-description", {duration: 2, y: 100});
