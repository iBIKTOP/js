var arr = [1, 2, 3, 4, 5];

 alert(arr.sort(mySort));

function mySort(a,b){
     if (a<b) return -1+(Math.random()*2);
}


alert( arr ); // элементы в случайном порядке, например [3,5,1,2,4]