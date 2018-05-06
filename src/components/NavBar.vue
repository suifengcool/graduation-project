<template>
  <div class="nav_head" :class="{hidden:hide}">
    <div class="nav_layout">
      <h1 class="nav_logo" @click="$router.push({path: '/'})">
        <div class="imgBox">
          树莓后天管理系统
          <!-- <img src="/static/img/logo.png" alt="LOGO"> -->
        </div>
        学训宝
      </h1>
      <Menu :default-active="active" class="el-menu-demo text-color" unique-opened mode="horizontal" active-text-color="#ffd04b">
        <NavItem v-for="(item, idx) in menus" :item="item" :index="idx + ''" :key="idx" :hide="hide"/>
      </Menu>
    </div>
  </div>
</template>
<script>
import { Menu } from 'element-ui'
import NavItem from './NavItem.vue'
const menu = [
  {
    "id": 1,
    "pid": 1,
    "title": "首页",
    "url": "/",
    "num": 0
  },
  {
    "id": 2,
    "pid": 2,
    "title": "解决方案",
    "url": "",
    "num": 0
  },
  {
    "id": 3,
    "pid": 3,
    "title": "学训宝学院",
    "url": "/home/college/index",
    "num": 0
  },
  {
    "id": 4,
    "pid": 4,
    "title": "服务商",
    "url": "/home/supplier",
    "num": 0
  },
  {
    "id": 5,
    "pid": 5,
    "title": "我要入驻",
    "url": "/home/register",
    "num": 0
  },
  {
    "id": 6,
    "pid": 6,
    "title": "登录管理中心",
    "url": "/login",
    "num": 0
  }
]

export default {
  name: 'NavBar',
  components: { Menu, NavItem },
  data() {
    return {
      menus: menu,
      hide: false,
      menuList: []
    }
  },
  computed: {
    active() {
      let path =
        this.menuList.find(url => this.$route.path.startsWith(url)) ||
        this.$route.path
      return path
    }
  }
}
</script>
<style lang="less" >
//官方网站全局css样式
@nav_height: 80px;
@banner_height: 797px;
@slide_height: 100px;
@slide_width: 10px;
@bg_color: #edf1f5;
@nav_color: #4db8fc;
@margin: auto;
@text-align: center;

.nav_head {
  width: 100%;
  height: @nav_height;
  position: fixed;
  top:0px;
  left: 0;
  overflow: hidden;
  background-color: @bg_color;
  // padding: 0 30px;
  z-index: 100;

  .nav_layout {
    margin-top: 15px;
    height: 100%;
    margin: 0 auto;
    width: 1200px;
    display: flex;
    justify-content: space-between;
    .nav_logo {
      width: 250px;
      height: 100%;
      position: relative;
      overflow: hidden;
      cursor: pointer;
      .imgBox{
        font-family: STKaiti; 
        line-height: 80px;
        color: #FF9500;
        font-size: 30px;
        height: 100%;
         img {
        width: 100%;
        margin-top: 15px;
      }
      }
     
    }
  }

  .el-menu {
    background-color: transparent;
    border: none;
    .navBar-item {
      width: 130px;
      height: 80px;
      float: left;
      text-align: center;
      .el-menu-item {
        width: 100%;
        border-bottom: none;
        font-size: 18px;
        height: 80px;
        line-height: 80px;
        font-family: MicrosoftYaHei;
        font-size: 18px;
        color: #333333;
        background-color: transparent;
        &:hover {
          font-family: MicrosoftYaHei;
          font-size: 18px;
          font-weight: 700;
          letter-spacing: 0px;
          color: @nav_color;
          // span {
          //   display: inline-block;
          //   height: 100%;
          //   border-bottom: 2px solid @nav_color;
          // }
          // color: #419ed2;
          // background-color: transparent;
        }
      }
      .el-submenu {
        height: 80px;
        display: flex;
        align-items: center;
        .el-submenu__title {
          margin: 0 auto;
          &:hover {
            font-weight: 700;
            color: @nav_color;
            background-color: transparent;
            > span {
              font-weight: 700;
              color: @nav_color;
            }
          }
          span {
            font-size: 18px;
            font-weight: normal;
            font-stretch: normal;
            letter-spacing: 0px;
            // color: #333333;
          }
          .el-submenu__icon-arrow {
            right: 5px;
            margin-top: -5px;
          }
        }
      }
      // li.el-submenu.is-opend{
      //   border:0;
      // }
      .el-menu-demo.text-color.el-menu--horizontal.el-menu .navBar-item:focus,
      li.el-submenu:focus{
        border:0;
        text-decoration: none;
        outline: none;

      }
      .el-menu-item.is-active {
        font-weight: 700;
        color: @nav_color !important;
        background-color: transparent;
        height: 80px;
        // > span {
        //   display: inline-block;
        //   height: 100%;
        //   border-bottom: 2px solid @nav_color;
        // }
      }
    }
  }
}
// .nav_head:before {
//   content: '';
//   display: block;
//   position: absolute;
//   bottom: 15px;
//   z-index: 101;
//   width: 100%;
//   height: 1px;
//   background-color: #e4e7ea;
// }
.el-menu--horizontal {
  border-bottom: 1px solid transparent !important;
  .el-menu--popup-bottom-start {
    margin-top: 0px;
  }
  .el-menu {
    background-color: @bg_color;
  }
  .el-menu--popup {
    min-width: 130px;
    .navBar-item {
      .el-menu-item {
        background-color: transparent;
        text-align: center;
        span {
          &:hover {
            color: @nav_color;
          }
        }
      }
    }
  }
}
</style>