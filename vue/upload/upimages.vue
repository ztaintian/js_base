<template>
  <div>
    <input
      type="file"
      id="tempid"
      name="UploadForm"
      accept="image/*"
      class="uploadInput"
      ref="uploadInput"
      @change="uploadFile"
    >
  </div>
</template>

<script>
export default {
  methods: {
    uploadFile(e, e2) {
      var e = e2 ? e2 : e.target.files[0];
      window.URL = window.URL || window.webkitURL;
      var urlImage = window.URL.createObjectURL(e);
      var image = new FormData();
      image.append("file", e);
      if (e == null) {
        return false;
      }
      if (!/.(gif|jpg|jpeg|png|gif|jpg|png)$/.test(e.type)) {
        console.log("文件类型必须是.gif,jpeg,jpg,png中的一种");
        return;
      } else if (e.size / (1024 * 1024) > 6) {
        console.log("文件大于6M,不能上传");
        return;
      } else {
        this.$http
          .post("/api/Joying/Zkr_ReceiveImage", image, {
            headers: { "Content-Type": "text/html;charset=UTF-8" },
          })
          .then((data) => {
            if (
              data.data.errNo == 0 &&
              data.data.resultData.result == "success"
            ) {
              this.msgs.push({
                time: this.$moment().format("YYYY/MM/DD HH:mm"),
                chatContent: data.data.resultData.path,
                senderType: "employee",
                type: "image",
              });
              if (this.haveLink) {
                var obj = {
                  serviceId: this.serviceId,
                  type: "image",
                  content: escape(data.data.resultData.path),
                  sendCode: this.$store.state.userInfo.employeeID,
                  receiveCode: this.userCode,
                };
                this.ws.send(JSON.stringify(obj));
              }
              this.$previewRefresh();
              this.scrollTop();
            } else {
              Toast("图片上传失败");
            }
          });
      }
    },
  },
};
</script>