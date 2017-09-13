define(['jquery'],function($){
	return {
		getUse:function(aa){
			var def =  $.Deferred();
			require(['data'],function(data){
				def.resolve(data);
			})
			return def
		}
	}
})