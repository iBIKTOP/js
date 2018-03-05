var arr = [1,2,3,4,5];

function getSum(arr) {
    var res=[];
    arr.reduce(function(sum, current) {
        res.push(sum);
        return sum + current;
        });
    return res;
}
alert(getSum(arr));