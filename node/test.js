<template>
  <!-- 待办列表新增任务单弹框 -->
  <base-dialog :show="true" title="企业账户管理详细" :confirmBtnText="'确定'" @close="handleClose" @submit="handleSubmit"
    width="900px" class="add-communication-dialog">
    <el-form :model="socialForm" ref="socialFrom" label-width="100px" size="small">
      <div class="pclp-table table-radius">
        <el-row>
          <el-col :span="24">
            <div class="pclp-filters-title">企业社保账号信息</div>
            <!-- <el-button
              @click="socialTermination"
              class="add-button"
              type="danger"
              size="small"
              >终止账号</el-button
            > -->
          </el-col>
          <el-col :span="12">
            <el-form-item prop="name" label-width="150px" label="社保企业账户名称">
              <el-input v-model.trim="socialForm.socialCompanyName" size="small" placeholder="请输入">
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label-width="150px" label="社保参保户登记码">
              <el-input v-model.trim="socialForm.insuredCode" size="small" placeholder="请输入">
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label-width="150px" label="社保扣款账号">
              <el-input v-model.trim="socialForm.mudanCard" size="small" placeholder="请输入">
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label-width="150px" label="社保终止日期">
              <el-date-picker type="date" format="yyyy-MM-dd" disabled value-format="yyyy-MM-dd"
                v-model="socialForm.terminationDate" style="width: 261px;">
              </el-date-picker>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label-width="150px" label="社保账户性质">
              <el-select clearable style="width: 261px;" v-model="socialForm.accountType">
                <el-option :key="index" v-for="(item, index) in tempAccountType" :value="item.enumValue"
                  :label="item.cnText"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label-width="150px" label="社保终止">
              <el-checkbox v-model="socialForm.isTerminated"></el-checkbox>
            </el-form-item>
          </el-col>
        </el-row>
      </div>
    </el-form>
    <el-form :model="accumulationForm" ref="accumulationFrom" label-width="100px" size="small">
      <div class="pclp-table table-radius">
        <el-row>
          <el-col :span="24">
            <div class="pclp-filters-title">企业公积金账号信息</div>
            <!-- <el-button
              @click="accumulationTermination"
              class="add-button"
              type="danger"
              size="small"
              >终止账号</el-button
            > -->
          </el-col>
          <el-col :span="12">
            <el-form-item label-width="150px" prop="name" label="公积金账户名称">
              <el-input v-model.trim="accumulationForm.companyName" size="small" placeholder="请输入">
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label-width="150px" prop="companyName" label="公积金账号">
              <el-input v-model.trim="accumulationForm.houseFundAccount" size="small" placeholder="请输入">
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label-width="150px" label="补充公积金账户">
              <el-input v-model.trim="accumulationForm.supplyHouseFundAccount" size="small" placeholder="请输入">
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label-width="150px" label="公积金扣款账号">
              <el-input v-model.trim="accumulationForm.payCardNo" size="small" placeholder="请输入">
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label-width="150px" label="公积金终止日期">
              <el-date-picker type="date" format="yyyy-MM-dd" disabled v-model="accumulationForm.terminationDate"
                style="width: 261px;" value-format="yyyy-MM-dd">
              </el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label-width="150px" label="公积金账户性质">
              <el-select style="width: 261px;" clearable v-model="accumulationForm.accountType">
                <el-option :key="index" v-for="(item, index) in tempAccountType" :value="item.enumValue"
                  :label="item.cnText"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label-width="150px" label="公积金终止">
              <el-checkbox v-model="accumulationForm.isTerminated"></el-checkbox>
            </el-form-item>
          </el-col>
        </el-row>
      </div>
    </el-form>

    <el-row>
      <!-- 表格 -->
      <el-col :span="24">
        <!-- 表格按钮 -->
        <div class="pclp-table table-radius">
          <div class="pclp-filters-title pad-lt">
            子公司信息
          </div>
          <el-button @click="addSubsidiaryInformation" class="add-button" type="primary" size="small">新增</el-button>
          <el-table ref="tableList" :data="formTable.RelationList" border>
            <el-table-column label="公司编号" prop="afCompanyID" align="center">
            </el-table-column>
            <el-table-column label="公司名称" prop="companyName" align="center">
            </el-table-column>
            <el-table-column label="二级公积金账号" prop="houseFundAccount" align="center">
            </el-table-column>
            <el-table-column label="操作" align="center" width="180">
              <template slot-scope="scope">
                <el-button @click="deleteSubCompany(scope)" type="danger" plain size="small">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </el-col>
    </el-row>
    <!-- 添加子公司弹窗 -->
    <base-dialog :show="dialogsubcompanyshow" ref="addSubcompany" append-to-body title="新增子公司信息"
      @close="dialogsubcompanyshow = false" :width="'50%'" @submit="submitsubcompany">
      <el-form ref="addSubCompanyForm" :model="addSubCompanyForm" size="small" label-width="140px">
        <el-form-item label="公司编号" prop="afCompanyID" :rules="[
            { required: true, message: '请输入公司编号', trigger: 'blur' }
          ]">
          <el-input placeholder="请输入" v-model.trim="addSubCompanyForm.afCompanyID" @blur="queryAfcompanyId"></el-input>
        </el-form-item>
        <el-form-item label="公司名称" prop="companyName">
          <el-input disabled placeholder="请输入" v-model.trim="addSubCompanyForm.companyName"></el-input>
        </el-form-item>
        <el-form-item label="服务中心" prop="serviceCenter">
          <el-input disabled placeholder="请输入" v-model.trim="addSubCompanyForm.serviceCenter"></el-input>
        </el-form-item>
        <el-form-item label="客户经理" prop="cusManger">
          <el-input disabled placeholder="请输入" v-model.trim="addSubCompanyForm.cusManger"></el-input>
        </el-form-item>
        <el-form-item label="二级公积金账号">
          <el-input placeholder="请输入" maxlength="50" show-word-limit v-model.trim="addSubCompanyForm.houseFundAccount">
          </el-input>
        </el-form-item>
      </el-form>
    </base-dialog>
  </base-dialog>
</template>

<script>
  import BaseDialog from "@/components/BaseDialog/index.vue";
  import Feedbackapi from "@/serve/api/userProfiles/SCDeclarationFeedback";
  import EmployeeServices from "@/serve/api/employeeCenter/employeeManagement";
  import api from "@/serve/api/userProfiles/shanghaiSocialSecurity";
  import {
    comfirmDeleteMessage
  } from "@/common/util";
  export default {
    components: {
      "base-dialog": BaseDialog
    },
    props: {
      AccountID: String,
      accountType: Array
    },
    data() {
      return {
        tempAccountType: [],
        disabledFlag: false,
        socialForm: {
          socialCompanyName: "",
          insuredCode: "",
          mudanCard: "",
          terminationDate: "",
          accountType: "",
          isTerminated: false
        },
        accumulationForm: {
          companyName: "",
          houseFundAccount: "",
          supplyHouseFundAccount: "",
          payCardNo: "",
          terminationDate: "",
          accountType: "",
          isTerminated: false
        },
        formTable: {
          RelationList: []
        },
        addSubCompanyForm: {
          companyName: "",
          cusManger: "",
          serviceCenter: "",
          afCompanyID: "",
          houseFundAccount: ""
        },
        dialogsubcompanyshow: false
      };
    },
    mounted() {
      this.tempAccountType = this.accountType.filter(item => {
        return item.enumValue > 0;
      });
      this.AccountID && this.NonlocalAccountGetDetail();
      console.log("this.AccountID", this.AccountID);
    },
    methods: {
      NonlocalAccountGetDetail() {
        Feedbackapi.NonlocalAccountGetDetail(this.AccountID).then(res => {
          let {
            code,
            result
          } = res;
          if (code == 0) {
            // 企业社保账号信息
            if (result.form.agrtSSAccount != null && result.form.agrtSSAccount) {
              for (var key in result.form.agrtSSAccount) {
                if (key == "accountType" && result.form.agrtSSAccount[key] == 0) {
                  this.socialForm[key] = "";
                } else if (key != "terminationDateTxt") {
                  this.socialForm[key] =
                    result.form.agrtSSAccount[key] == null ||
                    result.form.agrtSSAccount == undefined ?
                    "" :
                    result.form.agrtSSAccount[key];
                }
              }
            }
            if (result.form.agrtHFAccount != null && result.form.agrtHFAccount) {
              for (var key in result.form.agrtHFAccount) {
                if (key == "accountType" && result.form.agrtHFAccount[key] == 0) {
                  this.accumulationForm[key] = "";
                } else if (key != "terminationDateTxt") {
                  this.accumulationForm[key] =
                    result.form.agrtHFAccount[key] == null ||
                    result.form.agrtSSAccount == undefined ?
                    "" :
                    result.form.agrtHFAccount[key];
                }
              }
            }
            result.form.relationList.map(item => {
              this.formTable.RelationList.push({
                accountID: item.accountID,
                relationID: item.relationID,
                afCompanyID: item.afCompanyID,
                companyName: item.companyName,
                houseFundAccount: item.houseFundAccount
              });
            });
          }
        });
      },
      socialTermination() {
        // 企业社保账号信息终止账号
      },
      accumulationTermination() {
        // 企业公积金账号信息终止账号
      },
      submitsubcompany() {
        // 新增子公司保存
        this.$refs["addSubCompanyForm"].validate(valid => {
          if (valid) {
            if (!this.addSubCompanyForm.companyName) {
              this.$message.warning("查不到此公司编号，请重新输入");
              return;
            }
            var flag =
              this.formTable.RelationList.length > 0 &&
              this.formTable.RelationList.some(item => {
                return item.afCompanyID == this.addSubCompanyForm.afCompanyID;
              });
            if (flag) {
              this.$message.warning("公司编号重复，请重新输入");
              return;
            }
            this.dialogsubcompanyshow = false;
            let obj = {
              ...this.addSubCompanyForm
            };
            if (!this.formTable.RelationList) {
              this.$set(this.formTable, "RelationList", []);
            }
            this.formTable.RelationList.push(obj);
            this.addSubCompanyForm = {};
          } else {
            console.log("error submit!!");
            return false;
          }
        });
      },

      deleteSubCompany(row) {
        // 子公司删除
        comfirmDeleteMessage(async () => {
          this.formTable.RelationList.splice(row.$index, 1);
        });
      },
      async queryAfcompanyId() {
        if (!this.addSubCompanyForm.afCompanyID) {
          return;
        }
        this.addSubCompanyForm = Object.assign({}, {
          afCompanyID: this.addSubCompanyForm.afCompanyID,
          companyName: "",
          cusManger: "",
          serviceCenter: ""
        });
        const params = {
          afCompanyID: this.addSubCompanyForm.afCompanyID
        };
        try {
          const {
            code,
            result,
            message
          } = await api.UkeyManageGetCompanyList(
            params
          );
          if (code == 0) {
            if (result.results.length == 0) {
              this.$message.warning("查不到此公司编号，请重新输入");
              return;
            }
            const {
              companyName,
              serviceCenter,
              cusManger
            } = result.results[0];
            this.addSubCompanyForm = {
              companyName,
              serviceCenter,
              cusManger,
              ...params
            };
          } else {
            this.$message.error(message || "查询失败");
          }
        } catch (err) {
          this.$message.error(err || "查询失败");
        }
      },
      async addSubsidiaryInformation() {
        // 新增子公司
        this.dialogsubcompanyshow = true;
        await this.$nextTick();
        this.$refs["addSubCompanyForm"].resetFields();
        this.addSubCompanyForm = {};
      },
      /** 关闭 */
      handleClose() {
        this.$emit("close");
      },
      handleSubmit() {
        // 企业账户管理详细保存
        var emptyReg = /^\s*$/,
          socialArr = ["socialCompanyName", "insuredCode", "accountType"],
          accumulationArr = ["companyName", "houseFundAccount", "accountType"];
        var socialFlag = socialArr.every(item => {
          return emptyReg.test(this.socialForm[item]);
        });
        var accumulationFlag = accumulationArr.every(item => {
          return emptyReg.test(this.accumulationForm[item]);
        });
        if (socialFlag && accumulationFlag) {
          return this.$message.warning(
            "企业社保账号信息或者企业公积金账号信息必填写一项"
          );
        }
        var socialFlag2 = socialArr.some(item => {
          return !emptyReg.test(this.socialForm[item]);
        });
        if (socialFlag2) {
          var socialFlag3 = socialArr.every(item => {
            return !emptyReg.test(this.socialForm[item]);
          });
          if (!socialFlag3) {
            return this.$message.warning(
              "企业社保账号信息社保企业账户名称/社保参保户登记码/社保账户性质有一项填写，三项必须全填写"
            );
          }
        }
        var accumulationFlag2 = accumulationArr.some(item => {
          return !emptyReg.test(this.accumulationForm[item]);
        });
        if (accumulationFlag2) {
          var accumulationFlag3 = accumulationArr.every(item => {
            return !emptyReg.test(this.accumulationForm[item]);
          });
          if (!accumulationFlag3) {
            return this.$message.warning(
              "企业公积金账号信息公积金账户名称/公积金账号/公积金账户性质有一项填写，三项必须全填写"
            );
          }
        }
        if (this.formTable.RelationList.length === 0) {
          return this.$message.warning("请增加子公司信息");
        }
        var tempRelationList = [];
        this.formTable.RelationList.map(item => {
          if (item.relationID) {
            tempRelationList.push({
              accountID: item.accountID,
              relationID: item.relationID,
              afCompanyID: item.afCompanyID,
              companyName: item.companyName,
              houseFundAccount: item.houseFundAccount ? item.houseFundAccount : ""
            });
          } else {
            tempRelationList.push({
              afCompanyID: item.afCompanyID,
              companyName: item.companyName,
              houseFundAccount: item.houseFundAccount ? item.houseFundAccount : ""
            });
          }
        });
        var parmars = {
          AccountID: this.AccountID,
          agrtSSAccount: this.socialForm,
          agrtHFAccount: this.accumulationForm,
          RelationList: tempRelationList
        };
        if (Reflect) {
          Reflect.deleteProperty(parmars.agrtHFAccount, "terminationDate");
          Reflect.deleteProperty(parmars.agrtSSAccount, "terminationDate");
        } else {
          delete parmars.agrtHFAccoun.terminationDate;
          delete parmars.agrtSSAccount.terminationDate;
        }
        this.NonlocalAccountSaveNonlocalAccount(parmars);
      },
      NonlocalAccountSaveNonlocalAccount(parmars) {
        // 保存更新api
        Feedbackapi.NonlocalAccountSaveNonlocalAccount(parmars).then(res => {
          let {
            code
          } = res;
          if (code == 0) {
            this.$emit("submit");
          }
        });
      }
    }
  };

</script>

<style lang="less">
  .add-communication-dialog {
    .inline-input {
      width: 100%;
    }

    .add-button {
      float: right;
    }

    .pclp-filters-title {
      display: inline-block;
    }

    .pad-lt {
      padding-left: 0;
    }

    .transfer-box {
      padding: 20px 10px;
      border: 1px solid #e4e7ed;
      border-radius: 4px;

      .transfer-table-title {
        font-size: 16px;
        line-height: 33px;
      }

      .transfer-table {
        margin-top: 20px;
      }
    }

    .transfer-button {
      margin-top: 20px;
    }

    .mini-pagination {
      text-align: center;
      margin-top: 20px;
    }
  }

</style>
