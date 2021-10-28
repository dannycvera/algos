var groupAnagrams = function (strs) {
  const results = {};
  const key = new Array(26);

  for (let i = 0; i < strs.length; i++) {
    let current = strs[i];
    key.fill(0);
    for (let i = 0; i < current.length; i++) {
      key[current.charCodeAt(i) - 97] += 1; //minus 97 to get an index between 0 and 25
    }
    let currentKey = key.join(",");
    if (!results.hasOwnProperty(currentKey)) {
      results[currentKey] = [current];
    } else {
      results[currentKey].push(current);
    }
  }

  return Object.values(results);
};

/*
create an array with 26 elements
set them to 0;
incrimemnt the corrisponding letter number every time the letter is found inside a word
use the array joined by a comma as the key to the hashmap
everytime a word is translated to the wordKey and it matches an existing entry in the map
push it into the array

output the map values
*/

// var groupAnagrams = function(strs) {
//     const letterMap = {}; // {"aet":["eat",ate],}
//     const wordSort = (word) =>{
//         word = word.split("");
//         word.sort();
//         return word.join("");
//     }
//     for(let i = 0; i < strs.length; i++){
//         let current = strs[i];
//         let sortedWord = wordSort(current);
//         if(!letterMap.hasOwnProperty(sortedWord)){
//             letterMap[sortedWord] = [current];
//         } else {
//             letterMap[sortedWord].push(current);
//         }
//     }
//     return Object.values(letterMap);
// }

/*
sort letters of each word into ascending order
check if they exist in the hashmap
if they exist push into array under the key
return values of letter map


*/

// var groupAnagrams = function(strs) {
//     const map = new Map();

//     for(let i = 0; i < strs.length; i++){
//         let strHash = hashMap(strs[i]);

//         console.log(strHash);
//         console.log(map.has(strHash));
//         if(map.has(strHash)){
//             let strGroup = map.get(strHash);
//             strGroup.push(strs[i]);
//         } else {
//             map.set(strHash, [strs[i]]);
//         }
//     }
//     console.log(map.values());
//     return map.values();
// }

// function hashMap(str){
//     const hash = {};
//     for(let i = 0; i < str.length; i++){
//         if(hash[str[i]]){
//             hash[str.charCodeAt(i) - 96] += 1;
//         } else {
//             hash[str.charCodeAt(i) - 96] = 1;
//         }
//     }

//     return hash;
// }
// var groupAnagrams = function(strs) {
//     const freqHash = {};
//     let wordNum = 0;
//     for(let i = 0; i < strs.length; i++){
//         wordNum = strNum(strs[i]);
//         if(!freqHash[wordNum]) {
//             freqHash[wordNum] = [strs[i]];
//         } else {
//             freqHash[wordNum].push(strs[i]);
//         }

//     }
//     return [...Object.values(freqHash)]
// }

// function strNum(str){
//     let result = 0;
//     for(let i = 0; i < str.length; i++){
//         result += Math.pow(str.charCodeAt(i), 5);
//     }
//     return result;
// }

// var groupAnagrams = function(strs) {
//     const freqHash = {};
//     let wordNum = 0;

//     for(let i = 0; i < strs.length; i++){
//         wordNum = wordKey(strs[i]);
//         if(!freqHash[wordNum]) {
//             freqHash[wordNum] = [strs[i]];
//         } else {
//             freqHash[wordNum].push(strs[i]);
//         }

//     }
//     return [...Object.values(freqHash)]
// }

// function wordKey(str){
//     let map = {};
//     let letterNum = 0;
//     for(let i = 0; i < str.length; i++){
//         letterNum = str.charCodeAt(i) - 96;
//         if(map[letterNum]){
//             map[letterNum]++;
//         } else {
//             map[letterNum] = 1;
//         }
//     }
//     return JSON.stringify(map);
// }
