import {cteareToRouter} from 'util/const.js'
import BaseLayout from  'page/baselayout.vue'
import ErrorPage from  'page/error.vue'
import VueRouter from  'vue-router'
const routes = [
    {path:'/',component: BaseLayout,children:cteareToRouter()},
    {path:'/error',component: ErrorPage},
    {path:'/error/:type',component: ErrorPage},
    {path:'/error/nores',alias:'/404'},
    {path:'/error/noauth',alias:'/401'},
];
export default new VueRouter({
    routes
});