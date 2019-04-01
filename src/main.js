import Vue from 'vue'
import router from  'router'
import store from 'store'
import 'plugins/iview.js'
import './theme/index.less';
Vue.config.productionTip = false;

new Vue({
    router,
    store
}).$mount('#app');
