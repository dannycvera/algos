// utilize UTF-16 code
// function hash(str) {
//   var total = 0;
//   var alphaPos = str.charCodeAt(0) - 96;
//   total += "hello"
// }

// hash("pink");

class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }

  // using objects in each array location
  set(key, val) {
    let index = this._hash(key);
    if (!this.keyMap[index]) {
      this.keyMap[index] = {};
    }
    this.keyMap[index][key] = val;
  }
  get(key) {
    let index = this._hash(key);
    if (this.keyMap[index]) {
      if (this.keyMap[index][key]) {
        return this.keyMap[index][key];
      }
    }
    return undefined;
  }
  keys() {
    const arrKeys = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        arrKeys.push(...Object.keys(this.keyMap[i]));
      }
    }
    return arrKeys;
  }
  values() {
    // let arrVals = [];
    // let tempArr;
    // for (let i = 0; i < this.keyMap.length; i++) {
    //   if (this.keyMap[i]) {
    //     tempArr = Object.values(this.keyMap[i]);
    //     for (let j = 0; j < tempArr.length; j++) {
    //       if (!arrVals.includes(tempArr[j])) {
    //         arrVals.push(tempArr[j]);
    //       }
    //     }
    //   }
    // }

    // Weird way of using an object to output array of values
    // Sets the values as the keys in a large temp object for faster duplicate checks
    let tempObj = {};
    let arrTemp = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (var key in this.keyMap[i]) {
          if (!tempObj[this.keyMap[i][key]]) {
            tempObj[this.keyMap[i][key]] = key;
            arrTemp.push(this.keyMap[i][key]);
          }
        }
      }
    }

    return arrTemp;
  }
}

var hash = new HashTable();
console.log(hash._hash("derr"));
console.log(hash._hash("purple"));
hash.set("pink", "ffc0cb");
hash.set("red", "ff0000");
hash.set("derr", "notAColor");
hash.set("purple", "800080");
hash.set("violet", "800080");
console.log(hash);
console.log(hash.get("pink"));
console.log(hash.get("blue"));
console.log(hash.get("purple"));
console.log(hash.keys());
console.log(hash.values());
// console.log(hash.get("derr"));
