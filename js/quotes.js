const quotes = document.querySelector(".quotes");

quotes.innerHTML = quotes.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);

anime
  .timeline({ loop: true })
  .add({
    targets: ".quotes .letter",
    scale: [4, 1],
    opacity: [0, 1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: (el, i) => 70 * i
  })
  .add({
    targets: ".quotes",
    opacity: 0,
    duration: 5000,
    easing: "easeOutExpo",
    delay: 1000
  });
