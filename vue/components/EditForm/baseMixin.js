
const DATEARR = ['year', 'month', 'date', 'dates', 'week', 'datetime', 'datetimerange', 'daterange', 'monthrange'];
export default {
  props: {
    label: {
      type: String,
      default: ''
    },
    labelWidth: {
      type: String,
      default: ''
    },
    prop: {
      type: String,
      default: ''
    },
    value: {
      type: String | Number,
      default: ''
    },
    itemType: {
      type: String,
      default: ''
    },
    config: {
      type: Object,
      default: () => { return {}; }
    }
  },
  data() {
    return {
      inputPlaceholder: '请输入',
      selectPlaceholder: '请选择'
    };
  },
  computed: {
    options() {
      if (!this.config) return [];
      const options = this.config.options || [];
      // ['1'，'2']
      if (options.length > 0 && ['string', 'number'].includes(typeof (options[0]))) {
        return options.map((it, index) => {
          return {
            label: it,
            value: it,
            key: it + '_' + index
          };
        });
      }
      // 使用传入 的 label 和 value
      return options.map((it, index) => {
        return {
          label: it[this.config.label],
          value: it[this.config.value],
          disabled: !!it.disabled,
          key: it[this.config.value] + '_' + index
        };
      });
    }
  },
  watch: {
  },
  methods: {
    change: function(val) { // v-model用
      this.$emit('input', val);
    },
    // 获取el组件的render
    _getFormItem(h) {
      const { $attrs, $listeners, value } = this;
      // eslint-disable-next-line prefer-const
      let { 'value-format': valueFormat, clearable, rows, placeholder, type } = $attrs;
      let { itemType } = this;
      // 有this.config.options 默认为select
      if (this.config.options && itemType === '') itemType = 'select';
      // 没有设置input设置默认 date-picker
      if (DATEARR.includes(type) && itemType === '') itemType = 'date-picker';
      // 默认为input
      if (itemType === '') itemType = 'input';

      // 如果有attr就是使用 ,默认为true
      if (clearable == null || clearable === 'undefined') {
        clearable = true;
      }
      // 如果有attr就是使用 ,设置 month和date的特殊format
      if (valueFormat == null || valueFormat === 'undefined') {
        if (type === 'month') {
          valueFormat = 'yyyy/MM';
        } else if (type === 'date') {
          if (!value || String.prototype.indexOf.call(value, '-') < 0) {
            valueFormat = 'yyyy/MM/dd';
          }
        }
      }

      return h(`el-${itemType}`, {
        attrs: {
          placeholder: placeholder || (itemType === 'select' ? '请选择' : '请输入'),
          rows: rows
        },
        props: {
          ...$attrs,
          valueFormat,
          value,
          clearable,
          filterable: true
        },
        style: {
          width: '100%'
        },
        on: {
          ...$listeners,
          input: (val) => {
            this.$emit('input', val);
          }
        },
        nativeOn: {
          keyup: (event) => {
            const { key } = event;
            if (key === 'Enter') {
              this.$emit('onEnter');
            }
          }
        }
      }, itemType === 'select' ? this._getSelectOption(h) : []);
    },
    // 获取 select 的 option
    _getSelectOption(h) {
      return this.options.map(option => {
        return h('el-option', {
          key: option.key,
          props: {
            value: option.value,
            label: option.label,
            disabled: option.disabled
          }
        });
      });
    }
  }
};

