var obj = {
    className: 'open menu'
}

function addClass(obj, cls){
    var arr = obj.className.split(" ");
    if (arr.indexOf('')!=-1){
        for(var key=0;key<arr.length;key++){
            if (arr[key]=='') arr.splice(key,1);
        }
    }
    if(arr.indexOf(cls)==-1&&arr.length!=0){
        arr.push(cls);
        obj.className = arr.join(" ");
    }else if (arr.length==0) obj.className = cls;
    //alert(obj.className);
    return obj.className;
}

addClass(obj, 'new'); // obj.className='open menu new'
addClass(obj, 'open'); // без изменений (класс уже существует)
addClass(obj, 'me'); // obj.className='open menu new me'

//альтернативное и более короткое решение задачи
function addClass2(obj, cls) {
    var classes = obj.className ? obj.className.split(' ') : [];

    for (var i = 0; i < classes.length; i++) {
        if (classes[i] == cls) return; // класс уже есть
    }

    classes.push(cls); // добавить

    obj.className = classes.join(' '); // и обновить свойство
}