<template>
  <div class="store-management">
    <div class="buttons">
      <div class="buttons-left">
        <el-button type="primary" size="mini" @click="addStore">新增门店</el-button>
        <el-dropdown @command="handleBatchOperation">
          <span class="el-dropdown-link">
            <el-button size="mini">批量操作</el-button>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="a">新增门店</el-dropdown-item>
            <el-dropdown-item command="b">编辑门店</el-dropdown-item>
            <el-dropdown-item command="c">禁用门店</el-dropdown-item>
            <el-dropdown-item command="d">启用门店</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
      <div class="buttons-right">
        <el-button size="mini" @click="screen">
          筛选
          <i :class="screenFlag?'el-icon-arrow-up':'el-icon-arrow-down'"></i>
        </el-button>
        <el-button size="mini" @click.prevent="downloadTemplate">
          {{$t('personTransactionList.export')}}
          <i class="el-icon-download"></i>
        </el-button>
      </div>
    </div>
    <div style="margin-top:20px;" v-if="screenFlag">
      <el-row>
        <el-form label-width="100px" size="mini" inline>
          <!-- 门店名称 -->
          <el-form-item label="门店名称：" style="margin-top:10px;">
            <el-input placeholder="请输入" v-model="searchObj.CounterName" style="width:220px" />
          </el-form-item>
          <!-- 门店编号 -->
          <el-form-item label="门店编号：" style="margin-top:10px;">
            <el-input placeholder="请输入" v-model="searchObj.CounterNo" style="width:220px" />
          </el-form-item>
          <!-- 门店类型 -->
          <el-form-item label="门店类型：" style="margin-top:10px;">
            <el-select
              v-model="searchObj.StoreType"
              placeholder="请选择"
              clearable
              filterable
              size="mini"
              style="width:220px"
            >
              <el-option
                v-for="(item,index) in storyTypeList"
                :key="index"
                :value="item"
                :label="item"
              ></el-option>
            </el-select>
          </el-form-item>
          <!-- 所属城市 -->
          <el-form-item label="所属城市：" style="margin-top:10px;">
            <el-cascader
              size="mini"
              style="width:220px;"
              placeholder="请选择"
              clearable
              v-model="searchObj.CityNameTemp"
              :props="props"
              :options="provinceList"
              @active-item-change="handleItemChange"
              :show-all-levels="false"
            ></el-cascader>
          </el-form-item>
          <!-- 所属组织 -->
          <el-form-item label="所属组织：" style="margin-top:10px;">
            <el-select
              v-model="searchObj.OrganizationIdTemp"
              placeholder="请选择"
              clearable
              remote
              :remote-method="remoteMethod"
              filterable
              size="mini"
              style="width:220px;"
            >
              <el-option
                v-for="(item, index) in organizationObj"
                :key="index"
                :value="item.organizationId"
                :label="item.organizationName"
              ></el-option>
            </el-select>
          </el-form-item>
          <!-- 门店状态 -->
          <el-form-item label="门店状态：" style="margin-top:10px;">
            <el-select v-model="searchObj.StoreStatus" clearable filterable style="width:220px">
              <el-option value="1" label="开"></el-option>
              <el-option value="2" label="关"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
        <el-row justify="end" type="flex">
          <el-button
            icon="el-icon-search"
            size="mini"
            type="primary"
            plain
            @click="searchBtn"
          >{{ $t('buttons.search') }}</el-button>
        </el-row>
      </el-row>
    </div>
    <!-- table -->
    <div class="terminationTable">
      <el-table
        :stripe="true"
        :data="tableData"
        style="width: 100%"
        empty-text="No Data"
        :header-cell-style="{background:'#eef1f6',color:'#000000'}"
      >
        <!-- 门店名称 -->
        <el-table-column label="门店名称" align="center">
          <template slot-scope="scope">
            <span>{{ scope.row.counterName }}</span>
          </template>
        </el-table-column>
        <!-- 门店编号 -->
        <el-table-column label="门店编号" align="center">
          <template slot-scope="scope">
            <span>{{ scope.row.counterNo }}</span>
          </template>
        </el-table-column>
        <!-- 门店类型 -->
        <el-table-column label="门店类型" align="center">
          <template slot-scope="scope">
            <span>{{ scope.row.storeType }}</span>
          </template>
        </el-table-column>
        <!-- 门店地址 -->
        <el-table-column label="门店地址" align="center">
          <template slot-scope="scope">
            <span>{{ scope.row.counterAddress }}</span>
          </template>
        </el-table-column>
        <!-- 所属城市 -->
        <el-table-column label="所属城市" align="center">
          <template slot-scope="scope">
            <span>{{ scope.row.cityName }}</span>
          </template>
        </el-table-column>
        <!-- 所属公司 -->
        <el-table-column label="所属公司" align="center">
          <template slot-scope="scope">
            <span>{{ scope.row.companysiteName }}</span>
          </template>
        </el-table-column>
        <!-- 所属组织 -->
        <el-table-column label="所属组织" align="center">
          <template slot-scope="scope">
            <span>{{ scope.row.organizationName }}</span>
          </template>
        </el-table-column>
        <!-- 门店负责人 -->
        <el-table-column label="门店负责人" align="center">
          <template slot-scope="scope">
            <span>{{ scope.row.peopleMgrEidName }}</span>
          </template>
        </el-table-column>
        <!-- 门店状态 -->
        <el-table-column label="门店状态" align="center">
          <template slot-scope="scope">
            <span>{{ scope.row.storeStatusName }}</span>
          </template>
        </el-table-column>

        <!-- 操作 -->
        <el-table-column :label="$t('personTransactionList.operation')" align="center" width="200">
          <template slot-scope="scope">
            <el-button
              class="boxShadow"
              plain
              size="mini"
              style="color:#303133"
              @click="editStore(scope.row)"
            >编辑门店</el-button>

            <el-button
              plain
              size="mini"
              :style="scope.row.isUsed?'color:#000;':'color:#0D89C1;'"
              @click="bindOpen(scope.row)"
            >{{scope.row.isUsed?'禁用':'启用'}}</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        style="margin-top:20px;"
        :current-page.sync="currentPage"
        @current-change="handleCurrentChange"
        :page-size="searchObj.pageSize"
        v-if="total>searchObj.pageSize"
        layout=" prev, pager, next"
        :total="total"
      ></el-pagination>
    </div>

    <!--dialog门店-->
    <div v-if="dialogFlag">
      <el-dialog :close-on-click-modal="false" :visible.sync="dialogFlag" width="70%">
        <template slot="title">
          <span style="font-size:16px;font-weight:bold;">{{dialogTitle}}</span>
          <el-select
            v-if="switchShow"
            style="width:100px;margin-left:10px;"
            size="mini"
            v-model="editObj.storeStatus"
            placeholder="请选择"
          >
            <el-option label="已启用" value="1"></el-option>
            <el-option label="已禁用" value="2"></el-option>
          </el-select>
          <p style="float:right;margin-right:50px;" v-if="!bitchFlag">
            批量编辑门店
            <el-switch
              style="margin-left:10px;"
              active-color="rgb(24, 144, 255)"
              inactive-color="#D7D7D7"
              class="demo"
              v-model="switchFlag"
              active-text="开"
              inactive-text="关"
            ></el-switch>
          </p>
        </template>
        <div v-if="!switchFlag">
          <div class="formStyle" style="overflow:hidden; width: 100%;">
            <el-form
              ref="editForm"
              :model="editObj"
              :rules="rules"
              class="commons-list-PersonalInformation"
            >
              <el-row
                :span="24"
                style="display:flex;justify-content: space-between;margin-top: 10px;"
              >
                <el-col :span="7">
                  <!-- 门店名称 -->
                  <el-form-item label="门店名称" prop="counterName">
                    <el-input
                      :disabled="!newAdd"
                      v-model="editObj.counterName"
                      placeholder="请填写"
                      size="small"
                    ></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="7">
                  <!-- 门店编号 -->
                  <el-form-item label="门店编号" prop="counterNo">
                    <el-input
                      :disabled="!newAdd"
                      placeholder="请填写"
                      v-model="editObj.counterNo"
                      size="small"
                    ></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="7">
                  <!-- 门店规模 -->
                  <el-form-item label="门店规模" prop="counterLevel">
                    <el-select
                      v-model="editObj.counterLevel"
                      placeholder="请选择"
                      size="small"
                      style="width:100%"
                    >
                      <el-option
                        v-for="(item,index) in storyLevelList"
                        :key="index"
                        :value="item"
                        :label="item"
                      ></el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row
                :span="24"
                style="display:flex;justify-content: space-between;margin-top: 10px;"
              >
                <el-col :span="7">
                  <!-- hr负责人 -->
                  <el-form-item label="hr负责人" prop="hrbpeid">
                    <el-select
                      v-model="editObj.hrbpeid"
                      clearable
                      placeholder="请选择"
                      filterable
                      remote
                      size="small"
                      :remote-method="hrbpeidMethod"
                      style="width:100%"
                    >
                      <el-option
                        v-for="(item,index) in empList1"
                        :key="index"
                        :value="item.eid"
                        :label="item.name+'-'+item.afempNo"
                      ></el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
                <el-col :span="7">
                  <!-- 门店负责人 -->
                  <el-form-item label="门店负责人" prop="siceid">
                    <el-select
                      v-model="editObj.siceid"
                      placeholder="请选择"
                      remote
                      :remote-method="siceidMethod"
                      clearable
                      filterable
                      size="small"
                      style="width:100%"
                    >
                      <el-option
                        v-for="(item,index) in empList2"
                        :key="index"
                        :value="item.eid"
                        :label="item.name+'-'+item.afempNo"
                      ></el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
                <el-col :span="7">
                  <!-- 门店考勤负责人 -->
                  <el-form-item label="门店考勤负责人" prop="peopleMgrEid">
                    <el-select
                      v-model="editObj.peopleMgrEid"
                      placeholder="请选择"
                      remote
                      :remote-method="peopleMgrEidMethod"
                      clearable
                      filterable
                      size="small"
                      style="width:100%"
                    >
                      <el-option
                        v-for="(item,index) in empList3"
                        :key="index"
                        :value="item.eid"
                        :label="item.name+'-'+item.afempNo"
                      ></el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row
                :span="24"
                style="display:flex;justify-content: space-between;margin-top: 10px;"
              >
                <el-col :span="7">
                  <!-- 所属公司 -->
                  <el-form-item label="所属公司">
                    <el-input disabled v-model="CompanyName"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="7">
                  <!-- 所属组织 -->
                  <el-form-item label="所属组织" prop="organizationId">
                    <el-select
                      v-model="editObj.organizationId"
                      placeholder="请选择"
                      clearable
                      remote
                      :remote-method="remoteMethod"
                      filterable
                      size="small"
                      style="width:100%"
                    >
                      <el-option
                        v-for="(item, index) in organizationObj"
                        :key="index"
                        :value="item.organizationId"
                        :label="item.organizationName"
                      ></el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
                <el-col :span="7">
                  <!-- 组织负责人 -->
                  <el-form-item label="组织负责人" prop="dmeid">
                    <el-select
                      v-model="editObj.dmeid"
                      placeholder="请选择"
                      remote
                      :remote-method="dmeidMethod"
                      clearable
                      filterable
                      size="small"
                      style="width:100%"
                    >
                      <el-option
                        v-for="(item,index) in empList4"
                        :key="index"
                        :value="item.eid"
                        :label="item.name+'-'+item.afempNo"
                      ></el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row
                :span="24"
                style="display:flex;justify-content: space-between;margin-top: 10px;"
              >
                <el-col :span="7">
                  <!-- 门店类型 -->
                  <el-form-item label="门店类型" prop="storeType">
                    <el-select
                      v-model="editObj.storeType"
                      placeholder="请选择"
                      clearable
                      filterable
                      size="small"
                      style="width:100%"
                    >
                      <el-option
                        v-for="(item,index) in storyTypeList"
                        :key="index"
                        :value="item"
                        :label="item"
                      ></el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
                <el-col :span="7">
                  <!-- 门店地址 -->
                  <el-form-item label="门店地址" prop="counterAddress">
                    <el-input v-model="editObj.counterAddress" placeholder="请填写" size="small"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="7">
                  <!-- 所属城市 -->
                  <el-form-item label="所属城市" prop="cityName">
                    <el-cascader
                      size="small"
                      style="width:100%;"
                      placeholder="请选择"
                      v-model="editObj.cityName"
                      :props="props"
                      :options="provinceList"
                      @active-item-change="handleItemChange"
                      :show-all-levels="false"
                    ></el-cascader>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row style="padding:0 20px;margin-top:20px;">
                <div style="display:flex;justify-content:space-between;">
                  <p>
                    <span style="font-weight:bold;margin: 0 10px;">
                      门店经纬度
                      <i class="el-icon-question"></i>
                    </span>
                    <span style="coloe:#EEEEEE;">(wifi打卡的基准点)</span>
                  </p>
                  <span style="color:#1793C6;">拖动图标修改门店经纬度</span>
                </div>
                <el-input style="margin:0px 0 10px;" disabled v-model="address"></el-input>
                <!-- <div v-if="errFlag">地图加载中</div> -->
                <div id="container" style="width:100%;height:150px;">
                  <p v-if="errFlag" style="text-align:center;margin-top:50px;">地图加载中...</p>
                </div>
              </el-row>
            </el-form>
          </div>

          <div class="buttons" style="justify-content: center;">
            <!-- 取 消 -->
            <el-button @click="dialogFlag=false" size="small">{{$t('terminationDetail.cancel')}}</el-button>
            <el-button type="primary" size="small" @click="Update">{{buttonText}}</el-button>
          </div>
        </div>
        <!-- 批量上传 -->
        <div v-if="switchFlag" class="diaStyle">
          <el-steps :active="active" align-center>
            <el-step title="上传文件"></el-step>
            <el-step title="效验中"></el-step>
            <el-step title="上传完成"></el-step>
          </el-steps>
          <!-- 第一步 -->
          <div v-if="active==1">
            <img-upload :url="url" @getId="getId"></img-upload>
            <div class="downloadTemp" style="width:90%;margin:10px auto 0;">
              <div class="downBtn" style="float:left;">
                <span>建议按照标准模板格式上传文件</span>
                <el-button
                  type="primary"
                  plain
                  size="mini"
                  style="margin-left:15px"
                  @click="GetImportTemplate"
                >下载模板</el-button>
              </div>
              <div style="float:right;" class="uploadRecord">
                <el-button type="text">上传记录</el-button>
              </div>
            </div>
          </div>
          <!-- 第二步 -->
          <div v-if="active==2" style="margin-top:20px;">
            <p v-if="ImportCheckObj.errorCount>0">
              <span style="font-size:14px;">{{ImportCheckObj.errorCount}}条异常数据</span>
              <el-button
                style="margin-left:10px;"
                size="mini"
                @click="downloadError"
                type="primary"
                plain
              >下载异常信息</el-button>
            </p>
            <el-table :data="ImportCheckObj.errorCountList" border style="width: 100%">
              <el-table-column prop="itemName" label="异常类型"></el-table-column>
              <el-table-column prop="count" label="异常类型"></el-table-column>
            </el-table>
            <div class="buttons" style="justify-content: center;">
              <!-- 取 消 发起审批 -->
              <el-button size="small" @click="Continue">继续</el-button>
              <el-button size="small" type="primary" @click="active=1">重新上传</el-button>
            </div>
          </div>
          <!-- 第三步 -->
          <div v-if="active==3" style="margin:100px 0 20px;text-align:center;">
            <p
              style="font-size: 16px;color: #000;font-weight: 500;"
            >成功{{newAdd?'新增':'更新'}}{{importCount}}条门店信息</p>
            <el-button size="small" @click="checkStroe" type="primary">立即查看门店列表</el-button>
          </div>
        </div>
      </el-dialog>
    </div>
  </div>
</template>
<script>
import ContentHead from "../../components/ContentHead";
import ImgUpload from "./fileUpload";
import { Loading } from "element-ui";
import { TMap } from "../../util/tMaps";
export default {
  components: {
    ContentHead,
    ImgUpload
  },
  data() {
    return {
      switchShow: false,
      bitchFlag: false,
      buttonText: "",
      newAdd: false,
      dialogTitle: "",
      dialogFlag: false,
      currentPage: 1,
      storyLevelList: [],
      provinceList: [], //省市县列表
      props: { value: "value", children: "cities" },
      searchObj: {
        pageSize: 10,
        pageIndex: 1,
        CounterName: "", //门店名 模糊搜索
        CounterNo: "", //门店名 精确匹配
        OrganizationId: "", //组织
        StoreStatus: "", //1开 2关
        CityName: "", //城市
        CityNameTemp: "",
        StoreType: "" //门店类型
      },
      newAddFlag: false,
      errFlag: true,
      editFlag: false,
      modifyFlag: false,
      active: 1,
      value: "",
      url: "",
      rules: {
        counterNo: [
          {
            required: true,
            message: "请输入",
            trigger: "blur"
          }
        ],
        counterName: [
          {
            required: true,
            message: "请输入",
            trigger: "blur"
          }
        ],
        counterLevel: [
          {
            required: true,
            message: "请选择",
            trigger: "change"
          }
        ],
        hrbpeid: [
          {
            required: true,
            message: "请选择",
            trigger: "change"
          }
        ],
        siceid: [
          {
            required: true,
            message: "请选择",
            trigger: "change"
          }
        ],
        peopleMgrEid: [
          {
            required: true,
            message: "请选择",
            trigger: "change"
          }
        ],
        storeType: [
          {
            required: true,
            message: "请选择",
            trigger: "change"
          }
        ],
        counterAddress: [
          {
            required: true,
            message: "请输入",
            trigger: "blur"
          }
        ],
        cityName: [
          {
            required: true,
            message: "请选择",
            trigger: "change"
          }
        ],
        dmeid: [
          {
            required: true,
            message: "请选择",
            trigger: "change"
          }
        ],
        organizationId: [
          {
            required: true,
            message: "请选择",
            trigger: "change"
          }
        ]
      },
      editObj: {
        counterNo: "",
        counterName: "",
        counterLevel: "",
        cityName: "",
        counterAddress: "",
        longitude: "", // 经度
        latitude: "", // 纬度
        hrbpeid: "", // HR负责人
        storeLevel: "",
        storeType: "",
        storeStatus: "", //=1开店=2关店
        siceid: "", // 门店负责人
        organizationId: "", //所属组织
        dmeid: "", // 组织负责人
        peopleMgrEid: "" // 门店考勤负责人
      },
      switchFlag: false,
      addFlag: false,
      tableData: [],
      pageIndex: 1,
      pageSize: 10,
      total: 0,
      longitude: 0, //经度
      latitude: 0, //纬度
      address: "",
      screenFlag: false,
      OrgName: "",
      EmpName: "",
      storyTypeList: [],
      CompanyName: "",
      empList1: [],
      empList2: [],
      empList3: [],
      empList4: [],
      organizationObj: [],
      addGuid: "",
      addUrl: "",
      qq: "",
      loadingInstance: {},
      ImportCheckObj: {
        loopCount: 0,
        errorCount: 0,
        passCount: 0,
        errorReportAttID: "",
        errorCountList: [],
        requestParEntityList: []
      },
      importCount: 0
    };
  },
  mounted() {
    TMap().then(qq => {
      this.qq = qq;
    });
    this.getPosition();
    this.GetOrgList();
    this.FmcgCounterCommonList();
    this.CompanyName = JSON.parse(
      window.localStorage.getItem("userinfo")
    ).companySiteName;
  },
  methods: {
    handleItemChange(val) {
      // 城市选择
      this.getPosition(val);
    },
    getPosition(val, cb) {
      let vm = this; //查询省市县
      let params = { cya: "" };
      if (!val) {
        //初始化加载 获取所有省份数据
        params = {};
      } else if (val) {
        //加载二级  获取市级数据
        params = { ProvinceCode: val[0] };
      }
      // else {  //加载3级   获取县级数据
      //   params = {province_id: val[0], city_id: val[1]}
      // }
      this.Ajax.post("/hr/FmcgCounterCommon/GetCityList", params)
        .then(res => {
          if (!val) {
            //初始化加载   查询省份数据
            vm.provinceList = res.result.provinceList.map(e => {
              return {
                value: e.code,
                label: e.fullName,
                cities: []
              };
            });
          } else if (val) {
            //加载二级    查询该省下市级数据
            vm.provinceList.map(item => {
              if (item.value === val[0]) {
                item.cities = res.result.cityList.map(e => {
                  return { value: e.cityFullName, label: e.cityFullName };
                });
              }
            });
          }
          // else {  //加载3级   查询该省市下县级数据
          //   vm.provinceList.map((item) => {
          //     if(item.value === val[0]) {
          //       item.cities.map((value) => {
          //         if(value.value === val[1]){
          //           value.cities = res.data.map((e) => {
          //             return {value: e.county_id, label: e.county_name}
          //           })
          //         }
          //       })
          //     }
          //   })
          // }
          cb && cb(res);
        })
        .catch(err => {
          console.log(err);
        });
    },
    //第一部分
    //定位获得当前位置信息
    getMyLocation() {
      var geolocation = new this.qq.maps.Geolocation(
        "AH6BZ-SSI63-4MY36-33K55-G4SWF-7EFLB",
        "web端-定位"
      );
      geolocation.getIpLocation(this.showPosition, this.showErr);
      this.errFlag = true;
      // geolocation.getLocation(this.showPosition, this.showErr); //或者用getLocation精确度比较高
    },
    showPosition(position) {
      this.errFlag = false;
      if (!this.newAdd && this.editObj.latitude) {
        this.latitude = this.editObj.latitude;
        this.longitude = this.editObj.longitude;
      } else {
        this.latitude = position.lat;
        this.longitude = position.lng;
      }
      this.city = position.city;
      this.setMap();
    },
    codeLatLng(lat, lng, map) {
      //获取经纬度数值   按照,分割字符串 取出前两位 解析成浮点数
      var that = this;
      var lat = parseFloat(lat);
      var lng = parseFloat(lng);
      this.editObj.latitude = lat;
      this.editObj.longitude = lng;
      var latLng = new this.qq.maps.LatLng(lat, lng);
      //调用信息窗口
      var info = new this.qq.maps.InfoWindow({ map: map });
      //调用获取位置方法
      var geocoder = new this.qq.maps.Geocoder({
        complete: function(result) {
          that.address = result.detail.address;
          map.setCenter(result.detail.location);
        }
      });
      geocoder.getAddress(latLng);
    },
    showErr() {
      console.log("定位失败");
      this.getMyLocation(); //定位失败再请求定位，测试使用
    },
    //第二部分
    //位置信息在地图上展示
    setMap() {
      //步骤：定义map变量 调用 this.qq.maps.Map() 构造函数   获取地图显示容器
      //设置地图中心点
      var myLatlng = new this.qq.maps.LatLng(this.latitude, this.longitude);
      //定义工厂模式函数
      var myOptions = {
        zoom: 13, //设置地图缩放级别
        center: myLatlng, //设置中心点样式
        mapTypeId: this.qq.maps.MapTypeId.ROADMAP //设置地图样式详情参见MapType
      };
      // //获取dom元素添加地图信息
      var map = new this.qq.maps.Map(
        document.getElementById("container"),
        myOptions
      );
      //第三部分
      //给定位的位置添加图片标注
      var marker = new this.qq.maps.Marker({
        position: myLatlng,
        draggable: true,
        map: map
      });
      //给定位的位置添加文本标注
      var Label = new this.qq.maps.Label({
        position: myLatlng,
        map: map
      });
      this.codeLatLng(this.latitude, this.longitude, map);
      var that = this;
      this.qq.maps.event.addListener(marker, "dragend", function() {
        var weizhi = marker.getPosition();
        map.setCenter(weizhi);
        that.codeLatLng(weizhi.lat, weizhi.lng, map);
      });
    },
  }
};
</script>

<style lang="stylus">
</style>
