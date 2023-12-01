document.querySelectorAll("img").forEach(i => {
  i.draggable = "false";
  i.oncontextmenu = (e) => e.preventDefault();
});