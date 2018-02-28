const fs = require('fs');
const crypto = require('crypto');

let tweetFile = 'tweets.txt';
let writeStream = fs.createWriteStream(tweetFile, {
  flags: 'a'
});
let cleanBuffer = function(len) {
  let buf = Buffer.alloc(len);
  buf.fill('\0');
  return buf;
};
let check = function() {
  let length = 10;
  let buffer = cleanBuffer(length * 140);
  for (let idx = 0; idx < length; idx++) {
    const text = crypto.randomBytes(70).toString('hex');
    buffer.write(text, idx * 140, 140);
  }
  setTimeout(check, 10000);
};

check();