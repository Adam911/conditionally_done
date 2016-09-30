var autoAlarm = function(tommorow){
if (tommorow.startsWith("Sa")) {
  return "8:00am";
}
else if (tommorow.startsWith("Su")) {
  return "7:00am"
}
  else {
    return "5:00am";
  }
}
console.log(autoAlarm('Saturday'));
//should print `8:00am`
console.log(autoAlarm('Monday'));
//should print `5:00am`
console.log(autoAlarm('Sunday'));
