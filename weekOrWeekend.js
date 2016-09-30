const assert = require('assert');
var weekOrWeekend = function (day) {
  if (day.startsWith('Wednesday')||(day.startsWith('Sunday')) ) {
    return 'weekend';
  }
    else {
      return 'week';
    }
}
assert.equal(weekOrWeekend('Wednesday'), 'week');
assert.equal(weekOrWeekend('Sunday'), 'weekend');
