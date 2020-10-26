// 校验手机号
let phoneReg = /^1(1|2|3)[234][1-9]{8}$/
let phone = '11523232323'
console.log('phone', phoneReg.test(phone))
// 校验邮箱
let emailReg = /^\w+@[a-z0-9]\.[a-z]*$/
let email = '@qq.com'
console.log('email', emailReg.test(email))
// 正整数大于等于0
let numberReg = /^[+]{0,1}(\d+)$/
let number = 464534534543
console.log('number', numberReg.test(number))
// 校验密码 密码必须由至少6个字符组成 必须包含数字大写字母和小写字母
var password = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z]).[0-9a-zA-Z]{5,50}$/
// 空与空格校验
var emptyReg = /^\s*$/
// 两位小数点校验
var twoNumberReg = /^\d+\.?(\d{1,2})?$/
// 身份证校验
var identityNo = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/
var positiveNumberReg = /^[0-9]*[1-9][0-9]*$/
// 只能是数字字母校验
var numLetterRegs = /^[a-zA-Z0-9_]{0,30}$/
// 电话号码校验
var phoneReg = /^1[3-9]\d{9}$/
// 银行卡校验
var bankReg = /^([1-9]{1})(\d{10,25})$/
// 中文姓名校验
var nameReg = /^[\u4E00-\u9FA5\uf900-\ufa2d·s]{2,20}$/
// 验证码6位数组校验
var sixNumReg = /^\d{6}$/
// 邮箱校验
var emailReg = /^\w+@[a-z0-9]+\.[a-z]+$/i