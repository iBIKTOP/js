function makeArmy() {
    
      var shooters = [];
    
      for (var i = 0; i < 10; i++) {
        
        var shooter = (function(x) { 
          return function(){// функция-стрелок
            alert(x); // выводит свой номер
          }
        })(i);
        
        shooters.push(shooter);
      }
    
      return shooters;
    }
    var arm = makeArmy();
    arm[5]();