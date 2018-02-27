var arr=[],res=[];
for(var i=2;i<=100;i++) arr.push(i);
for(var p=2;p<=100;p++) {
    for (var key = 0; key <= arr.length; key++) {
        if (arr[key] != null && arr[key] == p) res.push(p);
        if (arr[key] != null && arr[key] % p == 0) arr[key] = null;
    }
}
alert(res);

var sum=0;
for(var x=0;x<=res.length;x++){
    if(res[x]) {
        sum += res[x];
    }
}
alert(sum);