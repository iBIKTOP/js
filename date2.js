var date = new Date(2012,0,3);  // 3 ������ 2012
    
    
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
      
	if(date.toLocaleString("ru", options)=="�������") return "��";

	if(date.toLocaleString("ru", options)=="�������") return "��";

	if(date.toLocaleString("ru", options)=="�����������") return "��";
	if(date.toLocaleString("ru", options)=="�����������") return "��";

	if(date.toLocaleString("ru", options)=="�������") return "��";
	if(date.toLocaleString("ru", options)=="�����") return "��";

	if(date.toLocaleString("ru", options)=="�������") return "��";
}
    
    
alert( getWeekDay(date) );      // ������ ������� '��'
////////////////////////////////////////////////////////////////////////////
function getWeekDay(date) {
  var days = ['��', '��', '��', '��', '��', '��', '��'];
  return days[date.getDay()]; //getDay() ������� ����� ��� ������, ��� �� ���������� ����� ������� �������� ��� �� ������ �������
}
////////////////////////////////////////////////////////////////////////////
//��� ������������� toLocaleString ����� ������������ options � weekday: 'short' ��� ��������� ��������� ��� ������.
var date = new Date(2014, 0, 3); // 3 ������ 2014
alert( date.toLocaleString('ru', {weekday: 'short'}) ); // '��'