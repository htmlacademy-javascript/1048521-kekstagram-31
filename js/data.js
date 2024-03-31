import {getRandomInteger, createRandomIdFromRangeGenerator} from './utils.js';

const NUMBER_SPECIFIED_OBJECTS = 25;
const MIN_NUMBER_AVATARS = 1;
const MAX_NUMBER_AVATARS = 6;
const MIN_NUMBER_LIKES = 15;
const MAX_NUMBER_LIKES = 200;

const LIST_MESSAGES = ['Всё отлично!', 'В целом всё неплохо. Но не всё.', 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра.', 'В конце концов это просто непрофессионально.', 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.', 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.', 'Лица у людей на фотке перекошены, как будто их избивают.', 'Как можно было поймать такой неудачный момент?!'];

const SET_NAMES = ['Саша', 'Леша', 'Даша', 'Наташа', 'Алена', 'Маруся', 'Ярослав', 'Дамир', 'Руслан', 'Булат', 'Ландыш', 'Лилия', 'Юсуф', 'Иосиф', 'София', 'Алёна', 'Павел', 'Настя', 'Мария', 'Виктория', 'Алина', 'Рашид', 'Денис', 'Олег', 'Фаиль'];

const DESCRIPTION_PHOTOS = ['Пляж у озера', 'Указатель', 'Райский уголок', 'Фотограф', 'Веселое рагу', 'Электро ночная фурия', 'Перекус', 'Смородиновый морс', 'Самолет над пляжем', 'Необчная обувница', 'Песчаная дорожка к морю', 'Белая ауди', 'Рыба с овощами', 'Кото-ролл', 'Домашние бутсы', 'Горы с высоты птичьего полета', 'Концерт', 'Раритетная машина', 'Светящиеся тапочки', 'Пальмы в асфальте', 'Куриный салат', 'Закат на море', 'Краб', 'Концерт2', 'прогулка с бегемотом'];

const createObject = (_, index) => {
  const randomLike = getRandomInteger(MIN_NUMBER_LIKES, MAX_NUMBER_LIKES);
  const generatePhotoId = createRandomIdFromRangeGenerator(1, 1000);
  const numberComments = getRandomInteger(0, 30);

  return {
    id: index + 1,
    url: `photos/${index + 1}.jpg`,
    description: DESCRIPTION_PHOTOS[index],
    likes: randomLike,
    comments: Array.from({length: numberComments}, () => {
      const commentUser = {
        idComments: generatePhotoId(),
        avatar: `img/avatar-${getRandomInteger(MIN_NUMBER_AVATARS, MAX_NUMBER_AVATARS)}.svg`,
        message: LIST_MESSAGES[getRandomInteger(0, LIST_MESSAGES.length - 1)],
        name: SET_NAMES[getRandomInteger(0, SET_NAMES.length - 1)],
      };
      return commentUser;
    })
  };
};

const arrayObjectsWithPhotos = Array.from({length: NUMBER_SPECIFIED_OBJECTS}, createObject);

export {arrayObjectsWithPhotos};
