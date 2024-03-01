
const listMessages = ['Всё отлично!', 'В целом всё неплохо. Но не всё.', 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра.', 'В конце концов это просто непрофессионально.', 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.', 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.', 'Лица у людей на фотке перекошены, как будто их избивают.', 'Как можно было поймать такой неудачный момент?!'];

const setNames = ['Саша', 'Леша', 'Даша', 'Наташа', 'Алена', 'Маруся', 'Ярослав', 'Дамир', 'Руслан', 'Булат', 'Ландыш', 'Лилия', 'Юсуф', 'Иосиф', 'София', 'Алёна', 'Павел', 'Настя', 'Мария', 'Виктория', 'Алина', 'Рашид', 'Денис', 'Олег', 'Фаиль'];

const descriptionPhotos = ['Пляж у озера', 'Указатель', 'Райский уголок', 'Фотограф', 'Веселое рагу', 'Электро ночная фурия', 'Перекус', 'Смородиновый морс', 'Самолет над пляжем', 'Необчная обувница', 'Песчаная дорожка к морю', 'Белая ауди', 'Рыба с овощами', 'Кото-ролл', 'Домашние бутсы', 'Горы с высоты птичьего полета', 'Концерт', 'Раритетная машина', 'Светящиеся тапочки', 'Пальмы в асфальте', 'Куриный салат', 'Закат на море', 'Краб', 'Концерт2', 'прогулка с бегемотом'];


const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

function createRandomIdFromRangeGenerator (min, max) {
  const previousValues = [];

  return function () {
    let currentValue = getRandomInteger(min, max);
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
}


function creatPhotoId () {
  let photoId = 0;

  return function () {
    photoId += 1;
    return photoId;
  };
}
const variableId = creatPhotoId();


function creatUrlId () {
  let urlId = 0;

  return function () {
    urlId += 1;
    return urlId;
  };
}
const variableUrlId = creatUrlId();


function creatIndexDescription () {
  let description = 0;

  return function () {
    description += 1;
    return description;
  };
}
const variablelDescriptionIndex = creatIndexDescription();


const createObject = () => {

  const randomAvatar = getRandomInteger(1, 6);
  const randomLike = getRandomInteger(15, 200);
  const generatePhotoId = createRandomIdFromRangeGenerator(1, 1000);
  const randomName = getRandomInteger(0, setNames.length - 1);
  const randomMessage = getRandomInteger(0, listMessages.length - 1);

  return {
    id: variableId(),
    url: `photos/${variableUrlId()}.jpg`,
    description: descriptionPhotos[variablelDescriptionIndex() - 1],
    likes: randomLike,
    comments: {
      idComments: generatePhotoId(),
      avatar: `img/avatar-${randomAvatar}.svg`,
      message: listMessages[randomMessage],
      name: setNames[randomName],
    },
  };
};

const arrayOfObjects = Array.from({length: 25}, createObject);

console.log(arrayOfObjects);
