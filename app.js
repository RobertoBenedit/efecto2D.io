// Movement Animation to happen

const card = document.querySelector(".card");
const container = document.querySelector(".container");
// Items
const title = document.querySelector('.title');
const sneaker = document.querySelector('.sneaker img');
const purchase = document.querySelector('.purchase button');
const description = document.querySelector('.info h3');
const sizes = document.querySelector('.sizes');

// Moving Animation Event
container.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 12;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 12;
  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

// Animate In
container.addEventListener("mouseenter", (e) => {
  card.style.transition = "none";

  // Popout
  title.style.transform = "translateZ(100px) ";
  sneaker.style.transform = "translateZ(100px) scale(2) rotate(720deg) ";
  description.style.transform = "translateZ(100px)";
  sizes.style.transform = "translateZ(100px)";
  purchase.style.transform = "translateZ(100px) scale(1.1) ";
  purchase.style.background = "yellow";
});
purchase
// Animate Out
container.addEventListener("mouseleave", (e) => {
  card.style.transition = "all 1s ease";
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;
  // Popback
  title.style.transform = `translateZ(0px)`;
  sneaker.style.transform = "translateZ(0px)";
  description.style.transform = "translateZ(0px)";
  sizes.style.transform = "translateZ(0px)";
  purchase.style.transform = "translateZ(0px)";
  purchase.style.background = "black";

});
