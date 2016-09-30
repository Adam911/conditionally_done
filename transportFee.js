const assert = require('assert');

var transportFee = function (shift) {

  if (shift.startsWith("morn")) {
    return 'R20'
  }
  else if (shift.startsWith("after")) {
    return 'R10'
  }
  else {
    return 'You get paid nothing'
  }
}

assert.equal(transportFee('morning shift'), 'R20');
assert.equal(transportFee('afternoon shif'), 'R10');
assert.equal(transportFee(''), 'You get paid nothing');

console.log(transportFee('morning shift'))
console.log(transportFee('afternoon shift'))
console.log(transportFee('night shift'))
