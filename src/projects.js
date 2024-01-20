'use strict';

const categories = document.querySelector('.categories');
const projects = document.querySelectorAll('.project');
const projectsContainer = document.querySelector('.projects');

categories.addEventListener('click', (event) => {
  const filter = event.target.dataset.category;
  if(!filter) {
    return;
  }
  selectedMenuReset(event.target);
  showAnimation();
  showFilter(filter);
});

// 프로젝트 필터링
function showFilter(filter) {
  projects.forEach(project => {
    if(filter === 'all' || filter === project.dataset.type) {
      project.style.display = 'block';
    } else {
      project.style.display = 'none';
    }
  });
}

// selected 메뉴 재설정
function selectedMenuReset(target) {
  const selected = document.querySelector('.category--selected');
  selected.classList.remove('category--selected');
  target.classList.add('category--selected');
}

// 프로젝트 범위 애니메이션
function showAnimation() {
  projectsContainer.classList.add('animation');
  setTimeout(() => {
    projectsContainer.classList.remove('animation');
  },300);
}