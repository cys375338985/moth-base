import Vue from 'vue'
import Vuex from 'vuex'
import appstate from  './appstate'
Vue.use(Vuex);

export default new Vuex.Store({
    modules:{
        appstate
    }
})
