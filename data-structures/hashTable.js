function hash(key, arrayLen) {
  let total = 0;
  for (let i = 0; i < key.length; i++) {
    let char = key[i];
    // alphabetical position of char
    let value = char.charCodeAt(0) - 96;
    // keeps it within arrayLen
    total = (total + value) % arrayLen;
  }
  return total;
}

class HashTable {
  constructor(size = 10) {
    this.array = new Array(size); //[[] ,[{fries: nodes}, {burger: nodes}],[]]
    for (let i = 0; i < size; i++) {
      this.array[i] = new Array().fill(null);
    }
  }

  set(key, val) {
    let index = hash(key, this.array.length);
    let bucket = this.array[index];
    for (const obj of bucket) {
      if (obj.hasOwnProperty(key)) {
        obj[key] = val;
        return this;
      }
    }
    bucket.push({ [key]: val });
    return this;
  }

  get(key) {
    let index = hash(key, this.array.length);
    let result = null;
    let bucket = this.array[index];
    for (const obj of bucket) {
      if (obj.hasOwnProperty(key)) {
        result = obj[key];
      }
    }
    return result;
  }

  remove(key) {
    let index = hash(key, this.array.length);
    let result = "not found";
    const bucket = this.array[index];
    const tempBucket = [];
    for (const obj of bucket) {
      if (obj.hasOwnProperty(key)) {
        result = `removed ${key}`;
      } else {
        tempBucket.push(obj);
      }
    }
    if (result.startsWith("removed")) {
      this.array[index] = tempBucket;
    }
    return result;
  }

  keys() {
    //return an array of keys
    const results = [];
    for (const bucket of this.array) {
      for (const keyVal of bucket) {
        results.push(...Object.keys(keyVal));
      }
    }
    return results;
  }

  values() {
    //return an array of values
    const results = [];
    for (const bucket of this.array) {
      for (const keyVal of bucket) {
        results.push(...Object.values(keyVal));
      }
    }
    return results;
  }
}

const nHash = new HashTable(10);
nHash.set("fries", 5);
nHash.set("burgers", 3);
console.log(nHash.get("fries"));
nHash.set("fries", 6);
console.log(nHash.get("fries"));
nHash.set("fries", 5);
console.log(nHash.remove("fries"));
nHash.set("fries", 6);
console.log(nHash.keys());
nHash.set("fries", 4);
console.log(nHash.values());
nHash.set("fries", 5);
