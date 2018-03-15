function formatDate(date) { /* ваш код */
    if((new Date() - date)==1) return "только что";
    if((new Date() - date)==30 * 1000) return "30 сек. назад";
    if((new Date() - date)==5 * 60 * 1000) return "5 мин. назад";
    if((new Date() - date)>=86400 * 1000) {
        var dd = date.getDate();
        if (dd<10) dd = '0'+dd;
        var mm = date.getMonth()+1;
        if (mm<10) mm = '0'+mm;
        var yy = (date.getYear()%100);
        if(yy<10) yy = '0'+yy;
        var hh = date.getHours();
        if(hh<10) hh = '0'+hh;
        var mm = date.getMinutes();
        if(mm<10) mm = '0'+mm;
        return dd+'.'+mm+'.'+yy+' '+hh+':'+mm;
    }

}

alert( formatDate(new Date(new Date - 1)) ); // "только что"

alert( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"

alert( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"

alert( formatDate(new Date(new Date - 86400 * 1000)) ); // вчерашняя дата в формате "дд.мм.гг чч:мм"
