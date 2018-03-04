arr = [5, 3, 8, 1];

function filterRangeInPlace(arr,min,max){
    for(var key=0;key<arr.length;key++){
        if(arr[key]<min||arr[key]>max) {
            arr.splice(key--,1);
        }
    }
}

filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4

alert( arr ); // массив изменился: остались [3, 1]