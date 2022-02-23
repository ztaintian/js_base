function curry(){
  
}

var fn = curry(function(a, b, c) {
  return [a, b, c];
});

fn("a", "b", "c") // ["a", "b", "c"]

