// Перепишите функцию main следующим образом:
// Если аргументы a и b не переданы, они равны по умолчанию 2 и 3 соответсвенно.
// Если аргумент c передан и он является функцией, то он выполняется после вызова функции sum, и в качестве входящего значение принимает результат работы функции sum.
// Функция main должна возвращать результат функции аргумента c, если он есть, либо результат функции sum.

a = 15;
b = 6;
mainResult = 0;
cResult = 0;
result = 0;
c = 8;
debugger;

// function c(arg) {
//   return (cResult = arg * 2);
// }

function main(a = 2, b = 3, c) {
  if (typeof c === "function") {
    sum(a, b);
    return (mainResult = c(result));
  } else {
    return (mainResult = sum(a, b));
  }
}

function sum(a, b) {
  return (result = a + b);
}

main(a, b, c);

console.log(mainResult);
console.log(result);
