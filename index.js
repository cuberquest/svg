for (const img of document.images) img.draggable = false;

const scr = document.getElementById("scroll");
scr.addEventListener("click", () => scroll({ top: 0, left: 0, behavior: "smooth" }));