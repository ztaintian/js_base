function deepCopy(obj) {
  if (!obj || typeof obj != 'object') {
    return {};
  }
  let newObject = Array.isArray(obj) ? [] : {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObject[key] = obj[key] && typeof obj[key] === 'object' ? deepCopy(obj[key]) : obj[key];
    }
  }
  return newObject;
}
function deepCope() {
  
}