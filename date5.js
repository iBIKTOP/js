function getLastDayOfMonth(year, month){
    var d = new Date(year,month);
    d.setDate(30);
    alert(d);
}
getLastDayOfMonth(2012,1);