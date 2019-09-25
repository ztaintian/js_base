 // 校验手机号
 let phoneReg = /^1(1|2|3)[234][1-9]{8}$/
 let phone = '11523232323'
 console.log('phone', phoneReg.test(phone))
 // 校验邮箱
 let emailReg = /^\w*@[a-z0-9]*\.[a-z]*$/
 let email = '121221@qq.com'
 console.log('email', emailReg.test(email))