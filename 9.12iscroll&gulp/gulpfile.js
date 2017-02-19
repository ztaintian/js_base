//如果引入的文件是在本地环境中~ 可以没有前缀后缀(npm install 下载的文件)
//如果引入的文件 不在本地环境中 可以通过相对路径寻找到对应的模块>可以添加.js或不写
var gulp = require('gulp');//引入gulp

//定义gulp自定义命令 > 使用 task
gulp.task("default",function(){
	console.info('123');

	//gulp.src 获取一个可操作的文件
	//pipe 管道流操作
	//gulp.dest 输出
	gulp.src('./bower_components/jquery/dist/*.js')
	.pipe(gulp.dest('jsFile'));
	

})