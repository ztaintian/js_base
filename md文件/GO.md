# 安装Go并设置Go工作区

  1、下载安装go  打不开可以使用这个地址：https://golang.google.cn/dl/

  2、新建两个文件夹

    DepSource\src:放置go依赖包的源代码
    GoCoding\src:放置自己或者测试项目的代码目录
  
  3、将这两个文件夹的路径以及对应的bin按顺序配置到环境变量GOPATH中,新建系统变量GOPATH，然后值为：

    C:\GoWorks\DepSource;C:\GoWorks\GoCoding;
    C:\GoWorks\DepSource\bin;C:\GoWorks\GoCoding\bin; 
    盘符请自行修改

  4、GOPROXY配置
  
    go env -w GOPROXY=https://goproxy.io

  5、 文档：http://www.topgoer.com/