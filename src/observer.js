'use strict';

let observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      entry.target.style.backgroundColor = 'red';
    }
  })
}, { threshold: 0.7 });

const sectionAreas = document.querySelectorAll('.main>section');
sectionAreas.forEach((sectionTag) => {
  observer.observe(sectionTag);
});

const footer = document.querySelector('footer');
observer.observe(footer);