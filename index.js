gsap.registerPlugin(ScrollTrigger);
const tlLoader = gsap.timeline();
const tlHero = gsap.timeline();

tlLoader

  .set(".loader__item", {
    yPercent: -100,
  })

  .to(".loader__item", {
    yPercent: 0,
    duration: 1,
    stagger: 0.25,
  })
  .to(".loader__item", {
    yPercent: 100,
    duration: 1,
    stagger: 0.25,
  })
  .set(".loader__title", {
    scale: 15,
  })
  .to(".loader__title", {
    opacity: 1,
    duration: 5,
    scale: 1,
  })
  .set(
    ".loader__item",
    {
      yPercent: -100,
    },
    "-=2"
  )

  .to(".loader__title", {
    opacity: 0,
    duration: 1,
  })

  .to(
    ".loader",
    {
      yPercent: -100,
      duration: 1,
    },
    "-=1"
  );

// Laptop animation

const laptopscreen = window.matchMedia("(min-width:992px)");

if (laptopscreen.matches) {
  //Hero

  tlHero
    .to(
      ".left__item",

      {
        opacity: 1,
        duration: 2,
        delay: 9,
      }
    )
    .to(
      ".ship",
      {
        opacity: 1,
        duration: 2,
        transform: "translateX(0)",
      },
      "-=1"
    );

  gsap.to(".wrap__hero", {
    scrollTrigger: {
      trigger: ".wrap__hero",
      start: "top top",
      scrub: true,
      duration: 1,
    },
    css: {
      backgroundImage: 'url("./assets/hero_two.jpg")',

      backgroundPosition: "center center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
    },
  });

  gsap.to(".hero__title", {
    scrollTrigger: {
      trigger: ".wrap__hero",
      start: "-100 0",
      scrub: true,
    },

    yPercent: -100,
  });
  gsap.to(".hero__title_accent", {
    scrollTrigger: {
      trigger: ".wrap__hero",
      start: "-100 0",
      scrub: true,
    },

    color: "#ffdd00",
    scale: 1.2,
  });
  gsap.to(".hero__title", {
    scrollTrigger: {
      trigger: ".wrap__header",
      start: "90px -90px",
      scrub: true,
    },

    opacity: 0,
  });
  gsap.to(".hero__text", {
    scrollTrigger: {
      trigger: ".wrap__hero",
      start: "-100 0",
      scrub: true,
    },

    yPercent: -100,
  });
  gsap.to(".hero__text", {
    scrollTrigger: {
      trigger: ".wrap__header",
      start: "190px -220px",
      scrub: true,
    },
    scale: 1.3,
    opacity: 0,
  });
}
