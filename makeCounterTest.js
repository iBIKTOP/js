function makeCounterTest() {
  function counter() {
    return counter.currentCount++;
  };
  counter.currentCount = 1;

  return counter;
}

var counter3 = makeCounterTest();
alert( counter3() ); // 1
alert( counter3() ); // 2