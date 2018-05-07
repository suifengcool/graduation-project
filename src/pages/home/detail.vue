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
          cover:'/static/img/solve5.png',
          content:'<p>青春是一指流沙，抓在手里的时候，不知道它有那么绚烂多彩，也不知道它会那么匆匆而逝。只觉得滑过指尖那细密而又清凉的岁月，渐自温润而柔软，想要紧紧握在手心，却又似水流走，不再回首。</p><p>很多时候，握在手里的，自当漫不经心；那些难以留住的，却总是想要格外挽留。</p><p>青春总是懵懂的，正值年华盛开，兀自芬芳溢彩，不管花开几许，风雨几重，皆因着那份初生牛犊不怕虎的倔强，跌跌撞撞，勇往无前。无须刻意，也不必造作，一切都是那么的随心随意，真实而毫无顾忌。</p><p>也许，正是因为那份青春独有的豪迈，让脚下的路，虽偶有泥泞，却也走的洒脱干脆，无形中，好似岁月也加快了脚步，稍纵即逝。</p><p>最是光影如白驹过隙，弹指一挥。未待细数几载春秋，那如沙流逝的岁月，就在紧握的手掌间，尽数溜走。</p><p>岁月如河，此岸是找不回的过往，堆积成簇；彼岸是看不到的未来，铺展成路。无论肩上背负了多少行囊，也总是要启程上路。若行囊沉重，自当脚步凝重，其实过往如烟，你带上，或放下，皆已成空。若能轻装上阵，自当有足够的空间，重新装载新的收获和成长。</p><p>说到底，青春只是一段路程，那是生命启程的春天，匆匆花开一季，自有清香扑鼻。只是，春去自当夏来，夏过自有秋收，秋逾还有冬寒，生命才将沉寂。</p><p>来不及认真的年轻，至少要认真的老去。那一路踏尘而来，就是为了沉淀生命的厚重，那一程风景遍观，亦是为了读懂冷暖温婉。</p><p>一段岁月一风景，一段风景一情怀。守住心底最美的风景，成为一种风度，宁静而致远；守住记忆里最美风景，成为一种境界，悠然而豁达；守住生命中最美风景，成为一种睿智，淡定而从容。</p><p>试想，那秋日下的一壶清茶，品起来，自当多了一份馥郁芳香，那茶，碧而不浮，香而不浓；那水，热而不烫，泽而不郁。就像那经历了岁月洗礼的生命，一张一弛，皆有尺度，不再懵懂，亦不再青涩。</p><p>于是，我们便学会了优雅，越是岁暮流年，越是淡然宽容。用加法去爱人，用减法去怨恨，用乘法去感恩，用除法去解忧。人这一生中，难免会遇到不顺心的事，碰到不顺眼的人，学会原谅，是一种胸怀，学会放下，是一种释怀。它像一把伞，帮助你在雨季里行路，更像一盏灯，照亮你夜行的暗路。</p><p>常常，觉得自己还没来得及在那场桀骜不驯的青春岁月里，尽情驰骋，就已被时光强行推到了致青春的行列。过往迷茫，犹如雾里看花，似懂非懂中，收获了一把年纪。而今，岁月如花，绽放成海，每一处皆是生命最盛情的绽放，摇曳生姿，步步生香。</p><p>于是，生命便也多出了几分用心，几分认真，几分悠闲，几分恬淡。若爱，生活哪里都可爱；若恨，生活哪里都可恨。若感恩，生命处处可感恩；若成长，人生时时可成长。风雨人生，穿越自己，且让我们，把忧伤留给昨天，把微笑刻在脸上。</p>'
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
  