<template>
  <div v-show="show" class="pane">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ciic-pane',
  props: {
    name: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      show: true
    }
  },
  computed: {
    active() {
      return false
    }
  },
  watch: {
    label() {
      this.updateNav()
    }
  },
  mounted() {
    this.updateNav()
  },
  methods: {
    updateNav() {
      this.$parent.updateNav()
    }
  }
}
</script>
<style  scoped>
</style>
