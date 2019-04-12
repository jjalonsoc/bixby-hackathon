var http = require('http')
var textLib = require('textLib')

module.exports.function = function choosebook (name, author) {
  var response = http.getUrl('http://mamenko.ru/bixby/audiobooks.json', { format: 'json' });
  var books = [];
  name = !name ? "" : name;
  author = !author ? "" : author;
  for (var i = 0; i < response.books.length; i++) {
    if ((name == "" && author == "") ||
      (textLib.fuzzyMatch(response.books[i].name, name, 3) && name != "" && author == "") ||
      (textLib.fuzzyMatch(response.books[i].author, author, 3) && name == "" && author != "") ||
      (textLib.fuzzyMatch(response.books[i].name, name, 3) &&
       textLib.fuzzyMatch(response.books[i].author, author, 3) && name != "" && author != "")
      ) {
      books.push(response.books[i]);
      books[books.length - 1].name2 = books[books.length - 1].name + "...";
    }
  }
  return (books);
}
