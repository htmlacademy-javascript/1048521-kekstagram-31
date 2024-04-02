
const formImgUpload = document.querySelector('.img-upload__form');
const inputIdUploadFile = formImgUpload.querySelector('#upload-file');
const imgUploadOverlay = formImgUpload.querySelector('.img-upload__overlay');
const imgUploadLabel = formImgUpload.querySelector('.img-upload__label');
const buttonCloseForm = formImgUpload.querySelector('.img-upload__cancel');

const closeForm = function() {
  imgUploadOverlay.classList.add('hidden');
  document.querySelector('body').classList.remove('modal-open');
  inputIdUploadFile.value = '';
};

document.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    closeForm();
  }
});

const openPhotoEditForm = function() {
  imgUploadOverlay.classList.remove('hidden');
  document.querySelector('body').classList.add('modal-open');
  buttonCloseForm.addEventListener('click', closeForm);
};

imgUploadLabel.addEventListener('click', openPhotoEditForm);
