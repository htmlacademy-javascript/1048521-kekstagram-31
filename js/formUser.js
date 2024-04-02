
const formImgUpload = document.querySelector('.img-upload__form');
const inputIdUploadFile = formImgUpload.querySelector('#upload-file');
const imgUploadOverlay = formImgUpload.querySelector('.img-upload__overlay');
const imgUploadLabel = formImgUpload.querySelector('.img-upload__label');
const buttonCloseForm = formImgUpload.querySelector('.img-upload__cancel');
const inputHashtag = formImgUpload.querySelector('.text__hashtags');
const inputDescription = formImgUpload.querySelector('.text__description');


const closeForm = function() {
  imgUploadOverlay.classList.add('hidden');
  document.querySelector('body').classList.remove('modal-open');
  inputIdUploadFile.value = '';
};

document.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    if(evt.target === inputHashtag) {
      return;
    }
    if(evt.target === inputDescription) {
      return;
    }
    closeForm();
  }
});

const openPhotoEditForm = function() {
  imgUploadOverlay.classList.remove('hidden');
  document.querySelector('body').classList.add('modal-open');
  buttonCloseForm.addEventListener('click', closeForm);
};

imgUploadLabel.addEventListener('click', openPhotoEditForm);

const errorObject = {
  classTo: 'img-upload__field-wrapper',
  errorClass: 'img-upload__field-wrapper--error',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'text-error'
};

const pristine = new Pristine(formImgUpload, errorObject);

pristine.addValidator(inputHashtag, (value) => {
  const number = /\d/.test(value);
  return !number;
}, 'error');

// const pristine = new Pristine(formImgUpload);
// formImgUpload.addEventListener('submit', (evt) => {
//   evt.preventDefault();
//   const isValid = pristine.validate();
//   if(isValid) {
//   } else {
//   }
// });
