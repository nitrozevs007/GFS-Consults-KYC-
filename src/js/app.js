

document.addEventListener("DOMContentLoaded", function () {
  const slideList = document.getElementById("slideList");
  const leftBtn = document.getElementById("leftBtn");
  const rightBtn = document.getElementById("rightBtn");

  let scrollAmount = 0;
  const scrollStep = slideList.children[0].offsetWidth + 30;

  rightBtn.addEventListener("click", function () {
      if (scrollAmount < slideList.scrollWidth - slideList.clientWidth) {
          scrollAmount += scrollStep;
          slideList.scrollTo({
              left: scrollAmount,
              behavior: "smooth"
          });
      }
  });

  leftBtn.addEventListener("click", function () {
      if (scrollAmount > 0) {
          scrollAmount -= scrollStep;
          slideList.scrollTo({
              left: scrollAmount,
              behavior: "smooth"
          });
      }
  });
});


document.addEventListener("DOMContentLoaded", function () {
  const menu = document.getElementById("nav-bar");
  const menuIcon = document.getElementById("menu-btn");
  const closeIcon = document.getElementById("close-btn");

  menuIcon.addEventListener("click", function () {
      menu.classList.toggle("active");
  });

  closeIcon.addEventListener("click", function () {
      menu.classList.remove("active");
  });
});