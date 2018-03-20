var users = [{
  name: "Вася",
  surname: 'Иванов',
  age: 20
}, {
  name: "Петя",
  surname: 'Чапаев',
  age: 25
}, {
  name: "Маша",
  surname: 'Медведева',
  age: 18
}];

users.sort(byField('name'));
users.forEach(function(user) {
  alert( user.name );
}); // Вася, Маша, Петя

users.sort(byField('age'));
users.forEach(function(user) {
  alert( user.name );
}); // Маша, Вася, Петя

function byField(field){
	if(field=="name"){
		return function(a,b){
			return a.name > b.name ? 1 : -1;
		}
	}
	if(field=="age"){
		return function(a,b){
			return a.age > b.age ? 1 : -1;
		}

	}
}
// или вот так
/*
function byField(field) {
    return function(a, b) {
      return a[field] > b[field] ? 1 : -1;
    }
  }
  */