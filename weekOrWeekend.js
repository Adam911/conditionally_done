const assert = require('assert');
var weekOrWeekend = function (day) {
  if (day.startsWith('S')&&(day.endsWith('day')) ) {
    return 'This is a weekend';
  }
  else if (day.endsWith('day')) {
    return 'This is a weekday'
  }
    else {
      return 'This is not a day';
    }
}
assert.equal(weekOrWeekend('Wednesday'), 'This is a weekday');
assert.equal(weekOrWeekend('Sunday'), 'This is a weekend');

console.log(('Wednesday'), 'This is a weekday');
console.log(('Sunday'), 'This is a weekend');
