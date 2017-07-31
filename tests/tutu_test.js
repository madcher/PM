

//Написать функцию dscount, которая подсчитывает количество идущих подряд символов s1 и s2 в строке, без учёта регистра. Функция должна пройти следующие тесты, как минимум:

var sum = function (strng, a, b) {
  var count=0;
  for (k =0; k< strng.length; k++){
    if (strng[k]==a&&strng[k+1]==b){
      count++;
    }
  }
  return count;
}


"use strict";

// Yor code here ... !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
var dscount = function (strng, a, b) {
  var count=0;
  a=a.toLowerCase();
  b=b.toLowerCase()
  for (var k=0; k< strng.length-1; k++){
    if (strng[k].toLowerCase()==a&&strng[k+1].toLowerCase()==b){
      count++;
    }
  }
  return count;
}

// Для удобства можно использовать эти тесты:
try {
    test(dscount, ['ab___ab__', 'a', 'b'], 2);
    test(dscount, ['___cd____', 'c', 'd'], 1);
    test(dscount, ['de_______', 'd', 'e'], 1);
    test(dscount, ['12_12__12', '1', '2'], 3);
    test(dscount, ['_ba______', 'a', 'b'], 0);
    test(dscount, ['_a__b____', 'a', 'b'], 0);
    test(dscount, ['-ab-аb-ab', 'a', 'b'], 2);
    test(dscount, ['aAa', 'a', 'a'], 2);

    alert("Congratulations! All tests success passed.");
} catch(e) {
    alert(e);
}

// Простая функция тестирования
function test(call, args, count, n) {
    let r = (call.apply(n, args) === count);
    alert(r, `Finded items count: ${count}`);
    if (!r) throw "Test failed!";
}
