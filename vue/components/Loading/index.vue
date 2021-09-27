<template>
  <div v-if="show" class="lds-spinner">
    <el-dialog :visible.sync="show" :modal-append-to-body="false" :show-close="false" :modal="false"
      :append-to-body="true" center class="loading_dialog">
      <div class="loading-content">
        <p class="text">请稍后...</p>
        <div class="loading"></div>
      </div>
    </el-dialog>
  </div>
</template>
<script>
  export default {
    name: 'Loading',
    props: {
      show: Boolean
    },
    data() {
      return {};
    }
  };
</script>
<style lang="scss" scoped>
  ::v-deep .el-dialog {
    margin: 0 !important;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0.51);
    max-height: none !important;
    max-width: none !important;
    border-radius: 0 !important;
  }

  .loading-content {
    width: 190px;
    height: 128px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    background: #FFFFFF;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.16);
    opacity: 1;
    border-radius: 10px;

    .text {
      width: 50px;
      height: 18px;
      font-size: 12px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      line-height: 0px;
      color: #363636;
      opacity: 1;
    }

    .loading {
      border: 3px solid #9DDCFE;
      border-radius: 50%;
      border-top: 3px solid #08A6FB;
      width: 28px;
      height: 28px;
      -webkit-animation: spin 2s linear infinite;
      animation: spin 2s linear infinite;
    }

    @-webkit-keyframes spin {
      0% {
        -webkit-transform: rotate(0deg);
      }

      100% {
        -webkit-transform: rotate(360deg);
      }
    }

    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }

      100% {
        transform: rotate(360deg);
      }
    }
  }
</style>