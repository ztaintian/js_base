import ExoprtTip from "./index.vue";
import Vue from "vue";
const obj = {};

obj.install = function() {
  const tipConstrustor = Vue.extend(ExoprtTip);
  Vue.prototype.$exportTip = function(dialogVisible) {
    const tip = new tipConstrustor();
    Object.assign(tip, { dialogVisible });
    tip.$mount(document.createElement('div'));
    document.body.appendChild(tip.$el);
  };
};

export default obj
