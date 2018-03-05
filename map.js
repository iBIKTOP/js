var arr = ["Есть", "жизнь", "на", "Марсе"];

var arrLength = [];
/*for (var i = 0; i < arr.length; i++) {
    arrLength[i] = arr[i].length;
}*/
arrLength = arr.map(function (item) { return item.length; });

alert( arrLength ); // 4,5,2,5