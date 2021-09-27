<template>
  <button
    type="button"
    class="ciic-button"
    :class="[
      type ? 'ciic-button--' + type : ''
    ]"
    pv16
    @click="handleClick"
  >
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>

<script>
export default {
  name: 'ciic-button',
  props: {
    type: {
      type: String,
      default: 'default'
    }
  },
  methods: {
    handleClick(evt) {
      this.$emit('click', evt)
    }
  }
}
</script>

<style lang="scss" scoped>
  $default-bg-color :#F2F2F2;
  $default-font-color:rgba(54, 54, 54, 0.6);
  $primary-bg-color :#D3E8FA;
  $primary-font-color : $blue;
  $hover-font-color: $blue;
  // 默认按钮
  .ciic-button {
    display: inline-block;
    height: 28px;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    border: solid 1px $default-bg-color;
    background-color: $default-bg-color;
    color: $default-font-color;
    -webkit-appearance: none;
    text-align: center;
    box-sizing: border-box;
    outline: none;
    transition: .1s;
    padding: 0 16px;
    font-size: 12px;
    font-weight: bold;
    border-radius: 5px;
    &:hover {
      background: #fefefe;
      color:  $hover-font-color;
    }
  }

  .ciic-button--primary {
    background-color: $primary-bg-color;
    border-color: $primary-bg-color;
    color: $primary-font-color;
  }

  .ciic-button--deep {
    background-color:  $primary-font-color;
    border-color: $primary-font-color;
    color: #fff;
  }

  .ciic-button--white {
    background-color:  #fff;
    border-color: $primary-font-color;
    color: $primary-font-color;
    &:hover {
      background: $primary-font-color;
      color:  #fff;
    }
  }

</style>
