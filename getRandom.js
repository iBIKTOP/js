function getRandom(x,y){
    return x+(Math.random()*(y-x)); //y-x определяет диапазон от нуля и до этого числа. а x+ поднимает планку до минимального и получается что 5 + то что получится при рандоме * на эту разницу.
}
alert(getRandom(5,10));

