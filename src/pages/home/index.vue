<template>
    <div class='home-index content'>
        <HomeCarousel :data="carousel.list"></HomeCarousel>
        <div class="layout">
            <Row :gutter="76">
              <Col :span="12" v-for="(item,index) in data.list" :key="index">
              <!-- <router-link to='/'> -->
              <div class="role_pic">
                  <div class="solution solve">
                      <div class="layout">
                        <header>
                          <div class="total_title">
                            <span class="line">
                            </span>
                            <span class="title_name">
                              {{item.name || '暂无分类'}}
                            </span>
                            <span class="line">
                            </span>
                            <div class="descript">
                              Announcement
                            </div>
                          </div>
                        </header>
                          <Row :gutter="40">
                            <Col :span="12">
                              <div class="solve_img">
                                <img :src="'/static/img/solve0.png'" alt="">
                              </div>
                              </Col>
                              <Col :span="12" >
                              <div class="solution_detail">
                                <ul class="detail">
                                  <li v-for="(ele,idx) in item.list">
                                    <router-link :to = "`/home/detail/${idx}`">
                                      {{item.content}}
                                    </router-link>
                                  </li>
                                </ul>
                              </div>
                            </Col>
                          </Row> 
                      </div>
                    </div>
              </div>
              </Col>
              <!-- <Col :span="12">
             
                <div class="role_pic">
                    <div class="solution solve">
                        <div class="layout">
                          <header>
                            <div class="total_title">
                              <span class="line">
                              </span>
                              <span class="title_name">
                                {{classifyName[1]}}
                              </span>
                              <span class="line">
                              </span>
                              <div class="descript">
                                Teaching
                              </div>
                            </div>
                          </header>
                            <Row :gutter="80">
                              <Col :span="12">
                                <div class="solve_img">
                                  <img :src="'/static/img/solve1.png'" alt="">
                                </div>
                                </Col>
                                <Col :span="12" >
                                <div class="solution_detail">
                                <ul class="detail">
                                  <li v-for="(item,index) in announcement.list">
                                    {{item.text}}
                                  </li>
                                </ul>
                              </div>
                              </Col>
                            </Row> 
                        </div>
                      </div>
              </div>
              
    
              </Col> -->
              <!-- <Col :span="12">
              <div class="role_pic">
                  <div class="solution solve">
                      <div class="layout">
                        <header>
                          <div class="total_title">
                            <span class="line">
                            </span>
                            <span class="title_name">
                              就业信息
                            </span>
                            <span class="line">
                            </span>
                            <div class="descript">
                              Employment
                            </div>
                          </div>
                        </header>
                          <Row :gutter="40">
                            <Col :span="12">
                              <div class="solve_img">
                                <img :src="'/static/img/solve2.png'" alt="">
                              </div>
                              </Col>
                              <Col :span="12" >
                              <div class="solution_detail">
                                <ul class="detail">
                                  <li v-for="(item,index) in announcement.list">
                                    {{item.text}}
                                  </li>
                                </ul>
                              </div>
                            </Col>
                          </Row> 
                      </div>
                    </div>
              </div>
              </Col> -->
              <!-- <Col :span="12">
             
                <div class="role_pic">
                    <div class="solution solve">
                        <div class="layout">
                          <header>
                            <div class="total_title">
                              <span class="line">
                              </span>
                              <span class="title_name">
                                学院动态
                              </span>
                              <span class="line">
                              </span>
                              <div class="descript">
                                News and Events
                              </div>
                            </div>
                          </header>
                            <Row :gutter="80">
                              <Col :span="12">
                                <div class="solve_img">
                                  <img :src="'/static/img/solve3.png'" alt="">
                                </div>
                                </Col>
                                <Col :span="12" >
                               <div class="solution_detail">
                                <ul class="detail">
                                  <li v-for="(item,index) in announcement.list">
                                    <router-link v-bind="{to:'/home/detail/'+index}">
                                      {{item.text}}
                                    </router-link>
                                  </li>
                                </ul>
                              </div>
                              </Col>
                            </Row> 
                        </div>
                      </div>
              </div>
              </Col> -->
            </Row>
          </div>
    </div>
</template>

<script>
import { Button, Row, Col } from 'element-ui'
import HomeCarousel from '../../components/HomeCarousel.vue'
export default {
  name: 'homeIndex',
  components: {
    Button,
    HomeCarousel,
    Row,
    Col
  },
  data() {
    return {
      data: {
        list: []
      },
      carousel: {
        list: [
          { path: '/static/img/banner01.jpg' },
          { path: '/static/img/banner02.jpg' },
          { path: '/static/img/banner03.jpg' },
          { path: '/static/img/banner04.jpg' }
        ]
      },
      announcement: {
        list: [
          {
            text:
              '关于计算机与信息学院计划招生2018 最深刻的还款记录的撒谎的撒娇卡萨电话卡三等奖哦啊。。。。'
          },
          {
            text:
              '关于计算机与信息学院计划招生2018 最深刻的还款记录的撒谎的撒娇卡萨电话卡三等奖哦啊。。。。'
          },
          {
            text:
              '关于计算机与信息学院计划招生2018 最深刻的还款记录的撒谎的撒娇卡萨电话卡三等奖哦啊。。。。'
          },
          {
            text:
              '关于计算机与信息学院计划招生2018 最深刻的还款记录的撒谎的撒娇卡萨电话卡三等奖哦啊。。。。'
          },
          {
            text:
              '关于计算机与信息学院计划招生2018 最深刻的还款记录的撒谎的撒娇卡萨电话卡三等奖哦啊。。。。'
          },
          {
            text:
              '关于计算机与信息学院计划招生2018 最深刻的还款记录的撒谎的撒娇卡萨电话卡三等奖哦啊。。。。'
          },
          {
            text:
              '关于计算机与信息学院计划招生2018 最深刻的还款记录的撒谎的撒娇卡萨电话卡三等奖哦啊。。。。'
          },
          {
            text:
              '关于计算机与信息学院计划招生2018 最深刻的还款记录的撒谎的撒娇卡萨电话卡三等奖哦啊。。。。'
          },
          {
            text:
              '关于计算机与信息学院计划招生2018 最深刻的还款记录的撒谎的撒娇卡萨电话卡三等奖哦啊。。。。'
          },
          {
            text:
              '关于计算机与信息学院计划招生2018 最深刻的还款记录的撒谎的撒娇卡萨电话卡三等奖哦啊。。。。'
          }
        ]
      }
    }
  },

  created() {
    //获取轮播图
    // http://192.168.1.247:8089/pictures/list
    vm.fetch.get('pictures/list').then(res => {
      this.carousel.list = res.list
    })
    // 获取分类接口
    vm.fetch.get('/classify/findchildren/2').then(res => {
      this.data.list = res
      console.log('分类---》', res)
      let arr = []
      res.forEach((item, index) => {
        let obj = {}
        obj.id = item.id
        obj.name = item.name
        vm.fetch.get('/articles/list?type=' + item.id).then(res => {
          obj.list = res.list
        })
        arr.push(obj)
      })
      console.log('arr:', arr)
      this.data.list = arr
    })
  },
  methods: {}
}
</script>
<style lang='less' scoped>
.home-index {
  > .layout {
    margin: 0 auto;
    max-width: 1366px;
  }
  header {
    height: 160px;
    text-align: center; // line-height: 130px;
    font-family: MicrosoftYaHei;
    font-size: 30px;
    color: #333333;
    display: flex;
    justify-content: center;
    align-items: center;
    .total_title {
      /* width: 446px; */
      height: 60px;
    }
    .line {
      display: inline-block;
      position: relative;
      top: -6px;
      width: 118px;
      height: 1px;
      background-color: #5e5e5d;
    }
    .descript {
      margin-top: 15px;
      font-family: MicrosoftYaHei;
      font-size: 18px;
      color: #999999;
    }
    .title_name {
      position: relative;
      margin: 0 35px;
    }
    .title_name:before,
    .title_name:after {
      content: '';
      position: absolute;
      top: 20px;
      display: block;
      width: 10px;
      height: 10px;
      background-color: #fec002;
      transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      /* IE 9 */
      -moz-transform: rotate(45deg);
      /* Firefox */
      -webkit-transform: rotate(45deg);
      /* Safari 和 Chrome */
      -o-transform: rotate(45deg);
      /* Opera */
    }
    .title_name:before {
      left: -24px;
    }
    .title_name:after {
      right: -19px;
    }
  }
  /* margin-top:80px; */
  .solution.solve {
    background-color: #fff;
    padding-bottom: 70px;
    .layout {
      .el-row {
        .el-col-12 {
          overflow: hidden;
        }
      }
    }
    .solve_img {
      height: 240px;
      img {
        height: 100%;
      }
    }
    .solution_detail {
      .detail {
        font-family: MicrosoftYaHei;
        font-size: 16px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 24px;
        letter-spacing: 0px;
        color: #333333;
        // margin-bottom: 40px;
        li {
          text-indent: 2em;
          font-size: 14px;
          position: relative;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          &:before {
            content: '';
            display: inline-block;
            height: 5px;
            width: 5px;
            position: absolute;
            left: 10px;
            top: 10px;
            background-color: #51afc9;
            border-radius: 50%;
          }
        }
      }
      h4 {
        font-family: MicrosoftYaHei;
        font-size: 20px;
        letter-spacing: 0px;
        color: #333333;
        margin-bottom: 15px;
      }
      p {
        font-family: MicrosoftYaHei;
        font-size: 16px;
        line-height: 30px;
        letter-spacing: 0px;
        color: #999999;
      }
    }
  }
}
</style>