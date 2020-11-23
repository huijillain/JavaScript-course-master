'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// there are keydown, keyup, keypress 3 functions
// KeyboardEvent in console section
// there are Escape, Enter, Shift 3 keys in console section

// document.addEvenetListener('keydown', function () {
//   console.log('A key was pressed');
// });

document.addEventListener('keydown', function (e) {
  // console.log(e.key);

  // if (e.key === 'Escape') {
  //   if(!modal.classList.contains{'hidden'}) {
  //     closeModal();
  //   }
  // }

  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
