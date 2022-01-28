var HelloType;
(function (HelloType) {
    HelloType[HelloType["A"] = 0] = "A";
    HelloType[HelloType["B"] = 1] = "B";
})(HelloType || (HelloType = {}));
var A = /** @class */ (function () {
    function A() {
    }
    A.prototype.sayHello = function () {
        console.log("A");
    };
    return A;
}());
var B = /** @class */ (function () {
    function B() {
    }
    B.prototype.sayHello = function () {
        console.log("B");
    };
    return B;
}());
var HelloFactory = /** @class */ (function () {
    function HelloFactory() {
    }
    HelloFactory.getHello = function (type) {
        return HelloFactory.list.get(type);
    };
    HelloFactory.list = new Map([
        [HelloType.A, new A()],
        [HelloType.B, new B()],
    ]);
    return HelloFactory;
}());
// test
HelloFactory.getHello(HelloType.A).sayHello();
HelloFactory.getHello(HelloType.B).sayHello();
