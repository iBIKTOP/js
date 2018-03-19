function sum(a){
	return function(b){
		return a+b;
	}
}
alert(sum(5)(3));//вызов функции с помощью замыкания. 