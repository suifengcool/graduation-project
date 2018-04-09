// 入口js
import Vue from 'vue'
import { mapGetters, mapActions } from 'vuex'
import VueRouter from 'vue-router'
import App from './App'

import Fetch from './util/fetch'
import Config from './util/config'
import routes from './router'
import store from './store'

Vue.config.productionTip = false

// 如果使用模块化机制编程， 要调用 Vue.use(VueRouter)
Vue.use(VueRouter)

// 创建 router 实例，然后传 `routes` 配置
const router = new VueRouter({
    mode: 'history',            // HTML5 history 模式
    routes: routes
})

// 创建和挂载根实例 通过 router 配置参数注入路由
window.vm = new Vue({
    router,
    store,
    render: v => v(App),
    data: {
        config: Config,         // 全局注入配置
        fetch: Fetch,           // fetch
        mapGetters,             // 全局引入 vuex mapGetters 函数
    	mapActions              // 全局引入 vuex mapActions 函数
    }
}).$mount('#app')
