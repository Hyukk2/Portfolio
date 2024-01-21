'use strict';

const headerMenuItems = document.querySelectorAll('.header__menu__item');
let observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    const headerMenuItem = Array.from(headerMenuItems).find(item => item.dataset.section === entry.target.id);
    if(entry.isIntersecting) {
      headerMenuItem.classList.add('selected');
    } 
    else {
      headerMenuItem.classList.remove('selected');
    }
  });
}, { threshold: 0.6 });

const sectionAreas = document.querySelectorAll('.main>section');
sectionAreas.forEach((sectionTag) => {
  console.log(sectionTag.dataset);
  observer.observe(sectionTag);
});

const footer = document.querySelector('footer');
observer.observe(footer);