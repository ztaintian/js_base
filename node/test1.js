var Emit = {
  _list: {},
  _on:function (key,fn) {
    if (this._list[key]) {
      this._list[key].push(fn)
    } else {
      this._list[key] = [fn];
    }
  },
  _emit: function (key,...args) {
    if (this._list[key]) {
      for (var i=0;i<this._list[key].length;i++) {
        this._list[key][i].apply(this, args)
      }
    }
  }
}