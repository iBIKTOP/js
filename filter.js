/* .. ваш код для filter, inBetween, inArray */
function filter(arr,func){
    var result = [];
    for (var i=0;i<=arr.length;i++){
        if(func(arr[i])) result.push(arr[i]);
    }
    return result;
}

function inBetween(a,b){;
    return function(x){
        return x>=a&&x<=b;
    }
}

function inArray(arr2){
    return function(x){
        for(var i=0;i<=arr2.length;i++){
            if(x==arr2[i]) return arr2[i];
        }
        /*  или так
            return function(x){
                return arr.indexOf(x) != -1;
            }
        */
    }
}

var arr = [1, 2, 3, 4, 5, 6, 7];

alert(filter(arr, function(a) {return a % 2 == 0})); // 2,4,6

alert( filter(arr, inBetween(3, 6)) ); // 3,4,5,6

alert( filter(arr, inArray([5])) ); // 1,2