import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// 页面路径(相对 ../page)
let config = [
	'/home' ,                   // 首页
    '/test' ,              // test
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

// 底部菜单切换
// routes.push({
//     path: '/',
//     component: resolve => require(
//         ['../components/footTabBar.vue'],
//         resolve
//     ),
//     children: [
//         // 首页(景点)
//         {
//             path: '/',
//             component: resolve => require(
//                 ['../page/home/index.vue'],
//                 resolve
//             ),
//             meta: { keepAlive: true }
//         },
//         // 订单
//         {
//             path: 'order/list',
//             component: resolve => require(
//                 ['../page/order/list.vue'],
//                 resolve
//             ),
//             meta: { keepAlive: true }
//         },
//         // 用户中心
//         {
//             path: 'user',
//             component: resolve => require(
//                 ['../page/user/index.vue'],
//                 resolve
//             ),
//             meta: { keepAlive: true }
//         }
//     ]
// })

// 404 页面
// routes.push({
//     path: '*',
//     component: resolve => require(['../page/404.vue'], resolve)
// })

export default new Router({
    mode: 'hash',              // HTML5 history 模式
    linkActiveClass: 'active',
    routes: routes
})
