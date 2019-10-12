var fakeArray = {
  "0": "first",
  "1": "second",
  "2": "third",
  length: 3,
  [Symbol.iterator]: Array.prototype[Symbol.iterator]
};


console.log([...fakeArray])