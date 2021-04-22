import './menu.css';

const trigger = document.querySelector('.dropTrigger');
const list = document.querySelector('.dropList');

trigger.addEventListener('mouseenter', () => list.style.display = 'flex');
trigger.addEventListener('mouseleave', () => list.style.display='none');
