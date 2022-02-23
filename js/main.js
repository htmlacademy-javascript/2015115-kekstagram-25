const getRandomNumber = (min, max) => {
  if (min <=0 || max <=0) {
    // eslint-disable-next-line no-alert
    alert('Диапазон заданных чисел может быть только положительный');
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


const getStringLength = (string, maxLength) => {
  if (string.length > maxLength) {
    return false;
  }
  return true;
};
getStringLength();
