{
  "id": "79f7c490-26c6-a2d1-7b63-39fc9447e898", // 主键，Guid，必填
  "name": "刘梦觉", // 姓名，string，必填
  "phone": "13750901790", // 手机号，string
  "birthday": "1992-12-22T00:00:00+08:00", // 生日，Date
  "email": "395191270@qq.com", // 邮箱，string
  "gender": "女", // 性别，string
  "marital": null, // 婚姻状况，string
  "political": "团员", // 政治面貌，string
  "startWorkTime": "2020-05-19T08:51:22.396+08:00", // 开始工作日期，Date
  "eval": "xxxxxxxxxxxxxx", // 自我介绍，string
  "location": ["中国", "上海"], // 当前城市，string array

  "expectation": { // 求职意向，Object
    "industry": ["财务和审计"] // 期望行业，string array，多选最多3个
    "location": ["中国", "上海"], // 期望工作地，string array
    "position": ["财务"] // 期望职位，string array，多选最多3个
    "salaryText": "4001-6000", // 期望薪资，string
  },

  "language": [], // 语言，string array

  "activity": [ // 社会实践，Object
    {
      "name": "新冠疫苗宣传", // 实践名称，string，必填
      "description": "", // 描述，string
      "startDate": "2012-09-18T00:00:00+08:00", // 开始时间，Date
      "endDate": "2016-06-13T00:00:00+08:00", // 结束时间，Date
      "untilNow": false // 是否至今，bool
    }
  ],

  "award": [ // 获奖经历，Object
    {
      "name": "获奖信息", // 奖励名称，string，必填
      "agency": "", // 机构名称，string
      "date": "2012-09-18T00:00:00+08:00", // 获得日期，Date
      "description": "xxxx" // 描述，string
    }
  ],

  "certificate": ["PM"], // 证书，string array，字符串数组

  "skill": ["Vuejs"], // 技能，string array，字符串数组

  "education": [ // 教育经历，Object
    {
      "school": "阿伯丁大学", // 些小名称，string，必填
      "degree": "本科", // 学历，string
      "major": "工商管理类", // 专业，string
      "startDate": "2012-09-18T00:00:00+08:00", // 开始时间，Date
      "endDate": "2016-06-13T00:00:00+08:00", // 结束时间，Date
      "untilNow": false, // 是否至今，bool
      "unifiedEntrance": null // 是否统招，bool
    }
  ],

  "intern": [ // 实习经历，Object
    {
      "company": "欧美嘉集团有限公司", // 公司名称，string，必填
      "description": "xxxxxx", // 公司描述，string
      "industry": null, // 所属行业，string
      "position": "操作(实习)", // 职位名称，string
      "responsibility": "xxxx", // 职责，string
      "salaryText": "8001-10000", // 薪资，string
      "startDate": "2015-04-01T00:00:00+08:00", // 开始时间，Date
      "endDate": "2015-08-31T00:00:00+08:00", // 结束时间，Date
      "untilNow": false // 是否至今，bool
    }
  ],

  "project": [ // 项目经历，Object
    {
      "name": "某农业物资生产企业财务咨询项目", // 项目名称，string，必填
      "company": "北京中证天通会计师事务所", // 公司名称，string
      "description": "xxxx", // 项目描述，string
      "responsibility": "xxxx", // 项目职责，string
      "result": null, // 项目成果，string
      "startDate": "2017-08-01T00:00:00+08:00", // 开始时间，Date
      "endDate": "2017-10-01T00:00:00+08:00", // 结束时间，Date
      "untilNow": false // 是否至今，bool
    }
  ],

  "training": [ // 培训经历，Object
    {
      "name": null, // 培训名称，string，必填
      "agency": null, // 机构名称，string
      "certificate": "全国计算机等级二级", // 获取证书，string
      "description": "xxx", // 描述，string
      "startDate": null, // 开始时间，Date
      "endDate": null, // 结束时间，Date
    }
  ],

  "work": [ // 工作经历，Object
    {
      "company": "欧美嘉集团有限公司", // 公司名称，string，必填
      "description": "xxxxxx", // 公司描述，string
      "industry": null, // 所属行业，string
      "position": "操作(实习)", // 职位名称，string
      "responsibility": "xxxx", // 职责，string
      "salaryText": "8001-10000", // 薪资，string
      "startDate": "2015-04-01T00:00:00+08:00", // 开始时间，Date
      "endDate": "2015-08-31T00:00:00+08:00", // 结束时间，Date
      "untilNow": false // 是否至今，bool
    },
  ]
  "concurrencyStamp": "77223807-12aa-452f-9127-b197f0ee1962" // 必填
}