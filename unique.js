function unique(arr) {
    /* ваш код */
    var res={};
    for (var i=0;i<arr.length;i++){
        var key = arr[i];//.toLowerCase().split('').sort().join('');
        res[key] = arr[i];
        //alert(res[key]);
    }
    var arr2 = [];
    for(var key in res){
        arr2.push(key);
    }
    return arr2;
}

var strings = ["кришна", "кришна", "харе", "харе",
    "харе", "харе", "кришна", "кришна", "8-()"
];

alert( unique(strings) ); // кришна, харе, 8-()