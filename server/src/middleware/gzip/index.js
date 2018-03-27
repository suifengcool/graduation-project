/*
    gzip:性能优化大杀器,浏览器向服务器发起资源请求，
    比如下载一个js文件，服务器先对资源进行压缩，
    再返回给浏览器，以此节省流量，加快访问速度。

    浏览器通过HTTP请求头部里加上Accept-Encoding，
    告诉服务器，“你可以用gzip，或者defalte算法压缩资源”。

    服务端字符串gzip压缩: zlib.gzipSync(str)

*/


const isJSON = require('koa-is-json')
const zlib = require('zlib')

module.exports = () => {
    return async (ctx, next) => {
        // 后续中间件执行完成后将响应体转换成 gzip
        await next()
        
        let body = ctx.body
        if(!body) return

        const acceptEncoding = ctx.request.headers['accept-encoding']

        if(acceptEncoding && acceptEncoding.indexOf('gzip') > -1){
            if(isJSON(body)){
                body = JSON.stringify(body)
            }
            // gzip body并设置 gzip 响应头
            ctx.set('Content-Encoding', 'gzip')
            ctx.body = zlib.gzipSync(body)
        }else{
            return
        }
    }
}
