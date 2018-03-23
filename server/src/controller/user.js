const jwt = require('jsonwebtoken')
// const UserModel = require('../models/user')

class UserController {
    static constructor() {

    }

    /*
    * 用户注册
    */
    static async register(ctx) {
		let { account, passwd } = ctx.request.body

		// if (!passwd) {
		//     ctx.throw(400, { message: '请输入密码' })
		// }

		// let isExisted = await UserModel.findOne({ account }).catch(e=> ctx.throw(500))

		// isExisted = !!isExisted

		// if(isExisted) {
		//     ctx.send({ code: 'no', message: '用户已存在'})
		// }else {
		//     passwd = encryptPwd(passwd)
		//     const result = await UserModel.create({ account, passwd }).catch(e => {
		// 		if (e.code === 11000) {
		// 		  ctx.send({ code: 'no', message: '用户已存在'})
		// 		} else {
		// 		  ctx.throw(500)
		// 		}
		//     })
		//     ctx.send({ code: 'ok', message: '注册成功', data: result })
		// }
		ctx.send({ code: 200, message: '注册成功', data: {account,passwd} })
    }
}

module.exports = UserController