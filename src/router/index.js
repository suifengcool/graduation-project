
// 非官网、且非登陆后的页面路由
let config = [
    '/home/index',                     // 首页
    '/home/login',                     // 登录

    '/artical/index',                  // 文章管理
    '/picture/index',                  // 图片管理
    '/classify/index',                 // 分类管理
    '/video/index',                    // 视频管理
    '/user/index',                     // 管理员列表
]

// 定义路由
const routes = []

// 解析非官网、且非登陆后的页面路由配置，添加进routes
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
