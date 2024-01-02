<template>
  <view style="text-align: center; padding-top: 200px">
    <picker
      id="picker"
      mode="multiSelector"
      :range="range"
      :value="value"
      @columnchange="columnchange"
      @cancel="pickerCancel"
    >
      <view style="font-size: 29px">{{ selected }}</view>
      <view style="padding-top: 15px"
        >选择的时候，“市”放空则精确到省，“区县”放空则精确到市</view
      >
    </picker>
  </view>
</template>

<script>
import { area } from "./area.js";
export default {
  data() {
    return {
      selected: "请选择",
      range: [[""], [""], [""]],
      provinceCodes: [],
      cityCodes: [],
      value: [1, 0, 0],
    };
  },
  methods: {
    pickerCancel() {
      console.log("pickerCancel");
    },
    columnchange: function (e) {
      this.value[e.detail.column] = e.detail.value;
      if (0 == e.detail.column) {
        let provinceCode = this.provinceCodes[e.detail.value - 1];
        this.range[1] = [""];
        this.range[2] = [""];
        let cities = [""];
        this.cityCodes = [];
        for (let cityCode in area.city_list) {
          if (
            Number(cityCode) >= Number(provinceCode) &&
            Number(cityCode) <= Number(provinceCode) + 9900
          ) {
            cities.push(area.city_list[cityCode]);
            this.cityCodes.push(cityCode);
          }
        }
        this.range[1] = cities;
        this.value.splice(1, 1, 0);
        this.value.splice(2, 1, 0);
      } else if (1 == e.detail.column) {
        this.value[2] = 0;
        let cityCode = this.cityCodes[e.detail.value - 1];
        this.range[2] = [""];
        let counties = [""];
        for (let countyCode in area.county_list) {
          if (
            Number(countyCode) >= Number(cityCode) &&
            Number(countyCode) <= Number(cityCode) + 99
          ) {
            counties.push(area.county_list[countyCode]);
          }
        }
        this.range[2] = counties;
        this.value.splice(2, 1, 0);
      }
      this.$forceUpdate();
      if (this.range[2][this.value[2]]) {
        this.selected = this.range[2][this.value[2]];
      } else if (this.range[1][this.value[1]]) {
        this.selected = this.range[1][this.value[1]];
      } else if (this.range[0][this.value[0]]) {
        this.selected = this.range[0][this.value[0]];
      }
    },
  },
  mounted() {
    for (let provinceCode in area.province_list) {
      this.range[0].push(area.province_list[provinceCode]);
      this.provinceCodes.push(provinceCode);
    }
  },
};
</script>
