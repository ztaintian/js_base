var o1 = {
  a:1
}
var o2 = {
  b:2
}
var o3 = {
  c:3
}
o3.proto = o2;
o2.proto = o1;
o1.proto = null; 
var handel = {
  get:function(obj, prop) {
    console.log(obj,prop)
    var curr = obj;
    while(curr) {
      if (!curr[prop]) {
        curr = curr.proto;
        continue;
      }
      return curr[prop]
    }
    
  }
}
var proxy = new Proxy(o3,handel)
console.log(proxy.d)



