const logNormal = require('./normal')

module.exports = () =>  {
    return async (ctx, next) => {
	    const start = Date.now()

	    await next()
	    const {
		    method,                 // 请求方法 get post或其他
		    url,		            // 请求链接
		    host,	                // 发送请求的客户端的host
		    headers,	            // 请求中的headers
		    status
		} = ctx.request;

	    logNormal(method, url, status, start)
	}
}
