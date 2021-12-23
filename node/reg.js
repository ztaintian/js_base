//  // 校验手机号
 let phoneReg = /^1(1|2|3)[234][1-9]{8}$/
 let phone = '11523232323'
 console.log('phone', phoneReg.test(phone))
 // 校验邮箱
 let emailReg = /^\w+@[a-z0-9]\.[a-z]*$/
 let email = '@qq.com'
 console.log('email', emailReg.test(email))
//  正整数大于等于0
let numberReg = /^[+]{0,1}(\d+)$/
let number = 464534534543
console.log('number', numberReg.test(number))

// 标题头个字大写
function test(str) {
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  })
}