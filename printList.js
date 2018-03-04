var list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

var arr=[];
function printList(list){
    for (var key in list){
        if(key=='value') arr.push(list[key]);
        if(key=='next'){
            for (var key in list.next){
                if(key=='value') arr.push(list.next[key]);
                if(key=='next'){
                    for(var key in list.next.next){
                        if(key=='value') arr.push(list.next.next[key]);
                        if(key=='next'){
                            for(var key in list.next.next) {
                                if (key == 'value') arr.push(list.next.next.next[key]);
                            }
                        }
                    }
                }
            }
        }
    }
}

//или естьвариант короче и вернее
/*function printList(list) {
    var tmp = list;

    while (tmp) {
        alert( tmp.value );
        tmp = tmp.next;
    }

}*/
printList(list);
alert(arr);