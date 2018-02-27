function getMaxSubSum(arr){
    var summ=0, summ2=0;
    for(var key=0;key<arr.length;key++){
        if(arr[key]&&arr[key]>0) summ = Math.max(summ,summ2+=arr[key]);
        else summ2=0;
    }
    return summ;
}