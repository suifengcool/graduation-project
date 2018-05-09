<template>
    <div class="homeCollegeDetail main">
      <!-- 我是学训宝学院详情页，对应的是无线联盟的案例详情页 -->
          <div class="banner_01">
           <!--<h3>{{ item.name }}</h3>-->
            <div class="news">
                <ul>
                  <li v-for="(item,i) in news" :key="i" @click="detail(item.id)" :class="{'el-icon-arrow-right':true,'active':item.id==activeId}">
                    <!-- <router-link :to="``">
                      <span   v-html="ele.content" ></span>                     
                    </router-link> -->
                    {{item.name}}
                  </li>
                </ul>
            </div>
          </div>
        <!--</el-carousel-item>-->
      <!--</el-carousel>-->
      <!--</div>-->
      <div class='backward' @click="$router.go(-1)">
        <i class="el-icon-arrow-left"></i><span>返回上一级</span>
      </div>
      <div class="details">
        <h2>{{caseInfo.title}}</h2>
        <div class="author">作者 :{{caseInfo.author}}</div>
        <img :src="caseInfo.url || '/static/img/solve5.png'" alt="" onerror="onerror=null;src='/static/img/solve5.png'">
        <div class="description" v-html="caseInfo.content">
        </div>
      </div> 
    </div>
  </template>
  <script>
import { Button, Carousel, CarouselItem } from "element-ui";
export default {
  name: "homeCollege",
  components: {
    Button,
    CarouselItem,
    Carousel
  },

  data() {
    return {
      id: this.$route.params.id,
      flag: this.$route.query.id,
      newsNum: {},
      news: [],
      caseInfo: {
        title: "",
        author: "小可爱",
        url: "",
        content: ""
      },
      activeId: ""
    };
  },

  created() {
    // 获取详情
    if (this.flag) {
      vm.fetch.get("/classify/getLevel/" + this.id).then(res => {
        this.news = res;
        vm.fetch.get("/classify/findchildren/" + this.news[0].id).then(res => {
          this.caseInfo = res.list[0];
        });
      });
    } else {
      vm.fetch.get("/articles/" + this.id).then(res => {
        console.log("this.id", this.id);
        if (res.data) {
          this.caseInfo = res.data;
        }
      });
    }
  },

  methods: {
    detail(id) {
      this.activeId = id;
      vm.fetch.get("/articles/list?type=" + id).then(res => {
        console.log(res, 7777);
        // this.news=res
        this.caseInfo = res.list[0];
        console.log(this.newsNum, "ooooo");
      });
    }
  },
  watch: {
    $route(to, from) {
   console.log(to,from)
       if (this.flag) {
      vm.fetch.get("/classify/getLevel/" + this.$route.params.id).then(res => {
        this.news = res;
        vm.fetch.get("/classify/findchildren/" + this.news[0].id).then(res => {
          this.caseInfo = res.list[0];
        });
      });
    } else {
      vm.fetch.get("/articles/" + this.$route.params.id).then(res => {
        console.log("this.id", this.$route.params.id);
        if (res.data) {
          this.caseInfo = res.data;
        }
      });
    }
    }
  }
};
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
  <style lang="scss">
.homeCollegeDetail {
  margin-top: 80px;
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
    width: 1903px;
    height: 400px;
    // background-image: url('/static/img/banner02.jpg');
    // background-size: cover;

    .news {
      width: 1366px;
      margin: 0 auto;
      // background: red;
      height: 400px;
      display: flex;
      justify-content: space-around;
      flex-direction: column;
      ul {
        padding-left: 50px;
        li {
          margin-bottom: 20px;
          display: block;
          cursor: pointer;
        }
        .active {
          font-size: 20px;
          font-weight: bold;
        }
      }
    }
  }
}
</style>
  