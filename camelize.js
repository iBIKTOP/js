function camelize(str){
    var arr = str.split("-");
    for(var key=1;key<arr.length;key++) arr[key]=arr[key].charAt(0).toUpperCase()+arr[key].substring(1);
    return arr.join('');
}

camelize("background-color");