import App from 'page/App.vue'
import PageTow from 'page/page2.vue'
export const menu =  [
    {name:"页面说明",submenu:[
            {path:"/",name:"app",component:App},
            {path:"/page2",name:"page2",component:PageTow}
        ]}
];
export function cteareToRouter() {
    let routs= [];
    let _cteareToRouter = (m)=>{
           for(let i=0;m&&i<m.length;i++){
               let menuitem = Object.assign({},m[i]);
               let submenu = menuitem.submenu;
               // noinspection JSAnnotator
               submenu && (menuitem.submenu=null);
               menuitem.path && (routs.push(menuitem));
               _cteareToRouter(submenu);
           }
    };
    _cteareToRouter(menu);
    return routs;
}
export const BASE_URL = "/apis";

