var canConstruct = function (ransomNote, magazine) {
  let hashMap = {}; // {a:2, b:1}
  for (let i = 0; i < magazine.length; i++) {
    if (hashMap[magazine[i]]) {
      hashMap[magazine[i]] += 1;
    } else {
      hashMap[magazine[i]] = 1;
    }
  }

  for (let i = 0; i < ransomNote.length; i++) {
    if (!hashMap[ransomNote[i]]) return false;
    hashMap[ransomNote[i]] -= 1;
    if (hashMap[ransomNote[i]] < 0) return false;
  }
  return true;
};
