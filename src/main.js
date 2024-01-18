const headerArea = document.querySelector(".header");
const headerRect = headerArea.getBoundingClientRect();
const headerNav = document.querySelector('.header__nav');
const headerMenu = document.querySelector('.header__menu');
const headerToggle = document.querySelector('.header__toggle');

const homeArea = document.querySelector(".home__container");

const arrowUpArea = document.querySelector('.arrow-up');

window.addEventListener("scroll", () => {
  headerChangeBg();
  homeChangeOpacity();
  showArrowUp();
});

// 브라우저 너비 768px이하 일 때, 보이는 btn 클릭시
headerToggle.addEventListener('click', showHeaderMenu);

// menu list 클릭시
headerNav.addEventListener('click', blindHeaderMenu);

// header background 변경
function headerChangeBg() {
  if (window.scrollY > headerRect.height) {
    headerArea.classList.add("header--dark");
  } else {
    headerArea.classList.remove("header--dark");
  }
}

// home opacity 변경
function homeChangeOpacity() {
  let opacity = 1 - window.scrollY / homeArea.offsetHeight;
  opacity = opacity < 0 ? 0 : opacity;
  homeArea.style.opacity = opacity.toString();
}

// arrowUp 보여주기
function showArrowUp() {
  arrowUpArea.style.opacity = window.scrollY / homeArea.offsetHeight > 0.5 ? '1' : '0';
  arrowUpArea.style.visibility = window.scrollY / homeArea.offsetHeight > 0.5 ? 'visible' : 'hidden';
}

function showHeaderMenu() {
  headerMenu.classList.toggle('open');
}

function blindHeaderMenu(event) {
  const target = event.target;
  if(target.classList.contains('header__menu__item')) {
    headerMenu.classList.remove('open');
  }
}