//Напишите функцию removeClass(obj, cls), которая удаляет класс cls, если он есть
function removeClass(obj, cls){
    var arr = obj.className? obj.className.split(" "): [];
    while(true){
        if (arr.indexOf(cls)!=-1){
            for(var key=0;key<arr.length;key++){
                if (arr[key]==cls) arr.splice(key,1);
            }
        }else break;
    }


    obj.className = arr.join(" ");

removeClass(obj, 'open'); // obj.className='menu'
//removeClass(obj, 'blabla'); // без изменений (нет такого класса)
