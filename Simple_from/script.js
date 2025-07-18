  // gsap.to(".container", {
  //   duration: 1.5,
  //   opacity: 1,
  //   scale: 1,
  //   ease: "bounce.out",
  // });

  // Animate container in from opacity 0 to 1
  gsap.from(".container", {
    duration: 2,
    opacity: 0,
    scale: 0.8,
    ease: "power2.out"
  });
  gsap.from(".backimg", {
    x: -200,
    opacity: 0,
    duration: 1,
    delay: 0.2,
    ease: "back.out(1.4)"
  });

