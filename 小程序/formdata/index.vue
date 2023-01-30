<template>
  <div @click="beforeUpload">上传</div>
</template>

<script>

export default {
  methods: {
    beforeUpload() {
      // 微信聊天文件上传
      const that = this;
      uni.chooseMessageFile({
        count: 1,
        type: "file",
        extension: ["pdf", "doc", "docx", "jpg", "png", "wps", "txt", "html"],
        success(res) {
          if (that.toastFn(res.tempFiles[0].size)) {
            const form = new FormData();
            form.appendFile(
              "file",
              res.tempFiles[0].path,
              res.tempFiles[0].name
            );
            var newDate = form.getData();
            that.$Ajax
              .post(that.$api.imgUrl, newDate.buffer, {
                headers: { "Content-Type": newDate.contentType },
              })
              .then((res) => {
                if (res.code === "0") {
                  that.fileUploadData = res.data;
                  that.$refs.childOue.openShow();
                }
              });
          }
        },
      });
    },
  },
};
</script>