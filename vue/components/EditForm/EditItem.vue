<template>
  <el-col :offset="offset" :span="span" :xs="xs" :sm="sm" :md="md" :lg="lg" :xl="xl">
    <base-form-item
      :label="label"
      :prop="prop"
      :value="value"
      :item-type="itemType"
      :size="size"
      :config="config"
      v-bind="$attrs"
      v-on="$listeners"
      @input="change($event)"
    >
      <slot></slot>
    </base-form-item>
  </el-col>
</template>

<script>
import BaseFormItem from './BaseFormItem.vue';
export default {
  name: 'ciic-edit-item',
  components: { BaseFormItem },
  props: {
    label: {
      type: String,
      default: ''
    },
    prop: {
      type: String,
      default: ''
    },
    value: {
      // eslint-disable-next-line vue/require-prop-type-constructor
      type: String | Number,
      default: ''
    },
    itemType: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: function() {
        if (this.$parent && this.$parent.size) {
          return this.$parent.size;
        }
        return 'small';
      }
    },
    // eslint-disable-next-line vue/require-default-prop
    config: {
      type: Object
    },
    offset: {
      type: Number,
      default: 0
    },
    span: {
      type: Number,
      default: 8
    },
    // eslint-disable-next-line vue/require-default-prop
    xs: {
      type: Number
    },
    // eslint-disable-next-line vue/require-default-prop
    sm: {
      type: Number
    },
    // eslint-disable-next-line vue/require-default-prop
    md: {
      type: Number
    },
    // eslint-disable-next-line vue/require-default-prop
    lg: {
      type: Number
    },
    // eslint-disable-next-line vue/require-default-prop
    xl: {
      type: Number
    }
  },
  data() {
    return {

    };
  },
  computed: {
  },
  watch: {
  },
  mounted() {
  },
  methods: {
    change: function(val) { // v-model用
      this.$emit('input', val);
    }
  }
};
</script>

<style lang='scss' scoped>
</style>
