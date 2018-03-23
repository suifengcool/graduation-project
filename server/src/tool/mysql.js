'use strict';
const mysql  = require( 'mysql' );
const Config = require('../config');

var connection  = mysql.createConnection({
    connectionLimit : 50,
    host: Config.db.host,
    port: Config.db.port,
    user: Config.db.user,
    password: Config.db.password,
    database: Config.db.database,
    multipleStatements : true             //是否允许执行多条sql语句
});

//将结果已对象数组返回
var row = ( sql , callback, ...params)=>{
    connection.connect(function(err){
        if(err){
            console.log('与数据库连接失败')
        }else{
            console.log('与数据库连接成功');
            connection.query(sql , params, function(err, rows, fields) {  
                if (err) throw err; 
                callback(rows)
                connection.end(); 
            });  
        }
    })
};

//模块导出
module.exports = {
    ROW     : row 
}