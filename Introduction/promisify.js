/**
 * Created by andrewhenderson on 2/11/18.
 */
const { promisify } = require('util');
const fs = require('fs');
let readFileAsync = promisify(fs.readFile);
let [executable, absPath, target, ...message] = process.argv;

console.log(message.path ? message.join('') : `Running file ${absPath} using binary ${executable}`);

readFileAsync(target, {
    encoding: 'utf8'
  })
  .then(console.log)
  .catch(err => {
    let message = err.message;
    console.log(`An error occurred! Read error: ${message}`);
  });

var zero = [
  1,

  1,     0,    1,


  1,           1,

  1
]

var bits = {
  0: [1, 1, 0, 1, 1, 1, 1],
  1: [],
}

function setActiveSegments(selector, number) {
  console.log(selector, number);
  var nbits = bits[number];

  nbits.forEach((segmentId, index) => {
    const $selector = document.getElementById(selector);
    if (nbits[segmentId]) {
      console.log(true)
      $selector.querySelector(`.segment-${index}`).classList.add('active')
    } else {
      console.log(false);
      $selector.querySelector(`.segment-${index}`).classList.remove('active')
    }
  })
}

setInterval(() => {
  let time = new Date();
  let hour = time.getHours();
  const minute = time.getMinutes();
  const second = time.getSeconds();

  console.log(hour, minute, second);

  if (hour > 12) {
    hour = hour - 12;
  }
  if (hour < 10) {
    setActiveSegments('hour-0', 0);
  } else {
    setActiveSegments('hour-0', 1);
  }
  setActiveSegments('hour-1', hour);
}, 1000)