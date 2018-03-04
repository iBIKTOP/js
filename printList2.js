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
    for(var key in list){
        (key=='value') ? arr.push(list[key]) : printList(list.next);
    }
}

////////////////////без использования массива
/*
function printList(list) {

  alert( list.value ); // (1)

  if (list.next) {
    printList(list.next); // (2)
  }

}
 */
////////////////////обратная рекурсия
/*

function printReverseList(list) {

  if (list.next) {
    printReverseList(list.next);
  }

  alert( list.value );
}
 */
printList(list);
alert(arr);