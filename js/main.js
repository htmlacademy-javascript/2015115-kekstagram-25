const getRandomNumber = (min, max) => {
  if (min <=0 || max <=0) {
    return;
  }
  if (min === max) {
    return min;
  }
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
getRandomNumber();


const getStringLength = (string, maxLength) => string.length <= maxLength;
getStringLength();

//создадим массив с описаниями
const DESCRIPTIONS = [
  'Это котик',
  'И это котик',
  'Это же Кекстаграм, тут ничего нет кроме котиков'
];

//Создадим массив с именами для комментариев
const COMMENT_NAMES = [
  'Анжела',
  'Кекс',
  'Дарт Вейдер',
  'Артемка',
  'Петр Первый',
  'Мадонна'
];

// Создадим массив с комментариями
const COMMENT_MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const getRandomArrayElement = (elements) => elements[getRandomNumber(0, elements.length - 1)];

// создадим функцию для генерации комментариев
const createComment = () => ({
  id: getRandomNumber(),
  avatar: `img/avatar-${  getRandomNumber(1,6)}`,
  message: getRandomArrayElement(COMMENT_MESSAGES),
  name: getRandomArrayElement(COMMENT_NAMES),
});

const PictureDescriptionObjects = [];

const SIMILAR_PICTURE = 25;

const createPictureDescription = () => ({
  id: getRandomNumber(1, 25),
  url: `photos/${  getRandomNumber(1, 25)  }.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomNumber(15, 200),
  comments: createComment(),
});

for (let i = 0; i <= 25; i++) {
  PictureDescriptionObjects[i] = createPictureDescription();
}


// eslint-disable-next-line no-unused-vars
const similarPictureDescription = Array.from({length: SIMILAR_PICTURE}, createPictureDescription);
