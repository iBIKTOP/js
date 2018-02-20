function getDecimal(x) {
        var x1=parseInt(x);
        return ((x*10)-(x1*10))/10;
}
alert(getDecimal(-1.2));
//getDecimal(-1.2);