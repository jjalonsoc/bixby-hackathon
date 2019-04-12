module.exports.function = function audioinfo (audiobook) {
    var input = {};
  
  input.audioItem = [{
    id: 1,
    stream: [
      {
        url: audiobook.url,
        format: "mp3"
      }
    ],
    title: audiobook.name,
    subtitle: "Audiobook"
  }];
  return input;
}
