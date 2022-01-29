// // 定义
// interface IGirl {
//   name: string,
//   age: number,
//   skill: string,
//   isAnMo: boolean;
// };
// // 定义搜索小姐姐的入参
// interface ISearchParams extends IGirl{
//   serviceTime: string;
// }
// interface IGetGirls {
//   data: IGirl[];
// }
// var data:ISearchParams = {
//   name: '55555',
//   age: 111,
//   skill: '',
//   isAnMo: true,
//   serviceTime: ''
// }
// console.log(data)


// enum CarTransmission {
//   Automatic = 200,
//   Manual = 300
// }

// interface Motorcycle {
//   vType: "motorcycle"; // discriminant
//   make: number; // year
// }

// interface Car {
//   vType: "car"; // discriminant
//   transmission: CarTransmission
// }

// interface Truck {
//   vType: "truck"; // discriminant
//   capacity: number; // in tons
// }


// type Vehicle = Motorcycle | Car | Truck;


// interface X {
//   c: string;
//   d: string;
// }

// interface Y {
//   c: number;
//   e: string
// }

// type XY = X & Y;
// type YX = Y & X;

// let p: XY;
// let q: YX;



// 默认参数
function createUserId(
  name: string = "semlinker",
  id: number,
  age?: number
): string {
  return name + id;
}
