<script>
import baseMixin from './baseMixin';
export default {
  name: 'ciic-base-form-item',
  mixins: [baseMixin],
  render(h) {
    const { label, prop, labelWidth, $slots, $attrs } = this;
    const content = this._getFormItem(h);
    return h('el-form-item', {
      attrs: { label, prop, labelWidth, required: $attrs.required }
    }, $slots.default || [content]);
  }
};
</script>
