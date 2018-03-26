function Calculator(){
    var methods = {
        "+" : function(a,b){
            return a+b;
        },
        "-" : function(a,b) {
            return a - b;
        }
    }
    this.addMethod = function(name,func){
        methods[name] = func;
    }
    this.calculate = function(str){
        var arr = str.split(" ");
        var first = +arr[0];
        var op = arr[1];
        var second = +arr[2];
        if(methods[op]) return methods[op](first,second);
    }
}


var calc = new Calculator;
alert( calc.calculate("3 + 7") ); // 10

var powerCalc = new Calculator;
powerCalc.addMethod("*", function(a, b) {
    return a * b;
});
powerCalc.addMethod("/", function(a, b) {
    return a / b;
});
powerCalc.addMethod("**", function(a, b) {
    return Math.pow(a, b);
});
alert(powerCalc.calculate("5 * 5"));
alert(powerCalc.calculate("5 / 5"));
alert(powerCalc.calculate("5 ** 5"));