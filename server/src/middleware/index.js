const cors = require('koa2-cors')
const koaJwt = require('koa-jwt')
const bodyParser = require('koa-bodyparser')

const log = require('./log')
const json = require('./json')
const gzip = require('./gzip')
const error = require('./error')
const request = require('./request')

const secret = require('../config').secret

module.exports = (app) => {
    app.use(bodyParser())
    app.use(gzip())
    app.use(cors())
    app.use(request())
    app.use(json())
    app.use(error())
    app.use(log())

    // 使用koa-jwt中间件进行token验证,unless指明了`/user/login`不需要验证token（不然没法登录了）
    app.use(
        koaJwt({secret}).unless({
            path: [/^\/user\/login/]
        })
    )

    // 增加错误的监听处理
    app.on("error", (err, ctx) => {
        if(ctx && !ctx.headerSent && ctx.status < 500) {
            ctx.status = 500
        }
        if(ctx && ctx.log && ctx.log.error) {
            if(!ctx.state.logged) {
                ctx.log.error(err.stack)
            }
        }
    }) 
}
