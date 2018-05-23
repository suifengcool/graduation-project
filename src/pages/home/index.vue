<template>
  <div class='home-index content'>
    <HomeCarousel :data="carousel.list"></HomeCarousel>
    <div class="layout">
      <Row :gutter="76">
        <Col :span="12" v-for="(item,index) in dataList" :key="index">
          <div class="role_pic">
            <div class="solution solve">
              <div class="layout">
                <header>
                  <div class="total_title">
                    <span class="line"></span>
                    <span class="title_name">
                      {{item.name}}
                    </span>
                    <span class="line"></span>
                  </div>
                </header>
                <Row :gutter="40">
                  <Col :span="12"><div class="solve_img"><img :src="dataList.solveImg[index]" alt=""></div></Col>
                  <Col :span="12">
                    <div class="solution_detail">
                      <ul class="detail">
                        <li v-for="(ele,idx) in item.list" :key="idx">
                          <router-link :to="`/home/detail/${ele.id}`">
                            <span   v-html="ele.content" ></span>                     
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
      </Row>
    </div>
  </div>
</template>

<script>
  import {
    Button,
    Row,
    Col
  } from 'element-ui'
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
        dataList: [{
          id: null,
          name: '',
          list: [],
          solveImg: []
        }],
        carousel: {
          list: []
        },
        // solveImg: []
      }
    },

    created() {
      //获取轮播图
      vm.fetch.get('pictures/list?type=1').then(res => {
        this.carousel.list = res.list
      })
      

      this.dataList = []
      // 获取分类接口
      vm.fetch.get('/classify/findchildren/2').then(res => {
        
        res.forEach((item, index) => {
          let obj = {}
          obj.id = item.id
          obj.name = item.name
           console.log(222,item);
          vm.fetch.post('/articles/list',{
            type: obj.id,
            page: 1,
            pageSize: 10
          }).then(res => {
            obj.list = res.list
            console.log(111,obj);
            
            this.dataList.push(obj)
          })
          //获取首页图
          vm.fetch.get('pictures/list?type=2').then(res => {
            this.dataList.solveImg = res.list.map(item=>{
              return item.path
            })
            this.dataList.solveImg 
          })
        })

        console.log('this.dataList:',this.dataList)
      })
    },
    methods: {

    },
  }

</script>
<style lang='less' scoped>
  .home-index {
    >.layout {
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
          color: #333333; // margin-bottom: 40px;
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
