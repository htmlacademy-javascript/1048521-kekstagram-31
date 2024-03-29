import {arrayObjectsWithPhotos} from './data.js';

const pictures = document.querySelector('.pictures');
const bigPicture = document.querySelector('.big-picture');
const bigPictureImg = bigPicture.querySelector('.big-picture__img');
const photoInBlockPicture = bigPictureImg.querySelector('img');
const likesCount = bigPicture.querySelector('.likes-count');
const commentsCount = bigPicture.querySelector('.social__comment-total-count');
const socialCaption = bigPicture.querySelector('.social__caption');
const socialCommentCount = bigPicture.querySelector('.social__comment-count');
const commentsLoader = bigPicture.querySelector('.comments-loader');
const socialComments = document.querySelector('.social__comments');


const showingLargePhoto = function(evt) {
  evt.preventDefault();
  const clickedImg = evt.target.closest('a')?.querySelector('.picture__img');

  if(!clickedImg) {
    return;
  }

  const clickElement = arrayObjectsWithPhotos.find((elem) => +elem.id === +clickedImg.id);
  bigPicture.classList.remove('hidden');
  photoInBlockPicture.src = clickElement.url;

  const likes = clickedImg.parentNode.querySelector('.picture__likes');
  const comments = clickedImg.parentNode.querySelector('.picture__comments');
  likesCount.textContent = likes.textContent;
  commentsCount.textContent = comments.textContent;
  socialCaption.textContent = clickElement.alt;

  socialCommentCount.classList.add('hidden');
  commentsLoader.classList.add('hidden');
  document.querySelector('body').classList.add('modal-open');


  const newElementItem = document.createElement('li');
  newElementItem.classList.add('social__comment');

  const newElementImg = document.createElement('img');
  newElementImg.classList.add('social__picture');
  newElementImg.src = clickElement.comments.avatar;
  newElementImg.alt = clickElement.comments.name;
  newElementImg.style.width = '35';
  newElementImg.style.height = '35';
  newElementItem.appendChild(newElementImg);

  const newElementMessage = document.createElement('p');
  newElementMessage.classList.add('social__text');
  newElementMessage.textContent = clickElement.comments.message;

  newElementItem.appendChild(newElementMessage);
  socialComments.appendChild(newElementItem);

};

pictures.addEventListener('click', showingLargePhoto);


//  закрытие окна большого фото по нажатию на крестик и ESC

const closeButton = bigPicture.querySelector('.big-picture__cancel');
const closePopupBigPicture = function() {
  socialComments.innerHTML = '';
  bigPicture.classList.add('hidden');
  document.querySelector('body').classList.remove('modal-open');
};
closeButton.addEventListener('click', closePopupBigPicture);

document.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    bigPicture.classList.add('hidden');
  }
});
