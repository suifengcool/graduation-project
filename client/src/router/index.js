/* 分块定义异步组件 使用 AMD 风格的 require
 * const Home = resolve => require(['./pages/Home.vue'], resolve)
 *
 * 定义路由
 * const routes = [
 *     { path: '/', component: resolve => require(['./pages/Home.vue'], resolve) }
 * ]
 */

// 页面路径(相对 ./pages)
let config = [
    '/home/index',                    // 首页


    // demo
    '/demo/index',                    // demo首页
    '/demo/todo',                     // todo
]

// 定义路由
const routes = []

// 解析路由配置，添加进routes
config.forEach((value, index, arr) => {
    routes.push({
        path: value.replace(/(\/index|home\/index)$/g, ''),
        component: resolve => require(
            [ '../pages' + value.replace(/\/(\:|\?)[A-z]+$/g, '') + '.vue' ],
            resolve
        )
    })
})

// 404 页面
routes.push({
    path: '*',
    component: resolve => require(['../pages/404.vue'], resolve)
})

export default routes
