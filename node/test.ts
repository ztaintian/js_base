enum HelloType {
  A,
  B,
}

interface Hello {
  sayHello();
}
class A implements Hello {
  sayHello() {
    console.log("A");
  }
}

class B implements Hello {
  sayHello() {
    console.log("B");
  }
}

class HelloFactory {
  static list = new Map<HelloType, Hello>([
    [HelloType.A, new A()],
    [HelloType.B, new B()],
  ]);

  static getHello(type: HelloType) {
    return HelloFactory.list.get(type);
  }
}

// test
HelloFactory.getHello(HelloType.A).sayHello();
HelloFactory.getHello(HelloType.B).sayHello();
