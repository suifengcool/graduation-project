const cors = require('koa2-cors')
const koaJwt = require('koa-jwt')
const bodyParser = require('koa-bodyparser')

const log = require('./log')
const json = require('./json')
const gzip = require('./gzip')
const error = require('./error')
const request = require('./request')

// const secret = require('../config').secret

module.exports = (app) => {
    app.use(bodyParser())
    app.use(gzip())
    app.use(cors())
    app.use(request())
    app.use(json())
    app.use(error())
    app.use(log())

    // app.use(koaJwt({secret}).unless({path: [
    //   /^\/user/, 
    //   /^\/performence/,
    //    /^\/article/, 
    //    /^\/error/,
    //    /^\/classify$/,
    //    /^\/tag$/,
    // ]}))
    
}
