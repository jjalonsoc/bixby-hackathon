var http = require('http')
var console = require('console')

module.exports.function = function choosebook (name, author) {
  var response = http.getUrl('http://mamenko.ru/bixby/audiobooks.json', { format: 'json' });
  var books = [];
  for (var i = 0; i < response.books.length; i++) {
    if ((name !== "" && author !== "") ||
        (response.books[i].name.toLowerCase().indexOf(name.toLowerCase()) !== -1 && name !== "") ||
        (response.books[i].author.toLowerCase().indexOf(author.toLowerCase()) !== -1 && author !== "")
      ) {
      books.push(response.books[i]);
      books[books.length - 1].name2 = books[books.length - 1].name + "...";
    }
  }
  return (books);
}
