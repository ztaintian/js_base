// 注意这里还是用到了 Map，原理和上文说的一致
const copies = new Map()
const objectTraps = {
  get(target, key) {
    if (key === MY_IMMER) return target
    const data = copies.get(target) || target
    return getProxy(data[key])
  },
  set(target, key, val) {
    const copy = getCopy(target)
    const newValue = getProxy(val)
    // 这里的判断用于拿 proxy 的 target
    // 否则直接 copy[key] = newValue 的话外部拿到的对象是个 proxy
    copy[key] = isProxy(newValue) ? newValue[MY_IMMER] : newValue
    return true
  }
}
const getCopy = data => {
  if (copies.has(data)) {
    return copies.get(data)
  }
  const copy = Array.isArray(data) ? data.slice() : { ...data }
  copies.set(data, copy)
  return copy
}
const getCopy = (data) => {

}