<template>
	<view class="content">
		<view class="cropper-wrapper" style="height:100%;">
			<canvas
				class="cropper"
				disable-scroll="true"
				@touchstart="touchStart"
				@touchmove="touchMove"
				@touchend="touchEnd"
				:style="{ width: cropperOpt.width + 'px', height: cropperOpt.height + 'px' }"
				canvas-id="cropper"
			></canvas>
		</view>
		<view class="cropper-buttons">
			<view class="upload" @tap="uploadTap">重新选择</view>
			<view class="getCropperImage" @tap="getCropperImage">完成</view>
		</view>
	</view>
</template>

<script>
/* eslint-disable */
import { mapGetters } from 'vuex'
import weCropper from './weCropper';
const device = wx.getSystemInfoSync();
const width = device.windowWidth;
const height = device.windowHeight - 50;
export default {
	data() {
		return {
			cropperOpt: {
				id: 'cropper',
				width: width,
				height: height,
				scale: 2.5,
				zoom: 5,
				cut: {
					x: (width - 260) / 2,
					y: (height - 260) / 2,
					width: 260,
					height: 260
				}
			},
			weCropper: ''
		};
	},
	computed: {
    ...mapGetters([
			'token',
			'openId'
    ])
	},
	methods: {
		touchStart(e) {
			this.weCropper.touchStart(e);
		},
		touchMove(e) {
			this.weCropper.touchMove(e);
		},
		touchEnd(e) {
			this.weCropper.touchEnd(e);
		},
		convertBase64UrlToBlob(dataURI, type) {
			var binary = atob(dataURI.split(',')[1]);
			var array = [];
			for (var i = 0; i < binary.length; i++) {
				array.push(binary.charCodeAt(i));
			}
			return new Blob([new Uint8Array(array)], { type: type }, { filename: '1111.jpg' });
		},
		blobToDataURL(blob) {
			var a = new FileReader();
			a.readAsDataURL(blob); //读取文件保存在result中
			a.onload = function(e) {
				var getRes = e.target.result; //读取的结果在result中
				console.log(getRes);
			};
		},
		getCropperImage() {
			let _this = this;
			this.weCropper.getCropperImage(avatar => {
				if (avatar) {
					// 获取到裁剪后的图片
					// 获取到裁剪后的图片
					// 下面是上传到服务器的方法
          wx.uploadFile({
            url: 'https://hrplusx-xcx.ciicsh.com/api/UpLoad/FileSave', // 仅为示例，非真实的接口地址
            filePath: avatar,
            header: {'Authorization': 'Bearer ' + _this.token},
            name: 'file',
            formData: {
            },
            success (res) {
              const response = JSON.parse(res.data)
							console.log(response)
							if (response.isSuccess) {
								_this.UpdateMemberHead(response.data)
							}
            }
          })
				} else {
					console.log('获取图片失败，请稍后重试');
				}
			});
		},
		UpdateMemberHead (imgUrl) { // 更换用户头像
			this.$http.post('/Member/UpdateMemberHead', {
				openId: this.openId,
				imgUrl: imgUrl
			}).then((response) => {
				if (response.isSuccess) {
					wx.navigateBack({
						delta: 1
					})
				}
			})
		},
		uploadTap() {
			const self = this;

			wx.chooseImage({
				count: 1, // 默认9
				sizeType: ['compressed'], // 可以指定是原图还是压缩图，默认二者都有
				sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
				success(res) {
					let src = res.tempFilePaths[0];
					//  获取裁剪图片资源后，给data添加src属性及其值
					self.weCropper.pushOrign(src);
				}
			});
		}
	},
	onLoad(option) {
		// do something
		const cropperOpt = this.cropperOpt;
		const src = option.src;
		if (src) {
			Object.assign(cropperOpt, {
				src
			});

			this.weCropper = new weCropper(cropperOpt)
				.on('ready', function(ctx) {})
				.on('beforeImageLoad', ctx => {
					wx.showToast({
						title: '上传中',
						icon: 'loading',
						duration: 3000
					});
				})
				.on('imageLoad', ctx => {
					wx.hideToast();
				});
		}
	}
};
</script>

<style lang="stylus">
page {
	height 100%
}
.content {
	background: rgba(255, 255, 255, 1);
	height 100%
}

.head-list {
	height: 43px;
	width: 100%;
	background: #ffffff;
	justify-content: center;
	align-items: center;
	display: flex;
	border-bottom: 1px solid rgba(244, 244, 244, 1);
}

.head-info {
	text-align: center;
	font-size: 18px;
	color: #000000;
	font-weight: bold;
}

.save-box {
	position: absolute;
	right: 0px;
	width: 50px;
	height: 43px;
	line-height: 43px;
}

.save {
	color: rgba(98, 111, 252, 1);
	font-size: 16px;
	font-weight: 400;
}

.icon-back {
	margin-top: 11px;
	width: 10px;
	height: 18px;
	color: #000000;
	margin-left: 6px;
}

.icon-back-box {
	display: block;
	position: absolute;
	left: 6px;
	height: 43px;
	width: 30px;
	align-items: center;
}
.cropper {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
}

.cropper-buttons {
	background-color: rgba(0, 0, 0, 0.95);
	color: #04b00f;
}
.cropper-wrapper {
	position: relative;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	background-color: #F0F0F0;
}

.cropper-buttons {
	width: 100vw;
	height: 50px;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	position: fixed;
	bottom: 0;
	left: 0;
	line-height: 50px;
}

.cropper-buttons .upload,
.cropper-buttons .getCropperImage {
	width: 50%;
	background: #0D0804;
	text-align: center;
	color #fff
}
.upload {
	color #888888!important
}
</style>
