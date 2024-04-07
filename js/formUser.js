
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

const openPhotoEditForm = function() {
  imgUploadOverlay.classList.remove('hidden');
  document.querySelector('body').classList.add('modal-open');
};

buttonCloseForm.addEventListener('click', closeForm);
imgUploadLabel.addEventListener('change', openPhotoEditForm);

// подлключение валидации с Pristine

const pristine = new Pristine(formImgUpload, {
  classTo: 'img-upload__field-wrapper',
  errorClass: 'img-upload__field-wrapper--error',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'text-error'
});

// функция проходит по кажд элем массиву и возвращ true/false в зависимости от того, подходит каждый элемент к условию или нет (при помощи every)
const validateWithParser = function(value, validator) {
  return value.split(' ').every(validator);
};

// pristine.addValidator(
//   inputHashtag,
//   (value) => value.split(' ').some((item) => ),
//   'Один и тот же хэштег не может быть использован дважды');

pristine.addValidator(
  inputHashtag,
  (value) => validateWithParser(value, (item) => item.slice(1).includes('#')),
  'Хэштеги разделяются пробелами');

pristine.addValidator(
  inputHashtag,
  (value) => validateWithParser(value, (item) => item[0] === '#'),
  'Хэштег начинается с символа # (решётка)');

pristine.addValidator(
  inputHashtag,
  (value) => validateWithParser(value, (item) => item.length > 1),
  'Хеш-тег не может состоять только из одной решётки');

pristine.addValidator(
  inputHashtag,
  (value) => validateWithParser(value, (item) => item.length < 20),
  'Максимальная длина одного хэштега 20 символов, включая решётку');

pristine.addValidator(
  inputHashtag,
  (value) => value.split(' ').length < 5,
  'Нельзя указать больше пяти хэштегов');

pristine.addValidator(
  inputHashtag,
  (value) => validateWithParser(value, (item) => /^#[a-za-яё0-9]{0,19}$/i.test(item)),
  'Используются недопустимые символы');

pristine.addValidator(
  inputDescription,
  (value) => value.length < 140,
  'Максимальное количество символов 140');

formImgUpload.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();
});

// изменение масштаба картинки

const btnSmaller = formImgUpload.querySelector('.scale__control--smaller');
const btnBigger = formImgUpload.querySelector('.scale__control--bigger');
const inputScaleControlValue = formImgUpload.querySelector('.scale__control--value');
const resizableImage = formImgUpload.querySelector('.img-upload__preview img');

const step = 25;
let scale = 100;

btnSmaller.addEventListener('click', () => {
  if(scale > step) {
    scale -= 25;
    resizableImage.style.transform = `scale(${scale / 100})`;
    inputScaleControlValue.value = `${scale}%`;
  }
});

btnBigger.addEventListener('click', () => {
  if(scale < 100) {
    scale += 25;
    resizableImage.style.transform = `scale(${scale / 100})`;
    inputScaleControlValue.value = `${scale}%`;
  }
});

// изменение эффекта изображения

const slider = formImgUpload.querySelector('.effect-level__slider');
const effectLevelValue = formImgUpload.querySelector('.effect-level__value');
// const inputsEffect = formImgUpload.querySelectorAll('.effects__radio');
// const imgEffectLevel = formImgUpload.querySelector('.img-upload__effect-level');
// const effectsList = formImgUpload.querySelector('.effects__list');

noUiSlider.create(slider, {
  connect: 'lower',
  range: {
    min: 0,
    max: 100,
  },
  start: 100,
  step: 1
});

slider.noUiSlider.on('update', () => {
  effectLevelValue.value = slider.noUiSlider.get();
});

export {inputDescription, inputHashtag, closeForm};
