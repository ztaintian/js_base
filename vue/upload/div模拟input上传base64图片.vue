<template>
  <div class="imgUploading">
    <div class="from-list">
      <ul>
        <li>
          <input
            type="file"
            name="UploadForm[file]"
            @change="getImageFile"
            class="upImages"
            accept="image/*"
          >
          <div class="item-inner">
            <div class="item-title">{{name}}<span
                class="red"
                v-if="irequire==true"
              >*</span></div>
            <div class="item-after">
              <div
                v-if="imgShow"
                class="input inputright back-img"
                :style="'height:60px;width:60px;background-image:url('+imgUrl+');'"
              ></div>
            </div>
          </div>
          <div
            class="more top12"
            v-if="!imgShow"
          > <i class="icon iconfont icon-tianjiazhaopian"></i><i class="iconfont icon-xiayiyeqianjinchakangengduo"></i></div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { Toast, Indicator } from 'mint-ui';
export default {
    data: function() {
        return {
            imgUrl: '',
            imgShow: false,
            iName: ''
        };
    },
    props: ['againPre', 'name', 'irequire'],
    watch: {
        againPre(val) {
            if (val) {
                this.imgUrl = '';
                this.imgShow = false;
            }
        }
    },
    mounted () {
      this.iName = this.name;
    },
    methods: {
        canvasDataURL(path, obj, callback) {
            /* eslint-disable */
            var img = new Image();
            var base64;
            img.src = path;
            img.onload = function(){
                var that = this;
                // 默认按比例压缩
                var w = that.width,
                    h = that.height,
                    scale = w / h;
                w = obj.width || w;
                h = obj.height || (w / scale);
                var quality = 0.7;  // 默认图片质量为0.7
                //生成canvas
                var canvas = document.createElement('canvas');
                var ctx = canvas.getContext('2d');
                // 创建属性节点
                var anw = document.createAttribute("width");
                anw.nodeValue = w;
                var anh = document.createAttribute("height");
                anh.nodeValue = h;
                canvas.setAttributeNode(anw);
                canvas.setAttributeNode(anh);
                ctx.drawImage(that, 0, 0, w, h);
                // 图像质量
                if(obj.quality && obj.quality <= 1 && obj.quality > 0){
                    quality = obj.quality;
                }
                // quality值越小，所绘制出的图像越模糊
                var base64 = canvas.toDataURL('image/jpeg', quality);
                // 回调函数返回base64的值
                callback(base64);
            }
        },
        publicMethod(e, url, show) {
            var that = this;
            window.URL = window.URL || window.webkitURL;
            var files = e.target.files[0];
            var reader = new FileReader();
            if (files) {
                reader.readAsDataURL(files);
                console.log(files.name.length);
                if(!/\.(gif|jpg|jpeg|png|GIF|JPG|PNG|bmp)$/.test(files.name))
                {
                    Toast("图片类型必须是.gif,jpeg,jpg,png,bmp中的一种")
                    return false;
                }
                // else if(files.name.length>35) {
                //     Toast("图片文件名过长")
                //     return false;
                // }
                else if (files.size / (1024 * 1024) > 10) {
                    Toast({
                        message: '图片大于10M,不能上传',
                        duration: 3000
                    });
                    return;
                } else if (files.size / (1024 * 1024) > 2) {
                    Indicator.open({
                        spinnerType: 'fading-circle'
                    });
                    reader.onload = function () {
                        that.canvasDataURL(reader.result, {quality: 0.5}, function(base64) {
                            Indicator.close();
                            that.$emit('image-base64', {'result':base64, 'filename':files.name,'name':that.iName});
                        })
                    };                    
                } 
                else {
                    reader.onload = function () {
                        that.$emit('image-base64', {'result':reader.result, 'filename':files.name,'name':that.iName});
                    };
                }
                if (window.URL) {
                    this[url] = window.URL.createObjectURL(files);
                    this[show] = true;
                };
            }
        },
       /* publicMethod(e, url, show) {
            var that = this;
            window.URL = window.URL || window.webkitURL;
            var files = e.target.files[0];
            var reader = new FileReader();
            if (files) {
                if (files.size / (1024 * 1024) > 3) {
                    Toast({
                        message: '图片不能大于3M',
                        position: 'bottom',
                        duration: 3000
                    });
                    return;
                }
                reader.readAsDataURL(files);
                reader.onload = function () {
                    that.$emit('image-base64', reader.result);
                    // that.$emit('image-base64', that.canvasDataURL(reader.result, {}))
                };
                if (window.URL) {
                    this[url] = window.URL.createObjectURL(files);
                    this[show] = true;
                };
                // let param = new FormData();
                // param.append('files', files, files.name);
                // let config = {
                //     headers: {'Content-Type': 'multipart/form-data'}
                // };
                // this.$http.post('http://172.16.4.205:8082/api/test/files', param, config).then(response => {
                //     console.log(response.data);
                // });
            }
        }, */
        getImageFile(e) {
            this.publicMethod(e, 'imgUrl', 'imgShow');
        }
    }
};
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.imgUploading {
  .from-list {
    ul {
      background: #fff;
    }

    li {
      box-sizing: border-box;
      position: relative;
      padding: 0 15px;
      overflow: hidden;
    }

    .upImages {
      left: 0;
      position: absolute;
      width: 100%;
      height: 100%;
      opacity: 0;
      cursor: pointer;
      z-index: 99;
    }

    .item-inner {
      position: relative;
      box-sizing: border-box;
      font-size: f14;
      overflow: hidden;
      border-bottom: 1px solid chuixian;
      padding: 12px 0;
      display: flex;

      .item-title {
        height: 28px;
        line-height: 28px;
        color: chei;
        white-space: nowrap;
        flex: 1 0 auto;
      }

      .item-after {
        box-sizing: border-box;
        width: 100%;
        padding: 0 15px 0 0;
        flex: 0 1 auto;

        .inputright {
          text-align: right;
        }

        .choice {
          display: block;
          width: 100%;
          text-align: right;
          color: chui;
          height: 28px;
          line-height: 28px;
        }

        .input {
          display: block;
          width: 100%;
          font-size: f14;
          background-color: transparent;
          color: chui;
        }

        .back-img {
          float: right;
          background: chei center center no-repeat;
          background-size: cover;
        }
      }

      .more {
        position: absolute;
        right: 15px;
        z-index: 10;
        color: chuixian;

        .icon-tianjiazhaopian {
          font-size: f30;
          color: #AAAAAA;
          vertical-align: middle;
        }
      }

      .top12 {
        top: 12px;
      }
    }
  }
}
</style>
