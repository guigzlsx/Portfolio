const text = "Bienvenue sur le site web de Le Saux Guillaume.";
let index = 0;

function typeWriter() {
  if (index < text.length) {
    document.getElementById("typewriter").innerHTML += text.charAt(index);
    index++;
    setTimeout(typeWriter, 50);
  }
}

typeWriter();

const burger = document.querySelector(".burger");
const nav = document.querySelector("nav ul");

burger.addEventListener("click", () => {
  nav.classList.toggle("nav-active");
  burger.classList.toggle("burger-toggle");
});
