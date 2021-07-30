class HashTable {
  constructor(size) {
    this.size = size;
    this.array = new Array(this.size);
    this.array.fill(null);
  }
  set(key, val) {
    let index = hash(key, this.size);
    if (!this.array[index]) {
      this.array[index] = {};
    }
    // else if (this.array[index][key]) {
    //   return "key is already set with a value";
    // }
    let bucket = this.array[index];
    bucket[key] = val;
  }

  get(key) {
    let index = hash(key, this.size);
    if (this.array[index]) {
      return this.array[index][key];
    } else {
      return null;
    }
  }

  remove(key) {
    let index = hash(key, this.size);
    if (this.array[index]) {
      delete this.array[index][key];
    }
  }

  keys() {
    const results = [];
    for (let i = 0; i < this.size; i++) {
      if (this.array[i]) {
        results.push(...Object.keys(this.array[i]));
      }
    }
    return results;
  }

  values() {
    const results = [];
    for (let i = 0; i < this.size; i++) {
      if (this.array[i]) {
        results.push(...Object.values(this.array[i]));
      }
    }
    return results;
  }
}

function hash(key, arrayLen) {
  let total = 0;
  for (let i = 0; i < key.length; i++) {
    let char = key[i];
    let value = char.charCodeAt(0) - 96;
    total = (total + value) % arrayLen;
  }
  return total;
}

let newHash = new HashTable(10);
newHash.set("turkey", "burger");
newHash.set("turnkey", "lock");
newHash.set("ham", "cheese");
newHash.set("greasy", "fries");
newHash.set("french", "bread");
console.log(newHash.set("french", "fries"));
console.log(newHash);
// console.log(newHash.remove("french"));
newHash.get("tom");
console.log(newHash.get("french"));

console.log(newHash.keys());
console.log(newHash.values());
console.log(newHash.get("french"));
