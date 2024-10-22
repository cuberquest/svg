for (const img of document.images) img.draggable = false;

onload = () => {
  localStorage.setItem("scrY", scrollY);
  scroll(0, 0);
  scroll(0, Number(localStorage.getItem("scrY")));
  addEventListener("scrollend", () => localStorage.setItem("scrY", scrollY));
};

const scr = document.getElementById("scroll");
scr.addEventListener("click", function() {
  scroll(0, 0);
});

const images = [
  { src: "img/logo.svg", desc: "Box Content 1" },
  { src: "img/logo.svg", desc: "Box Content 2" },
  { src: "img/logo.svg", desc: "Box Content 3" },
  { src: "img/logo.svg", desc: "Box Content 4" },
  { src: "img/logo.svg", desc: "Box Content 5" },
  { src: "img/logo.svg", desc: "Box Content 6" },
  { src: "img/logo.svg", desc: "Box Content 7" },
  { src: "img/logo.svg", desc: "Box Content 8" },
  { src: "img/logo.svg", desc: "Box Content 9" },
  { src: "img/logo.svg", desc: "Box Content 10" },
  { src: "img/logo.svg", desc: "Box Content 11" },
  { src: "img/logo.svg", desc: "Box Content 12" }
]

for (let i = 0; i < 12; i++) {
  document.getElementById("suggested").innerHTML += `<div class="svg-box"><a href><img src="${images[i].src}"><div class="desc">${images[i].desc}</div></a></div>\\`
}