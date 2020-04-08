import axios from 'axios'
export function request(config){

    // 1.创建axios实例
    const instance=axios.create({
        baseURL:'http://106.54.54.237:8000/api/h8',
        timeout:1000
    })
    // 2.axios的拦截器
    // insttance.interceptors.request.use(config =>{
    //     return config
    // },err=>{
    //     console.log(err)

    // })
    instance.interceptors.response.use(res=>{
        return res.data
    },err=>{
        console.log(err)
    })

//3.发送真正的网络请求
return instance(config)


}