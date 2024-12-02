function product(number) {
    return function(number2){
      return number * number2;
    }
}
const result = product(5)(2);
console.log(result)