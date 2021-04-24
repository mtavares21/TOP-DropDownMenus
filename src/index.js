/* eslint-disable array-callback-return */
/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
import './menu.css';
import colorRango from './color';

// Take care of bottom-border-radius on focus
const focusFix = (() => {
  const navBar = Array.from(document.querySelectorAll('.dropTrigger'));
  const lastIndex = navBar.length - 1;
  const navBar0 = navBar[0];
  const navBarLast = navBar[lastIndex];
  const list = Array.from(document.querySelectorAll('.dropList'));
  const list0 = list[0];
  const listLast = list[lastIndex];
  const nav = document.querySelector('.dropNav');
  // Set left border
  navBar0.addEventListener('mouseenter', () => nav.style.borderBottomLeftRadius = '0px');
  navBar0.addEventListener('mouseleave', () => nav.style.borderBottomLeftRadius = '5px');
  list0.addEventListener('mouseenter', () => nav.style.borderBottomLeftRadius = '0px');
  list0.addEventListener('mouseleave', () => nav.style.borderBottomLeftRadius = '5px');
  // Set rigth border
  navBarLast.addEventListener('mouseenter', () => nav.style.borderBottomRightRadius = '0px');
  navBarLast.addEventListener('mouseleave', () => nav.style.borderBottomRightRadius = '5px');
  listLast.addEventListener('mouseenter', () => nav.style.borderBottomRightRadius = '0px');
  listLast.addEventListener('mouseleave', () => nav.style.borderBottomRightRadius = '5px');
})();

// User options: font, size(set width and heigth of navbar), color(base theme colors on option);
function setUp(fontFamily, fontSize, rango) {
  const trigger = Array.from(document.querySelectorAll('.dropTrigger'));
  const list = Array.from(document.querySelectorAll('.dropList'));
  const listItem = Array.from(document.querySelectorAll('.dropList li'));
  const nav = document.querySelector('.dropNav');
  const dropContain = Array.from(document.querySelectorAll('dropContain'));
  // Font-size to dimensions
  nav.style.width = `${(parseFloat(fontSize) * 10) * (trigger.length)}px`;
  nav.style.height = `${parseFloat(fontSize) + 10}px`;
  trigger.map((trig) => {
    trig.style.height = `${parseFloat(fontSize) + 5}px`;
  });
  dropContain.map((item) => item.style.width = parseFloat(fontSize) * 10 - 10);
  list.map((item) => {
    item.addEventListener('mouseenter', () => {
    // Formula: fontsize * average items per trigger (not perfect)
      const formula = parseFloat(fontSize) * (listItem.length / trigger.length) + 10;
      item.style.height = `${formula}px`;
      item.style.width = `${parseFloat(fontSize) * 10+2}px`;
    });
    item.addEventListener('mouseleave', () => {
      item.style.height = '0px';
      item.style.width = `${parseFloat(fontSize) * 10+2}px`;
    });
  });
  trigger.map((item, index) => {
    item.addEventListener('mouseenter', () => {
    // Formula: fontsize * average items per trigger (not perfect)
      const formula = parseFloat(fontSize) * (listItem.length / trigger.length) + 10;
      list[index].style.height = `${formula}px`;
      list[index].style.width = `${parseFloat(fontSize) * 10+2}px`;
    });
    item.addEventListener('mouseleave', () => list[index].style.height = '0px');
    item.style.width = `${parseFloat(fontSize) * 10+2}px`;
  });
  // Font SetUp
  trigger.map((trig) => {
    trig.style.fontFamily = `${fontFamily}`;
    trig.style.fontSize = `${fontSize}px`;
  });
  list.map((li) => {
    li.style.fontFamily = `${fontFamily}`;
    li.style.fontSize = `${0.9 * (parseFloat(fontSize))}px`;
  });
  // eslint-disable-next-line no-unused-expressions
  rango ? colorRango(rango) : 'default';
}

export default setUp;
