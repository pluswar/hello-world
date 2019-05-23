/*function sayHello(name, age){
  //console.log(`Hello ${name} you are ${age} years old`)
  return `Hello ${name} you are ${age} years old` ;
}

const greetName = sayHello("Hyuck Jae!!", 15);
*/
const calculator = {
  plus: function(a, b){
    return a+b;
  },
  minus: function(a, b){
    return a-b;
  },
  multiply: function(a, b){
    return a*b;
  },
  divide: function(a, b){
    return a/b;
  }
}


const plus = calculator.plus(5, 5);
const minus = calculator.minus(5, 5);
const multi = calculator.multiply(5, 5);
const divide = calculator.divide(5, 5);

console.log(plus);
console.log(minus);
console.log(multi);
console.log(divide);
