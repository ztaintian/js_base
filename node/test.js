function reverseInt(intNumber) {
  console.log('intNumber % 10', intNumber, intNumber % 10)
  if (!(intNumber % 10)) {
    return ''
  }
  return (intNumber % 10).toString() + reverseInt(parseInt(intNumber / 10))
}
console.log(reverseInt(12345))