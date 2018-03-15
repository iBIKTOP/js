function getLastDayOfMonth(year, month){
      
/*var d = new Date(year,month);
      
for(var day=28;day<=32;day++){
        
d.setDate(day);
        
//alert(d);
        
if(d.getMonth()==month){
          
//alert(d.getMonth());
          
var res = day;
        
}
        
if(d.getMonth()==month+1) return res;
      
}*/
      
var date = new Date(year, month + 1, 0);
      
return date.getDate();
    
}
  
alert(getLastDayOfMonth(2012, 0));