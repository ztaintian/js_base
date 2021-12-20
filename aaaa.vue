<template>
  <div class="position-management">
    <img src="../../assets/postion.png" alt="">
    <span>尽情期待</span>
  </div>
</template>
<style lang="scss" scoped>
  .position-management {
    background: #fff;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    flex: 1;
    border-radius: 10px;
    @include box-center($justify: center, $align: center);

    span {
      width: 48px;
      height: 16px;
      font-size: 12px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: rgba(54, 54, 54, 0.4);
      opacity: 1;
      position: absolute;
      margin-top:150px;
    }
  }
</style>



// name 配置来源 是router路由name
// temp配置来源 是接口/roles/menu 接口返回的data属性 具体与后台沟通配置

export default [
  {
    name: "BusinessManagement", // 企业管理
    temp: "showOrgMenu",
  },
  // {
  //   name: "myResume", // 我的简历
  //   temp: "showResumeMenu",
  // },
  {
    name: "PositionManagement", // 职位管理
    temp: "showResumeMenu",
  },
  {
    name: "TalentPool", // 人才库
    temp: "showResumeMenu",
  },
  {
    name: "DataStatistics", // 数据统计
    temp: "showReportMenu",
  },
];


{
  path: '/positionManagement',
  name: 'PositionManagement',
  component: () => import('@/views/PositionManagement'),
  meta: {
    isHidden: false,
    isRegister: true,
  },
  title: '职位管理'
},
