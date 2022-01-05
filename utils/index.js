// json转url参数
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