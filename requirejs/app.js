requirejs.config({
    baseUrl: 'js/',
    path:{
        backbone:'backbone'
    },
    shim: {
　　　　'backbone': {
　　　　　　deps: ['underscore', 'jquery'],
　　　　　　exports: 'Backbone'
　　　　}
　　}
});

requirejs(['Backbone'],function(bb) {
    console.log(bb)
  $('body').html('ee')
});