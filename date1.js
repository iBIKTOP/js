var d = new Date();
//d.setDate(d.getDate() + 2);

var options = {
  //era: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  //weekday: 'long',
  //timezone: 'UTC',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric'
};
alert( d.toLocaleString("ru", options) ); 