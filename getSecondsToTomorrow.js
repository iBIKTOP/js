function getSecondsToTomorrow(){
	var d1 = new Date();
	alert(d1);
	var d2 = new Date(d1.getFullYear(),d1.getMonth(),d1.getDate()+1);
	alert(d2);
	return Math.round((d2-d1)/1000);//делим на 1000 потому что цыфра получается в милисек.
}
alert(getSecondsToTomorrow());