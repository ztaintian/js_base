// class A {
//   constructor() {
//     this.p = 2;
//   }
// }

// class B extends A {
//   constructor() {
//     super();
//   }
//   get m() {
//     return super.p;
//   }
// }

class A {
  constructor() {
    this.x = 1;
  }
  print() {
    console.log(this.x);
  }
}

class B extends A {
  constructor() {
    super();
    this.x = 2;
  }
  m() {
    super.print();
  }
}

let b = new B();
b.m() // 2