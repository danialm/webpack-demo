var kiwi = require('./images/kiwi.svg');

module.exports = function () {
  var div = document.createElement('div'),
      header = document.createElement('h1'),
      paragraph = document.createElement('p'),
      svg = document.createElement('img');

  header.innerHTML = 'Hello World!';
  header.className = 'bg';
  paragraph.innerHTML = 'If you don\'t eat your meat, you can\'t have any pudding!';
  paragraph.className = 'pure-button';
  svg.src = kiwi;

  div.appendChild(header);
  div.appendChild(paragraph);
  div.appendChild(svg);

  return div;
};
