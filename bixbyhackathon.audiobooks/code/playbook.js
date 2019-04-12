var console = require('console')
module.exports.function = function audioinfo (audiobook) {
  var output = {
    audioItem: [{
      id: 1,
      stream: [
        {
          url: audiobook.url,
          format: "mp3",
          offsetInMilliseconds: audiobook.position * 1000
        }
      ],
      albumArtUrl: "https://reneamason.com/wp-content/uploads/sites/2/2016/01/audiobook-icon.jpg",
      artist: audiobook.author,
      title: audiobook.name,
      subtitle: "Audiobook"
      }],
    category: "SINGLE",
    displayName: "Audiobook",
    repeatMode: "ALL"
  };
  return output;
}
