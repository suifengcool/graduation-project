import Axios from 'axios'
Axios.defaults.baseURL = '/rest'
Axios.defaults.headers.post['Content-Type'] = 'application/json'
Axios.defaults.headers["Cache-Control"] = "no-cache" // 禁止缓存（返回刷新数据）

// TODO:请求拦截器,统一处理参数
Axios.interceptors.request.use((config) => {
  
  // TODO:处理token
  return config
}, (error) => {

  // TODO:错误请求处理
  return Promise.reject(error)
})

// TODO:返回拦截器
Axios.interceptors.response.use((response) => {
  if (response.status !== 200) {
    vm.$message.error('网络异常，请稍后重试...')
    return Promise.reject(response)
  }
  const {code, msg, data} = response.data

  if (!code) {
    return response.data
  } else if (code === 200) {

    return response.data
  } else if (code !== 200) {
    if(code === 600){
      vm.$message({
        type: 'warning',
        messgae: '登录失效，请重新登录',
        duration: 1500,
        onClose: ()=>{
          window.localStorage.removeItem('UserInfo')
          vm.$router.replace('/login')
        }
      })
    }
    const data = {code: code || 500, msg: msg || '服务器异常！请稍后重试...'}
    vm.$message.error(data.msg)
    return Promise.reject(data)
  }
}, (error) => {

  // TODO:错误请求处理
  return Promise.reject(error)
})
export default Axios


