const log4js = require('log4js')
// const PerformenceContoller = require('../../controller/performence').api

module.exports = async (method, url, status, start = 0) => {

    // configure 函数配置了日志的基本信息
    log4js.configure({
        /**
        * 指定要记录的日志分类 cheese
        * 展示方式为文件类型 file
        * 日志输出的文件名 cheese.log
        */
        appenders: { 
            normal: { type: 'dateFile', filename: 'log/normal/access.log', keepFileExt: true } 
        },

        /**
        * 指定日志的默认配置项
        * 如果 log4js.getLogger 中没有指定，默认为 cheese 日志的配置项
        * 指定 cheese 日志的记录内容为 error 及 error 以上级别的信息
        */
        categories: { default: { appenders: ['normal'], level: 'all' } }
    })

    const logger = log4js.getLogger('normal')
    const responseTime = (Date.now() - start)
    logger.info(`${method} ${url} 响应时间为: ${responseTime / 1000}s`)
    

    // await next()
    /**
    * 记录访问记录
    */
    url = url.split('/')[1]

    // await PerformenceContoller.addRecord({
    //     statusCode: status,
    //     method,
    //     requestUrl: url,
    //     responseTime
    // })
}
