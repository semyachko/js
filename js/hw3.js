console.log("Задача 1");
function checkType(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
        console.log("Error");
        return false; 
    } else return true;
}

function checkTypeOperator(operator) {
    if (typeof operator === "string") {
        console.log("true");
        return true; 
    } else return false;
}

function Summ(a, b) {
    if (checkType(a, b)) {
    console.log(a + b);
    return a + b;
}
}
function Subtraction(a, b) {
    if (checkType(a, b)) {
    console.log(a - b);
    return a - b;
}
}
function Multiplication(a, b) {
    if (checkType(a, b)) {
    console.log(a * b);
    return a * b;
}
}
function Division(a, b) {
    if (checkType(a, b)) {
    console.log(a / b);
    return a / b;
}
}

function calc(a, b, operator) {
    if (checkTypeOperator(operator)) {
        switch(operator) {
            case "+":
            Summ(a, b);
            break; 
            case "-":
            Subtraction(a, b);
            break;
            case "*":
            Multiplication(a, b);
            break;
            case "/":
            if (b==0) {
            console.log("Товарищ, не дели на 0!")
            } else {
            Division(a, b);
            break; 
            };
        break;
        }

    } else {
    console.log("Введите корректные данные")
    }
}


let res = calc(10, 5, "/");

    

console.log("Задача 2");
var n = 11119
    var b = 0;
    function recursiya(n){
        if (n%10) {
            b += n%10;
            n -=n%10;
            return recursiya(n/10);
            } else {
                return n+b;
            }
        }
    
    console.log(recursiya(n));

console.log("Задача 3");
function curry(a) {
    return function (b) {
      return a+b; 
    };
  }
   
  var inc = curry(1);
  console.log("increment",inc(6)); 
   
  var dec = curry(-1);
  console.log("decrement",dec(3));
   
  var plusFive = curry(5);
  console.log("plusFive",plusFive(4));
