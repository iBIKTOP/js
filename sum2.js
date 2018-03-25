function sum(a) {// функция sum вызывается только в первый раз, потом работает функция f
    var res = a;//при первом вызове результат приравниваем первому значению

    function f(b){//при каждом запуске функция f добавляет параметр к сумме currentSum, хранящейся в замыкании, и возвращает сама себя.
        res+=b;
        return f;
    }
    //Эта f используется при следующем вызове, опять возвратит себя, и так сколько нужно раз. Затем, при использовании в строчном
    // или численном контексте – сработает toString, который вернет текущую сумму currentSum.
    f.toString = function () {
        return res;
    }

    return f;
}

alert(sum(2)(2)(2));