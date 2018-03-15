var d = new Date(2014, 0, 30); // 30 января 2014
function formatDate(d){
    var dd = d.getDate();
    if (dd<10) dd = '0'+dd;
    var mm = d.getMonth()+1;
    if (mm<10) mm = '0'+mm;
    var yy = (d.getYear()%100);
    if(yy<10) yy = '0'+yy;
    return dd+'.'+mm+'.'+yy;
}
alert( formatDate(d) ); // '30.01.14'