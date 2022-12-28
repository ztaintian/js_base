<!-- "usingComponents": {  
  "companyitem":"/components/companytree/component/companyitem"  
}  -->

<template>
  <div>
    <companyitem @getCss="getCss" v-for="item in dataTree" :localData="item" :key="item.name"
      >11</companyitem
    >
  </div>
</template>

<script>
import companyitem from "./component/companyitem.vue";
export default {
  components: {
    companyitem,
  },
  name: "companytree",
  props: {
    dataTree: {
      type: Array,
      default: () => {
        return [
          {
            name: "name1111",
            level: 1,
            child: [
              {
                level: 2,
                name: "name222",
                child: [
                  {
                    level: 3,
                    name: "name333",
                    child: [
                      {
                        level: 4,
                        name: "name444",
                      },

                      {
                        level: 4,
                        name: "name4442",
                      },
                    ],
                  },
                  {
                    level: 3,
                    name: "name333",
                    child: [
                      {
                        level: 4,
                        name: "name4444",
                      },

                      {
                        level: 4,
                        name: "name444422",
                      },
                    ],
                  },
                ],
              },
              {
                level: 2,
                name: "name222",
                child: [
                  {
                    level: 3,
                    name: "name333",
                    child: [
                      {
                        level: 4,
                        name: "name444",
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ];
      },
    },
  },
  mounted() {
    console.log("this.dataTree", this.dataTree);
    uni.$on('getCss',(localData)=>{
      console.log(localData)
    })
  },
  methods: {
    
  }
};
</script>

<style lang="stylus" scoped></style>