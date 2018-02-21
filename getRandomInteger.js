function getRandom(x,y){
    return Math.round(x-0.5+(Math.random()*(y-x+1)));//x-0.5 говорит что лиапазон будет начинатся не с 1 а с 0,5, а y-x+1 что до 3,5
}
alert(getRandom(1,3));

