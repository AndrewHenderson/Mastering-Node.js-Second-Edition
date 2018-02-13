/**
 * Created by andrewhenderson on 2/11/18.
 */
const EventEmitter = require('events').EventEmitter;
const Counter = function(i) {
  this.increment = () => {
    i++;
    this.emit('incremented', i);
  }
};
Counter.prototype = new EventEmitter();
const counter = new Counter(10);
const cb = (n) => {
  console.log(n);
};
counter.on('incremented', cb);
counter.increment();
counter.increment();