const allParenthesis = (n) => {
  const results = [];
  let o = 0;
  let c = 0;
  const backTrack = (o, c, str) => {
    // base case
    if (str.length === n * 2) {
      results.push(str);
      return;
    }

    // recursive cases
    if (o < n) {
      o++;
      backTrack(o, c, str + "(");
      o--;
    }
    if (c < o) {
      c++;
      backTrack(o, c, str + ")");
      c--;
    }
    // return array of strings
    return;
  };
  backTrack(o, c, "");
  return results;
};
console.log(allParenthesis(3));
console.log(allParenthesis(4));
console.log(allParenthesis(1));

/*
((()))
(()())
(())()
()(())
()()()
*/
