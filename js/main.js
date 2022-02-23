const getRandomNumber = function (min, max) {
  if (min <= 0) {
    // eslint-disable-next-line no-alert
    alert('Диапазон заданных чисел может быть только положительный');
    return;
  }
  else if (min === max) {
    return min;
  }
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
getRandomNumber();


const getStringLength = function(string, maxLength) {
  if (string === '' || string === 'undefined') {
    // eslint-disable-next-line no-alert
    alert('Строка пуста');
    return false;
  }
  else if (string.length > maxLength) {
    // eslint-disable-next-line no-alert
    alert('Превышено максимальное значение символов');
    return false;
  }
  else if (string.length <= maxLength) {
    return true;
  }
};
getStringLength();
