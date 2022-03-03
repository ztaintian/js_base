// let person = {
//   name: 'name'
// }
// let personName = 'lihua'

// Object.defineProperty(person, 'name', {
//   get:function() {
//     return personName;
//   },
//   set:function(val) {
//     return name = val;
//   }
// })

// Object.keys(person).forEach(function(key){
//   Object.defineProperty(person,key,{
//     enumerable:true,
//     configurable:true,
//     get() {
//       return person[key];
//     },
//     set(val){
//       person[key] = val;
//     }
//   })
// })

// console.log(person.name = 99)

// let person = {
//   name: '',
//   age: 0,
//   sex: {}
// }

// function defineProperty(obj,key,val) {
//   Observer(key)
//   Object.defineProperty(obj,key,{
//     get() {
//       console.log('get')
//       return val
//     },
//     set(newVal) {
//       // Observer(newVal)
//       val = newVal;
//     }
//   })
// }

// function Observer(obj) {
//   if (typeof obj !== 'object' || obj === null) {
//     return
//   }
//   Object.keys(obj).forEach(key => {
//     defineProperty(obj,key,obj[key]);
//   })
// }

// Observer(person);
// person.sex.sex = 18;
// console.log(person)


// let arr = [1, 2, 3]
// let obj = {}
// //把arr作为obj的属性监听
// Object.defineProperty(obj, 'arr', {
//     get() {
//         console.log('get arr')
//         return arr
//     },
//     set(newVal) {
//         console.log('set', newVal)
//         arr = newVal
//     }
// })
// console.log(obj.arr)//输出get arr [1,2,3]  正常
// obj.arr = [1, 2, 3, 4] //输出set [1,2,3,4] 正常
// obj.arr.push(3) //输出get arr 不正常，监听不到push
