const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, i) => {
  const itemLength = movieLists[i].querySelectorAll("img").length;
  let clickCounter = 0;

  const windowWidth = Math.floor(window.innerWidth / 270);

  arrow.addEventListener("click", () => {
    clickCounter++;
    if (itemLength - (5 + clickCounter) + (5 - windowWidth) >= 0) {
      movieLists[i].style.transform = `translateX(${
        movieLists[i].computedStyleMap().get("transform")[0].x.value - 302
      }px)`;
    } else {
      movieLists[i].style.transform = "translateX(0px)";
      clickCounter = 0;
    }
  });
});

const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(
  ".container, .movie-list-title, .navbar-container, .sidebar, .sidebar-icon, .toggle"
);

ball.addEventListener("click", () => {
  items.forEach((item) => {
    item.classList.toggle("active");
  });
  ball.classList.toggle("active");
});
