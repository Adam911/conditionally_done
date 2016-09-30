const assert = require('assert');

var fromWhere = function(regNum){
if (regNum.startsWith('CY')) {
  return "Bellville";
}
else if (regNum.startsWith('CJ')) {
  return "Paarl";
}
else if (regNum.startsWith('CA')) {
  return "Cape Town";
}
else {
  return "Some other place";
}
}
assert.equal(fromWhere('CA'), 'Cape Town');
assert.equal(fromWhere('CY'), 'Bellville');
console.log(fromWhere('CA'));
console.log(fromWhere('CY'));
