var date = new Date(2015, 0, 2);
function getDateAgo(date, days){
    var ms1 = +date.valueOf();
    var ms2 = days * 24*60*60*1000;
    var d = new Date(ms1-ms2);
    return d.getDate();
}
alert( getDateAgo(date, 1) ); // 1, (1 января 2015)
alert( getDateAgo(date, 2) ); // 31, (31 декабря 2014)
alert( getDateAgo(date, 365) ); // 2, (2 января 2014)