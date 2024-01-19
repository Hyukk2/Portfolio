'use strict';

const categories = document.querySelector('.categories');
const projects = document.querySelectorAll('.project');

categories.addEventListener('click', showFilter);

function showFilter(event) {
  const filter = event.target.dataset.category;
  if(!filter) {
    return;
  }
  projects.forEach(project => {
    if(filter === 'all' || filter === project.dataset.type) {
      project.style.display = 'block';
    } else {
      project.style.display = 'none';
    }
  });
}