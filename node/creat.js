function _creat(o) {
  function F() {}
  F.prototype = o;
  return new F();
}

const myObjectCreate = function (proto, propertiesObject) {
  if (typeof proto !== "object" && typeof proto !== "function") {
    throw new TypeError("The prototype must be a object");
  } else if (proto === null) {
    throw new TypeError("The prototype cannot be null");
  }

  // 创建构造函数，并将构造函数的原型对象设置为proto
  const F = function () {};
  F.prototype = proto;

  // 创建新对象
  let obj = new F();

  if (propertiesObject && typeof propertiesObject === "object") {
    Object.defineProperties(obj, propertiesObject);
  }

  return obj;
};
// defineProperties

let person = myObjectCreate(
  { name: "Alex" },
  {
    age: {
      writable: false,
      enumerable: true,
      value: 18,
    },
  }
);
console.log(person.name, person.age); // Alex 18
