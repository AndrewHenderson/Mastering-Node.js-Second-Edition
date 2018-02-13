/**
 * Created by andrewhenderson on 2/11/18.
 */
// let someFunc = function foo() {};
// console.log(%FunctionGetName(someFunc));

let operand = 3;
function square() {
  return operand * operand;
}
%OptimizeFunctionOnNextCall(square);
square();
%OptimizeFunctionOnNextCall(square);
operand = 3.01;
square();