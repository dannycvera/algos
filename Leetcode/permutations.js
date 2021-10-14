var permute = function (nums) {
  const results = [];
  const subArr = [];
  const set = new Set(nums);
  // {1,2,3} start with a copy of the array,
  // then do fast deletes from the set.

  const helper = () => {
    if (subArr.length === nums.length) {
      // once the sub array has all the elements push into results
      results.push([...subArr]);
    }

    // create array from the set so each recursive call will retain that instance
    // without the other calls interfering with the list.
    // the set array will grow smaller with each recursive call
    // with fewer wasted loops.
    const setArr = Array.from(set);
    for (let i = 0; i < setArr.length; i++) {
      let current = setArr[i];
      subArr.push(current);
      // delete the current element from the set
      // and call helper again
      // then backtrack by adding back to the set
      set.delete(current);
      helper();
      set.add(current);
      // backtrack and remove the element just added to the sub Array
      subArr.pop();
    }
  };
  helper();
  return results;
};

// /// leetcode solution
// var permute = function (nums) {
//   const results = [];
//   let n = nums.length;
//   const swap = (a, b, nums) => {
//     let temp = nums[a];
//     nums[a] = nums[b];
//     nums[b] = temp;
//   };

//   const helper = (first) => {
//     if (first === n) {
//       results.push([...nums]);
//     }
//     for (let i = first; i < n; i++) {
//       swap(first, i, nums);
//       helper(first + 1);
//       swap(first, i, nums);
//     }
//   };
//   helper(0);
//   return results;
// };

// var permute = function (nums) {
//     const results = [];
//     const subArr = [];
//     let n = nums.length;
//     const swap = (a,b) => {
//         let temp = nums[a];
//         nums[a] = nums[b];
//         nums[b] = temp;
//     }

//     const helper = () => {
//         if(subArr.length === n){
//             results.push([...subArr]);
//             return;
//         }
//         for(let i = 0; i < nums.length; i++){
//             // swap to  the current with the end so we can pop off
//             swap(i, nums.length - 1);
//             let cur = nums.pop();
//             // add value to subArr
//             subArr.push(cur);
//             helper();
//             subArr.pop();
//             // put the current back into nums and back in the right plase
//             nums.push(cur);
//             swap(i, nums.length - 1);
//         }
//     }

//     helper();
//     return results;
// };

// var permute = function(nums) {
//     const results = [];
//     const subArr = [];
//     const set = new Set();
//     const helper = () =>{
//         for(let i = 0; i < nums.length; i++){
//             if(!set.has(nums[i])){
//                 set.add(nums[i]);
//                 subArr.push(nums[i]);
//                 if(subArr.length === nums.length){
//                     results.push([...subArr]);
//                 } else {
//                     helper(nums[i])
//                 }
//                 set.delete(nums[i]);
//                 subArr.pop();
//             }
//         }
//     }
//     helper();
//     return results;
// };
/*
[1,2,3,4]
i
[1,2,3,4]
[1,2,4,3]

[1,3,2,4]
[1,3,4,2]

[1,4,3,2]
[1,4,2,3]

[2,1,3,4]
[2,1,4,3]

[2,3,1,4]
[2,3,4,1]

[2,4,1,3]
[2,4,3,1]

[1,2,3]
i
[1,2,3]
[1,3,2]

[1,2,3]
 i
[2,1,3]
[2,3,1]

[1,2,3]
   i
[3,1,2]
[3,2,1]
*/
