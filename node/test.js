var arr = [
  {
    money: 1,
  },
  {
    money: 2,
  },
];
var cc = arr.reduce((pre, cur) => {
  return pre + cur.money;
}, 0);
console.log(cc);
