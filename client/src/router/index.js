import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// 页面路径(相对 ../page)
let config = [
	'/home/index' ,                   // 首页

    '/test' ,                         // test

    '/demo/todo',                     // demo -todo
]

// 定义路由
const routes = []

// 解析路由配置，添加进routes
config.forEach((value, index, arr) => {
    routes.push({
        path: value.replace(/(\/index|home\/index)$/g, ''),
        component: resolve => require(
            ['../page' + value.replace(/\/(\:|\?)[A-z]+$/g, '') + '.vue'],
            resolve
        )
    })
})

// 404 页面
routes.push({
    path: '*',
    component: resolve => require(['../page/404.vue'], resolve)
})

export default new Router({
    mode: 'hash',                     // HTML5 history 模式
    linkActiveClass: 'active',
    routes: routes
})
