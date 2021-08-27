function getName<T,U> (name: T, id: U): [T, U] {
  return [name, id]
}
getName('peen', 1);
getName('peen', '222'); // 正常
getName<string, number>('peen', '22'); // 报错: '22'不是number类型
