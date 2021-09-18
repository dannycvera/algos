/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
// var floodFill = function(image, sr, sc, newColor) {
//     const q = new Queue();
//     const moves = [[1,0],[-1,0],[0,1],[0,-1]]
//     q.enqueue([sr,sc]);
//     const visited = new Set();
//     let originalColor = image[sr][sc];
//     let cR,cC,mR,mC,cMR,cMC;
//     while(q.size() > 0){
//         [cR, cC] = q.dequeue();
//         image[cR][cC] = newColor;
//         visited.add(cR +","+ cC);
//         for([mR, mC] of moves){
//             [cMR,cMC] = [cR + mR, cC + mC];
//             if(image[cMR] && image[cMR][cMC] === originalColor && !visited.has(cMR +"," + cMC)){
//                 q.enqueue([cMR, cMC]);
//             }
//         }
//     }
//     return image;
// };

//fastest
var floodFill = function (image, sr, sc, newColor) {
  let oColor = image[sr][sc];

  dfsHelper(sr, sc, oColor, newColor, image);
  return image;
};

var dfsHelper = function (mr, mc, oColor, newColor, image) {
  if (
    mr < 0 ||
    mc < 0 ||
    mr >= image.length ||
    mc >= image[0].length ||
    image[mr][mc] !== oColor ||
    image[mr][mc] === newColor
  ) {
    return;
  }
  image[mr][mc] = newColor;
  dfsHelper(mr - 1, mc, oColor, newColor, image);
  dfsHelper(mr, mc - 1, oColor, newColor, image);
  dfsHelper(mr + 1, mc, oColor, newColor, image);
  dfsHelper(mr, mc + 1, oColor, newColor, image);
};

// var floodFill = function(image, sr, sc, newColor) {
//     let oColor = image[sr][sc];
//     if(newColor === oColor){
//         return image;
//     }
//     const q = new Queue();
//     q.enqueue([sr,sc]);
//     let cR,cC;
//     while(q.size() > 0){
//         [cR, cC] = q.dequeue();
//         image[cR][cC] = newColor;
//         if(cR >= 1 && image[cR - 1][cC] === oColor){
//             q.enqueue([cR - 1, cC]);
//         }
//         if(cC >= 1 && image[cR][cC - 1] === oColor){
//             q.enqueue([cR, cC - 1]);
//         }
//         if(cR + 1 < image.length && image[cR + 1][cC] === oColor){
//             q.enqueue([cR + 1, cC]);
//         }
//         if(cC + 1 < image[0].length && image[cR][cC + 1] === oColor){
//             q.enqueue([cR, cC + 1]);
//         }
//     }
//     return image;
// };
