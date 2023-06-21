// plugin.js
(function () {

  var _global;

  // 插件构造函数 - 返回数组结构
  function MyDialog(opt) {
    this._initial(opt);
  }
  MyDialog.prototype = {
    constructor: this,
    _initial: function (opt) {
      // 默认参数
      var def = {
        ok: true,
        ok_txt: '确定',
        cancel: false,
        cancel_txt: '取消',
        confirm: function () { },
        close: function () { },
        content: '',
        tmpId: null
      };
      // this.def = extend(def, opt, true);
      // this.tpl = this._parseTpl(this.def.tmpId);
      // this.dom = this._parseToDom(this.tpl)[0];
      // this.hasDom = false;
    },
    _parseTpl: function (tmpId) { // 将模板转为字符串
      var data = this.def;
      var tplStr = document.getElementById(tmpId).innerHTML.trim();
      return templateEngine(tplStr, data);
    },
    _parseToDom: function (str) { // 将字符串转为dom
      var div = document.createElement('div');
      if (typeof str == 'string') {
        div.innerHTML = str;
      }
      return div.childNodes;
    },
    show: function (callback) {
      var _this = this;
      if (this.hasDom) return;
      document.body.appendChild(this.dom);
      this.hasDom = true;
      document.getElementsByClass('close', this.dom)[0].onclick = function () {
        _this.hide();
      };
      document.getElementsByClass('btn-ok', this.dom)[0].onclick = function () {
        _this.hide();
      };
      if (this.def.cancel) {
        document.getElementsByClass('btn-cancel', this.dom)[0].onclick = function () {
          _this.hide();
        };
      }
      callback && callback();
      return this;
    },
    hide: function (callback) {
      document.body.removeChild(this.dom);
      this.hasDom = false;
      callback && callback();
      return this;
    },
    modifyTpl: function (template) {
      if (!!template) {
        if (typeof template == 'string') {
          this.tpl = template;
        } else if (typeof template == 'function') {
          this.tpl = template();
        } else {
          return this;
        }
      }
      // this.tpl = this._parseTpl(this.def.tmpId);
      this.dom = this._parseToDom(this.tpl)[0];
      return this;
    },
    css: function (styleObj) {
      for (var prop in styleObj) {
        var attr = prop.replace(/[A-Z]/g, function (word) {
          return '-' + word.toLowerCase();
        });
        this.dom.style[attr] = styleObj[prop];
      }
      return this;
    },
    width: function (val) {
      this.dom.style.width = val + 'px';
      return this;
    },
    height: function (val) {
      this.dom.style.height = val + 'px';
      return this;
    }
  }

  _global = (function () { return this || (0, eval)('this'); }());
  if (typeof module !== "undefined" && module.exports) {
    module.exports = MyDialog;
  } else if (typeof define === "function" && define.amd) {
    define(function () { return MyDialog; });
  } else {
    !('MyDialog' in _global) && (_global.MyDialog = MyDialog);
  }
})();


var app = new MyDialog();