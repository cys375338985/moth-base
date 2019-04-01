const path = require("path");
module.exports={
    configureWebpack:{
        resolve:{
            alias:{
                page:path.join(__dirname,"src/page"),
                components:path.join(__dirname,"src/components"),
                router:path.join(__dirname,"src/router"),
                util:path.join(__dirname,"src/util"),
                theme:path.join(__dirname,"src/theme"),
                assets:path.join(__dirname,"src/assets"),
                plugins:path.join(__dirname,"src/plugins"),
                store:path.join(__dirname,"src/store"),
                'vue$': 'vue/dist/vue.esm.js'
            }
        }
    }
};
