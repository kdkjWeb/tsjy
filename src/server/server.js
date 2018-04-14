import Axios from './index'


export default {
    //get方法
    get: (url,data)=>{
        return new Promise ((resolve,reject)=>{
            Axios.get(url,{
                params: data
            }).then(res=>{
                if(res.code == 0){
                    resolve(res.data)
                }
            }).catch(err=>{
                reject(err)
            })
        })
    },


    //post方法

    post: (url,data)=>{
        return new Promise ((resolve,reject)=>{
            Axios.post(url,data)
            .then(res=>{
                if(res.code == 0){
                    resolve(res.data)
                }
            }).catch(err=>{
                reject(err)
            })
        })
    }
}