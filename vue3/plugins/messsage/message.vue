
<template>
  <transition name="slide-top">
    <section id="message" v-if="msgOueue.length > 0">
      <transition-group name="slide-top">
        <div
          class="message"
          v-for="item in msgOueue"
          :key="item.uid"
          :style="
            'color:' +
            item.config.color +
            ';background:' +
            item.config.background +
            ';border:1px solid ' +
            item.config.borderColor +
            ';'
          "
        >
          <span class="message-icons" :class="item.config.icon"></span>
          <div class="messagebox">{{ item.config.content }}</div>
        </div>
      </transition-group>
    </section>
  </transition>
</template>
 
<script>
export default {
  data() {
    return {
      msgOueue: [],
      config: {
        uid: "",
        content: "内容", // 内容
        background: "#909399",
        color: "#303133",
        borderColor: "#303133",
        icon: "el-icon-info",
      },
    };
  },
  methods: {
    // 关闭方法
    onClose() {
      this.msgOueue.shift();
      this.type = 0;
    },
  },
};
</script>
 
<style scoped>
#message {
  width: 60rem;
  height: 5rem;
  position: absolute;
  top: 5rem;
  left: 30rem;
}

.message {
  width: 56rem;
  height: 3rem;
  border-radius: 0.5rem;
  margin-bottom: 2rem;
  padding: 1rem 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.message-icons {
  display: inline-block;
  font-size: 2rem;
}

.messagebox {
  width: 100%;
  height: 100%;
  display: inline-block;
  margin-left: 2rem;
  font-size: 1.5rem;
  line-height: 3rem;
}

.slide-top-enter-active,
.slide-top-leave-active {
  will-change: transform;
  transition: all 0.8s;
}

.slide-top-enter {
  overflow: hidden;
  opacity: 0;
  transform: translateY(-100%);
  height: 0;
  margin-bottom: 0;
  padding: 0;
  width: 0;
}

.slide-top-leave-to {
  overflow: hidden;
  opacity: 0;
  transform: translateY(-100%);
  height: 0;
  margin-bottom: 0;
  padding: 0;
  width: 0;
}
</style>
