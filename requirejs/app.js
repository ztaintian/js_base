requirejs.config({
  baseUrl: 'js/',
  path: {
    backbone: 'backbone'
  },
  shim: {
    'backbone': {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    }
  }
});

require(['Backbone', 'api'], function (backbone, api) {
  // $.fn = jQuery.prototype
  // $.fn.extend({
  // 	pageSwich: function(){
  // 		this.css({
  // 			'color':'red'
  // 		})
  // 	}
  // })
  // $.fn.PageSwich = function(){
  // this.css({
  // 			'color':'red'
  //  		}) 	
  // }
  api.getUse().then(function (data) {
    console.log(data)
  })


});

