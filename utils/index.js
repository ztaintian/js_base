// json转url参数
let obj = {
  'a':1,
  'b':2,
  'c':3,
}
function jsonToGet(obj) {
  let jsonStr = JSON.stringify(obj);
  let strLength = jsonStr.length;
  let subStr = jsonStr.substring(1,strLength-1);
  let finalStr = subStr.replace(/"/g,"").replace(/:/g,"=").replace(/,/g,"&");
  return finalStr
}
console.log(jsonToGet(obj))

function parseParam(param, key) {
  var paramStr = "";
  if (
    typeof param === "string" ||
    typeof param === "number" ||
    typeof param === "boolean"
  ) {
    return "&" + key + "=" + encodeURIComponent(param);
  } else {
    var data = null;
    if (key) {
      data = param ? param[key] : "";
    } else {
      data = param;
    }
    for (var keyTemp in data) {
      var dataTemp = data[keyTemp];
      paramStr += parseParam(dataTemp, keyTemp);
    }
  }
  return paramStr.substr(1);
}

var arr = {
  cc: "ggg",
  bb: "gggdd",
};
console.log(parseParam(arr));

// 下载文件
export function downLoadBlob(blob, fileName) {
  const blobURL = window.URL.createObjectURL(blob);
  // 创建a标签，用于跳转至下载链接
  const tempLink = document.createElement("a");
  tempLink.style.display = "none";
  tempLink.href = blobURL;
  tempLink.setAttribute("download", decodeURI(fileName));
  // 兼容：某些浏览器不支持HTML5的download属性
  if (typeof tempLink.download === "undefined") {
    tempLink.setAttribute("target", "_blank");
  }
  // 挂载a标签
  document.body.appendChild(tempLink);
  tempLink.click();
  document.body.removeChild(tempLink);
  // 释放blob URL地址
  window.URL.revokeObjectURL(blobURL);
}

// 判断数据类型
export function getType(obj) {
  const type = typeof obj;
  if (type !== "object") {
    return type;
  }
  return Object.prototype.toString
    .call(obj)
    .replace(/^\[object (\S+)\]$/, "$1");
}

// 解析url
function getParams(url, params) {
  var res = new RegExp("(?:&|/?)" + params + "=([^&$]+)").exec(url);
  return res ? res[1] : "";
}
// const id = getParams(window.location.search, 'id')

const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());
// params.id
// 判断文字是否超过标签宽度
export default {
  install(app) {
    app.directive("test2", {
      mounted(el) {
        const textContent = el;
        const targetW = textContent.getBoundingClientRect().width;
        const range = document.createRange();
        range.setStart(textContent, 0);
        range.setEnd(textContent, textContent.childNodes.length);
        const rangeWidth = range.getBoundingClientRect().width;
        console.log(
          "rangeWidth > targetW",
          rangeWidth > targetW,
          rangeWidth,
          targetW
        );
        return rangeWidth > targetW;
      },
    });
  },
};
// 替换本地url
var replaceUrl = function() {
  var tempUrl = window.location.href;
  var replaceUrl = tempUrl.replace(/&comeFrom=zgwl/ig,'');
  window.history.replaceState("", "",replaceUrl);
}
import dayjs from 'dayjs'
let dateTimes = [
  {
    id: 1,
    name: '本周',
    start_time: dayjs().startOf('week').add(1, 'day').format('YYYY-MM-DD'),
    end_time: dayjs().endOf('week').add(1, 'day').format('YYYY-MM-DD'),
  },
  {
    id: 2,
    name: '上周',
    start_time: dayjs()
      .add(-1, 'week')
      .startOf('week')
      .add(1, 'day')
      .format('YYYY-MM-DD'),
    end_time: dayjs()
      .add(-1, 'week')
      .endOf('week')
      .add(1, 'day')
      .format('YYYY-MM-DD'),
  },
  {
    id: 3,
    name: '本月',
    start_time: dayjs().startOf('month').format('YYYY-MM-DD'),
    end_time: dayjs().endOf('month').format('YYYY-MM-DD'),
  },
  {
    id: 4,
    name: '上月',
    start_time: dayjs().add(-1, 'month').startOf('month').format('YYYY-MM-DD'),
    end_time: dayjs().add(-1, 'month').endOf('month').format('YYYY-MM-DD'),
  },
]
let curMonth = dayjs().month() + 1
if (curMonth < 3) {
  dateTimes.push(
    {
      id: 5,
      name: '本季',
      start_time: dayjs().month(0).format('YYYY-MM-DD'),
      end_time: dayjs().month(2).endOf('month').format('YYYY-MM-DD'),
    },
    {
      id: 6,
      name: '上季',
      start_time: dayjs().add(-1, 'year').month(9).format('YYYY-MM-DD'),
      end_time: dayjs()
        .add(-1, 'year')
        .month(11)
        .endOf('month')
        .format('YYYY-MM-DD'),
    },
  )
} else if (curMonth < 6) {
  dateTimes.push(
    {
      id: 5,
      name: '本季',
      start_time: dayjs().month(3).format('YYYY-MM-DD'),
      end_time: dayjs().month(5).endOf('month').format('YYYY-MM-DD'),
    },
    {
      id: 6,
      name: '上季',
      start_time: dayjs().month(0).format('YYYY-MM-DD'),
      end_time: dayjs().month(2).endOf('month').format('YYYY-MM-DD'),
    },
  )
} else if (curMonth < 9) {
  dateTimes.push(
    {
      id: 5,
      name: '本季',
      start_time: dayjs().month(6).format('YYYY-MM-DD'),
      end_time: dayjs().month(8).endOf('month').format('YYYY-MM-DD'),
    },
    {
      id: 6,
      name: '上季',
      start_time: dayjs().month(3).format('YYYY-MM-DD'),
      end_time: dayjs().month(5).endOf('month').format('YYYY-MM-DD'),
    },
  )
} else if (curMonth < 12) {
  dateTimes.push(
    {
      id: 5,
      name: '本季',
      start_time: dayjs().month(9).startOf('month').format('YYYY-MM-DD'),
      end_time: dayjs().month(11).endOf('month').format('YYYY-MM-DD'),
    },
    {
      id: 6,
      name: '上季',
      start_time: dayjs().month(6).startOf('month').format('YYYY-MM-DD'),
      end_time: dayjs().month(8).endOf('month').format('YYYY-MM-DD'),
    },
  )
}
dateTimes.push(
  {
    id: 7,
    name: '本年',
    start_time: dayjs().month(0).startOf('month').format('YYYY-MM-DD'),
    end_time: dayjs().month(11).endOf('month').format('YYYY-MM-DD'),
  },
  {
    id: 8,
    name: '去年',
    start_time: dayjs()
      .add(-1, 'year')
      .month(0)
      .startOf('month')
      .format('YYYY-MM-DD'),
    end_time: dayjs()
      .add(-1, 'year')
      .month(11)
      .endOf('month')
      .format('YYYY-MM-DD'),
  },
)

