function reload(name: string): void

function reload(name: string, age ? : number): void

function reload(name: any, age ? number): any {
  if (age) {
    console.log(`我的名字是: ${name}, 今年${age}岁！！`);
  } else {
    console.log(`大家好，我的名字是: ${name}`);
  }
}

reload('Clearlove'); // 大家好，我的名字是Clearlove
reload('Clearlove', 18); // 我的名字是Clearlove， 今年18岁！！