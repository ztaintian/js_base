<template>
  <div>
    <div class="query-condition-item">
      <div class="pclp-filters-title">任务单详情</div>
      <el-form label-width="120px" class="pclp-filters-form" size="small">
        <el-row>
          <el-col :span="6">
            <el-form-item label="处理状态" style="font-weight:bold;">
              <el-input disabled :value="detailData.task?detailData.task.feedBackStatus:''" style="width:100%;"
                size="small"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="委托类型" style="font-weight:bold;">
              <el-input disabled :value="detailData.task?detailData.task.delegateType:''" style="width:100%;"
                size="small"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="实际工资金额" style="font-weight:bold;">
              <el-input :disabled="editDisabled" v-model.trim="form.e_Salary" style="width:100%;" size="small">
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item>
              <span slot="label" style="font-weight:bold;color:red;">总计</span>
              <el-input disabled :value="detailData.detail?detailData.detail.e_TotalFee:''" style="width:100%;"
                size="small"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="6">
            <el-form-item label="后道读取日期" prop="Time" style="font-weight:bold;">
              <el-input disabled :value="detailData.task?$dateFormat(detailData.task.readTime):''" style="width:100%;"
                size="small"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="社保账号" style="font-weight:bold;">
              <el-input :disabled="editDisabled" v-model.trim="form.socialAccount" style="width:100%;" placeholder="请输入"
                size="small" @change="socialAccountChange"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="公积金账号" style="font-weight:bold;">
              <el-input :disabled="editDisabled" v-model.trim="form.fundAccount" style="width:100%;" placeholder="请输入"
                size="small" @change="fundAccountChange"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="档案所在地" style="font-weight:bold;">
              <el-input :disabled="editDisabled" v-model.trim="form.archiveplace" style="width:100%;" placeholder="请输入"
                size="small"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row v-if="detailData.task?detailData.task.isLocalRegister:true">
          <el-col :span="6">
            <el-form-item label="企业社保账户" style="font-weight:bold;">
              <el-input v-model.trim="form.enterpriseSSAccount"
                :disabled="(detailData.task?(detailData.task.enterpriseSSAccount!=null&&detailData.task.enterpriseSSAccount!=''):false) || editDisabled"
                @focus="openAccountDialog(0)" style="width:100%;" placeholder="请输入" size="small"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="企业公积金账户" style="font-weight:bold;">
              <el-input v-model.trim="form.enterpriseHFAccount"
                :disabled="(detailData.task?(detailData.task.enterpriseHFAccount!=null&&detailData.task.enterpriseHFAccount!=''):false) || editDisabled"
                @focus="openAccountDialog(1)" style="width:100%;" placeholder="请输入" size="small"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="岗位类型" style="font-weight:bold;">
              <el-select v-model="form.postType" style="width:100%">
                <el-option v-for="(item, index) in taskPostType" :key="index" :value="item.enumValue"
                  :label="item.enText" />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="">
              <el-checkbox v-model="form.isEsign">签订电子劳动合同</el-checkbox>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col v-if="!(detailData.task?detailData.task.isLocalRegister:true)" :span="6">
            <el-form-item label="岗位类型" style="font-weight:bold;">
              <el-select v-model="form.postType" style="width:100%">
                <el-option v-for="(item, index) in taskPostType" :key="index" :value="item.enumValue"
                  :label="item.enText" />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col v-if="!(detailData.task?detailData.task.isLocalRegister:true)" :span="6">
            <el-form-item label="">
              <el-checkbox v-model="form.isEsign">签订电子劳动合同</el-checkbox>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="法律主体" style="font-weight:bold;">
              <el-input v-model.trim="form.legalEntityName" disabled style="width:100%;" placeholder="请输入" size="small">
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row style="text-align:right;">
          <el-button type="primary" size="small" @click="autoCompute(true)" :disabled="editDisabled">自动计算</el-button>
          <el-button type="primary" size="small" @click="socialFeedback()" :disabled="editDisabled">社保全反馈</el-button>
          <el-button type="primary" size="small" @click="fundFeedback()" :disabled="editDisabled">公积金全反馈</el-button>
          <el-button type="primary" size="small" @click="otherFeedback()" :disabled="editDisabled">其他全反馈</el-button>
        </el-row>

        <div class="pclp-table table-radius">
          <el-table :data="detailsTable" border stripe :header-cell-style="{background:'#fafafa'}" style="width: 100%">
            <el-table-column prop="item" align="center" width="100" label="项目">
            </el-table-column>
            <el-table-column v-if="detailData.task?detailData.task.isLocalRegister:true" align="center" width="100"
              label="办理类型">
              <template slot-scope="scope">
                <el-select v-if="scope.row.item != '公积金' && scope.row.item != '补充公积金'"
                  :disabled="(scope.row.feedBack != null && scope.row.feedBack != '' && scope.row.feedBack != '送办中') || editDisabled"
                  v-model="scope.row.handelType" filterable placeholder size="small" style="width:100%;"
                  @change="val => {changeSSHandleType(val, scope.row.itemId)}">
                  <el-option v-for="item in ssHandleTypeList" :key="item.enumValue" :label="item.cnText"
                    :value="item.enumValue" />
                </el-select>
                <el-select v-else
                  :disabled="(scope.row.feedBack != null && scope.row.feedBack != '' && scope.row.feedBack != '送办中') || editDisabled"
                  v-model="scope.row.handelType" filterable placeholder size="small" style="width:100%;"
                  @change="val => {changeHFHandleType(val, scope.row.itemId)}">
                  <el-option v-for="item in hfHandleTypeList" :key="item.enumValue" :label="item.cnText"
                    :value="item.enumValue" />
                </el-select>
              </template>
            </el-table-column>
            <el-table-column v-if="detailData.task?detailData.task.isLocalRegister:true" align="center" width="100"
              label="企业账户">
              <template v-slot="scope">
                <el-input v-model="scope.row.companyAccount"
                  :disabled="(scope.row.feedBack != null && scope.row.feedBack != '' && scope.row.feedBack != '送办中') || editDisabled"
                  @focus="openAccountDialog((scope.row.item == '公积金' || scope.row.item == '补充公积金') ? 1 : 0, scope.row.itemId)"
                  style="width:100%;" placeholder="请输入" size="small"></el-input>
              </template>
            </el-table-column>
            <el-table-column v-if="detailData.task?detailData.task.isLocalRegister:true" align="center" width="100"
              label="个人账号">
              <template v-slot="scope">
                <el-input v-model="scope.row.personalAccount"
                  :disabled="(scope.row.feedBack != null && scope.row.feedBack != '' && scope.row.feedBack != '送办中') || editDisabled"
                  style="width:100%;" placeholder="请输入" size="small"></el-input>
              </template>
            </el-table-column>
            <el-table-column prop="city" align="center" label="执行城市">
            </el-table-column>
            <el-table-column prop="cityRemark" align="center" width="150" show-overflow-tooltip label="城市备注">
            </el-table-column>
            <el-table-column align="center" width="100" label="企业基数">
              <template slot-scope="scope">
                <el-input
                  :disabled="(scope.row.feedBack != null && scope.row.feedBack != '' && scope.row.feedBack != '送办中') || editDisabled"
                  type="number" size="small" v-model="scope.row.companyBase">
                </el-input>
              </template>
            </el-table-column>
            <el-table-column align="center" width="100" label="个人基数">
              <template slot-scope="scope">
                <el-input
                  :disabled="(scope.row.feedBack != null && scope.row.feedBack != '' && scope.row.feedBack != '送办中') || editDisabled"
                  type="number" size="small" v-model="scope.row.personalBase">
                </el-input>
              </template>
            </el-table-column>
            <el-table-column align="center" width="100" label="企业比例">
              <template slot-scope="scope">
                <el-input
                  :disabled="(scope.row.feedBack != null && scope.row.feedBack != '' && scope.row.feedBack != '送办中') || editDisabled"
                  type="number" size="small" v-model="scope.row.companyRatio">
                </el-input>
              </template>
            </el-table-column>
            <el-table-column align="center" width="100" label="个人比例">
              <template slot-scope="scope">
                <el-input
                  :disabled="(scope.row.feedBack != null && scope.row.feedBack != '' && scope.row.feedBack != '送办中') || editDisabled"
                  type="number" size="small" v-model="scope.row.personalRatio">
                </el-input>
              </template>
            </el-table-column>
            <el-table-column align="center" width="150" label="反馈状态">
              <template slot-scope="scope">
                <el-select :disabled="editDisabled" v-model="scope.row.feedBack" filterable placeholder size="small"
                  style="width:100%;" @change="feedbackComputed()">
                  <el-option key="0" label="" value="" />
                  <el-option key="1" label="反馈成功" value="反馈成功" />
                  <el-option key="2" label="送办中" value="送办中" />
                  <el-option key="3" label="结束" value="结束" />
                </el-select>
              </template>
            </el-table-column>
            <el-table-column align="center" width="150" label="开始年月">
              <template slot-scope="scope">
                <el-date-picker
                  :disabled="((scope.row.feedBack=='反馈成功'||scope.row.feedBack=='结束')?true:false) || editDisabled"
                  v-model="scope.row.startMonth" style="width: 100%;" type="month" value-format="yyyy.MM"
                  placeholder="请选择" size="small"></el-date-picker>
              </template>
            </el-table-column>
            <el-table-column align="center" width="150" label="结束年月">
              <template slot-scope="scope">
                <el-date-picker
                  :disabled="((scope.row.feedBack=='反馈成功'||scope.row.feedBack=='结束')?true:false) || editDisabled"
                  v-model="scope.row.endMonth" style="width: 100%;" type="month" value-format="yyyy.MM"
                  placeholder="请选择" size="small"></el-date-picker>
              </template>
            </el-table-column>
            <el-table-column align="center" width="150" label="企业收款方式">
              <template slot-scope="scope">
                <el-select
                  :disabled="((scope.row.feedBack=='反馈成功'||scope.row.feedBack=='结束')?true:false) || editDisabled"
                  v-model="scope.row.companyFeeMode" filterable placeholder size="small" style="width:100%;">
                  <el-option key="0" label="管理费" value="管理费" />
                  <el-option key="1" label="公司自付" value="公司自付" />
                  <el-option key="2" label="个人工资" value="个人工资" />
                </el-select>
              </template>
            </el-table-column>
            <el-table-column align="center" width="150" label="个人收款方式">
              <template slot-scope="scope">
                <el-select
                  :disabled="((scope.row.feedBack=='反馈成功'||scope.row.feedBack=='结束')?true:false) || editDisabled"
                  v-model="scope.row.personalFeeMode" filterable placeholder size="small" style="width:100%;">
                  <el-option key="0" label="管理费" value="管理费" />
                  <el-option key="1" label="个人自付" value="个人自付" />
                  <el-option key="2" label="个人工资" value="个人工资" />
                </el-select>
              </template>
            </el-table-column>
            <el-table-column align="center" width="100" label="企业缴费">
              <template slot-scope="scope">
                <el-input
                  :disabled="(scope.row.feedBack != null && scope.row.feedBack != '' && scope.row.feedBack != '送办中') || editDisabled"
                  type="number" size="small" v-model="scope.row.companyFee">
                </el-input>
              </template>
            </el-table-column>
            <el-table-column align="center" width="100" label="个人缴费">
              <template slot-scope="scope">
                <el-input
                  :disabled="(scope.row.feedBack != null && scope.row.feedBack != '' && scope.row.feedBack != '送办中') || editDisabled"
                  type="number" size="small" v-model="scope.row.personalFee">
                </el-input>
              </template>
            </el-table-column>
            <el-table-column align="center" width="100" label="小计">
              <template slot-scope="scope">
                <el-input disabled type="number" size="small" v-model="scope.row.totallFee">
                </el-input>
              </template>
            </el-table-column>
            <el-table-column prop="feedBackTime" align="center" width="100" label="反馈日期">
            </el-table-column>
            <el-table-column prop="feedBackByName" align="center" label="反馈人">
            </el-table-column>
            <el-table-column prop="personalAlg" align="center" width="100" label="个人算法">
            </el-table-column>
            <el-table-column prop="companyAlg" align="center" width="100" label="企业算法">
            </el-table-column>
          </el-table>
        </div>
        <el-row>
          <el-col :span="12" :offset="6">
            <el-divider>详细信息</el-divider>
          </el-col>
        </el-row>
      </el-form>

      <el-form label-width="125px" class="pclp-filters-form" size="small">
        <div class="pclp-table table-radius">
          <el-table :data="serviceProduct" border stripe :header-cell-style="{background:'#fafafa'}"
            style="width: 100%">
            <el-table-column prop="serviceProductName" align="center" show-overflow-tooltip label="服务产品名称">
            </el-table-column>
            <el-table-column prop="serviceProductFee" align="center" show-overflow-tooltip label="服务产品金额">
            </el-table-column>
          </el-table>
        </div>

        <div class="pclp-table table-radius">
          <el-table :data="otherTable" border stripe :header-cell-style="{background:'#fafafa'}"
            :row-class-name="tableRowClassName" style="width: 100%">
            <el-table-column prop="itemName" align="center" label="管理项目">
            </el-table-column>
            <el-table-column prop="FeeTotal" align="center" label="金额">
            </el-table-column>
            <el-table-column prop="StartMonth" align="center" width="150" label="开始年月">
              <template slot-scope="scope">
                <el-date-picker v-if="scope.row.itemName != '服务费'" :disabled="((detailData.task?detailData.task.isLocalRegister:true) && scope.row.itemName != '服务产品') 
                  || ((scope.row.FeedBack=='反馈成功'||scope.row.FeedBack=='结束')?true:false) 
                  || editDisabled" v-model="scope.row.StartMonth" style="width: 100%;" type="month"
                  value-format="yyyy.MM" placeholder="请选择" size="small"></el-date-picker>
              </template>
            </el-table-column>
            <el-table-column prop="EndMonth" align="center" width="150" label="结束年月">
              <template slot-scope="scope">
                <el-date-picker v-if="scope.row.itemName != '服务费'" :disabled="((detailData.task?detailData.task.isLocalRegister:true) && scope.row.itemName != '服务产品') 
                  || ((scope.row.FeedBack=='反馈成功'||scope.row.FeedBack=='结束')?true:false)
                  || editDisabled" v-model="scope.row.EndMonth" style="width: 100%;" type="month"
                  value-format="yyyy.MM" placeholder="请选择" size="small"></el-date-picker>
              </template>
            </el-table-column>
            <el-table-column prop="FeedBack" align="center" width="150" label="反馈状态">
              <template slot-scope="scope">
                <el-select v-if="scope.row.itemName != '服务费'" v-model="scope.row.FeedBack"
                  :disabled="((detailData.task?detailData.task.isLocalRegister:true) && scope.row.itemName != '服务产品') || editDisabled"
                  filterable placeholder size="small" style="width:100%;" @change="feedbackComputed()">
                  <el-option key="0" label="" value="" />
                  <el-option key="1" label="反馈成功" value="反馈成功" />
                  <el-option key="2" label="送办中" value="送办中" />
                  <el-option key="3" label="结束" value="结束" />
                </el-select>
              </template>
            </el-table-column>
            <el-table-column prop="FeedBackTime" align="center" width="150" label="反馈日期">
            </el-table-column>
            <el-table-column prop="FeedBackByName" align="center" label="反馈人">
            </el-table-column>
          </el-table>
        </div>
        <el-row>
          <el-col :span="6">
            <el-form-item label="服务费是否含档">{{detailData.detail?(detailData.detail.e_IncludeArchiveFee?'是':'否'):''}}
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </div>

    <div class="query-condition-item" style="margin-top: 20px;">
      <div class="pclp-filters-title">备注</div>
      <el-form label-width="100px" class="pclp-filters-form" size="small">
        <el-row>
          <el-col :span="12">
            <el-form-item label="前道备注" style="font-weight:bold;color:#606266;">
              <el-input disabled type="textarea" :rows="4" v-model="qdRemark">
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="后道备注" style="font-weight:bold;color:#606266;">
              <el-input disabled type="textarea" :rows="4" v-model="hdRemark">
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="6">
            <el-form-item label="备注类型" style="font-weight:bold;">
              <el-select :disabled="editDisabled" v-model="formRemark.remarkType" filterable placeholder size="small"
                style="width:100%;">
                <el-option v-for="item in remarksType" :key="item.key" :label="item.label" :value="item.name" />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="16">
            <el-form-item label="备注内容" style="font-weight:bold;">
              <el-input :disabled="editDisabled" v-model.trim="formRemark.remarkContent" style="width:100%;"
                placeholder="请输入" size="small"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="2">
            <el-button size="small" style="float:right;" @click="addRemark()" :disabled="editDisabled">添加备注</el-button>
          </el-col>
        </el-row>
      </el-form>
    </div>

    <div class="el-col el-col-24" style="margin-top:20px;margin-bottom:20px;text-align:right">
      <el-button type="danger" size="small" @click="TaskRefund()" :disabled="editDisabled">退前道</el-button>
      <el-button type="primary" size="small" @click="autoComputeAndSaveTask()" :disabled="editDisabled">保存</el-button>
    </div>

    <!-- 企业账户列表弹窗 -->
    <base-dialog :show="accountDialogVisible" :title="'企业账户列表'" :cancelBtnText="'返回'" :showConfirmBtn='false'
      :width="'60%'" @close="accountDialogVisible=false">
      <el-table :data="accountList" border size="mini" style="width: 100%" highlight-current-row
        @current-change="handleAccountChange">
        <el-table-column :label="accountType==0?'社保企业账户名称':'公积金账户名称'" align="center">
          <template slot-scope="scope">
            <span>{{ scope.row.companyName }}</span>
          </template>
        </el-table-column>
        <el-table-column :label="accountType==0?'社保参保户登记码':'公积金账号'" align="center">
          <template slot-scope="scope">
            <span>{{ scope.row.insuredCode }}</span>
          </template>
        </el-table-column>
      </el-table>
    </base-dialog>

  </div>
</template>

<script>
  import api from '@/serve/api/userProfiles/SCDeclarationFeedback';
  import BaseDialog from "@/components/BaseDialog/index.vue";

  export default {
    data() {
      return {
        ssHandleTypeList: [], // 五险办理类型
        ssHandleTypeListSource: [],
        // ssHandleTypeListBujiao: undefined,
        // ssHandleTypeListZhuanchu: undefined,
        // ssHandleTypeListFengcun: undefined,
        hfHandleTypeList: [], // 公积金办理类型
        hfHandleTypeListSource: [],
        // hfHandleTypeListBujiao: undefined,
        // hfHandleTypeListZhuanchu: undefined,
        // hfHandleTypeListFengcun: undefined,
        form: {
          e_Salary: undefined,
          socialAccount: undefined,
          fundAccount: undefined,
          archiveplace: undefined,
          billYM: undefined,
          enterpriseSSAccount: undefined,
          enterpriseHFAccount: undefined,
          postType: undefined,
          isEsign: false,
          legalEntityName: '',
        },
        taskPostType: [],
        formRemark: {
          remarkType: '社保备注',
          remarkContent: undefined,
        },
        detailsTable: [],
        otherTable: [],
        serviceProduct: [],
        remarksType: [],
        qdRemark: undefined,
        hdRemark: undefined,
        editDisabled: true, // 后道批退 - 按钮禁用
        accountDialogVisible: false,
        accountList: [],
        accountType: 0,
        targetAccountChange: undefined // 五险一金表中选中的企业账户
      }
    },
    components: {
      "base-dialog": BaseDialog
    },
    props: {
      feedbackInformation: {
        type: Array,
        default: () => ([])
      },
      detailData: {
        type: Object,
        default: () => ({})
      }
    },
    watch: {
      'detailData': function (newData, oldData) {
        this.detailData = newData;
        this.initData();
        this.updateHandleTypeOptions();
        this.getRemarkList();
      }
    },
    mounted() {
      this.initData();

      api.GetEnums().then(res => {
        if (res.code == 0) {
          this.taskPostType = res.result.form.postType;
          this.ssHandleTypeListSource = res.result.form.ssHandleType;
          this.ssHandleTypeList = [{
            enText: "",
            cnText: "",
            jpText: "",
            enumValue: null
          }, ...this.ssHandleTypeListSource];
          // this.ssHandleTypeListBujiao = (this.ssHandleTypeListSource.filter(item => {return item.cnText == "补缴"}))[0].enumValue;
          // this.ssHandleTypeListZhuanchu = (this.ssHandleTypeListSource.filter(item => {return item.cnText == "转出"}))[0].enumValue;
          // this.ssHandleTypeListFengcun = (this.ssHandleTypeListSource.filter(item => {return item.cnText == "封存"}))[0].enumValue;
          this.hfHandleTypeListSource = res.result.form.hfHandleType;
          this.hfHandleTypeList = [{
            enText: "",
            cnText: "",
            jpText: "",
            enumValue: null
          }, ...this.hfHandleTypeListSource];
          // this.hfHandleTypeListBujiao = (this.hfHandleTypeListSource.filter(item => {return item.cnText == "补缴"}))[0].enumValue;
          // this.hfHandleTypeListZhuanchu = (this.hfHandleTypeListSource.filter(item => {return item.cnText == "转出"}))[0].enumValue;
          // this.hfHandleTypeListFengcun = (this.hfHandleTypeListSource.filter(item => {return item.cnText == "封存"}))[0].enumValue;

          this.updateHandleTypeOptions();
        }
      });

      this.getRemarkList();
      this.remarksType = [{
          'key': '0',
          'label': '社保备注',
          'name': '社保备注'
        },
        {
          'key': '1',
          'label': '公积金备注',
          'name': '公积金备注'
        },
        {
          'key': '2',
          'label': '其他备注',
          'name': '其他备注'
        }
      ];
    },
    methods: {
      initData() {
        if (this.detailData) {
          if (this.detailData.task) {
            this.editDisabled = this.detailData.task.feedBackStatus == '后道批退';
            this.form.e_Salary = this.detailData.task.e_Salary;
            this.form.socialAccount = this.detailData.task.socialAccount;
            this.form.fundAccount = this.detailData.task.fundAccount;
            this.form.archiveplace = this.detailData.task.archiveplace;
            this.form.enterpriseSSAccount = this.detailData.task.enterpriseSSAccount;
            this.form.enterpriseHFAccount = this.detailData.task.enterpriseHFAccount;
            this.form.postType = this.detailData.task.postType;
            this.form.isEsign = this.detailData.task.isEsign;
            this.form.legalEntityName = this.detailData.task.legalEntityName;
          }

          if (this.detailData.detail) {
            this.form.billYM = this.formatFloatToDateStr(this.detailData.detail.billYM);

            this.qdRemark = this.detailData.qdRemark.replace(/\\r\\n /g, '\n').replace(/\\r\\n/g, '\n');
            //this.hdRemark = this.detailData.hdRemark.replace(/\\r\\n/g, '<br>');

            this.initDetailsTable();
            this.initOtherTable();
            this.feedbackComputed();
            this.serviceProduct = this.detailData.serviceProduct;
          }
        }
      },
      initDetailsTable() {
        var detail = this.detailData.detail;

        this.detailsTable = [];
        this.detailsTable.push({
          itemId: 1,
          item: '养老',
          socialID: detail.e_PI_SocialID,
          handelType: detail.e_PI_HandelType,
          companyAccount: detail.e_PI_CompanyAccount,
          personalAccount: detail.e_PI_PersonalAccount,
          city: detail.pI_City,
          cityRemark: detail.pI_CityRemark,
          companyBase: detail.e_PI_CompanyBase,
          personalBase: detail.e_PI_PersonalBase,
          companyRatio: detail.e_PI_CompanyRatio,
          personalRatio: detail.e_PI_PersonalRatio,
          feedBack: detail.pI_FeedBack,
          startMonth: this.formatFloatToDateStr(detail.e_PI_StartMonth),
          endMonth: this.formatFloatToDateStr(detail.e_PI_EndMonth),
          startDisabled: false,
          endDisabled: false,
          companyFeeMode: detail.e_PI_CompanyFeeMode,
          personalFeeMode: detail.e_PI_PersonalFeeMode,
          companyFee: detail.e_PI_CompanyFee,
          personalFee: detail.e_PI_PersonalFee,
          totallFee: detail.e_PI_TotallFee,
          feedBackTime: this.$dateFormat(detail.pI_FeedBackTime, true),
          feedBackByName: detail.pI_FeedBackByName,
          personalAlg: detail.e_PI_PersonalAlg,
          companyAlg: detail.e_PI_CompanyAlg
        });
        this.detailsTable.push({
          itemId: 2,
          item: '失业',
          socialID: detail.e_UI_SocialID,
          handelType: detail.e_UI_HandelType,
          companyAccount: detail.e_UI_CompanyAccount,
          personalAccount: detail.e_UI_PersonalAccount,
          city: detail.uI_City,
          cityRemark: detail.uI_CityRemark,
          companyBase: detail.e_UI_CompanyBase,
          personalBase: detail.e_UI_PersonalBase,
          companyRatio: detail.e_UI_CompanyRatio,
          personalRatio: detail.e_UI_PersonalRatio,
          feedBack: detail.uI_FeedBack,
          startMonth: this.formatFloatToDateStr(detail.e_UI_StartMonth),
          endMonth: this.formatFloatToDateStr(detail.e_UI_EndMonth),
          startDisabled: false,
          endDisabled: false,
          companyFeeMode: detail.e_UI_CompanyFeeMode,
          personalFeeMode: detail.e_UI_PersonalFeeMode,
          companyFee: detail.e_UI_CompanyFee,
          personalFee: detail.e_UI_PersonalFee,
          totallFee: detail.e_UI_TotallFee,
          feedBackTime: this.$dateFormat(detail.uI_FeedBackTime, true),
          feedBackByName: detail.uI_FeedBackByName,
          personalAlg: detail.e_UI_PersonalAlg,
          companyAlg: detail.e_UI_CompanyAlg
        });
        this.detailsTable.push({
          itemId: 3,
          item: '医疗',
          socialID: detail.e_MI_SocialID,
          handelType: detail.e_MI_HandelType,
          companyAccount: detail.e_MI_CompanyAccount,
          personalAccount: detail.e_MI_PersonalAccount,
          city: detail.mI_City,
          cityRemark: detail.mI_CityRemark,
          companyBase: detail.e_MI_CompanyBase,
          personalBase: detail.e_MI_PersonalBase,
          companyRatio: detail.e_MI_CompanyRatio,
          personalRatio: detail.e_MI_PersonalRatio,
          feedBack: detail.mI_FeedBack,
          startMonth: this.formatFloatToDateStr(detail.e_MI_StartMonth),
          endMonth: this.formatFloatToDateStr(detail.e_MI_EndMonth),
          startDisabled: false,
          endDisabled: false,
          companyFeeMode: detail.e_MI_CompanyFeeMode,
          personalFeeMode: detail.e_MI_PersonalFeeMode,
          companyFee: detail.e_MI_CompanyFee,
          personalFee: detail.e_MI_PersonalFee,
          totallFee: detail.e_MI_TotallFee,
          feedBackTime: this.$dateFormat(detail.mI_FeedBackTime, true),
          feedBackByName: detail.mI_FeedBackByName,
          personalAlg: detail.e_MI_PersonalAlg,
          companyAlg: detail.e_MI_CompanyAlg
        });
        this.detailsTable.push({
          itemId: 4,
          item: '工伤',
          socialID: detail.e_II_SocialID,
          handelType: detail.e_II_HandelType,
          companyAccount: detail.e_II_CompanyAccount,
          personalAccount: detail.e_II_PersonalAccount,
          city: detail.iI_City,
          cityRemark: detail.iI_CityRemark,
          companyBase: detail.e_II_CompanyBase,
          personalBase: detail.e_II_PersonalBase,
          companyRatio: detail.e_II_CompanyRatio,
          personalRatio: detail.e_II_PersonalRatio,
          feedBack: detail.iI_FeedBack,
          startMonth: this.formatFloatToDateStr(detail.e_II_StartMonth),
          endMonth: this.formatFloatToDateStr(detail.e_II_EndMonth),
          startDisabled: false,
          endDisabled: false,
          companyFeeMode: detail.e_II_CompanyFeeMode,
          personalFeeMode: detail.e_II_PersonalFeeMode,
          companyFee: detail.e_II_CompanyFee,
          personalFee: detail.e_II_PersonalFee,
          totallFee: detail.e_II_TotallFee,
          feedBackTime: this.$dateFormat(detail.iI_FeedBackTime, true),
          feedBackByName: detail.iI_FeedBackByName,
          personalAlg: detail.e_II_PersonalAlg,
          companyAlg: detail.e_II_CompanyAlg
        });
        this.detailsTable.push({
          itemId: 5,
          item: '生育',
          socialID: detail.e_BI_SocialID,
          handelType: detail.e_BI_HandelType,
          companyAccount: detail.e_BI_CompanyAccount,
          personalAccount: detail.e_BI_PersonalAccount,
          city: detail.bI_City,
          cityRemark: detail.bI_CityRemark,
          companyBase: detail.e_BI_CompanyBase,
          personalBase: detail.e_BI_PersonalBase,
          companyRatio: detail.e_BI_CompanyRatio,
          personalRatio: detail.e_BI_PersonalRatio,
          feedBack: detail.bI_FeedBack,
          startMonth: this.formatFloatToDateStr(detail.e_BI_StartMonth),
          endMonth: this.formatFloatToDateStr(detail.e_BI_EndMonth),
          startDisabled: false,
          endDisabled: false,
          companyFeeMode: detail.e_BI_CompanyFeeMode,
          personalFeeMode: detail.e_BI_PersonalFeeMode,
          companyFee: detail.e_BI_CompanyFee,
          personalFee: detail.e_BI_PersonalFee,
          totallFee: detail.e_BI_TotallFee,
          feedBackTime: this.$dateFormat(detail.bI_FeedBackTime, true),
          feedBackByName: detail.bI_FeedBackByName,
          personalAlg: detail.e_BI_PersonalAlg,
          companyAlg: detail.e_BI_CompanyAlg
        });
        this.detailsTable.push({
          itemId: 6,
          item: '公积金',
          socialID: detail.e_HF_SocialID,
          handelType: detail.e_HF_HandelType,
          companyAccount: detail.e_HF_CompanyAccount,
          personalAccount: detail.e_HF_PersonalAccount,
          city: detail.hF_City,
          cityRemark: detail.hF_CityRemark,
          companyBase: detail.e_HF_CompanyBase,
          personalBase: detail.e_HF_PersonalBase,
          companyRatio: detail.e_HF_CompanyRatio,
          personalRatio: detail.e_HF_PersonalRatio,
          feedBack: detail.hF_FeedBack,
          startMonth: this.formatFloatToDateStr(detail.e_HF_StartMonth),
          endMonth: this.formatFloatToDateStr(detail.e_HF_EndMonth),
          startDisabled: false,
          endDisabled: false,
          companyFeeMode: detail.e_HF_CompanyFeeMode,
          personalFeeMode: detail.e_HF_PersonalFeeMode,
          companyFee: detail.e_HF_CompanyFee,
          personalFee: detail.e_HF_PersonalFee,
          totallFee: detail.e_HF_TotallFee,
          feedBackTime: this.$dateFormat(detail.hF_FeedBackTime, true),
          feedBackByName: detail.hF_FeedBackByName,
          personalAlg: detail.e_HF_PersonalAlg,
          companyAlg: detail.e_HF_CompanyAlg
        });
        this.detailsTable.push({
          itemId: 7,
          item: '补充公积金',
          socialID: detail.e_SHF_SocialID,
          handelType: detail.e_SHF_HandelType,
          companyAccount: detail.e_SHF_CompanyAccount,
          personalAccount: detail.e_SHF_PersonalAccount,
          city: detail.shF_City,
          cityRemark: detail.shF_CityRemark,
          companyBase: detail.e_SHF_CompanyBase,
          personalBase: detail.e_SHF_PersonalBase,
          companyRatio: detail.e_SHF_CompanyRatio,
          personalRatio: detail.e_SHF_PersonalRatio,
          feedBack: detail.shF_FeedBack,
          startMonth: this.formatFloatToDateStr(detail.e_SHF_StartMonth),
          endMonth: this.formatFloatToDateStr(detail.e_SHF_EndMonth),
          startDisabled: false,
          endDisabled: false,
          companyFeeMode: detail.e_SHF_CompanyFeeMode,
          personalFeeMode: detail.e_SHF_PersonalFeeMode,
          companyFee: detail.e_SHF_CompanyFee,
          personalFee: detail.e_SHF_PersonalFee,
          totallFee: detail.e_SHF_TotallFee,
          feedBackTime: this.$dateFormat(detail.shF_FeedBackTime, true),
          feedBackByName: detail.shF_FeedBackByName,
          personalAlg: detail.e_SHF_PersonalAlg,
          companyAlg: detail.e_SHF_CompanyAlg
        });
      },
      initOtherTable() {
        var detail = this.detailData.detail;

        this.otherTable = [];
        this.otherTable.push({
          itemName: '服务产品',
          FeeTotal: detail.e_ServiceProductFeeTotal,
          StartMonth: this.formatFloatToDateStr(detail.e_SP_StartMonth),
          EndMonth: this.formatFloatToDateStr(detail.e_SP_EndMonth),
          FeedBack: detail.sP_FeedBack,
          FeedBackTime: this.$dateFormat(detail.sP_FeedBackTime, true),
          FeedBackByName: detail.sP_FeedBackByName
        });
        this.otherTable.push({
          itemName: '档案保管',
          FeeTotal: detail.e_ArchiveFee,
          StartMonth: this.formatFloatToDateStr(detail.e_Archive_StartMonth),
          EndMonth: this.formatFloatToDateStr(detail.e_Archive_EndMonth),
          FeedBack: detail.archive_FeedBack,
          FeedBackTime: this.$dateFormat(detail.archive_FeedBackTime, true),
          FeedBackByName: detail.archive_FeedBackByName
        });
        this.otherTable.push({
          itemName: '服务费',
          FeeTotal: detail.e_ServiceCharge,
          StartMonth: '',
          EndMonth: '',
          FeedBack: '',
          FeedBackTime: '',
          FeedBackByName: ''
        });
        this.otherTable.push({
          itemName: '额外费用',
          FeeTotal: detail.e_AdjustFee,
          StartMonth: this.formatFloatToDateStr(detail.e_Adjust_StartMonth),
          EndMonth: this.formatFloatToDateStr(detail.e_Adjust_EndMonth),
          FeedBack: detail.adjust_FeedBack,
          FeedBackTime: this.$dateFormat(detail.adjust_FeedBackTime, true),
          FeedBackByName: detail.adjust_FeedBackByName
        });
      },
      addRemark() {
        var data = {
          'TaskID': this.detailData.task.taskID,
          'RemarkType': this.formRemark.remarkType,
          'Remark': this.formRemark.remarkContent
        };
        api.SaveTaskRemark(data).then(res => {
          if (res.code == 0) {
            this.formRemark.remarkType = undefined;
            this.formRemark.remarkContent = undefined;
            this.getRemarkList();
          }
        }).catch(error => {
          console.log(error);
        });
      },
      saveTask() {
        this.form.billYM = this.formatDateStrToFloat(this.form.billYM);
        var flag = this.feedbackInformation.some((item) => {
          return item.isRequired && !(item.value)
        })
        // if (flag) {
        //   this.$message.error('反馈信息有必填信息未填写');
        //   return;
        // }
        console.log('this.feedbackInformation', this.feedbackInformation)
        var ExtendColumn = {}
        this.feedbackInformation.map((item) => {
          ExtendColumn[item.id] = item.value
        })
        var saveForm = {
          ExtendColumn: ExtendColumn,
          'TaskID': this.detailData.task.taskID,
          ...this.form,
          ...this.getDetailsTable(),
          ...this.getOtherTable()
        };

        api.SaveTaskDetail(saveForm).then(res => {
          if (res.code == 0) {
            this.$message.success("保存成功");
            this.$emit('reflash');
          } else if (res.code == -1) {
            this.$message.error(res.message);
          }
        }).catch(error => {
          console.log(error);
        });
      },
      getDetailsTable() {
        var tempForm = {};
        var tempPrefix = ['PI_', 'UI_', 'MI_', 'II_', 'BI_', 'HF_', 'SHF_'];

        tempPrefix.map((prefix, i) => {
          tempForm[prefix + 'FeedBack'] = this.detailsTable[i].feedBack;
          tempForm['e_' + prefix + 'StartMonth'] = this.formatDateStrToFloat(this.detailsTable[i].startMonth);
          tempForm['e_' + prefix + 'EndMonth'] = this.formatDateStrToFloat(this.detailsTable[i].endMonth);
          tempForm['e_' + prefix + 'CompanyAccount'] = this.detailsTable[i].companyAccount;
          tempForm['e_' + prefix + 'PersonalAccount'] = this.detailsTable[i].personalAccount;
          tempForm['e_' + prefix + 'CompanyFeeMode'] = this.detailsTable[i].companyFeeMode;
          tempForm['e_' + prefix + 'PersonalFeeMode'] = this.detailsTable[i].personalFeeMode;
          tempForm['e_' + prefix + 'HandelType'] = this.detailsTable[i].handelType;
          tempForm['e_' + prefix + 'CompanyBase'] = this.detailsTable[i].companyBase;
          tempForm['e_' + prefix + 'PersonalBase'] = this.detailsTable[i].personalBase;
          tempForm['e_' + prefix + 'CompanyRatio'] = this.detailsTable[i].companyRatio;
          tempForm['e_' + prefix + 'PersonalRatio'] = this.detailsTable[i].personalRatio;
          tempForm['e_' + prefix + 'CompanyFee'] = this.detailsTable[i].companyFee;
          tempForm['e_' + prefix + 'PersonalFee'] = this.detailsTable[i].personalFee;
          tempForm['e_' + prefix + 'TotallFee'] = this.detailsTable[i].totallFee;
        });

        return tempForm;
      },
      getOtherTable() {
        var tempForm = {};
        var tempPrefix = ['sP_', 'archive_', '', 'adjust_'];

        tempPrefix.map((prefix, i) => {
          if (prefix != '') {
            tempForm[prefix + 'FeedBack'] = this.otherTable[i].FeedBack;
            tempForm['e_' + prefix + 'StartMonth'] = this.formatDateStrToFloat(this.otherTable[i].StartMonth);
            tempForm['e_' + prefix + 'EndMonth'] = this.formatDateStrToFloat(this.otherTable[i].EndMonth);
          }
        });

        return tempForm;
      },
      TaskRefund() {
        this.$confirm('确定退前道吗？').then(() => {
          api.TaskRefund(this.detailData.task.taskID).then(res => {
            if (res.code == 0) {
              this.$router.push({
                name: 'UserProfilesSCFeedbackTaskList',
              });
            } else if (res.code == -1) {
              this.$message.error(res.message);
            }
          }).catch(error => {
            console.log(error);
          });
        }).catch(error => {
          console.log(error);
        });
      },
      formatFloatToDateStr(str) {
        var res = '';
        if (str != null && str != 0) {
          res = parseFloat(str).toFixed(2).toString().replace('.', '-');
          res = new Date(res);
        }
        return res;
      },
      formatDateStrToFloat(str) {
        var res = 0;
        if (str != null && str != '') {
          if (str instanceof Date)
            res = str.format('yyyy.MM');
          else
            res = str.toString().replace('-', '.');
        }
        return res;
      },
      getRemarkList() {
        if (this.detailData && this.detailData.task) {
          api.GetNonlocalTaskRemark(this.detailData.task.taskID).then(res => {
            if (res.code == 0) {
              this.hdRemark = res.result.replace(/\\r\\n /g, '\n').replace(/\\r\\n/g, '\n');
            } else if (res.code == -1) {
              this.$message.error(res.message);
            }
          }).catch(error => {
            console.log(error);
          });
        }
      },
      feedbackComputed: function () {
        if (this.detailData && this.detailData.task && this.detailData.task.isLocalRegister) {
          // 结束反馈成功判断顺序不能颠倒
          var res = this.detailsTable.every((i) => {
            return i.feedBack == '结束'
          }); // 所有结束，档案保管和额外费用结束
          if (res && this.otherTable[0].FeedBack == '结束') {
            this.otherTable[1].FeedBack = '结束';
            this.otherTable[3].FeedBack = '结束';
          } else {
            this.otherTable[1].FeedBack = '';
            this.otherTable[3].FeedBack = '';
          }

          res = this.detailsTable.some((i) => {
            return i.feedBack == '反馈成功'
          }); // 其一反馈成功，档案保管和额外费用反馈成功
          if (res || this.otherTable[0].FeedBack == '反馈成功') {
            this.otherTable[1].FeedBack = '反馈成功';
            this.otherTable[3].FeedBack = '反馈成功';
          } else {
            this.otherTable[1].FeedBack = '';
            this.otherTable[3].FeedBack = '';
          }
        }
      },
      socialFeedback: function () {
        this.detailsTable[0].feedBack = '反馈成功';
        this.detailsTable[1].feedBack = '反馈成功';
        this.detailsTable[2].feedBack = '反馈成功';
        this.detailsTable[3].feedBack = '反馈成功';
        this.detailsTable[4].feedBack = '反馈成功';
        this.feedbackComputed();
      },
      fundFeedback: function () {
        this.detailsTable[5].feedBack = '反馈成功';
        this.detailsTable[6].feedBack = '反馈成功';
        this.feedbackComputed();
      },
      otherFeedback: function () {
        this.otherTable[0].FeedBack = '反馈成功';
        this.otherTable[1].FeedBack = '反馈成功';
        this.otherTable[3].FeedBack = '反馈成功';
      },
      tableRowClassName(scope) {
        if ((scope.row.itemName == '额外费用' || scope.row.itemName == '档案保管' || scope.row.itemName == '服务费') && this
          .detailData.task.isLocalRegister) {
          return 'hidden-row';
        }
        return '';
      },
      async autoCompute(showMessage = false) {
        this.detailsTable.map(item => {
          item.companyBase = item.companyBase || 0;
          item.personalBase = item.personalBase || 0;
          item.companyRatio = item.companyRatio || 0;
          item.personalRatio = item.personalRatio || 0;
          item.companyFee = item.companyFee || 0;
          item.personalFee = item.personalFee || 0;

          item.apCompanyBase = item.companyBase;
          item.apPersonalBase = item.personalBase;
        });
        var params = {
          SSPolicyTemplateId: this.detailsTable[0].socialID,
          HFPolicyTemplateId: this.detailsTable[5].socialID,
          SIDictionary: this.detailsTable
        };

        var res = await api.AutoCalc(params);
        if (res.code == 0) {
          if (res.message != null && showMessage) {
            this.$message.error(res.message);
          }
          if (res.result.siDictionary.length > 0) {
            res.result.siDictionary.map((item, i) => {
              Object.keys(item).map(key => {
                if (key != 'item')
                  this.detailsTable[i][key] = item[key];
              });
            });
          }
        }
      },
      autoComputeAndSaveTask() {
        this.autoCompute().then(() => {
          this.saveTask();
        });
      },
      updateHandleTypeOptions() {
        // 委托类型为补缴时，办理类型只能选择补缴，并且开放结束月也能填写；当委托类型不为补缴时，办理类型里面不能选择补缴
        if (this.detailData.task && this.detailData.task.delegateType == "补缴") {
          this.ssHandleTypeList = [{
            enText: "",
            cnText: "",
            jpText: "",
            enumValue: null
          }, ...this.ssHandleTypeListSource.filter(item => {
            return item.cnText == "补缴"
          })];
          this.hfHandleTypeList = [{
            enText: "",
            cnText: "",
            jpText: "",
            enumValue: null
          }, ...this.hfHandleTypeListSource.filter(item => {
            return item.cnText == "补缴"
          })];
        } else if (this.detailData.task && this.detailData.task.delegateType == "新增") {
          this.ssHandleTypeList = [{
            enText: "",
            cnText: "",
            jpText: "",
            enumValue: null
          }, ...this.ssHandleTypeListSource.filter(item => {
            return item.cnText != "补缴" && item.cnText != "转出" && item.cnText != "封存" && item.cnText != "调整"
          })];
          this.hfHandleTypeList = [{
            enText: "",
            cnText: "",
            jpText: "",
            enumValue: null
          }, ...this.hfHandleTypeListSource.filter(item => {
            return item.cnText != "补缴" && item.cnText != "转出" && item.cnText != "封存" && item.cnText != "调整"
          })];
        } else if (this.detailData.task && this.detailData.task.delegateType == "一次性费用") {
          this.ssHandleTypeList = [{
            enText: "",
            cnText: "",
            jpText: "",
            enumValue: null
          }, ...this.ssHandleTypeListSource.filter(item => {
            return item.cnText != "转出" && item.cnText != "封存"
          })];
          this.hfHandleTypeList = [{
            enText: "",
            cnText: "",
            jpText: "",
            enumValue: null
          }, ...this.hfHandleTypeListSource.filter(item => {
            return item.cnText != "转出" && item.cnText != "封存"
          })];
        } else if (this.detailData.task && this.detailData.task.delegateType == "终止") {
          this.ssHandleTypeList = [{
            enText: "",
            cnText: "",
            jpText: "",
            enumValue: null
          }, ...this.ssHandleTypeListSource.filter(item => {
            return item.cnText != "补缴" && item.cnText == "转出" || item.cnText == "封存"
          })];
          this.hfHandleTypeList = [{
            enText: "",
            cnText: "",
            jpText: "",
            enumValue: null
          }, ...this.hfHandleTypeListSource.filter(item => {
            return item.cnText != "补缴" && item.cnText == "转出" || item.cnText == "封存"
          })];
        } else {
          this.ssHandleTypeList = [{
            enText: "",
            cnText: "",
            jpText: "",
            enumValue: null
          }, ...this.ssHandleTypeListSource.filter(item => {
            return item.cnText != "补缴"
          })];
          this.hfHandleTypeList = [{
            enText: "",
            cnText: "",
            jpText: "",
            enumValue: null
          }, ...this.hfHandleTypeListSource.filter(item => {
            return item.cnText != "补缴"
          })];
        }
      },
      openAccountDialog(type, where) {
        this.accountType = type;
        if (where == null) {
          this.targetAccountChange = null;
        } else {
          this.targetAccountChange = where;
        }
        if (this.detailData.task.companyID != '' && this.detailData.task.companyID != null) {
          api.GetCompanyAccount({
            CompanyId: this.detailData.task.companyID,
            City: this.detailData.task.delegateCity,
            Type: this.accountType
          }).then(res => {
            if (res.code == 0) {
              this.accountList = res.result.form.filter(item => {
                return (item.companyName != '' && item.companyName != null) || (item.insuredCode != '' && item
                  .insuredCode != null)
              });
              this.accountDialogVisible = true;
            } else {
              this.$message.error(res.message);
            }
          });
        }
      },
      handleAccountChange(val) {
        if (val != null) {
          if (this.targetAccountChange == null) { // 基本信息中的企业账户
            if (this.accountType == 0) {
              this.form.enterpriseSSAccount = val.insuredCode;
              this.detailsTable.map((item, index) => {
                if (index >= 0 && index < 5) // 五险
                  this.$set(item, 'companyAccount', val.insuredCode);
              });
            } else {
              this.form.enterpriseHFAccount = val.insuredCode;
              this.detailsTable.map((item, index) => {
                if (index >= 5 && index < 7) // 二金
                  this.$set(item, 'companyAccount', val.insuredCode);
              });
            }
          } else { // 五险一金表中的企业账户
            this.$set(this.detailsTable[this.targetAccountChange - 1], 'companyAccount', val.insuredCode);
          }

          this.accountDialogVisible = false;
        }
      },
      changeSSHandleType(type, itemId) {
        // if (type === this.ssHandleTypeListZhuanchu || type === this.ssHandleTypeListFengcun) {
        //   this.detailsTable[itemId - 1].startDisabled = true;
        //   this.detailsTable[itemId - 1].endDisabled = false;
        //   this.detailsTable[itemId - 1].startMonth = undefined;
        // } else if (type === this.ssHandleTypeListBujiao) {
        //   this.detailsTable[itemId - 1].startDisabled = false;
        //   this.detailsTable[itemId - 1].endDisabled = false;
        // } else {
        //   this.detailsTable[itemId - 1].startDisabled = false;
        //   this.detailsTable[itemId - 1].endDisabled = true;
        //   this.detailsTable[itemId - 1].endMonth = undefined;
        // }
        if (itemId == 1) {
          this.detailsTable.map((item, index) => {
            if (index >= 0 && index < 5) {
              item.handelType = type;
            }
          });
        }
      },
      changeHFHandleType(type, itemId) {
        // if (type === this.hfHandleTypeListZhuanchu || type === this.hfHandleTypeListFengcun) {
        //   this.detailsTable[itemId - 1].startDisabled = true;
        //   this.detailsTable[itemId - 1].endDisabled = false;
        // } else if (type === this.hfHandleTypeListBujiao) {
        //   this.detailsTable[itemId - 1].startDisabled = false;
        //   this.detailsTable[itemId - 1].endDisabled = false;
        // } else {
        //   this.detailsTable[itemId - 1].startDisabled = false;
        //   this.detailsTable[itemId - 1].endDisabled = true;
        // }
        if (itemId == 6) {
          this.detailsTable.map((item, index) => {
            if (index == 5 || index == 6) {
              item.handelType = type;
            }
          });
        }
      },
      socialAccountChange(val) {
        if (this.detailsTable != null && this.detailsTable.length > 0) {
          this.detailsTable.map((item, index) => {
            if (index >= 0 && index < 5) // 五险
              this.$set(item, 'personalAccount', val);
          });
        }
      },
      fundAccountChange(val) {
        if (this.detailsTable != null && this.detailsTable.length > 0) {
          this.detailsTable.map((item, index) => {
            if (index >= 5 && index < 7) // 二金
              this.$set(item, 'personalAccount', val);
          });
        }
      }
    }
  }

  Date.prototype.format = function (fmt) {
    if (this instanceof Date && !isNaN(this.getTime())) {

    } else {
      return '';
    }
    var o = {
      "M+": this.getMonth() + 1, //月份 
      "d+": this.getDate(), //日 
      "h+": this.getHours(), //小时 
      "m+": this.getMinutes(), //分 
      "s+": this.getSeconds(), //秒 
      "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
      "S": this.getMilliseconds() //毫秒 
    };
    if (/(y+)/.test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    }
    for (var k in o) {
      if (new RegExp("(" + k + ")").test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
      }
    }
    return fmt;
  }
</script>

<style lang="less" scoped>
  /deep/ .el-table .hidden-row {
    display: none;
  }

  /deep/ input::-webkit-outer-spin-button,
  /deep/ input::-webkit-inner-spin-button {
    -webkit-appearance: none !important;
  }
</style>