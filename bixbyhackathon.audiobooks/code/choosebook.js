var http = require('http')
var console = require('console')

module.exports.function = function choosebook (name) {
  var response = http.getUrl('http://mamenko.ru/bixby/audiobooks.json', { format: 'json' });
  var books = [];
  for (var i = 0; i < response.books.length; i++) {
    console.debug(response.books[i].name.toLowerCase(), name.toLowerCase());
    if (response.books[i].name.toLowerCase().indexOf(name.toLowerCase()) !== -1) {
      books.push(response.books[i]);
      books[books.length - 1].name2 = books[books.length - 1].name + "...";
    }
  }
  return (books);
}
