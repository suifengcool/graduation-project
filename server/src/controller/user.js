const jwt = require('jsonwebtoken')
const UserModel = require('../models/user')

class UserController {
    static constructor() {

    }

    /*
    * 用户注册
    */
    static async register(ctx) {
		let { account, passwd } = ctx.request.body
		
		UserModel(account,ctx,(data)=>{
			if(data){
				console.log('该用户已被注册')
				ctx.send({ code: 500, message: '该用户已被注册', data: {account,passwd} })
			}else{
				console.log('该用户未被注册')
				ctx.send({ code: 200, message: '注册成功', data: {account,passwd} })
			}
		})
    }
}

module.exports = UserController