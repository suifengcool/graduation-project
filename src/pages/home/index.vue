<template>
    <div class='home-index content'>
        <HomeCarousel :data="carousel.list"></HomeCarousel>
        <div class="layout">
            <Row :gutter="76">
              <Col :span="12">
              <!-- <router-link to='/'> -->
              <div class="role_pic">
                  <div class="solution solve">
                      <div class="layout">
                        <header>
                          <div class="total_title">
                            <span class="line">
                            </span>
                            <span class="title_name">
                              公告信息
                            </span>
                            <span class="line">
                            </span>
                            <div class="descript">
                              Announcement
                            </div>
                          </div>
                        </header>
                          <Row :gutter="80">
                            <Col :span="12">
                              <div class="solve_img">
                                <img :src="'/static/img/solve0.png'" alt="">
                              </div>
                              </Col>
                              <Col :span="12" >
                              <div class="solution_detail">
                                <div class="detail">
                                  <!-- {{data.detail}} -->方案描述方案描述方案描述方案描述方案描述方案描述方案描述方案描述
                                </div>
                                <h4>
                                  方案描述
                                </h4>
                                <p>
                                 <!-- {{data.descript}} -->方案描述方案描述方案描述方案描述方案描述
                                </p>
                              </div>
                            </Col>
                          </Row> 
                      </div>
                    </div>
              </div>
              <!-- </router-link> -->
              </Col>
              <Col :span="12">
             
                <div class="role_pic">
                    <div class="solution solve">
                        <div class="layout">
                          <header>
                            <div class="total_title">
                              <span class="line">
                              </span>
                              <span class="title_name">
                                本科教务
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
                                  <div class="detail">
                                    <!-- {{data.detail}} -->方案描述方案描述方案描述方案描述方案描述方案描述方案描述方案描述
                                  </div>
                                  <h4>
                                    方案描述
                                  </h4>
                                  <p>
                                   <!-- {{data.descript}} -->方案描述方案描述方案描述方案描述方案描述
                                  </p>
                                </div>
                              </Col>
                            </Row> 
                        </div>
                      </div>
              </div>
              
    
              </Col>
              <Col :span="12">
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
                          <Row :gutter="80">
                            <Col :span="12">
                              <div class="solve_img">
                                <img :src="'/static/img/solve2.png'" alt="">
                              </div>
                              </Col>
                              <Col :span="12" >
                              <div class="solution_detail">
                                <div class="detail">
                                  <!-- {{data.detail}} -->方案描述方案描述方案描述方案描述方案描述方案描述方案描述方案描述
                                </div>
                                <h4>
                                  方案描述
                                </h4>
                                <p>
                                 <!-- {{data.descript}} -->方案描述方案描述方案描述方案描述方案描述
                                </p>
                              </div>
                            </Col>
                          </Row> 
                      </div>
                    </div>
              </div>
              </Col>
              <Col :span="12">
             
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
                                  <div class="detail">
                                    <!-- {{data.detail}} -->方案描述方案描述方案描述方案描述方案描述方案描述方案描述方案描述
                                  </div>
                                  <h4>
                                    方案描述
                                  </h4>
                                  <p>
                                   <!-- {{data.descript}} -->方案描述方案描述方案描述方案描述方案描述
                                  </p>
                                </div>
                              </Col>
                            </Row> 
                        </div>
                      </div>
              </div>
              </Col>
            </Row>
          </div>
    </div>
</template>

<script>
import { Button,Row,Col} from 'element-ui'
import HomeCarousel from '../../components/HomeCarousel.vue'
export default {
    name: 'homeIndex',
    components: {
      Button,
      HomeCarousel,
      Row,
      Col
    },
    data () {
		return {
      carousel:{
        list:[
        {imgUrl:'/static/img/banner01.jpg'},
        {imgUrl:'/static/img/banner02.jpg'},
        {imgUrl:'/static/img/banner03.jpg'},
        {imgUrl:'/static/img/banner04.jpg'},

        ],
      },
		}
    },

    created () {
    },

    methods: {

	}
}
</script>
<style lang='less' scoped>
  .home-index{
    >.layout{
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
    .layout{
      .el-row{
        .el-col-12{
          overflow: hidden;
        }
      }
    }
    .solve_img {
      height: 250px;
      img {
        height: 100%;
      }
    }
    .solution_detail {
      padding-top: 33px;
      .detail {
        font-family: MicrosoftYaHei;
        font-size: 16px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 28px;
        letter-spacing: 0px;
        color: #333333;
        margin-bottom: 40px;
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