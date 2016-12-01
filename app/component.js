module.exports = function () {
  var div = document.createElement('div'),
      header = document.createElement('h1'),
      paragraph = document.createElement('p');

  header.innerHTML = 'Hello World!';
  paragraph.innerHTML = 'If you don\'t eat your meat, you can\'t have any pudding!';
  header.className = 'bg';
  paragraph.className = 'pure-button';

  div.appendChild(header);
  div.appendChild(paragraph);

  return div;
};
