function getSecondsToday(){
	var d = new Date();
	return d.getHours()*60*60*1000+d.getMinutes()*60*1000+d.getSeconds()*1000+d.getMilliseconds();
}
////////////////////////////////////
/*
function getSecondsToday() {
  var now = new Date();

  // ������� ������ �� ������� ����, ��� �����-�����-������
  var today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  var diff = now - today; // ������� � �������������
  return Math.floor(diff / 1000); // ��������� � �������
}
*/
alert(getSecondsToday());