
// 官网路由
let config = [
    '/home/index',                     // 首页
    '/home/detail/:id',                // 详情页
]

let config1 = [
    '/artical/index',                  // 文章管理
    '/picture/index',                  // 图片管理
    '/classify/index',                 // 分类管理
    '/video/index',                    // 视频管理
    '/user/index',                     // 管理员列表
]

// 定义路由
const routes = [], home_routes = [], user_routes = [];

// 解析官网页面路由配置，添加进routes
config.forEach((value, index, arr) => {
    home_routes.push({
        path: value.replace(/(\/index|home\/index)$/g, ''),
        component: resolve => require(
            [ '../pages' + value.replace(/\/(\:|\?)[A-z]+$/g, '') + '.vue' ],
            resolve
        )
    })
})

// 解析官网页面路由配置，添加进routes
config1.forEach((value, index, arr) => {
    user_routes.push({
        path: value.replace(/(\/index|home\/index)$/g, ''),
        component: resolve => require(
            [ '../pages' + value.replace(/\/(\:|\?)[A-z]+$/g, '') + '.vue' ],
            resolve
        )
    })
})

// 官网相关路由
routes.push({
    path: '/',
    redirect: `/home/index`,
    component: resolve => require(
        ['../components/LayoutWebsite.vue'],
        resolve
    ),
    children: home_routes
})

// 后台管理相关路由
routes.push({
    path: '/',
    component: resolve => require(
        ['../components/LayoutLoggedIn.vue'],
        resolve
    ),
    children: user_routes
})

// 404 页面
routes.push({
    path: '/login',
    component: resolve => require(['../pages/home/login.vue'], resolve)
})

// 404 页面
routes.push({
    path: '*',
    component: resolve => require(['../pages/404.vue'], resolve)
})

export default routes
