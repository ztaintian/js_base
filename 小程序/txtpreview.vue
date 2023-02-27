<template>
  <div></div>
</template>

<script>
export default {
  methods: {
    getUrl(id, type) {
      const that = this;
      type = type === "txt" ? type : "pdf";
      uni.request({
        url: this.$api.getFilePreview + "/" + id,
        method: "get",
        responseType: "arraybuffer", // 此处是请求文件流，必须带入的属性
        success: (res) => {
          var data = res.data;
          wx.getFileSystemManager().writeFile({
            // 写文件
            filePath: wx.env.USER_DATA_PATH + "/demo." + type, // wx.env.USER_DATA_PATH 指定临时文件存入的路径，后面字符串自定义
            data: data,
            encoding: "binary", // 二进制流文件必须是 binary
            success(res) {
              if (type === "txt") {
                // 预览txt主要代码
                const fs = wx.getFileSystemManager();
                fs.readFile({
                  filePath: `${wx.env.USER_DATA_PATH}/demo.` + type,
                  encoding: "utf8",
                  // position: 0,
                  success(res) {
                    that.txtData = res.data;
                    console.log("res.data", res.data);
                  },
                  fail(res) {
                    console.error(res);
                  },
                });
              } else {
                that.srcUrl = wx.env.USER_DATA_PATH + "/demo." + type;
                wx.openDocument({
                  filePath: that.srcUrl,
                  showMenu: true,
                  success: function (res) {
                    console.log("打开成功");
                    uni.hideLoading();
                  },
                });
              }
            },
            error(error) {
              uni.hideLoading();
            },
          });
        },
      });
    },
  },
};
</script>