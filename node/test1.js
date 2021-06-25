export default defineComponent({
  setup() {
    const [isLoading, countA] = useGet('/api');
    return {
      isLoading,
      countA
    };
  },
});

export function useGet(url) {
  const isLoading = ref(true);
  const dataSource = ref();
  axios
    .get(url)
    .then(({
      data
    }) => {
      dataSource.value = data;
    })
    .finally(() => {
      isLoading.value = false;
    });
  return [isLoading, dataSource];
  isLoading, dataSource
}