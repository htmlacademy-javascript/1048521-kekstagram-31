import {arrayObjectsWithPhotos} from './data.js';

const boxPictures = document.querySelector('.pictures');

const templatePicture = document.querySelector('#picture').content;
const linkPicture = templatePicture.querySelector('.picture');

const similarListFragment = document.createDocumentFragment();

arrayObjectsWithPhotos.forEach((element) => {
  const cloneTemplate = linkPicture.cloneNode(true);
  const photoUser = cloneTemplate.querySelector('img');
  const photoLikes = cloneTemplate.querySelector('.picture__likes');
  const photoComments = cloneTemplate.querySelector('.picture__comments');

  photoUser.id = element.id;
  photoUser.src = element.url;
  photoUser.alt = element.description;
  photoLikes.textContent = element.likes;
  photoComments.textContent = element.comments.length;
  similarListFragment.appendChild(cloneTemplate);
});

boxPictures.appendChild(similarListFragment);
