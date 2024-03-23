const pictures = document.querySelector('.pictures');
const bigPicture = document.querySelector('.big-picture');
const bigPictureImg = bigPicture.querySelector('.big-picture__img');
const photoInBlockPicture = bigPictureImg.querySelector('img');
const likesCount = bigPicture.querySelector('.likes-count');
const commentsCount = bigPicture.querySelector('.social__comment-total-count');
const socialCaption = bigPicture.querySelector('.social__caption');


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
  }
};

pictures.addEventListener('click', showingLargePhoto);
