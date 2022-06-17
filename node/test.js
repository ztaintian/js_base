setTimeout(function(){
  console.log(1);
});
new Promise(function(resolve){		    
  console.log(2);
  resolve();
}).then(function(){		    
  console.log(3);
}).then(function(){
  console.log(4)
}); 		
console.log(5);
// 2/5/3/4/1
