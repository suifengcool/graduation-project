<template>
  <div class="StartHere">
    <div class="logo">
      <div class="imgBox">
        <!-- <img src="../../../static/img/logo_xxb.png" alt="LOGO" @click="goHome"> -->
        <p>想学习，就上学训宝</p>
        <h3>开放平台</h3>
      </div>
      <StartHereRight :data="data"/>
    </div>
    <Menu :default-active="active" unique-opened id="menu">
      <SidebarItem :index="idx+''" :item="item" v-for="(item,idx) in menus" :key="idx"/>
    </Menu>
  </div>
</template>

<script>
import StartHereRight from './StartHereRight'
import SidebarItem from './SidebarItem'
import {Menu,Submenu,MenuItem,MenuItemGroup} from 'element-ui'
import bus from "../../util/bus.js";
export default {
  components:{
    StartHereRight,
    SidebarItem,
    Menu,
    Submenu,
    MenuItem,
    MenuItemGroup
  },

  data(){
    return {
      menus: [],
      data: {
        type: null,          // 用户类型， 0服务商， 1机构， 2教师
      }
    }
  },

  computed: {
    active() {
      let path = this.$route.path
      return path
    },
  },

  created(){

    bus.$on('getMenus', target => {
      this.menus = target
    });

    let userInfo = JSON.parse(window.localStorage.getItem('UserInfo'))
    let path = window.location.pathname
    this.data.type = userInfo && userInfo.type

    if(userInfo.serviceProviderDto){
      this.data.logo = userInfo.serviceProviderDto.logo
      this.data.name = userInfo.serviceProviderDto.name || userInfo.serviceProviderDto.realName

      // 当用户是服务商时，需判断是否已认证
      // type 0企业 1个人
      if(userInfo.serviceProviderDto.authenticationStatus !=2){
        this.menus = [{
          "deleted":0,
          "icon":"icon-weibiaoti5",
          "id":"",
          "name":"账户中心",
          "num":"0",
          "pid":"0",
          "url":"",
          "children":[{
              "deleted":0,
              "icon":"",
              "id":"",
              "name":"基本信息",
              "num":"0",
              "pid":"0",
              "url":"/user/index"
          },{
              "deleted":0,
              "icon":"",
              "id":"",
              "name":"我的认证",
              "num":"0",
              "pid":"0",
              "url": userInfo.serviceProviderDto.type ? "/user/identifyPerson" : '/user/identifyComp'
          }]
        }]

        let pathArr = ['/user/identifyPerson', '/user/index', '/user/load', '/home/login','/user/identifyComp']

        if(pathArr.indexOf(path) < 0){
          vm.$message({
            type: 'error',
            message: '您尚未认证,暂无权限',
            duration: 1000,
            onClose: ()=>{
              vm.$router.replace(userInfo.serviceProviderDto.type ? '/user/identifyPerson' : '/user/identifyComp')
            }
          })
        }

      }else{

        vm.fetch.get('/serviceProviders/getServiceProEssentialInfo').then(data => {
          if(data && data.data.signStatus == 3){
            this.menus = [{
              "deleted":0,
              "icon":"icon-home",
              "id":"",
              "name":"首页",
              "num":"0",
              "pid":"0",
              "url":"/supplier/index",
              "children":[]
            },{
              "deleted":0,
              "icon":"icon-jigouguanli-copy",
              "id":"",
              "name":"机构管理",
              "num":"0",
              "pid":"0",
              "url":"",
              "children":[{
                  "deleted":0,
                  "icon":"",
                  "id":"",
                  "name":"所有机构",
                  "num":"0",
                  "pid":"0",
                  "url":"/supplier/organization/index"
              },{
                  "deleted":0,
                  "icon":"",
                  "id":"",
                  "name":"已通过",
                  "num":"0",
                  "pid":"0",
                  "url":"/supplier/organization/passed"
              },{
                  "deleted":0,
                  "icon":"",
                  "id":"",
                  "name":"审核中",
                  "num":"0",
                  "pid":"0",
                  "url":"/supplier/organization/review"
              },{
                  "deleted":0,
                  "icon":"",
                  "id":"",
                  "name":"已拒绝",
                  "num":"0",
                  "pid":"0",
                  "url":"/supplier/organization/refuse"
              },{
                  "deleted":0,
                  "icon":"",
                  "id":"",
                  "name":"待审核",
                  "num":"0",
                  "pid":"0",
                  "url":"/supplier/organization/preReview"
              }]
            },{
              "deleted":0,
              "icon":"icon-web-icon-",
              "id":"",
              "name":"对账中心",
              "num":"0",
              "pid":"0",
              "url":"",
              "children":[{
                  "deleted":0,
                  "icon":"",
                  "id":"",
                  "name":"结算管理",
                  "num":"0",
                  "pid":"0",
                  "url":"/finance/balance"
              },{
                  "deleted":0,
                  "icon":"",
                  "id":"",
                  "name":"提现管理",
                  "num":"0",
                  "pid":"0",
                  "url":"/finance/getCash"
              },{
                  "deleted":0,
                  "icon":"",
                  "id":"",
                  "name":"订单管理",
                  "num":"0",
                  "pid":"0",
                  "url":"/finance/order"
              }]
            },{
              "deleted":0,
              "icon":"icon-weibiaoti5",
              "id":"",
              "name":"账户中心",
              "num":"0",
              "pid":"0",
              "url":"",
              "children":[{
                  "deleted":0,
                  "icon":"",
                  "id":"",
                  "name":"基本信息",
                  "num":"0",
                  "pid":"0",
                  "url":"/user/index"
              },{
                  "deleted":0,
                  "icon":"",
                  "id":"",
                  "name":"我的认证",
                  "num":"0",
                  "pid":"0",
                  "url":userInfo.serviceProviderDto.type ? "/user/identifyPerson" : '/user/identifyComp'
              },{
                  "deleted":0,
                  "icon":"",
                  "id":"",
                  "name":"我的签约",
                  "num":"0",
                  "pid":"0",
                  "url":"/sign/index"
              }]
            }]


            let supplierPathList = [
              // 首页
              '/supplier/index',                  // 服务商首页

              // 用户相关(服务商、机构、教师共用)
              '/user/index',                      // 用户基本信息
              '/user/resetPassword',              // 修改登录密码
              '/user/identifyPerson',             // 我的认证--个人/个人认证状态
              '/user/identifyComp',               // 我的认证--公司/公司认证状态
              '/user/identifyDeal',               // 认证协议
              '/user/load',                       // 引导认证
              '/user/bankList',                   // 我的银行卡
              '/user/bankAdd',                    // 添加银行卡

              '/home/login',

              // 财务相关(服务商、机构、教师共用)
              '/finance/balance',                 // 结算管理
              '/finance/order',                   //订单管理
              '/finance/orderDetail',             //订单详情
              '/finance/getCash',                 // 提现管理
              '/finance/getcashCreate',           // 提现
              '/finance/getcashStatus/:id',       // 提现状态

              // 机构管理(服务商)
              '/supplier/organization/index',     // 所有机构
              '/supplier/organization/create',    // 新增机构
              '/supplier/organization/detail',    // 机构详情
              '/supplier/organization/passed',    // 已通过
              '/supplier/organization/review',    // 审核中
              '/supplier/organization/refuse',    // 已拒绝
              '/supplier/organization/preReview', // 待审核

              // 签约相关(服务商)
              '/sign/index',                      // 我的签约
              '/sign/detail',                     // 签约服务商详细说明
              '/sign/create',                     // 创建签约
              '/sign/agreement',                  // 签约合同
              '/sign/pay',                        // 签约付款
              '/sign/success',                    // 签约成功
              '/sign/contract',                   // 我的签约(已签约)
            ]

            // 当用户认证且签约成功后，增加路由拦截
            if(supplierPathList.indexOf(path) <0 ){
              vm.$message({
                type: 'error',
                message: '您无权访问该页面',
                duration: 1000,
                onClose: ()=>{
                  vm.$router.go(-1)
                }
              })
            }
          }else{
            this.menus = [{
              "deleted":0,
              "icon":"icon-home",
              "id":"",
              "name":"首页",
              "num":"0",
              "pid":"0",
              "url":"/supplier/index",
              "children":[]
            },{
              "deleted":0,
              "icon":"icon-weibiaoti5",
              "id":"",
              "name":"账户中心",
              "num":"0",
              "pid":"0",
              "url":"",
              "children":[{
                  "deleted":0,
                  "icon":"",
                  "id":"",
                  "name":"基本信息",
                  "num":"0",
                  "pid":"0",
                  "url":"/user/index"
              },{
                  "deleted":0,
                  "icon":"",
                  "id":"",
                  "name":"我的认证",
                  "num":"0",
                  "pid":"0",
                  "url":userInfo.serviceProviderDto.type ? "/user/identifyPerson" : '/user/identifyComp'
              },{
                  "deleted":0,
                  "icon":"",
                  "id":"",
                  "name":"我的签约",
                  "num":"0",
                  "pid":"0",
                  "url":"/sign/index"
              }]
            }]
          }
        })
        
      }


    }else if(userInfo.mechanismDto){
      this.menus = require('../../config/organization_menu.json')
      let organizationPathList = [
        // 首页
        '/organization/index',              // 机构首页
        '/teacher/index',                   // 教师首页

        // 用户相关(服务商、机构、教师共用)
        '/user/index',                      // 用户基本信息
        '/user/resetPassword',              // 修改登录密码
        '/user/bankList',                   // 我的银行卡
        '/user/bankAdd',                    // 添加银行卡

        // 财务相关(服务商、机构、教师共用)
        '/finance/balance',                 // 结算管理
        '/finance/order',                   //订单管理
        '/finance/orderDetail',             //订单详情
        '/finance/getCash',                 // 提现管理
        '/finance/getcashCreate',           // 提现
        '/finance/getcashStatus/:id',       // 提现状态

        // 机构中心(机构)
        '/organization/setting',            // 机构设置
        '/organization/honor',              // 机构荣誉
        '/organization/teacher',            // 机构教师
        '/organization/addteacher',         // 新增教师
        '/organization/addteacherdata',     // 教师资料
        '/organization/environment',        // 机构环境
        '/organization/desc',               // 课程介绍
        '/organization/student',            // 机构学员
        '/organization/classify',           // 机构分类
        '/organization/evaluate',           // 机构评价

        // 课程(机构)
        '/course/live/index',               // 直播专题列表
        '/course/live/create',              // 直播专题新建&编辑
        '/course/live/detail',              // 直播专题详情
        '/course/live/section',             // 直播专题--章节新建&编辑

        '/course/video/index',              // 视频专题列表
        '/course/video/create',             // 视频专题新建&编辑
        '/course/video/detail',             // 视频专题详情
        '/course/video/section',            // 视频专题--章节新建&编辑

        '/course/offline/index',            // 线下课程列表
        '/course/offline/create',           // 线下课程新建&编辑
        '/course/offline/detail',           // 线下课程详情

        // 签到验证(机构)
        '/validate/index',                  // 验证
        '/validate/list',                   // 验证列表

        // 教师相关(教师)
        '/teacher/detail/:id'                   // 完善教师资料
      ]

      if(organizationPathList.indexOf(path) <0 ){
        vm.$message({
          type: 'error',
          message: '您无权访问该页面',
          duration: 1000,
          onClose: ()=>{
            vm.$router.go(-1)
          }
        })
      }

      this.data.logo = userInfo.mechanismDto.logo
      this.data.name = userInfo.mechanismDto.name
    }else if(userInfo.teacherDto){
      this.menus = require('../../config/teacher_menu.json')
      let teacherPathList = [
        // 首页
        '/teacher/index',                   // 教师首页

        // 用户相关(服务商、机构、教师共用)
        '/user/index',                      // 用户基本信息
        '/user/resetPassword',              // 修改登录密码

        // 课程(机构)
        '/course/live/index',               // 直播专题列表
        '/course/live/create',              // 直播专题新建&编辑
        '/course/live/detail',              // 直播专题详情
        '/course/live/section',             // 直播专题--章节新建&编辑

        '/course/video/index',              // 视频专题列表
        '/course/video/create',             // 视频专题新建&编辑
        '/course/video/detail',             // 视频专题详情
        '/course/video/section',            // 视频专题--章节新建&编辑

        // 教师相关(教师)
        '/teacher/detail/:id'               // 完善教师资料
      ]

      if(teacherPathList.indexOf(path) <0 ){
        vm.$message({
          type: 'error',
          message: '您无权访问该页面',
          duration: 1000,
          onClose: ()=>{
            vm.$router.go(-1)
          }
        })
      }

      this.data.logo = userInfo.teacherDto.pic
      this.data.name = userInfo.teacherDto.name || userInfo.teacherDto.nikename
    }
  },

  methods: {
    goHome(){
      vm.$router.push('/supplier/home/index')
    }
  }
}
</script>
<style lang="scss" scope>
/* afsd*/
.StartHere {
  height: 100vh;
  position: absolute;
  top: 0;
  bottom: 0;
  width: 230px;
  background-color:#303246;
  .logo{
    position: fixed;
    top: 0;
    left: 10px;
    width: 100%;
    height: 70px;
    line-height: 70px;
    background-color:#303246;
    display: flex;
    justify-content: space-between;
    .imgBox{
      display: flex;
      position: relative;
      p{
        font-size: 10px;
        color: #dedede;
        position: absolute;
        bottom: -20px;
        left: 50px;
      }
      h3{
        font-size: 24px;
        color: #dedede;
      }
      img {
        cursor: pointer;
        width: 140px;
        height: 35px;
        margin-top: 17.5px;
        margin-right: 80px;
      }
    }

  }

}


</style>
<style lang="less">
#menu{
  transition: all .3s ease;
  position: absolute;
  top: 70px;
  bottom: 0;
  left: 0;
  width: 100%;
  border-radius: 0;
  background-color: #303246;
}
</style>
