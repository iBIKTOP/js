function makeBuffer() { 
/* ваш код */ 
	var buff='';
	function buffer(a){
		if(arguments.length==0) return buff;
		buff+=a;
	}
	buffer.clear = function(){
		buff='clear';
	}
	return buffer;
}

var buffer = makeBuffer();

// добавить значения к буферу
buffer('Замыкания');
buffer(' Использовать');
buffer(' Нужно!');

// получить текущее значение
alert( buffer() ); // Замыкания Использовать Нужно!
buffer.clear();
alert( buffer() );