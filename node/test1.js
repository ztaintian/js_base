<template>
  <vhr-dialog
    v-model="dialogVisible"
    :close-on-click-modal="false"
    title="机构设立"
    destroy-on-close
  >
    <el-form
      ref="ruleFormRef"
      class="dialog-form"
      :disabled="dialogDisable"
      :model="dialogForm.obj"
      :rules="dialogForm.rules"
    >
      <div class="title-h2-withIcon">基本信息</div>
      <el-row :gutter="40">
        <el-col :span="12">
          <el-form-item label="名称" prop="ouName">
            <el-input
              v-model="dialogForm.obj.ouName"
              clearable
              placeholder="请输入名称"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="编号" prop="ouCode">
            <el-input
              v-model="dialogForm.obj.ouCode"
              clearable
              placeholder="请输入编号"
            ></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="40">
        <el-col :span="12">
          <el-form-item label="组织类型" prop="ouCategory">
            <el-select
              placeholder="请选择组织类型"
              v-model="dialogForm.obj.ouCategory"
            >
              <el-option
                v-for="(item, index) in cacheList"
                :label="item.label"
                :value="item.value"
                :key="index"
              ></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="负责人" prop="ouManager">
            <el-input
              v-model="dialogForm.obj.orgManagerTxt"
              readonly
              placeholder="请选择负责人"
            >
              <template #suffix>
                <el-icon
                  style="cursor: pointer"
                  @click="selectPerson2"
                  class="el-input__icon"
                >
                  <More />
                </el-icon>
              </template>
            </el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="40">
        <el-col :span="12">
          <el-form-item label="HRBP" prop="ouHrbp">
            <el-input
              v-model="dialogForm.obj.orgHrbpTxt"
              readonly
              placeholder="请选择HRBP"
            >
              <template #suffix>
                <el-icon
                  style="cursor: pointer"
                  @click="selectPerson"
                  class="el-input__icon"
                >
                  <More />
                </el-icon>
              </template>
            </el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="团队属性" prop="teamAttribute">
            <el-select
              placeholder="请选择团队属性"
              v-model="dialogForm.obj.teamAttribute"
            ></el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="40">
        <el-col :span="12">
          <el-form-item label="电话号码" prop="telNum">
            <el-input
              placeholder="请输入电话号码"
              v-model="dialogForm.obj.telNum"
              clearable
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="组织层级" prop="ouRank">
            <el-select
              placeholder="请选择组织层级"
              v-model="dialogForm.obj.ouRank"
            ></el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <div class="title-h2-withIcon">设立依据</div>
      <el-row :gutter="40">
        <el-col :span="12">
          <el-form-item label="批准文号" prop="approveDocNum">
            <el-input
              clearable
              v-model="dialogForm.obj.approveDocNum"
              placeholder="请输入批准文号"
              maxlength="50"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="设立生效日期" prop="enableDate">
            <el-date-picker
              clearable
              v-model="dialogForm.obj.enableDate"
              type="date"
              placeholder="请选择生效日期"
              value-format="YYYY-MM-DD"
            ></el-date-picker>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="40">
        <el-col :span="12">
          <el-form-item label="附件" prop="fileId">
            <vhr-upload
              v-model:file-list="fileList"
              class="upload-demo"
              action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
              multiple
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              :before-remove="beforeRemove"
              :limit="3"
              :on-exceed="handleExceed"
            >
              <vhr-button type="primary">附件上传</vhr-button>
              <!-- <template #tip>
                <div class="el-upload__tip">
                  jpg/png files with a size less than 500KB.
                </div>
              </template> -->
            </vhr-upload>
          </el-form-item>
        </el-col>
      </el-row>
      <div class="title-h2-withIcon">隶属上级</div>
      <el-row :gutter="40">
        <el-col :span="12">
          <el-form-item label="行政维度上级" prop="parentId">
            <el-input
              clearable
              v-model="dialogForm.obj.parentId"
              placeholder="请输入批准文号"
              maxlength="50"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-checkbox
            v-model="dialogForm.obj.isShow"
            :false-label="'00900'"
            :true-label="'00901'"
          >
            是否在组织架构图中显示
          </el-checkbox>
        </el-col>
      </el-row>
      <el-row :gutter="40">
        <el-col :span="12" v-for="item in otherDimensionData" :key="item.dimId">
          <el-form-item
            :label="item.dimName"
            :prop="'_' + item.dimId"
            :rules="{
              required: item.isRequired == 1 ? true : false,
              message: `${item.dimName}为必填项`,
              trigger: 'change'
            }"
            :key="item.dimId"
          >
            <el-input
              clearable
              v-model="item.dimDes"
              placeholder="请输入"
            ></el-input>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>

    <template #footer v-if="!dialogDisable">
      <span class="dialog-footer">
        <vhr-button @click="closeDialog">取消</vhr-button>
        <vhr-button type="primary" @click="tempSaveClick(ruleFormRef)">
          暂存
        </vhr-button>
        <vhr-button type="primary" @click="startProcess(ruleFormRef)">
          提交
        </vhr-button>
      </span>
    </template>
  </vhr-dialog>
  <vhr-dialog
    title="选择人员"
    width="80%"
    v-model="dialogVisibleAdd"
    :close-on-click-modal="false"
    append-to-body
  >
    <add-table></add-table>
  </vhr-dialog>
</template>

<script setup>
import { reactive, defineExpose, toRaw, ref } from 'vue'
import dialogHook from '../hooks/dialogHook'
import AddTable from './select-person'
import api from '@/serve'
const FlowOuIncrease = api.api.m01Request.flow.FlowOuIncrease
const URL_PROP = 'FlowOuIncrease'
const {
  formSubmitData,
  flowOuIncrease,
  dialogVisible,
  dialogDisable,
  showDialog,
  closeDialog,
  tempSaveApi
} = dialogHook()
const fileList = reactive([])
// 选择人员
const dialogVisibleAdd = ref(false)
const selectPerson2 = () => {
  dialogVisibleAdd.value = true
}

// 组织维度信息
const otherDimensionData = ref([])
const getCurUserOuDim = () => {
  FlowOuIncrease.getCurUserOuDim().then((res) => {
    otherDimensionData.value = res
  })
}

const cacheList = reactive([
  {
    value: 'p3581000001',
    label: '机构'
  },
  {
    value: 'p35810000011',
    label: '部门'
  }
])
// form
const formObj = {
  ouName: '',
  ouCode: '',
  ouCategory: '',
  ouManager: '',
  orgManagerTxt: '',
  ouHrbp: '',
  orgHrbpTxt: '',
  teamAttribute: '',
  telNum: '',
  ouRank: '',
  approveDocNum: '',
  enableDate: '',
  fileId: '',
  attachFileTxt: '',
  parentId: '',
  superIdTxt: '',
  isShow: '00900',
  dimMap: {}
}
const dialogForm = reactive({
  obj: formObj,
  rules: {
    ouName: [
      { required: true, message: '机构名称必填', trigger: 'blur' },
      { max: 25, message: '输入长度不能超过25个字符', trigger: 'blur' }
    ],
    ouCode: [
      { required: true, message: '编号必填', trigger: 'blur' },
      { max: 50, message: '输入长度不能超过50个字符', trigger: 'blur' }
    ],
    ouCategory: [
      { required: true, message: '组织类型必填', trigger: 'change' }
    ],
    enableDate: [
      { required: true, message: '设立生效日期必填', trigger: 'change' }
    ],
    parentId: [
      { required: true, message: '行政维度上级必填', trigger: 'change' }
    ],
    isShow: [
      {
        required: true,
        message: '是否在组织架构图中显示必填',
        trigger: 'change'
      }
    ]
  }
})
const resetForm = () => {
  dialogForm.obj = formObj
}
const ruleFormRef = ref(null)
// 暂存
const emit = defineEmits('getTableData')
const tempSaveClick = async (ruleForm) => {
  await ruleForm.validate(async (valid) => {
    if (valid) {
      const result = await tempSaveApi(toRaw(dialogForm.obj), URL_PROP)
      if (result) {
        emit('getTableData')
      }
    }
  })
}
// 处理dimMap数据
const formatDimMap = (dialogForm) => {
  for (let key in dialogForm) {
    if (key[0] == '_') {
      dialogForm.dimMap[key] = dialogForm[key]
      dialogForm.dimMap[key + 'Txt'] = dialogForm[key + 'Txt']
    }
  }
  return dialogForm
}
// 提交

const startProcess = async (ruleForm) => {
  await ruleForm.validate(async (valid, fields) => {
    if (valid) {
      let params = {
        flowDriven: false,
        processData: {
          processDefinitionKey: 'org-add'
        },
        formDtos: [formatDimMap(toRaw(dialogForm.obj))]
      }
      const result = await formSubmitData(params, URL_PROP)
      if (result) {
        emit('getTableData')
      }
    }
  })
}
const getRow = (row) => {
  if (row?.id) {
    FlowOuIncrease.formData(row.id).then((res) => {
      dialogForm.obj = res
    })
  } else {
    resetForm()
  }
}
defineExpose({
  getCurUserOuDim,
  getRow,
  showDialog
})
</script>

<style lang="less" scoped>
.dimension {
  display: flex;
  width: 100%;
  align-items: center;
  .el-icon {
    margin-left: @margin-xss;
    font-size: @font-size-md;
    color: @text-color-hint;
    cursor: pointer;
  }
}
</style>
