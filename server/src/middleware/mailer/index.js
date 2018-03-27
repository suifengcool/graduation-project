/* 常见错误:
*{
*    [AuthError: Invalid login - 454 Authentication failed, please open smtp flag first!]
*    name: 'AuthError',
*    data: '454 Authentication failed, please open smtp flag first!',
*    stage: 'auth' 
*}
*  错误原因： 账号未设置该服务
*  解决方案: QQ邮箱 -> 设置 -> 帐户 -> 开启服务：POP3/SMTP服务
*
*
*{
*    [SenderError: Mail from command failed - 501 mail from address must be same as authorization user]
*    name: 'SenderError',
*    data: '501 mail from address must be same as authorization user',
*    stage: 'mail' 
*}
*  错误原因： 发件账号与认证账号不同
*
*/

const nodemailer = require('nodemailer')        // 邮件发送处理
const config = require('../../config')
const ErrorController = require('../../controller/error').api

let transporter = nodemailer.createTransport({
    host: 'smtp.qq.com',        // 主机
    port: 465,                   // SMTP 端口
    auth: {
        user: config.mail.user,  // 账号
        pass: config.mail.pass,  // 密码
    }
})

module.exports = function sendAlarmEmail(method, requestUrl, err, cb) {
    message = {
        from: '<' + config.mail.user + '>',                  // 发件地址
        to: '"zhaoxu" <zhaoxu@rawstonedu.com>',              // 收件列表,如 "2838890xx@qq.com, minimixx@126.com"
        subject: 'Elapse Server has occurred an error!',     // 标题
        text: 'Error Occurred',
        // html 内容
        html: 
            `<p style="font-size: 18px">An error occurred on request: <strong>${method}<em>${requestUrl}</em></strong></p>
            <table style="border: 1px solid #f1f1f1; table-layout: fixed; border-collapse: collapse">
                <tbody>
                    <tr>
                        <td width="100" style="padding: 5px; border: 1px solid #f1f1f1; font-size: 16px">Error Message:</td>
                        <td style="padding: 5px; border: 1px solid #f1f1f1; font-size: 16px">${err.message}</td>
                    </tr>
                    <tr>
                        <td width="100" style="padding: 5px; border: 1px solid #f1f1f1; font-size: 16px">Error Stack:</td>
                        <td style="padding: 5px; border: 1px solid #f1f1f1; font-size: 16px">${err.stack }</td>
                    </tr>
                </tbody>
            </table>`
    }

    transporter.sendMail(message, async (error, info) => {
        if (error) {
            cb(error, null)
            return
        }
        console.log('Message sent successfully!');
        cb(null, info)
        transporter.close();
    })
}
