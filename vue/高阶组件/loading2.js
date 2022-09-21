const withPromise = (wrapped, promiseFn) => {
  return {
    name: 'with-promise',
    data() {
      return {
        loading: false,
        error: false,
        result: null,
      }
    },
    async mounted() {
      this.loading = true
      const result = await promiseFn().finally(() => {
        this.loading = false;
      })
      this.result = result
    },
    render(h) {
      return h(wrapped,{
        props: {
          result: this.result,
          loading:this.loading
        }
      })
    }
  }
}
import view2 from './view2.vue'
const request = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ name: "ssh" });
    }, 1000);
  });
};

const hoc = withPromise(view2, request);

export default hoc