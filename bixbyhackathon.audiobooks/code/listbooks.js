var http = require('http')
var console = require('console')

module.exports.function = function listbooks () {
  var response = http.getUrl('http://mamenko.ru/bixby/audiobooks.json', { format: 'json' });
  var books = response.books;
  for (var i = 0; i < books.length; i++) {
    books[i].name2 = books[i].name + "...";
  }
  return (books);
}
