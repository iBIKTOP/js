var date = new Date(2012, 0, 3);  // 3 янв 2012
    
function getLocalDay(date){
      
	if (date.getDay()==0) return 7; 
      
	else return date.getDay();
    
}
    
alert( getLocalDay(date) ); // вторник, выведет 2