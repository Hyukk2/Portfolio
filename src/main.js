const headerArea = document.querySelector(".header");
const headerRect = headerArea.getBoundingClientRect();

const homeArea = document.querySelector("#home");
const homeInDivArea = document.querySelector(".home__opacity");
const homeRect = homeArea.getBoundingClientRect();

// 아래로 스크롤시, header 범위에 background-color 적용
window.addEventListener("scroll", () => {
  headerChangeBg();
  homeChangeOpacity();
});

function headerChangeBg() {
  if (window.scrollY > headerRect.height) {
    headerArea.classList.add("header--dark");
  } else {
    headerArea.classList.remove("header--dark");
  }
}

function homeChangeOpacity() {}
