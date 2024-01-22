for (const img of document.images) img.draggable = false;

onload = () => {
  localStorage.setItem("scrY", scrollY);
  scroll(0, 0);
  scroll(0, localStorage.getItem("scrY"));
  addEventListener("scrollend", () => localStorage.setItem("scrY", scrollY));
};

const scr = document.getElementById("scroll");
scr.addEventListener("click", () => scroll(0, 0));