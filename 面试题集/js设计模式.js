// 单例模式   保证一个类仅有一个实例，并提供一个访问它的全局访问点

function SetManager(name) {
  this.manager = name;
}

SetManager.prototype.getName = function () {
  console.log(this.manager);
};

var SingletonSetManager = (function () {
  var manager = null;
  return function (name) {
    if (!manager) {
      manager = new SetManager(name);
    }
    return manager;
  };
})();

SingletonSetManager("a").getName(); // a
SingletonSetManager("b").getName(); // a
SingletonSetManager("c").getName(); // a

// 工厂模式 工厂模式中，我们在创建对象时不会对客户端暴露创建逻辑，并且是通过使用一个共同的接口来指向新创建的对象，用工厂方法代替new操作的一种模式。

class Creator {
  create(name) {
    return new Animal(name);
  }
}
class Animal {
  constructor(name) {
    this.name = name;
  }
}
var creator = new Creator();
var duck = creator.create("Duck");
console.log(duck.name); // Duck

var chicken = creator.create("Chicken");
console.log(chicken.name); // Chicken
