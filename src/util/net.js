import  axios from  "axios"
import MUtil from  "./mm.js"
import {BASE_URL} from  "./Const.js"
const  mm = new MUtil();
export default class Net{
    static  SUCCESS= 1;
    static  ERROR = -1;
    static  NEED_LOGIN = -2;
    static  ILLEGAL_ARGUMENT = 2;
    /*
    *  option = {
    *       url:"",
    *       method:""
    *       responseType:
    *       data;
    *  }
    *
    * */
    static request(option){
        return new Promise((resolve,reject)=>{
            axios({
                baseURL:BASE_URL,
                url:option.url,
                method:option.method || 'get',
                responseType:option.responseType || 'json',
                data:option.data||'',
                headers:{
                    'content-type':'application/json'
                }
            }).then((respones)=>{
                console.log(respones);
                if(respones.status===200){
                    let res = respones.data;
                    if(res.code===Net.SUCCESS){
                        resolve(res.data);
                    }else if (res.code===Net.NEED_LOGIN ){
                        mm.doLogin();
                    }else if(res.code===Net.ERROR){
                        mm.errorTips(res.message);
                        reject(respones);
                    }else {
                        mm.errorTips('权限不够');
                    }
                }else {
                    console.log("net error");
                    reject(respones);
                }
            },err=>{
                console.log(err);
                reject(err);
            });

        })
    }
    static authorRequest(option){
        let jwt = mm.getStorage("t");
        if(!jwt){
            mm.doLogin();
            return;
        }
        return  new Promise((resolve,reject)=>{
            axios({
                baseURL:BASE_URL,
                url:option.url,
                method:option.method || 'get',
                responseType:option.responseType || 'json',
                data:option.data||'',
                headers:{
                    'content-type':'application/json',
                    "Authorization": `JWT ${jwt}`
                }
            }).then((respones)=>{
                if(respones.status===200){
                    let res = respones.data;
                    if(res.code===Net.SUCCESS){
                        resolve(res.data);
                    }else if (res.code===Net.NEED_LOGIN ){
                        mm.doLogin();
                    }else if(res.code===Net.ERROR){
                        mm.errorTips(res.message);
                        reject(respones);
                    }else {
                        mm.errorTips('权限不够');
                    }
                }else {
                    reject(respones);
                }
            },err=>{
                console.log(err);
            });

        })
    }
}