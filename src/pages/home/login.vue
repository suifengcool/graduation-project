<template>
    <div class='home-login'>
        <Form class="login" :rules="rules" ref="loginForm">
            <h3>登录</h3>
            <FormItem label=""   prop="userName">
                <Input v-model="userName" auto-complete="off" prefix-icon="Icon-date" placeholder="Username" size="medium" />
            </FormItem>
            <FormItem  label=""  prop="password">
                <Input v-model="password" auto-complete="off" prefix-icon="Icon-date" placeholder="Password" size="medium" />
            </FormItem>
            <FormItem class="btn">
                <Button class="active" @click="submit">登录</Button>
                <Button>回到首页</Button>
            </FormItem>
        </Form>
    </div>
</template>

<script>
import { Button,Form,FormItem,Input} from 'element-ui'
export default {
    name: 'notFound',
    components: {
    	Button,
        Form,
        FormItem,
        Input
    },
    data () {
		return {
            userName: '',
            password: '',
            rules: {
                userName: [{ required: true, message: '请输入账号', trigger: 'blur' }],
                password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
            }
		}
    },

    created () {
    },

    methods: {
        submit() {

            this.$refs.loginForm.validate(val => {
                    
            })
        },
	}
}
</script>
<style lang='sass' scoped>
.home-login
    height: 100%
    background: url('../../assets/img/bg.jpg') center center no-repeat
    background-size: cover
    font-size: 12px
    .login
        position: absolute
        top: 40%
        left: 50%
        margin: -160px 0 0 -160px
        width: 320px
        height: 320px
        padding: 36px
        box-shadow: 0 0 100px rgba(0, 0, 0, 0.08)
</style>
<style lang="sass">
    .home-login
        h3
            text-align: center
            height: 40px
            line-height: 40px
            margin-bottom: 24px
            color: #666
        .el-input__inner 
            display: inline-block
            padding: 4px 7px
            margin-bottom: 24px
            width: 100%
            height: 32px
            line-height: 32px
            color: rgba(0, 0, 0, 0.65)
            background-color: #fff
            border: 1px solid #d9d9d9
            border-radius: 4px
            transition: all .3s
            appearance: none
            outline: none
            &:hover
                border: 1px solid #108ee9   
        .btn .el-form-item__content
            display: flex
            justify-content: space-between
            padding: 0 5px
            button 
                width: 103px
                height: 32px
                line-height: 32px
                border-radius: 4px
                text-align: center
                font-size: 14px
                outline: none
                cursor: pointer
            .active
                color: #fff
                background: #108ee9
</style>