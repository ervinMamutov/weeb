'use strict';

const documentAction = (e) => {
  const targetElement = e.target;
  if (targetElement.closest('.icon-menu')) {
    document.documentElement.classList.toggle('open-menu');
  }
};
document.addEventListener('click', documentAction);

// variant 2
// const button = document.querySelector('.action-header__icon-menu');

// const menu = document.querySelector('.menu');

// const menuStyle = menu.style;
// let isMenuOpen = false;

// button.addEventListener('click', () => {
//   if (isMenuOpen) {
//     menuStyle.insetInlineStart = '-100%';
//   }

//   if (!isMenuOpen) {
//     menuStyle.insetInlineStart = '0';
//   }

//   isMenuOpen = !isMenuOpen;
// });
