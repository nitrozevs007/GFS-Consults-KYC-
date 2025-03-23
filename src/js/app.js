

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

    menu.style.transition = "opacity 0.3s ease";

    menuIcon.addEventListener("click", function () {
        menu.style.display = "block";
        setTimeout(() => {
            menu.style.opacity = "1";
        }, 100);

        menuIcon.style.display = "none";
        closeIcon.style.display = "block";
    });

    closeIcon.addEventListener("click", function () {
        menu.style.opacity = "0";
        setTimeout(() => {
            menu.style.display = "none";
        }, 200); 

        menuIcon.style.display = "block";
        closeIcon.style.display = "none";
    });
});


