# iview-theme-dome

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

框架涉及的技术
    vue,
    vuex,
    vuerouter,
    iview,
    less,
    axios
框架目录结构
```
    src
        assets 资源文件
        components 公用组件
        page 页面组件
        plugins 插件配置目录
        router 路由配置文件
        store vuex管理文件
        theme   风格文件
        util 工具类
            const.js 常量文件
            mm.js   常用工具
            net.js    网络层封装
         main.js    vue主文件
```
使用方式
    1，风格设置
        ui框架采用了iview框架，，如果需要改变风格主题可参考iview的主题定制采用less变量覆盖:
            https://www.iviewui.com/docs/guide/theme#BLFG%EF%BC%88TJ%EF%BC%89
    2，菜单配置
              框架预制了一个基础布局，baselayout，在他的左侧菜是可以配置的在util/const.js的menu中
              ```
                [
                  {name:"页面说明",submenu:[
                          {path:"/",name:"app",component:App},
                          {path:"/page2",name:"page2",component:PageTow}
                      ]}
              ]
              参数设置，name: 菜单的名字(必填)
                            path: 页面的路由(选填)
                            component:引入的组件
                            submenu:子菜单
            ```
      3，网络
            框架采用了axios("https://www.npmjs.com/package/axios")网络请求库，并对其进行了二次分装
            在util/net.js中，这样封装的目的为了简化网络请求.以及对一些业务逻辑进行简单的处理。调用实例：
            ```
                    import Net from "util/net.js"
                    Net.request({
                           url:"/getueserinfo"
                           method: 'get',
                           responseType: 'json',
                           data:{
                                userid:"4"
                           }
                    }).then((res)={
                            //res 网络返会内容

                    },(error)=>{
                        //error 错误信息
                    });
                    option = {
                           url:"",  请求的地址
                           method:"" 请求的方法，默认值为get
                           responseTyp 响应的数据类型，默认值为json
                           data; 请求的数据
                       }
            ```
     4，错误页面，用户提示
                   在网络请求的过程中，比如权限不够等请求是需要一个跳转到错误页面的，没有相关资源。在框架中page/error.vue页面
                    在框架错误页面的路由是 {path:'/error/:type',component: ErrorPage},使用方式可以参考我预先设置好的代码。
                    用户提示，iview框架提供了一个message的组件，你也可以调用我在util/mm.js中两个方法
                    ```
                    successTips(successMsg);
                        // 错误提示
                     errorTips(errMsg);
                     ```
                     区别于错误页面的方式是错误页面用于拦截一页面的内容，提示则可以在页面中弹出。保持原来的ui
    5，导入优化
        在导入文件中有一些目录层级很深需要打大量的"..."去寻找他所对应的位置，
        我在对这些目录做了一些映射比如要在page目录下文件导入components中的文件可已使用
        ```
            import HeaderBar from "components/HeaderBar.vue"

        ```
        你可以在vue.config.js中找到



