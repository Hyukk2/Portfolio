'use strict';

const sectionIds = ['#home', '#about', '#skills', '#projects', '#testimonials', '#contact'];
const sections = sectionIds.map(id => document.querySelector(id));
const menuItems = sectionIds.map(id => document.querySelector(`[href="${id}"]`));

const visibleSections = sectionIds.map(() => false);
let selectMenuItem = menuItems[0];

const options = {
  rootMargin: '-20% 0px 0px 0px',
  threshold: [0, 0.95],
};
const observer = new IntersectionObserver(observerCallback, options);
sections.forEach(section => observer.observe(section));

function observerCallback(entries) {
  let selectLastOne; // flag 변수

  entries.forEach(entry => {
    const index = sectionIds.indexOf(`#${entry.target.id}`);
    visibleSections[index] = entry.isIntersecting;
    selectLastOne = index === sectionIds.length - 1 && entry.isIntersecting && entry.intersectionRatio >= 0.93;
  });

  const navIndex = selectLastOne ? sectionIds.length - 1 : findFirstIntersecting(visibleSections);
  selectMenu(navIndex);
}

function findFirstIntersecting(visibleSections) {
  const index = visibleSections.indexOf(true);
  return index >=0 ? index : 0;
}

function selectMenu(index) {
  const menuItem = menuItems[index];
  if(!menuItem) return;
  selectMenuItem.classList.remove('selected');
  selectMenuItem = menuItem;
  selectMenuItem.classList.add('selected');
}