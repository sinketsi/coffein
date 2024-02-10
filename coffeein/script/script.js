const capch = document.querySelector("#capch");
const leftBar = document.querySelector("#leftBar");
const rightBar = document.querySelector("#rightBar");
//для капучино
capch.addEventListener("mouseover", () => {
  leftBar.style = "transform: translateX(0)";
});
capch.addEventListener("mouseout", () => {
  leftBar.style = "transform: translateX(50px)";
});

capch.addEventListener("mouseover", () => {
  rightBar.style = "transform: translateX(0)";
  rightBar.style = "width: 250px";
});
capch.addEventListener("mouseout", () => {
  rightBar.style = "transform: translateX(-100px)";
});
//для капучино
//для латте
latte.addEventListener("mouseover", () => {
  leftBarl.style = "transform: translateX(0)";
});
latte.addEventListener("mouseout", () => {
  leftBarl.style = "transform: translateX(50px)";
});

latte.addEventListener("mouseover", () => {
  rightBarl.style = "transform: translateX(0)";
  rightBarl.style = "width: 250px";
});
latte.addEventListener("mouseout", () => {
  rightBarl.style = "transform: translateX(-100px)";
});
//для латте
//для американо
amerikano.addEventListener("mouseover", () => {
    leftBara.style = "transform: translateX(0)";
  });
  amerikano.addEventListener("mouseout", () => {
    leftBara.style = "transform: translateX(50px)";
  });
  
  amerikano.addEventListener("mouseover", () => {
    rightBara.style = "transform: translateX(0)";
    rightBara.style = "width: 250px";
  });
  amerikano.addEventListener("mouseout", () => {
    rightBara.style = "transform: translateX(-100px)";
  });
//для американо
// Для рафа
raf.addEventListener("mouseover", () => {
    leftBarr.style = "transform: translateX(0)";
  });
  raf.addEventListener("mouseout", () => {
    leftBarr.style = "transform: translateX(50px)";
  });
  
  raf.addEventListener("mouseover", () => {
    rightBarr.style = "transform: translateX(0)";
    rightBarr.style = "width: 250px";
  });
  raf.addEventListener("mouseout", () => {
    rightBarr.style = "transform: translateX(-100px)";
  });
// Для рафа
//для флета
flat_white.addEventListener("mouseover", () => {
    leftBarf.style = "transform: translateX(0)";
  });
  flat_white.addEventListener("mouseout", () => {
    leftBarf.style = "transform: translateX(50px)";
  });
  
  flat_white.addEventListener("mouseover", () => {
    rightBarf.style = "transform: translateX(0)";
    rightBarf.style = "width: 250px";
  });
  flat_white.addEventListener("mouseout", () => {
    rightBarf.style = "transform: translateX(-100px)";
  });
//для флета
//для экспрессо
espresso.addEventListener("mouseover", () => {
    leftBare.style = "transform: translateX(0)";
  });
  espresso.addEventListener("mouseout", () => {
    leftBare.style = "transform: translateX(50px)";
  });
  
  espresso.addEventListener("mouseover", () => {
    rightBare.style = "transform: translateX(0)";
    rightBare.style = "width: 250px";
  });
  espresso.addEventListener("mouseout", () => {
    rightBare.style = "transform: translateX(-100px)";
  });
//для экспрессо

const main = document.querySelector("#main");
const sezon = document.querySelector("#sezon");
const header = document.querySelector("header");
const sezonWrapper = document.querySelector("#sezonWrapper");
const loader = document.querySelector("#loader");

sezon.addEventListener("click", () => {
  loader.style = "display: block";
  header.style = "display: none";

  setTimeout(() => {
    header.style = "display: block";
    loader.style = "display: none";
  }, 1000);
});


main.addEventListener("click", () => {
  loader.style = "display: block";
  header.style = "display: none";

  setTimeout(() => {
    header.style = "display: block";
    loader.style = "display: none";
  }, 1000);
});
