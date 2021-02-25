<!-- 雇员查询 -->
<template>
  <div class="pc-list-page employee-management-query">
    <el-form class="pclp-filters-form pc-label-form" ref="form" label-width="90px" size="small" @submit.native.prevent>
      <el-row>
        <el-col :span="6">
          <el-form-item label="AF公司：">
            <div>{{companyName}}</div>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="雇员姓名：">
            <div>{{employeeName}}</div>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="缴费月份：">
            <div>{{payYm}}</div>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>

    <el-row>
      <!-- 表格 -->
      <el-col :span="24">
        <!-- 表格按钮 -->
        <div class="pclp-table table-radius">
          <el-col :span="12">
            <p class="pclp-filters-title">应收费用：</p>
          </el-col>
          <el-table ref="employeeList" class="select-table" :data="receivableList" :stripe="true" border>
            <el-table-column label="养老公司" align="center" :show-overflow-tooltip="true" prop="pI_CompanyFee"
              min-width="108">
            </el-table-column>
            <el-table-column label="养老个人" align="center" :show-overflow-tooltip="true" prop="pI_PersonalFee"
              min-width="108"></el-table-column>
            <el-table-column label="养老小计" align="center" :show-overflow-tooltip="true" prop="pI_TotallFee"
              min-width="108">
            </el-table-column>
            <el-table-column label="医疗公司" align="center" :show-overflow-tooltip="true" prop="mI_CompanyFee"
              min-width="108">
            </el-table-column>
            <el-table-column label="医疗个人" align="center" :show-overflow-tooltip="true" prop="mI_PersonalFee"
              min-width="108">
            </el-table-column>
            <el-table-column label="医疗小计" align="center" :show-overflow-tooltip="true" prop="mI_TotallFee"
              min-width="108">
            </el-table-column>
            <el-table-column label="失业公司" align="center" :show-overflow-tooltip="true" prop="uI_CompanyFee"
              min-width="108">
            </el-table-column>
            <el-table-column label="失业个人" align="center" :show-overflow-tooltip="true" prop="uI_PersonalFee"
              min-width="108">
            </el-table-column>
            <el-table-column label="失业小计" align="center" :show-overflow-tooltip="true" prop="uI_TotallFee"
              min-width="108">
            </el-table-column>
            <el-table-column label="生育公司" align="center" :show-overflow-tooltip="true" prop="bI_CompanyFee"
              min-width="108">
            </el-table-column>
            <el-table-column label="生育个人" align="center" :show-overflow-tooltip="true" prop="bI_PersonalFee"
              min-width="108">
            </el-table-column>
            <el-table-column label="生育小计" align="center" :show-overflow-tooltip="true" prop="bI_TotallFee"
              min-width="108">
            </el-table-column>
            <el-table-column label="工伤公司" align="center" :show-overflow-tooltip="true" prop="iI_CompanyFee"
              min-width="108">
            </el-table-column>
            <el-table-column label="工伤个人" align="center" :show-overflow-tooltip="true" prop="iI_PersonalFee"
              min-width="108">
            </el-table-column>
            <el-table-column label="工伤小计" align="center" :show-overflow-tooltip="true" prop="iI_TotallFee"
              min-width="108">
            </el-table-column>
            <el-table-column label="公积金公司" align="center" :show-overflow-tooltip="true" prop="hF_CompanyFee"
              min-width="108">
            </el-table-column>
            <el-table-column label="公积金个人" align="center" :show-overflow-tooltip="true" prop="hF_PersonalFee"
              min-width="108">
            </el-table-column>
            <el-table-column label="公积金小计" align="center" :show-overflow-tooltip="true" prop="hF_TotallFee"
              min-width="108">
            </el-table-column>
            <el-table-column label="补充公积金公司" align="center" :show-overflow-tooltip="true" prop="shF_CompanyFee"
              min-width="108">
            </el-table-column>
            <el-table-column label="补充公积金个人" align="center" :show-overflow-tooltip="true" prop="shF_PersonalFee"
              min-width="108">
            </el-table-column>
            <el-table-column label="补充公积金小计" align="center" :show-overflow-tooltip="true" prop="shF_TotallFee"
              min-width="108">
            </el-table-column>
            <el-table-column label="总计" align="center" :show-overflow-tooltip="true" prop="totalFee" min-width="108">
            </el-table-column>
          </el-table>
          <!-- 分页
          <div style="text-align:center">
            <el-pagination :current-page.sync="currentPage" :page-size="pageSize" :total="total"
              :page-sizes="[10, 20, 40]" background layout="total, sizes, prev, pager, next, jumper"
              @size-change="SizeChange" @current-change="CurrentChange" />
          </div> -->

        </div>
      </el-col>
    </el-row>

    <el-row>
      <!-- 表格 -->
      <el-col :span="24">
        <!-- 表格按钮 -->
        <div class="pclp-table table-radius">
          <el-col :span="12">
            <p class="pclp-filters-title">实付费用（外地）：</p>
          </el-col>
          <el-table ref="employeeList" class="select-table" :data="paidOutList" :stripe="true" border>
            <el-table-column label="养老公司" align="center" :show-overflow-tooltip="true" prop="pI_CompanyFee"
              min-width="108">
            </el-table-column>
            <el-table-column label="养老个人" align="center" :show-overflow-tooltip="true" prop="pI_PersonalFee"
              min-width="108"></el-table-column>
            <el-table-column label="养老小计" align="center" :show-overflow-tooltip="true" prop="pI_TotallFee"
              min-width="108">
            </el-table-column>
            <el-table-column label="医疗公司" align="center" :show-overflow-tooltip="true" prop="mI_CompanyFee"
              min-width="108">
            </el-table-column>
            <el-table-column label="医疗个人" align="center" :show-overflow-tooltip="true" prop="mI_PersonalFee"
              min-width="108">
            </el-table-column>
            <el-table-column label="医疗小计" align="center" :show-overflow-tooltip="true" prop="mI_TotallFee"
              min-width="108">
            </el-table-column>
            <el-table-column label="失业公司" align="center" :show-overflow-tooltip="true" prop="uI_CompanyFee"
              min-width="108">
            </el-table-column>
            <el-table-column label="失业个人" align="center" :show-overflow-tooltip="true" prop="uI_PersonalFee"
              min-width="108">
            </el-table-column>
            <el-table-column label="失业小计" align="center" :show-overflow-tooltip="true" prop="uI_TotallFee"
              min-width="108">
            </el-table-column>
            <el-table-column label="生育公司" align="center" :show-overflow-tooltip="true" prop="bI_CompanyFee"
              min-width="108">
            </el-table-column>
            <el-table-column label="生育个人" align="center" :show-overflow-tooltip="true" prop="bI_PersonalFee"
              min-width="108">
            </el-table-column>
            <el-table-column label="生育小计" align="center" :show-overflow-tooltip="true" prop="bI_TotallFee"
              min-width="108">
            </el-table-column>
            <el-table-column label="工伤公司" align="center" :show-overflow-tooltip="true" prop="iI_CompanyFee"
              min-width="108">
            </el-table-column>
            <el-table-column label="工伤个人" align="center" :show-overflow-tooltip="true" prop="iI_PersonalFee"
              min-width="108">
            </el-table-column>
            <el-table-column label="工伤小计" align="center" :show-overflow-tooltip="true" prop="iI_TotallFee"
              min-width="108">
            </el-table-column>
            <el-table-column label="公积金公司" align="center" :show-overflow-tooltip="true" prop="hF_CompanyFee"
              min-width="108">
            </el-table-column>
            <el-table-column label="公积金个人" align="center" :show-overflow-tooltip="true" prop="hF_PersonalFee"
              min-width="108">
            </el-table-column>
            <el-table-column label="公积金小计" align="center" :show-overflow-tooltip="true" prop="hF_TotallFee"
              min-width="108">
            </el-table-column>
            <el-table-column label="补充公积金公司" align="center" :show-overflow-tooltip="true" prop="shF_CompanyFee"
              min-width="108">
            </el-table-column>
            <el-table-column label="补充公积金个人" align="center" :show-overflow-tooltip="true" prop="shF_PersonalFee"
              min-width="108">
            </el-table-column>
            <el-table-column label="补充公积金小计" align="center" :show-overflow-tooltip="true" prop="shF_TotallFee"
              min-width="108">
            </el-table-column>
            <el-table-column label="总计" align="center" :show-overflow-tooltip="true" prop="totalFee" min-width="108">
            </el-table-column>
          </el-table>
          <!-- 分页 
          <div style="text-align:center">
            <el-pagination :current-page.sync="currentPage2" :page-size="pageSize2" :total="total2"
              :page-sizes="[10, 20, 40]" background layout="total, sizes, prev, pager, next, jumper"
              @size-change="SizeChange2" @current-change="CurrentChange2" />
          </div>-->
        </div>
      </el-col>
    </el-row>

    <el-row :gutter="10">
      <!-- 表格 -->
      <el-col :span="12">
        <!-- 表格按钮 -->
        <div class="pclp-table table-radius">
          <el-col :span="12">
            <p class="pclp-filters-title">社保实付费用（本地）：</p>
          </el-col>
          <el-table ref="employeeList" class="select-table" :data="paidSocialList" :stripe="true" border>
            <el-table-column label="支付" align="center" :show-overflow-tooltip="true" prop="pI_CompanyFee"
              min-width="50">
              <template slot-scope="scope">
                <el-checkbox v-model="scope.row.isBillPaid" disabled></el-checkbox>
              </template>
            </el-table-column>
            <el-table-column label="养老公司" align="center" :show-overflow-tooltip="true" prop="pI_CompanyFee"
              min-width="108">
            </el-table-column>
            <el-table-column label="养老个人" align="center" :show-overflow-tooltip="true" prop="pI_PersonalFee"
              min-width="108"></el-table-column>
            <el-table-column label="养老小计" align="center" :show-overflow-tooltip="true" prop="pI_TotallFee"
              min-width="108">
            </el-table-column>
            <el-table-column label="医疗公司" align="center" :show-overflow-tooltip="true" prop="mI_CompanyFee"
              min-width="108">
            </el-table-column>
            <el-table-column label="医疗个人" align="center" :show-overflow-tooltip="true" prop="mI_PersonalFee"
              min-width="108">
            </el-table-column>
            <el-table-column label="医疗小计" align="center" :show-overflow-tooltip="true" prop="mI_TotallFee"
              min-width="108">
            </el-table-column>
            <el-table-column label="失业公司" align="center" :show-overflow-tooltip="true" prop="uI_CompanyFee"
              min-width="108">
            </el-table-column>
            <el-table-column label="失业个人" align="center" :show-overflow-tooltip="true" prop="uI_PersonalFee"
              min-width="108">
            </el-table-column>
            <el-table-column label="失业小计" align="center" :show-overflow-tooltip="true" prop="uI_TotallFee"
              min-width="108">
            </el-table-column>
            <el-table-column label="生育公司" align="center" :show-overflow-tooltip="true" prop="bI_CompanyFee"
              min-width="108">
            </el-table-column>
            <el-table-column label="生育个人" align="center" :show-overflow-tooltip="true" prop="bI_PersonalFee"
              min-width="108">
            </el-table-column>
            <el-table-column label="生育小计" align="center" :show-overflow-tooltip="true" prop="bI_TotallFee"
              min-width="108">
            </el-table-column>
            <el-table-column label="工伤公司" align="center" :show-overflow-tooltip="true" prop="iI_CompanyFee"
              min-width="108">
            </el-table-column>
            <el-table-column label="工伤个人" align="center" :show-overflow-tooltip="true" prop="iI_PersonalFee"
              min-width="108">
            </el-table-column>
            <el-table-column label="工伤小计" align="center" :show-overflow-tooltip="true" prop="iI_TotallFee"
              min-width="108">
            </el-table-column>
            <el-table-column label="总计" align="center" :show-overflow-tooltip="true" prop="sS_TotalFee" min-width="108">
            </el-table-column>
          </el-table>
          <!-- 分页 -->
          <!--  <div style="text-align:center">
              <el-pagination :current-page.sync="currentPage2" :page-size="pageSize2" :total="total2"
                :page-sizes="[10, 20, 40]" background layout="total, sizes, prev, pager, next, jumper"
                @size-change="SizeChange2" @current-change="CurrentChange2" />
            </div> -->
        </div>
      </el-col>
      <el-col :span="12">
        <!-- 表格按钮 -->
        <div class="pclp-table table-radius">
          <el-col :span="12">
            <p class="pclp-filters-title">公积金实付费用（本地）：</p>
          </el-col>
          <el-table ref="employeeList" class="select-table" :data="HFList" :stripe="true" border>
            <el-table-column label="支付" align="center" :show-overflow-tooltip="true" prop="pI_CompanyFee"
              min-width="50">
              <template slot-scope="scope">
                <el-checkbox v-model="scope.row.isBillPaid" disabled></el-checkbox>
              </template>
            </el-table-column>
            <el-table-column label="类型" align="center" :show-overflow-tooltip="true" prop="hfType" min-width="108">
            </el-table-column>
            <el-table-column label="公司" align="center" :show-overflow-tooltip="true" prop="companyFee" min-width="108">
            </el-table-column>
            <el-table-column label="个人" align="center" :show-overflow-tooltip="true" prop="personalFee" min-width="108">
            </el-table-column>
            <el-table-column label="总计" align="center" :show-overflow-tooltip="true" prop="totalFee" min-width="108">
            </el-table-column>
          </el-table>
          <!-- 分页
            <div style="text-align:center">
              <el-pagination :current-page.sync="currentPage2" :page-size="pageSize2" :total="total2"
                :page-sizes="[10, 20, 40]" background layout="total, sizes, prev, pager, next, jumper"
                @size-change="SizeChange2" @current-change="CurrentChange2" />
            </div> -->
        </div>
      </el-col>

    </el-row>
    <el-row>
      <!-- 表格 -->
      <el-col :span="24">
        <!-- 表格按钮 -->
        <div class="pclp-table table-radius">
          <el-col :span="12">
            <p class="pclp-filters-title">差额费用：</p>
          </el-col>
          <el-table ref="employeeList" class="select-table" :data="differenceList" :stripe="true" border>
            <el-table-column label="费用来源" align="center" :show-overflow-tooltip="true" prop="formulaSourceName"
              min-width="108">
            </el-table-column>
            <el-table-column label="养老公司" align="center" :show-overflow-tooltip="true"
              prop="feeNumberDisplay.pI_CompanyFee" min-width="108">
            </el-table-column>
            <el-table-column label="养老个人" align="center" :show-overflow-tooltip="true"
              prop="feeNumberDisplay.pI_PersonalFee" min-width="108"></el-table-column>
            <el-table-column label="养老小计" align="center" :show-overflow-tooltip="true"
              prop="feeNumberDisplay.pI_TotallFee" min-width="108">
            </el-table-column>
            <el-table-column label="医疗公司" align="center" :show-overflow-tooltip="true"
              prop="feeNumberDisplay.mI_CompanyFee" min-width="108">
            </el-table-column>
            <el-table-column label="医疗个人" align="center" :show-overflow-tooltip="true"
              prop="feeNumberDisplay.mI_PersonalFee" min-width="108">
            </el-table-column>
            <el-table-column label="医疗小计" align="center" :show-overflow-tooltip="true"
              prop="feeNumberDisplay.mI_TotallFee" min-width="108">
            </el-table-column>
            <el-table-column label="失业公司" align="center" :show-overflow-tooltip="true"
              prop="feeNumberDisplay.uI_CompanyFee" min-width="108">
            </el-table-column>
            <el-table-column label="失业个人" align="center" :show-overflow-tooltip="true"
              prop="feeNumberDisplay.uI_PersonalFee" min-width="108">
            </el-table-column>
            <el-table-column label="失业小计" align="center" :show-overflow-tooltip="true"
              prop="feeNumberDisplay.uI_TotallFee" min-width="108">
            </el-table-column>
            <el-table-column label="生育公司" align="center" :show-overflow-tooltip="true"
              prop="feeNumberDisplay.bI_CompanyFee" min-width="108">
            </el-table-column>
            <el-table-column label="生育个人" align="center" :show-overflow-tooltip="true"
              prop="feeNumberDisplay.bI_PersonalFee" min-width="108">
            </el-table-column>
            <el-table-column label="生育小计" align="center" :show-overflow-tooltip="true"
              prop="feeNumberDisplay.bI_TotallFee" min-width="108">
            </el-table-column>
            <el-table-column label="工伤公司" align="center" :show-overflow-tooltip="true"
              prop="feeNumberDisplay.iI_CompanyFee" min-width="108">
            </el-table-column>
            <el-table-column label="工伤个人" align="center" :show-overflow-tooltip="true"
              prop="feeNumberDisplay.iI_PersonalFee" min-width="108">
            </el-table-column>
            <el-table-column label="工伤小计" align="center" :show-overflow-tooltip="true"
              prop="feeNumberDisplay.iI_TotallFee" min-width="108">
            </el-table-column>
            <el-table-column label="公积金公司" align="center" :show-overflow-tooltip="true"
              prop="feeNumberDisplay.hF_CompanyFee" min-width="108">
            </el-table-column>
            <el-table-column label="公积金个人" align="center" :show-overflow-tooltip="true"
              prop="feeNumberDisplay.hF_PersonalFee" min-width="108">
            </el-table-column>
            <el-table-column label="公积金小计" align="center" :show-overflow-tooltip="true"
              prop="feeNumberDisplay.hF_TotallFee" min-width="108">
            </el-table-column>
            <el-table-column label="补充公积金公司" align="center" :show-overflow-tooltip="true"
              prop="feeNumberDisplay.shF_CompanyFee" min-width="108">
            </el-table-column>
            <el-table-column label="补充公积金个人" align="center" :show-overflow-tooltip="true"
              prop="feeNumberDisplay.shF_PersonalFee" min-width="108">
            </el-table-column>
            <el-table-column label="补充公积金小计" align="center" :show-overflow-tooltip="true"
              prop="feeNumberDisplay.shF_TotallFee" min-width="108">
            </el-table-column>
            <el-table-column label="总计" align="center" :show-overflow-tooltip="true" prop="feeNumberDisplay.totalFee"
              min-width="108">
              <template slot="header" slot-scope="scope">
                总计<el-tooltip class="item" effect="dark" content="注释：总计只计算实付的已支付部分，未支付不含在内。" placement="top-start"><i
                    class="el-icon-question"></i></el-tooltip>
              </template>
            </el-table-column>
          </el-table>
          <!-- 分页 
          <div style="text-align:center">
            <el-pagination :current-page.sync="currentPage2" :page-size="pageSize2" :total="total2"
              :page-sizes="[10, 20, 40]" background layout="total, sizes, prev, pager, next, jumper"
              @size-change="SizeChange2" @current-change="CurrentChange2" />
          </div>-->
        </div>
      </el-col>
      <el-col align="center">
        <el-button plain type="primary" size="medium " @click="$router.go(-1)">返回</el-button>
      </el-col>
    </el-row>

  </div>
</template>
<script>
  import api from "@/serve/api/userProfiles/SCPaymentManagement";
  import {
    yyyymmdd
  } from '@/common/util';


  export default {
    name: "SCDiffPaymentDetail",
    components: {},
    data() {
      return {
        differenceList: [],
        HFList: [],
        employeeName: '',
        companyName: '',
        yyyymmdd: yyyymmdd,
        receivableList: [],
        paidOutList: [],
        currentPage: 1,
        pageSize: 10,
        pageIndex: 1,
        total: 0,
        companyNo: '',
        payYm: '',
        employeeId: '',
        pageIndex2: 1,
        pageSize2: 10,
        total2: 0,
        currentPage2: 1,
        pageIndex3: 1,
        pageSize3: 10,
        paidSocialList: [],
        parmars: {}
      };
    },
    mounted() {
      this.companyNo = this.$route.query.companyNo;
      this.payYm = this.$route.query.payYm && this.$route.query.payYm != 'null' ? this.$route.query.payYm : '';
      this.employeeId = this.$route.query.employeeId;
      this.companyName = this.$route.query.companyName && this.$route.query.companyName != 'null' ? this.$route.query
        .companyName : '';
      this.employeeName = this.$route.query.employeeName && this.$route.query.employeeName != 'null' ? this.$route.query
        .employeeName : '';
        console.log('this.employeeName', this.employeeName)
      this.parmars = {
        CompanyNo: this.$route.query.companyNo,
        EmployeeNo: this.$route.query.employeeId,
        PayYM: this.$route.query.payYm,
      }
      this.SearchBillDiffRece();
      this.SearchBillDiffPaidSupport();
      this.SearchBillDiffPaidFinanceSS();
      this.SearchBillDiffPaidFinanceHF();
      this.SearchBillDiffDetail();
    },
    methods: {
      SearchBillDiffDetail() {
        // 实付社保（批量表数据）
        api.SearchBillDiffDetail(this.parmars).then((response) => {
          const {
            result,
            code,
            message
          } = response;
          if (code == 0) {
            this.differenceList = result;
          } else {
            this.$message.error(message);
          }
        }).catch(err => {
          this.$message.error("查询失败！");
        })
      },
      SearchBillDiffPaidFinanceHF() {
        // 实付社保（批量表数据）
        api.SearchBillDiffPaidFinanceHF(this.parmars).then((response) => {
          const {
            result,
            code,
            message
          } = response;
          if (code == 0) {
            this.HFList = result.results;
          } else {
            this.$message.error(message);
          }
        }).catch(err => {
          this.$message.error("查询失败！");
        })
      },
      SearchBillDiffPaidFinanceSS() {
        // 实付社保（批量表数据）
        api.SearchBillDiffPaidFinanceSS(this.parmars).then((response) => {
          const {
            result,
            code,
            message
          } = response;
          if (code == 0) {
            this.paidSocialList = result.results;
          } else {
            this.$message.error(message);
          }
        }).catch(err => {
          this.$message.error("查询失败！");
        })
      },
      CurrentChange2(val) {
        // 实付所有（账单数据）页码change
        this.pageIndex2 = val;
        this.SearchBillDiffPaidSupport()
      },
      SizeChange2(val) {
        // 实付所有（账单数据）页数change
        this.pageIndex2 = 1;
        this.pageSize2 = val;
        this.currentPage2 = 1;
        this.SearchBillDiffPaidSupport()
      },
      SearchBillDiffPaidSupport() {
        // 实付所有（账单数据）
        api.SearchBillDiffPaidSupport(this.parmars).then((response) => {
          const {
            result,
            code,
            message
          } = response;
          if (code == 0) {
            this.paidOutList = result.results;
            this.total2 = result.total;
          } else {
            this.$message.error(message);
          }
        }).catch(err => {
          this.$message.error("查询失败！");
        })

      },
      SizeChange(val) {
        // 应收数据页数改变
        this.pageIndex = 1;
        this.pageSize = val;
        this.currentPage = 1;
        this.SearchBillDiffRece()
      },
      CurrentChange(val) {
        // 应收数据页码改变
        this.pageIndex = val;
        this.SearchBillDiffRece()
      },
      SearchBillDiffRece() {
        // 应收数据
        api.SearchBillDiffRece(this.parmars).then((response) => {
          const {
            result,
            code,
            message
          } = response;
          if (code == 0) {
            this.receivableList = result.results;
            this.total = result.total;
          } else {
            this.$message.error(message);
          }
        }).catch(err => {
          this.$message.error("查询失败！");
        })

      }
    },
  };

</script>
<style lang="less" scoped>
  .employee-management-query {
    .sidebar {
      padding: 14px 0 0 10px;
    }

    .pclp-table {
      margin-bottom: 20px;
    }

    .select-table {
      margin-bottom: 20px;

      /deep/.el-table__body tr {
        cursor: pointer;
      }

      /deep/.el-table__body tr.current-row>td {
        background-color: rgb(115, 204, 246);
        color: #fff;
      }

      .el-table__body tr.el-table__row--striped.current-row td {
        background-color: rgb(115, 204, 246);
        color: #fff;
      }
    }
  }

</style>
