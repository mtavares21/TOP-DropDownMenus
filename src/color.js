/* eslint-disable default-case */
/* eslint-disable array-callback-return */
/* eslint-disable no-return-assign */
/* eslint-disable no-param-reassign */
function colorRango(rgb) {
  const trigger = Array.from(document.querySelectorAll('.dropTrigger'));
  const list = Array.from(document.querySelectorAll('.dropList'));
  const listItem = Array.from(document.querySelectorAll('.dropList li'));
  const dropNav = document.querySelector('.dropNav');
  const brightness = Math.round(((parseFloat(rgb[0]) * 299)
        + (parseFloat(rgb[1]) * 587)
        + (parseFloat(rgb[2]) * 114)) / 1000);
  const colorMode = (brightness > 125) ? 'black' : 'white';

  // ColorThemes based on contrast (colorMode)
  switch (colorMode) {
    case 'white':
      // Nav Border
      dropNav.style.borderColor = 'rgb(255,255,255,0.8)';
      // Triggers
      trigger.map((trig) => {
        trig.style.backgroundColor = 'rgb(255,255,255,0.0)';
        trig.style.color = 'rgb(255,255,255,0.8)';
      });
      // List
      list.map((li) => {
        li.style.color = 'rgb(255,255,255,0.6)';
        li.style.backgroundColor = 'rgb(255,255,255,0.3)';
      });
      // List items:hover
      listItem.map((item) => {
        item.addEventListener('mouseenter', () => item.style.backgroundColor = 'rgb(255,255,255,0.2)');
        item.addEventListener('mouseleave', () => item.style.backgroundColor = 'rgb(255,255,255,0.0)');
      });
      break;
    case 'black':
      // Nav Border
      dropNav.style.borderColor = 'rgb(0,0,0,0.2)';
      // Triggers
      trigger.map((trig) => {
        trig.style.backgroundColor = 'none';
        trig.style.color = 'rgb(0,0,0,0.9)';
      });
      // List
      list.map((li) => {
        li.style.color = 'rgb(0,0,0,0.8)';
        li.style.backgroundColor = 'rgb(0,0,0,0.1)';
      });
      // List items:hover
      listItem.map((item) => {
        item.addEventListener('mouseenter', () => item.style.backgroundColor = 'rgb(0,0,0,0.1)');
        item.addEventListener('mouseleave', () => item.style.backgroundColor = 'rgb(0,0,0,0.0)');
      });
    // eslint-disable-next-line no-fallthrough
    // Default to css rules';
  }
}
export default colorRango;
