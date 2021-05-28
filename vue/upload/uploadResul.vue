<template>
  <div class="import_resume_module">
    <div class="import_resume_home" v-if="!isShowBatchImportResume">
      <el-row v-if="false">
        <el-col :span="24"
          ><span class="import_title">云端简历管理让招聘更简单</span></el-col
        >
        <el-col :span="24">
          <el-button
            type=""
            @click="onImportResume(1)"
            class="primary_but grayish"
            >导入简历</el-button
          >
        </el-col>
        <el-col :span="24">
          <span class="import_ok_title"
            >贵司已成功导入本地简历资料{{ listTotal }}分哦</span
          >
        </el-col>
        <el-col :span="24">
          <el-button
            type=""
            class="def_simple_but active"
            @click="lookeImportRecord"
            >查看导入记录</el-button
          >
        </el-col>
      </el-row>

      <div class="cv-upload">
        <div class="upload-tip">
          <span class="txt">
            云端简历管理让招聘更简单
          </span>
          <div>
            <a class="w-btn btn-lg-w" @click="onImportResume(1)">批量导入</a>
          </div>
          <div>
            <el-upload
              class="upload-demo btn-lg-w"
              action=""
              :http-request="onRefreshResume"
            >
              <a class="w-btn btn-lg-w">
                单份简历导入
              </a>
            </el-upload>
          </div>
        </div>
      </div>
    </div>

    <!-- 批量导入 -->
    <div class="batch_import_resume" v-else>
      <div class="drag_area">
        <!-- multiple 支持多选   limit文件限制20  :on-progress="onProgress"//文件上传时的钩子，进度条加载-->
        <el-upload
          drag
          :http-request="uploadFileMethod"
          :show-file-list="false"
          multiple
          action=""
          :on-progress="onProgress"
          :file-list="fileList"
          :disabled="uploadDisabled"
        >
          <div class="upload-box">
            <h3>拖拽文件至此上传</h3>
            <div>
              <a class="w-btn btn-border">选择文件</a>
            </div>
            <span>附件格式为doc\html\docs，单个文件大小为20mb</span>
          </div>
        </el-upload>
      </div>
      <div class="key-info">
        <span class="num"
          >待上传文件 <b>（{{ fromListData.length }}）</b></span
        >
        <ul class="state">
          <li class="text-green">成功：{{ uploadStatusList.success }}</li>
          <li class="text-red">失败：{{ uploadStatusList.loser }}</li>
          <li class="text-blue">重复：{{ uploadStatusList.repetition }}</li>
        </ul>
        <div class="btn-group">
          <a class="w-btn" @click="beginImport">开始导入</a
          ><a class="w-btn btn-border" @click="lookeImportRecord"
            >查看导入记录</a
          >
        </div>
      </div>
      <div class="uploading_list">
        <el-row v-for="(item, index) in fromListData" :key="index">
          <span>{{ item.fileName }} </span>
          <el-progress
            :percentage="item.progress"
            :color="item.data ? '#07aa17' : ''"
            :show-text="false"
            :text-inside="true"
            :stroke-width="26"
          ></el-progress>

          <div class="upload-end">
            <span v-if="item.progress == 50 || item.progress == 80"
              >解析中...</span
            >
            <span
              :class="{
                'text-red': item.msgCode == 3,
                'text-blue': item.msgCode == 2
              }"
              >{{ item.msg }}</span
            >
            <a @click="lookOver(item)" v-if="item.data" class="w-btn btn-border"
              >查看</a
            >

            <a class="w-btn-icon" v-if="item.msgCode">
              <span
                class="iconfont icon-close"
                @click="onDelUploadList(index)"
              ></span>
            </a>
          </div>
        </el-row>
      </div>
    </div>
    <!-- <el-dialog
      title="疑似重复"
      :visible.sync="isShowResumeReuse"
      class="resume_reuse"
      :modal-append-to-body="false"
      :close-on-click-modal="false"
    >
      <el-table :data="reuseResumeList">
        <el-table-column prop="Name" label="姓名" width="180"></el-table-column>
        <el-table-column
          prop="Mobile"
          label="手机号"
          width="180"
        ></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <div class="table_operation_but">
              <el-button
                @click="onResumeReuseDetail(scope.row)"
                type="text"
                size="small"
                >详情</el-button
              >
              <el-button
                type="text"
                size="small"
                @click="addResumeVersion(scope.row)"
                >新增版本</el-button
              >
            </div>
          </template>
        </el-table-column>
      </el-table>
    </el-dialog> -->
    <div>
      <el-dialog
        :visible.sync="uploadOkDialog"
        custom-class="upload_resume_ok1"
        :modal-append-to-body="false"
        :close-on-click-modal="false"
        center
      >
        <el-form
          ref="resumeForm"
          label-position="top"
          :rules="ruleValidate"
          label-width="80px"
          :model="resumeData"
        >
          <div class="succeed_title">
            <img src="../../../static/img/deliver_succeed.png" />
            <span class="title_font_mix16"
              >简历已成功上传并解析，<br />
              请核准以下信息以确保信息无误！</span
            >
          </div>
          <el-form-item label="姓名" prop="Name">
            <el-input v-model="resumeData.Name"></el-input>
          </el-form-item>
          <el-form-item label="手机号" prop="Mobile">
            <el-input v-model="resumeData.Mobile"></el-input>
          </el-form-item>
          <el-form-item label="海外经历(留学)" prop="">
            <el-radio v-model="OverseasStudy" label="StudyAbroad_02"
              >是</el-radio
            >
            <el-radio v-model="OverseasStudy" label="StudyAbroad_01"
              >否</el-radio
            >
          </el-form-item>
          <el-form-item>
            <el-button
              type="primary"
              size="medium"
              class="affirm_edit"
              @click="onSave('resumeForm')"
              >确认并保存</el-button
            >
          </el-form-item>
        </el-form>

        <span slot="footer" class="dialog-footer"></span>
      </el-dialog>
    </div>
    <upload-files ref="uploadFiles" @onRepeat="onRepeat"></upload-files>
    <upload-resume-reuse ref="uploadResumeReuse"></upload-resume-reuse>
  </div>
</template>
<script>
import UploadResumeReuse from "@/components/UploadResumeReuse";

import { ResumeUpload } from "api/companyApi";
import { ConfirmMyInformations } from "api/candidate";
import { isWscnEmail, isMobile } from "@/utils/validate";
import UploadFiles from "@/components/UploadFiles";
import { AddResumeVersion } from "api/myResume";
export default {
  name: "ImportResumeModule", //导入简历模块
  props: ["listTotal"],
  components: {
    UploadFiles,
    UploadResumeReuse
  },
  data() {
    const validateMobile = (rule, value, callback) => {
      if (!isMobile(value)) {
        callback(new Error("请输入正确格式的手机号"));
      } else {
        callback();
      }
    };
    const validateEmail = (rule, value, callback) => {
      if (value) {
        if (!isWscnEmail(value)) {
          callback(new Error("请输入正确格式的邮箱地址"));
        } else {
          callback();
        }
      } else {
        callback();
      }
    };
    return {
      OverseasStudy: false,
      isShowBatchImportResume: false,
      uploadFlag: 1,
      fileList: [],
      fromListData: [],
      progress: "0%",
      uploadId: 0,
      uploadDisabled: false, //是否禁用批量上传
      isUploadListClear: false, //是否清空上传列表
      uploadStatusList: {
        success: 0,
        repetition: 0,
        loser: 0
      },
      uploadOkDialog: false,
      ruleValidate: {
        Name: [{ required: true, message: "请输入姓名", trigger: "blur" }],
        Mobile: [
          { required: true, message: "请输入手机号", trigger: "blur" },
          { required: true, trigger: "blur", validator: validateMobile }
        ],
        Email: [
          { required: true, message: "请输入邮箱", trigger: "blur" },
          { required: true, trigger: "blur", validator: validateEmail }
        ]
      },
      resumeData: {
        Email: "",
        Id: "",
        Message: "",
        Mobile: "",
        Name: "",
        Data: ""
      },
      isShowResumeReuse: false,
      reuseResumeList: [
        {
          Name: "ok",
          Mobile: "ok1"
        }
      ]
    };
  },
  methods: {
    addResumeVersion(data) {
      AddResumeVersion(data).then(res => {
        if (res.data.Success) {
          this.$store.dispatch("updateAddResumeId", res.data.Data);

          this.$message({
            message: "保存成功",
            type: "success"
          });
          // this.$store.dispatch("updateAddResumeId", res.data.Data);
          // this.getBaseInfo(); //获取
          // this.editBasicInfoDialog = false;
          // this.isShowResumeReuse = false;
        } else {
          this.$message({
            message: res.data.Message,
            type: "error"
          });
        }
      });
    },
    onResumeReuseDetail(data) {
      this.$store.dispatch("updateAddResumeId", data.Id);
      // this.getBaseInfo();
      // this.editBasicInfoDialog = false;
      // this.isShowResumeReuse = false;
    },
    onRefreshResume(param) {
      this.$refs.uploadFiles.uploadFileMethod(param);
    },
    onSave(resumeForm) {
      this.$refs[resumeForm].validate(valid => {
        if (valid) {
          ConfirmMyInformations({
            Name: this.resumeData.Name,
            Mobile: this.resumeData.Mobile,
            OverseasStudy: this.OverseasStudy,
            ResumeCompanyId: this.resumeData.Data
          }).then(res => {
            if (res.data.Success) {
              this.uploadOkDialog = false;
              this.$message({
                showClose: true,
                message: "保存成功",
                type: "success"
              });
            } else {
              this.$message.error(res.data.Message);
            }
          });
        } else {
          return false;
        }
      });
    },

    //重复简历value
    onRepeat(value, event) {
      console.info(value, event);
      this.$refs.uploadResumeReuse.init(value);
      this.$refs.uploadResumeReuse.isShowResumeReuse = true;
    },
    //进度条
    onProgress(e, file, v) {
      let that = this;
      let endPro = 95;
      that.loading = true;
      that.interval = setInterval(function() {
        if (that.percentage < endPro) {
          that.percentage++;
        }
      }, 500);
    },
    uploadFileMethod(param) {
      //清空上传列表
      if (this.isUploadListClear) {
        this.fromListData = [];
        this.isUploadListClear = false;
        this.uploadStatusList = { success: 0, repetition: 0, loser: 0 };
      }
      let fileObject = param.file;
      let FileExt = param.file.name.replace(/.+\./, "");
      if (
        ["doc", "docx", "png", "jpeg", "jpg", "pdf", "html"].indexOf(
          FileExt.toLowerCase()
        ) === -1
      ) {
        this.$message({
          type: "warning",
          message: "请上传后缀名为doc,docx,png,jpg,pdf的附件！"
        });
        return false;
      }
      let size = fileObject.size;
      if (size / (1024 * 1024) > 5) {
        this.$message.error("文件大小不能超过5M");
      }
      let formData = new FormData();
      formData.append("file", fileObject);
      // formData.append("companyId", this.user_info.CompanyId);
      // formData.append("name", fileObject.name);
      if (
        this.fromListData.findIndex(
          item => item.fileName === param.file.name
        ) == -1
      ) {
        this.fromListData.push({
          fileName: param.file.name,
          formData: formData,
          progress: 0,
          data: false,
          msgCode: 0,
          msg: ""
        });
      }
    },

    onDelUploadList(index) {
      this.fromListData.splice(
        this.fromListData.findIndex((item, i) => i === index),
        1
      );
    },
    lookOver(item) {
      this.$store.dispatch("updateAddResumeId", item.data.Data);
      this.$store.dispatch("editResumeStatus", false);
      let data = {
        ResumeId: item.data.Data,
        PositionId: ""
      };
      this.$router.push({
        path: `/ResumeDetail`,
        query: data
      });
    },

    /**
     *单个上传
     */
    uploadFileAction(data, uploadId) {
      var config = {
        headers: { "Content-Type": "multipart/form-data" },
        onUploadProgress: progressEvent => {
          var complete = Number(
            ((progressEvent.loaded / progressEvent.total) * 80).toFixed(2)
          );
          data.progress = complete;
        }
      };
      ResumeUpload(data.formData, config)
        .then(res => {
          if (res.data.Success) {
            console.info(res.data);
            if (res.data.Data.ResultCode == 1) {
              if (this.uploadFlag == 2 && this.fromListData.length == 1) {
                this.uploadOkDialog = true;
              }
              this.resumeData.Mobile = res.data.Data.Mobile;
              this.resumeData.Name = res.data.Data.Name;
              this.OverseasStudy = res.data.Data.IsOverseaStudy;
              this.resumeData.Data = res.data.Data.Data;
              this.$message({
                showClose: true,
                message: `${res.data.Data.Name}的简历${res.data.Data.Message}`,
                type: "success"
              });
              data.data = res.data.Data;
              data.progress = 100;
            } else {
              data.progress = 0;
              data.msg = res.data.Data.Message;
            }
            data.msgCode = res.data.Data.ResultCode;
            this.setUploadStatus(res.data.Data.ResultCode, uploadId);
          } else {
            this.setUploadStatus(3, uploadId);
            data.progress = 0;
            data.msgCode = res.data.Message;
            data.msg = res.data.Message;
          }
        })
        .catch(error => {
          this.setUploadStatus(3, uploadId);
        });
    },
    onImportResume(uploadType) {
      this.isShowBatchImportResume = true;
      this.uploadFlag = uploadType;
    },

    /**
     * 上传状态计数
     */
    setUploadStatus(status, uploadId) {
      if (status === 1) {
        this.uploadStatusList.success += 1;
      }
      if (status === 2) {
        this.uploadStatusList.repetition += 1;
      }
      if (status === 3) {
        this.uploadStatusList.loser += 1;
      }
      console.info(uploadId);
      if (uploadId == this.fromListData.length - 1) {
        this.isUploadListClear = true;
        this.uploadDisabled = false;
      }
    },

    /**
     * 开始上传
     */
    beginImport() {
      this.uploadDisabled = true;
      this.uploadStatusList = { success: 0, repetition: 0, loser: 0 };
      if (this.fromListData.length > 0) {
        if (this.fromListData.findIndex(item => item.progress === 0) != -1) {
          let that = this;
          let time = function(i, item) {
            setTimeout(() => {
              that.uploadFileAction(item, i);
              item.progress = 50;
            }, 1000 * i);
          };
          for (let i = 0; i < this.fromListData.length; i++) {
            let item = this.fromListData[i];
            if (item.progress == 0 && item.msg == "") {
              time(i, item);
            }
          }
        } else {
          this.$message({
            message: "文件都已经上传完毕！",
            type: "warning"
          });
        }
      } else {
        this.$message({
          message: "您还没有选择需要上传的文件！",
          type: "warning"
        });
      }
    },

    /**
     * 导入列表查看
     */
    lookeImportRecord() {
      this.$emit("update:importResumeModuleStatus", false);
      this.$emit("getList");
    }
  },
  mounted() {},
  created() {}
};
</script>

<style lang="scss" scoped>
>>> .el-upload-list {
  display: none;
}
@import "~@/styles/mixin.scss";
.import_resume_module {
  font-size: 14px;
  width: 900px;
  // height: calc(100vh - 92px - 170px);

  .cv-upload {
    @include white-bg();
    padding: 25px;
    .upload-tip {
      text-align: center;
      padding: 65px 0;
      min-height: 450px;
      box-sizing: border-box;
      .txt {
        display: block;
        font-size: 16px;
        color: #000;
        margin-bottom: 15px;
        margin-top: 60px;
      }
      .w-btn {
        margin-top: 12px;
      }
      .btn-border {
        line-height: 42px;
        height: 42px;
      }
      .iconfont {
        display: block;
        font-size: 70px;
        line-height: 1;
        color: #eaeaea;
        margin-right: 25px;
        margin-bottom: 35px;
      }
    }
  }
  >>> .el-upload-dragger {
    width: 100%;
  }
  .import_resume_home {
    width: 100%;
    text-align: center;
    .el-col {
      margin-bottom: 10px;
    }
    .import_title {
      font-size: 14px;
      color: #343434;
      margin-top: 58px;
      display: block;
      margin-bottom: 23px;
    }
    .def_simple_but {
      @include wh(120px, 30px);
      padding: 0;
    }
    .import_ok_title {
      display: block;
      margin-top: 80px;
      margin-bottom: 23px;
    }
  }

  .batch_import_resume {
    // width: 900px;
    @include white-bg();
    padding: 25px;
    >>> .el-upload {
      width: 100%;
    }
    .drag_area {
      .upload-box {
        // border: 1px dashed #ccc;
        padding: 40px 20px;
        text-align: center;
        h3 {
          font-size: 16px;
        }
        .w-btn {
          margin: 15px 0 20px;
        }
        span {
          color: #999;
          font-size: 13px;
        }
      }
    }
    .key-info {
      height: 34px;
      line-height: 34px;
      position: relative;
      margin: 25px 0 15px 0;
      .num {
        float: left;
        margin-right: 20px;
        font-size: 15px;
        color: #999;
        b {
          color: #333;
        }
      }
      .state {
        li {
          display: inline-block;
          margin-right: 10px;
        }
      }
      .btn-group {
        margin-top: 0;
        position: absolute;
        top: 0;
        right: 0;
        .w-btn {
          height: 34px;
          line-height: 34px;
          width: 120px;
          margin: 0 4px;
        }
      }
    }
    .uploading_list {
      height: 500px;
      overflow-y: scroll;
      overflow-x: hidden;
      border: 1px dashed #e9e9e9;
      // height: 200px;
      padding: 20px 24px;
      .upload-end {
        position: absolute;
        top: 15px;
        right: 0;
      }
      .error-title {
        color: red;
      }
      .el-row {
        position: relative;
        text-align: left;
        > span {
          margin: 15px 0 20px 0;
          display: block;
        }
        .look_over {
          position: absolute;
          top: 0;
          right: 0px;
          color: #aaaaaa;
          font-size: 12px;
          cursor: pointer;
        }
        svg {
          position: absolute;
          top: 18px;
          right: 0px;
        }
        .icon-svg-but {
          font-size: 10px;
        }
        >>> .el-progress {
          height: 16px;
          .el-progress-bar__outer {
            // border-radius: 0;
            height: 16px !important;
            background-color: #f8f8f8;
            border-radius: 16px;
            // .el-progress-bar__inner {
            //   // border-radius: 0;
            // }
          }
        }
      }
    }
    .uploading_list::-webkit-scrollbar{
      width:10px;
      height:10px;
    }
    /*正常情况下滑块的样式*/
    .uploading_list::-webkit-scrollbar-thumb{
      background-color:rgba(0,0,0,.05);
      border-radius:10px;
      box-shadow:inset 1px 1px 0 rgba(0,0,0,.1);
    }
  }
}
</style>
<style lang="scss">
.el-dialog {
  &.upload_resume_ok1 {
    .el-dialog__body {
      padding: 0;
    }
    padding-left: 100px;
    width: 520px;
    height: 633px;
    .el-form-item {
      width: 320px;
    }
    .succeed_title {
      display: flex;
      align-items: center;
      margin-top: 36px;
      margin-bottom: 40px;
      img {
        width: 56px;
        height: 56px;
      }
      span {
        margin-left: 20px;
      }
    }
    .affirm_edit {
      margin-top: 14px;
      background: #44a8e1;
      padding: 0;
      width: 320px;
      height: 40px;
      /* color: red; */
      background: #44a8e1;
      border: 2px solid #44a9e1;
      margin-top: 20px;
    }
  }
}
</style>
