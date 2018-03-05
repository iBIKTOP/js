var arr = ["воз", "киборг", "корсет", "ЗОВ", "гробик", "костер", "сектор"];

function sort(str){
    var arr = str.toLowerCase().split('');
    arr = arr.sort();
    return arr.join('');
}
function aclean(arr){
    /*var tmp = [];
    for(var key=0;key<arr.length;key++){
        tmp.push(sort(arr[key]));
    }*/
    var res = [];
    for(var key=0;key<arr.length;key++){
        if(res.indexOf(sort(arr[key]))==-1) res.push(sort(arr[key]));
        else arr.splice(key--,1);
    }
    alert(arr);
}

aclean(arr);


//alert( aclean(arr) ); // "воз,киборг,корсет" или "ЗОВ,гробик,сектор"

// решение с помощью объекта:
/*
function aclean(arr) {
  // этот объект будем использовать для уникальности
  var obj = {};

  for (var i = 0; i < arr.length; i++) {
    // разбить строку на буквы, отсортировать и слить обратно
    var sorted = arr[i].toLowerCase().split('').sort().join(''); // (*)

    obj[sorted] = arr[i]; // сохраняет только одно значение с таким ключом
  }

  var result = [];

  // теперь в obj находится для каждого ключа ровно одно значение
  for (var key in obj) result.push(obj[key]);

  return result;
}

var arr = ["воз", "киборг", "корсет", "ЗОВ", "гробик", "костер", "сектор"];

alert( aclean(arr) );
 */