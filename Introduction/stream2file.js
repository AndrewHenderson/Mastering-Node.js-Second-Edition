/**
 * Created by andrewhenderson on 2/11/18.
 */
const fs = require('fs');
const w = fs.createWriteStream('./counter.txt', {
  flags: 'w',
  mode: 0666
});
let Readable  = require('stream').Readable;
let r = new Readable();
let count = 0;
r._read = function() {
  count++;
  if (count > 10) {
    return r.push(null);
  }
  setTimeout(() => r.push(count + `\n`), 500);
};
r.pipe(w);