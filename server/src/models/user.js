const mysql = require('../tool/mysql.js');

module.exports = (account,ctx,callback) => {
    mysql.ROW(`SELECT * from user where user_name = '${account}'`,(data)=>{
		if(data.length){
			callback(false)
		}else{
			callback(true)
		}
    },account);
}