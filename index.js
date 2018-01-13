class Message {
  constructor(text = '', created = Date.now()) {
    this.text = text;
    this.created = created;
  }
  get created() {
    return this._created;
  }
  set created(created) {
    if (!created || isNaN(created)) {
      throw new Error('Inválido');
    }
    this._created = created;
  }
  toString() {
    return `Message created at: ${this.created} - Text: ${this.text}`;
  }
}

class ImageMessage extends Message {
  constructor(text = '', created = Date.now(), url = '', thumbnail = '') {
    super(text, created);
    this.url = url;
    this.thumbnail = thumbnail;
  }
  toString() {
    return `Photo${super.toString()}` +
      `- Url: ${this.url}` +
      `Thumbnail: ${this.thumbnail}`;
  }
}

var text = 'Shome text';
var created = Date.now();

var duckTypeMessage = {
  text: text,
  created: created
};

var emptyMessage = new Message();
var textMessage = new Message('Yesterday message', Date.now() - 86400);
var photoMessage = new ImageMessage();

console.log(duckTypeMessage);
console.log(String(emptyMessage));
console.log(String(textMessage));
console.log(String(photoMessage));