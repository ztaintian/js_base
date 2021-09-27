<script>
import baseMixin from './baseMixin';
export default {
  name: 'ciic-base-item',
  mixins: [baseMixin],
  render(h) {
    return this._getFormItem(h);
  }
};
</script>
