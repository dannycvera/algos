var evalRPN = function (tokens) {
  const stack = [];
  const map = {
    "*": (a, b) => a * b,
    "/": (a, b) => a / b,
    "-": (a, b) => a - b,
    "+": (a, b) => a + b,
  };
  let first, second;
  for (let el of tokens) {
    if (!isNaN(el)) {
      // if number
      stack.push(el);
    } else if (map.hasOwnProperty(el)) {
      second = parseInt(stack.pop());
      first = parseInt(stack.pop());
      stack.push(parseInt(map[el](first, second)));
    }
  }
  return stack.pop();
};

// var evalRPN = function (tokens) {
//   const stack = [];
//   const set = new Set(["+", "-", "*", "/"]);
//   let value1 = 0;
//   let value2 = 0;

//   const operators = (o) => {
//     value1 = stack.pop();
//     value2 = stack.pop();
//     switch (o) {
//       case "+":
//         return value2 + value1;
//       case "-":
//         return value2 - value1;
//       case "*":
//         return value2 * value1;
//       case "/":
//         return parseInt(value2 / value1);
//     }
//   };

//   for (let i = 0; i < tokens.length; i++) {
//     if (set.has(tokens[i])) {
//       stack.push(operators(tokens[i]));
//     } else {
//       stack.push(Number(tokens[i]));
//     }
//   }
//   return stack.pop();
// };
