import axios from 'axios'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import store from '@/store'

const instance = axios.create({
  baseURL:'/api',
  timeout:15000
})

instance.interceptors.request.use((config) => {
  NProgress.start()
  config.headers['userTempId'] = store.state.user.userTempId 
  return config
})

instance.interceptors.response.use(
  response => {
    NProgress.done()
    return response.data
  },
  error => {
    NProgress.done()
    alert(error.message||'未知错误')
    throw error
  }
)


export default instance