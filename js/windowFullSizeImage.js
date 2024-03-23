const pictures = document.querySelector('.pictures');
const bigPicture = document.querySelector('.big-picture');
const bigPictureImg = bigPicture.querySelector('.big-picture__img');
const photoInBlockPicture = bigPictureImg.querySelector('img');
const likesCount = bigPicture.querySelector('.likes-count');
const commentsCount = bigPicture.querySelector('.social__comment-total-count');
const socialCaption = bigPicture.querySelector('.social__caption');
const socialCommentCount = bigPicture.querySelector('.social__comment-count');
const commentsLoader = bigPicture.querySelector('.comments-loader');

const showingLargePhoto = function(evt) {
  if (evt.target.className === 'picture__img') {
    bigPicture.classList.remove('hidden');
    photoInBlockPicture.src = evt.target.src;

    const likes = evt.target.parentNode.querySelector('.picture__likes');
    const comments = evt.target.parentNode.querySelector('.picture__comments');
    // console.log();
    likesCount.textContent = likes.textContent;
    commentsCount.textContent = comments.textContent;
    socialCaption.textContent = evt.target.alt;

    socialCommentCount.classList.add('hidden');
    commentsLoader.classList.add('hidden');
    document.querySelector('body').classList.add('modal-open');
  }
};

pictures.addEventListener('click', showingLargePhoto);


//  закрытие окна большого фото по нажатию на крестик и ESC

const closeButton = bigPicture.querySelector('.big-picture__cancel');
const closePopupBigPicture = function() {
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
