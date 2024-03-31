import {arrayObjectsWithPhotos} from './data.js';

const pictures = document.querySelector('.pictures');
const bigPicture = document.querySelector('.big-picture');
const bigPictureImg = bigPicture.querySelector('.big-picture__img');
const photoInBlockPicture = bigPictureImg.querySelector('img');
const likesCount = bigPicture.querySelector('.likes-count');
const socialCaption = bigPicture.querySelector('.social__caption');
const socialComments = bigPicture.querySelector('.social__comments');
const socialCommentsLoader = bigPicture.querySelector('.social__comments-loader');
const commentShownCount = bigPicture.querySelector('.social__comment-shown-count');
let beginning = 0;
const step = 5;

const sliceCommentsArray = function(array) {
  beginning = beginning + step;
  return array.slice(0, beginning);
};

const createMessage = function(element) {
  const newElementItem = document.createElement('li');
  newElementItem.classList.add('social__comment');

  const newElementImg = document.createElement('img');
  newElementImg.classList.add('social__picture');

  newElementImg.src = element.avatar;
  newElementImg.alt = element.name;
  newElementItem.appendChild(newElementImg);

  const newElementMessage = document.createElement('p');
  newElementMessage.classList.add('social__text');
  newElementMessage.textContent = element.message;
  newElementItem.appendChild(newElementMessage);
  socialComments.appendChild(newElementItem);
};

const showingLargePhoto = function(evt) {
  evt.preventDefault();
  const clickedImg = evt.target.closest('a')?.querySelector('.picture__img');

  if(!clickedImg) {
    return;
  }

  const clickElement = arrayObjectsWithPhotos.
    find((elem) => +elem.id === +clickedImg.id);
  bigPicture.classList.remove('hidden');
  photoInBlockPicture.src = clickElement.url;

  const likes = clickedImg.parentNode.querySelector('.picture__likes');
  likesCount.textContent = likes.textContent;
  socialCaption.textContent = clickElement.description;
  document.querySelector('body').classList.add('modal-open');

  let array = sliceCommentsArray(clickElement.comments);
  commentShownCount.textContent = array.length;

  const updateComments = function() {
    socialComments.innerHTML = '';
    array.forEach(createMessage);

    if(clickElement.comments.length <= beginning) {
      socialCommentsLoader.classList.add('hidden');
    }
  };

  const uploadComments = function() {
    array = sliceCommentsArray(clickElement.comments);
    updateComments(clickElement.comments);
    commentShownCount.textContent = array.length;
  };

  socialCommentsLoader.addEventListener('click', uploadComments);

  updateComments();
};

pictures.addEventListener('click', showingLargePhoto);

//  закрытие окна большого фото по нажатию на крестик и ESC

const closeButton = bigPicture.querySelector('.big-picture__cancel');
const closePopupBigPicture = function(evt) {
  evt.preventDefault();
  socialComments.innerHTML = '';
  bigPicture.classList.add('hidden');
  document.querySelector('body').classList.remove('modal-open');
};
closeButton.addEventListener('click', closePopupBigPicture);

document.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    bigPicture.classList.add('hidden');
    socialComments.innerHTML = '';
  }
});
