// var evalRPN = function (tokens) {
//   const stack = [];
//   let value1 = 0;
//   let value2 = 0;
//   for (let i = 0; i < tokens.length; i++) {
//     switch (tokens[i]) {
//       case "+":
//         value1 = stack.pop();
//         value2 = stack.pop();
//         stack.push(value2 + value1);
//         break;
//       case "-":
//         value1 = stack.pop();
//         value2 = stack.pop();
//         stack.push(value2 - value1);
//         break;
//       case "*":
//         value1 = stack.pop();
//         value2 = stack.pop();
//         stack.push(value2 * value1);
//         break;
//       case "/":
//         value1 = stack.pop();
//         value2 = stack.pop();
//         stack.push(Math.trunc(value2 / value1));
//         break;
//       default:
//         stack.push(Number(tokens[i]));
//     }
//   }
//   return stack.pop();
// };

var evalRPN = function (tokens) {
  const stack = [];
  const set = new Set(["+", "-", "*", "/"]);
  let value1 = 0;
  let value2 = 0;

  const operators = (o) => {
    value1 = stack.pop();
    value2 = stack.pop();
    switch (o) {
      case "+":
        return value2 + value1;
        break;
      case "-":
        return value2 - value1;
        break;
      case "*":
        return value2 * value1;
        break;
      case "/":
        return parseInt(value2 / value1);
        break;
    }
  };

  for (let i = 0; i < tokens.length; i++) {
    if (set.has(tokens[i])) {
      stack.push(operators(tokens[i]));
    } else {
      stack.push(Number(tokens[i]));
    }
  }
  return stack.pop();
};

const arr = [
  "10",
  "6",
  "9",
  "3",
  "+",
  "-11",
  "*",
  "/",
  "*",
  "17",
  "+",
  "5",
  "+",
];
console.log(evalRPN(arr));
