const config = {
    // 开发环境
    dev: {
        port: 3000,
        db:{
            host: 'sql.m77.vhostgo.com',
            port: 3306,
            user: 'suifengcool',
            password: 'xu19880816',
            database: 'suifengcool'
        },
        secret: 'elapse',                       // jwt生成token
        salt: 'elapse-server2018',              // md5加密盐值
        mail: {
            user: '371801080@qq.com',
            pass: 'suifengcoolxu123',
        }
    },

    // 线上生产环境
    prod: {
        port: 3000,
        db:{
            host: 'sql.m77.vhostgo.com',
            port: 3306,
            user: 'suifengcool',
            password: 'xu19880816',
            database: 'suifengcool'
        },
        secret: 'elapse',                  // jwt生成token
        salt: 'elapse-server2018',         // md5加密盐值
        mail: {
            user: '371801080@qq.com',
            pass: 'suifengcoolxu123',
        }
    }
}

module.exports = config[process.env.NODE_ENV]