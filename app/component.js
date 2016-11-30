var styles = require('./main.css');

module.exports = function () {
  var element = document.createElement('h1');

  element.innerHTML = 'If you don\'t eat your meat, you can\'t have any pudding!';
  element.className = styles.bg;

  return element;
};
