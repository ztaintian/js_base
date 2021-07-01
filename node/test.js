let product = reactive({
  price: 10,
  quantity: 2
});
let total = 0,
  salePrice = ref(0);
effect(() => {
  salePrice.value = product.price * 0.9
});
effect(() => {
  total = salePrice.value * product.quantity
});
console.log(total, salePrice.value); // 18 9
product.quantity = 5;
console.log(total, salePrice.value); // 45 9
product.price = 20;
console.log(total, salePrice.value); // 90 18