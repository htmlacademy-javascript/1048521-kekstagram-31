const pictures = document.querySelector('.pictures');
const bigPicture = document.querySelector('.big-picture');
const bigPictureImg = bigPicture.querySelector('.big-picture__img');
const photoInBlockPicture = bigPictureImg.querySelector('img');

const showingLargePhoto = function(evt) {
  if (evt.target.className === 'picture__img') {
    bigPicture.classList.remove('hidden');
    photoInBlockPicture.src = evt.target.src;
  }
};

pictures.addEventListener('click', showingLargePhoto);
