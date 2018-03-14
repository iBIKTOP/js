var date = new Date(2012,0,3);  // 3 января 2012
    
    
function getWeekDay(date){
      
var options = {
        
	//era: 'long',
        
	//year: 'numeric',
        
	//month: 'long',
        
	//day: 'numeric',
        
	weekday: 'long',
        
	//timezone: 'UTC',
        
	//hour: 'numeric',
        
	//minute: 'numeric',
        
	//second: 'numeric'
      
	};
      
	if(date.toLocaleString("ru", options)=="пятница") return "пт";

	if(date.toLocaleString("ru", options)=="суббота") return "сб";

	if(date.toLocaleString("ru", options)=="воскресенье") return "вс";
	if(date.toLocaleString("ru", options)=="понедельник") return "пн";

	if(date.toLocaleString("ru", options)=="вторник") return "вт";
	if(date.toLocaleString("ru", options)=="среда") return "ср";

	if(date.toLocaleString("ru", options)=="четверг") return "чт";
}
    
    
alert( getWeekDay(date) );      // Должно вывести 'вт'
////////////////////////////////////////////////////////////////////////////
function getWeekDay(date) {
  var days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
  return days[date.getDay()]; //getDay() выводит номер дня недели, его мы используем чтобы достать название дня из нашего массива
}
////////////////////////////////////////////////////////////////////////////
//при использовании toLocaleString можно использовать options с weekday: 'short' для короткого получения для недели.
var date = new Date(2014, 0, 3); // 3 января 2014
alert( date.toLocaleString('ru', {weekday: 'short'}) ); // 'Пт'