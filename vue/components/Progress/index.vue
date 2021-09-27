<template>
  <div
    class="progress"
    :style="{ height: progressHeight+'px' }"
  >
    <div
      class="progress-bar active"
      :class="[
        state ? 'progress-bar--' + state : '',
        state === 'doing' ? 'progress-bar-striped' :''
      ]"
      :style="{ width: cRate }"
    >
    </div>
    <div class="progress-desc">
      {{ cMsg }}
    </div>
  </div>
</template>

<script>
const STATES = ['fail', 'done', 'begin', 'doing'] // 失败,成功,解析中
export default {
  name: 'ciic-progress',
  props: {
    progressHeight: {
      type: Number,
      default: 20
    },
    // 进度条状态
    state: {
      type: String,
      validator: function(val) {
        return STATES.includes(val)
      },
      required: true
    },
    // 进度
    rate: {
      type: String,
      default: ''
    },
    failMsg: {
      type: String,
      default: ''
    }
  },
  data() {
    return {

    }
  },
  computed: {
    cRate() {
      if (this.state === 'begin') {
        return '0'
      } else if (this.state === 'doing') {
        return this.rate + '%'
      } else {
        return '100%'
      }
    },
    cMsg() {
      if (this.state === 'begin') {
        return '开始解析...'
      } else if (this.state === 'doing') {
        return '正在解析...'
      } else if (this.state === 'fail') {
        return `解析失败: ${this.failMsg}`
      } else if (this.state === 'done') {
        return '解析成功'
      }
      return ''
    }
  }
}
</script>

<style lang='scss' scoped>
.progress{
  // height: 25px;
  background:  #AEAEAE;
  overflow: visible;
  border-radius: 15px;
  position: relative;
  .progress-bar{
    height: 100%;
    border-radius: 15px;
    // animation: animate-positive 2s;
    &--fail{
      background-color: #FF0000;
    }
    &--done{
      background-color: #21B404;
    }
    &--doing{
      background-color: #21B404;
    }
    &.active {
      animation: reverse progress-bar-stripes 1s linear infinite, animate-positive 2s;
    }
  }
  .progress-desc{
    position: absolute;
    top: 0;
    left:0;
    height: 100%;
    z-index: 1;
    width: 100%;
    @include box-center(center,center);
    @include font(12px,bold,#fff);
    transform: scale(.9);
  }
}

.progress-striped .progress-bar, .progress-bar-striped {
    background-image: linear-gradient(
                  135deg,
                  rgba(255,255,255,.35) 25%,
                  transparent 25%,
                  transparent 50%,
                  rgba(255,255,255,.35) 50%,
                  rgba(255,255,255,.35) 75%,
                  transparent 75%,
                  transparent);
    background-size: 40px 40px;
}
@-webkit-keyframes animate-positive{
  0% { width: 0; }
}
@keyframes animate-positive{
  0% { width: 0; }
}
@-webkit-keyframes progress-bar-stripes {
  from {
    background-position: 40px 0;
  }
  to {
    background-position: 0 0;
  }
}
@keyframes progress-bar-stripes {
  from {
    background-position: 40px 0;
  }
  to {
    background-position: 0 0;
  }
}
</style>
