import Vue from 'vue'
import '@/router/routerConfig'
import 'normalize.css/normalize.css'
import '@/assets/styles/index.scss'
import '@/assets/iconfont/index.js'
import request from '@/utils/request'
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/zh-CN'
//过滤器
import filter from '@/utils/filter'
Object.keys(filter).forEach(key => Vue.filter(key, filter[key]))
// import 'element-ui/lib/theme-chalk/index.css'
// import 'element-ui/lib/theme-chalk/display.css'
const { NODE_ENV } = process.env
Vue.prototype.$axios = request
const IS_DEV = NODE_ENV !== 'production'
if(IS_DEV){
  Vue.use(ElementUI, { locale })
}