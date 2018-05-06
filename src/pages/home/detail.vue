<template>
    <div class="homeCollegeDetail main">
      <!-- 我是学训宝学院详情页，对应的是无线联盟的案例详情页 -->
          <div class="banner_01">
           <!--<h3>{{ item.name }}</h3>-->
          </div>
        <!--</el-carousel-item>-->
      <!--</el-carousel>-->
      <!--</div>-->
      <div class='backward' @click="$router.go(-1)">
        <i class="el-icon-arrow-left"></i><span>返回上一级</span>
      </div>
      <div class="details">
        <h2>{{caseInfo.name}}</h2>
        <div class="author">作者 :{{caseInfo.author}}</div>
        <img :src="caseInfo.cover" alt="">
        <div class="description" v-html="caseInfo.content">
        </div>
      </div>
    </div>
  </template>
  <script>
  import { Button, Carousel, CarouselItem } from 'element-ui'
  export default {
    name: 'homeCollege',
    components: {
      Button,
      CarouselItem,
      Carousel
    },
  
    data() {
      return {
        id: this.$route.params.id,
        caseInfo: {
          name:'树莓后台管理',
          author:'小可爱',
          cover:'/static/img/solve5.png'
        }
      }
    },
  
    created() {
      // 获取详情
      // vm.fetch.get('/information/get/' + this.id).then(res => {
      //   console.log('res', res)
      //   this.caseInfo = res.data

      // })
    },
  
    methods: {}
  }
  </script>
  <style lang="less" scoped>
  .main {
    background-color: #f4f4f4;
    .search {
      width: 1366px;
      height: 74px;
      line-height: 74px;
      background-color: #ffffff;
      margin: 0px auto 52px auto;
    }
    .backward {
      width: 1366px;
      height: 102px;
      line-height: 102px;
      margin: 0 auto;
      font-size: 24px;
      font-weight: normal;
      font-stretch: normal;
      letter-spacing: 0px;
      cursor: pointer;
      color: #45b9f4;
      span {
        font-weight: 300;
        font-size: 24px;
      }
    }
    .details {
      margin: 0 auto 60px auto;
      width: 1366px;
      padding: 50px 130px;
      box-sizing: border-box;
      background-color: #ffffff;
      border: solid 1px #dcdcdc;
      > h2 {
        font-size: 48px;
        text-align: center;
        font-weight: normal;
        font-stretch: normal;
        height: 50px;
        line-height: 50px;
        letter-spacing: 0px;
        color: #333333;
      }
      .author {
        margin: 0 auto;
        width: 900px;
        height: 80px;
        text-align: center;
        font-family: SourceHanSansCN;
        font-size: 24px;
        font-weight: 300;
        font-stretch: normal;
        line-height: 80px;
        letter-spacing: 0px;
        color: #999999;
        border-bottom: 1px solid #a0a0a0;
      }
      img {
        min-width: 600px;
        max-width: 1000px;
        display: block;
        vertical-align: top;
        margin: 60px auto 50px auto;
      }
      .description {
        text-indent: 2em;
        font-size: 24px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 40px;
        letter-spacing: 0px;
        margin-bottom: 50px;
        color: #666666;
      }
    }
  }
  </style>
  <style lang="less">
  .homeCollegeDetail {
    margin-top:80px;
    .el-carousel__item h3 {
      color: #475669;
      font-size: 14px;
      /* opacity: 0.75; */
      line-height: 150px;
      margin: 0;
    }
    .el-tabs__content {
      background-color: #f4f4f4;
    }
    .banner_01 {
      width: 1920px;
      height: 400px;
      background-image: url('/static/img/banner02.jpg');
      background-size: cover;
    }
  }
  </style>
  