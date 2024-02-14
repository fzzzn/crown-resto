const imageUrls = [
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
  "https://images.unsplash.com/photo-1572656631137-7935297eff55",
  "https://images.unsplash.com/photo-1634871572365-8bc444e6faea",
];

let currentIndex = 0;

function changeBackground() {
  const heroBackground = document.getElementById("hero-section");
  heroBackground.style.opacity = 0;

  setTimeout(() => {
    heroBackground.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("${imageUrls[currentIndex]}")`;
    heroBackground.style.opacity = 1;
  }, 500);

  currentIndex = (currentIndex + 1) % imageUrls.length;
}

function startCarousel() {
  changeBackground();

  setInterval(() => {
    changeBackground();
  }, 10000);
}

startCarousel();

var listItems = document.querySelectorAll("#nav-list ul li");
listItems.forEach(function (item) {
  item.onclick = displayMenu;
});

function displayMenu() {
  const menu = document.getElementById("nav-list");
  if (menu.className === "nav-list") {
    menu.className += " responsive-nav";
  } else {
    menu.className = "nav-list";
  }
}
