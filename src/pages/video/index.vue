<template>
    <div class='videomanage content'>
      <div class="content-title">视频列表<Button type="primary"><i class="iconfont icon-jiahao"></i>新建视频</Button></div>
       <!-- 搜索 -->
      <div class="time_search">
        <div class="search kind">
          <!-- <h2>搜索：</h2> -->
          <Input placeholder="请输入直播专题名称" style="width: 378px;" v-model="seek.topicsName"/>
        </div>
        <div class="block">
          <DatePicker
            v-model="value5"
            type="datetimerange"
            range-separator="至"
            start-placeholder="开始时间"
            end-placeholder="结束时间"
            align="left"
            @change="schedule"
            >
          </DatePicker>
          <Button  icon="el-icon-search" style="margin-left: 67px;background:#51c5ff;color:#fff;" @click='search'>搜索</Button>
          <Button  icon="el-icon-refresh" style="margin-left:40px;background:#ecf5ff"   @click="reset">重置</Button>
        </div>
      </div>
            <!-- 课程card   -->
      <div class="offlind_card">
        <Row class="row-bg">
          <Col :span="6" v-for="(item,index) in  data.list" :key="item.id">
            <Card>
              <!-- <img src="~examples/assets/images/hamburger.png" class="image"> -->
              <div class="offlind_info" @click="$router.push({path: 'detail',query: { id: item.id}})">
                <span><img :src="item.homeImg" alt=""></span>
                <div class="offlind_name">
                  <div class="offlind_course_name">
                    <p>{{item.name}}</p>
                    <p style="color:#ff8f5d;text-align:right;">{{item.salePrice>0?item.salePrice+'元':'免费'}}</p>
                  </div>
                  <div class="offlind_inter">
                    <span v-for="tag in (item.labels||'').split(/[,，]/)">{{tag}}</span>
                  </div>
                </div>
                <div class="bottom">
                  <div class="detail">
                    <dl>
                     <dd class="detailD"><img :src="item.teacherPic" alt=""><span><i class="iconfont icon-v"></i></span></dd>
                     <dt><span>{{item.teacherName}}</span><span>{{item.teacherLevel}}</span></dt>
                    </dl>
                  </div>
                  <div class="likenum">
                    <dl>
                      <dt><i class="iconfont icon-zan"></i></dt>
                      <dd>{{item.followCount}}</dd>
                    </dl>
                  </div>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
        <!-- <Row type="flex" class="row-bg" justify="space-around">

        </Row> -->
          <!-- <MyPagination :page="data.page" :pageSize="data.pageSize" :pageSizes="[8]" :total="data.total" :method="findList"/> -->
      </div>
      <!-- <MyPagination :page="data.page" :pageSize="data.pageSize" :pageSizes="[8]" :total="data.total" :method="findList"/> -->
    </div>
</template>

<script>
import { 
  Button,
  Carousel,
  CarouselItem,
  Icon,
  Row,
  Col,
  Input,
  DatePicker,
  Table,
  TableColumn,
  Card,
  } from 'element-ui';
import MyPagination from '../../components/MyPagination.vue'
export default {
    name: 'videomanage',
    components: {
      Button,
      CarouselItem,
      Icon,
      Carousel,
      Row,
      Col,
      Input,
      DatePicker,
      Table,
      TableColumn,
      Card,
      MyPagination
    },
    data () {
		return {
      value5: "",
      seek:{
        page: 1,
        pageSize: 8,
        topicsName: null,//搜索
      },
      data: {list:[{courseCatelogId: 0, followCount: 0, grade: "", gradeName: "",
       id: 11, abels: '优势', name: "视频专题名称", salePrice: 0, subject: "", subjectName: "",
       teacherId: 111, teacherLevel: "中级老师", teacherName: "问问", teacherPic: "" },
       {courseCatelogId: 0, followCount: 0, grade: "", gradeName: "",
       id: 11, abels: '优势', name: "视频专题名称", salePrice: 0, subject: "", subjectName: "",
       teacherId: 111, teacherLevel: "中级老师", teacherName: "问问", teacherPic: "" },
       {courseCatelogId: 0, followCount: 0, grade: "", gradeName: "",
       id: 11, abels: '优势', name: "视频专题名称", salePrice: 0, subject: "", subjectName: "",
       teacherId: 111, teacherLevel: "中级老师", teacherName: "问问", teacherPic: "" },
       {courseCatelogId: 0, followCount: 0, grade: "", gradeName: "",
       id: 11, abels: '优势', name: "视频专题名称", salePrice: 0, subject: "", subjectName: "",
       teacherId: 111, teacherLevel: "中级老师", teacherName: "问问", teacherPic: "" },
       {courseCatelogId: 0, followCount: 0, grade: "", gradeName: "",
       id: 11, abels: '优势', name: "视频专题名称", salePrice: 0, subject: "", subjectName: "",
       teacherId: 111, teacherLevel: "中级老师", teacherName: "问问", teacherPic: "" },
       {courseCatelogId: 0, followCount: 0, grade: "", gradeName: "",
       id: 11, abels: '优势', name: "视频专题名称", salePrice: 0, subject: "", subjectName: "",
       teacherId: 111, teacherLevel: "中级老师", teacherName: "问问", teacherPic: "" }]} 

		}
    },

    created () {
        vm.config.title("视频管理");
    },

    methods: {
      schedule() {

      },
      search() {

      },
     reset() {

     } 

	}
}
</script>
<style lang='sass' scoped>
  .videomanage
    .content-title
      display: flex
      justify-content: space-between
      padding-right: 26px
      align-items: center
    .time_search 
      height: 74px
      line-height: 74px
      background-color: #fff
      font-size: 18px
      display: flex
      align-items: center;
      margin-bottom: 20px
    .offlind_card
      .row-bg 
        margin-left: -12px
        margin-right: -12px
      .offlind_info
        width: 100%
        height: auto
        border-radius: 5px
        box-shadow: 1px 10px 7px #e8f6ff
        background: #fff
        cursor: pointer
        > span 
          display: inline-block
          width: 100%
          height: 120px
          img 
            vertical-align: top
            width: 100%
            height: 100%
        .offlind_name 
          position: relative
          padding: 0 10px
          .offlind_course_name 
            text-align: left
            color: #434343
            width: 100%
            height: 55px
            font-size: 16px
            line-height: 26px
            margin-top: 15px
            font-weight: bold
            overflow: hidden
            text-overflow: ellipsis
            display: -webkit-box
            -webkit-box-orient: vertical
            -webkit-line-clamp: 2
            display: flex
            justify-content: space-between
            align-items: center
            > p 
              width: 162px
              overflow: hidden
              text-overflow: ellipsis
              display: -webkit-box
              -webkit-box-orient: vertical
              -webkit-line-clamp: 2
          .offlind_inter 
            display: flex
            flex-flow: wrap
            justify-content: flex-start
            overflow: hidden
            width: 250px
            height: 68px
            align-items: center
            span 
              display: inline-block
              color: #5cbefc
              width: 70px
              height: 24px
              text-align: center
              line-height: 24px
              background-color: #e4f4ff
              border-radius: 5px
              margin-right: 10px
              margin-bottom: 10px
              font-size: 12px
          .appling 
            width: 80px
            height: 30px
            line-height: 30px
            text-align: center
            font-size: 12px
            padding: 0
        .bottom 
          padding: 0 10px 20px
          display: flex
          align-items: center
          justify-content: space-between
          .detail 
            display: inherit
            dl 
              display: inherit
              align-items: center
              dd 
                width: 40px
                height: 40px
                border-radius: 50%
                background-color: #ccbcab
              .detailD 
                position: relative
                >img
                    width: 100%
                    height: 100%
                    border-radius: 50%  
                > span 
                  position: absolute
                  width: 15px
                  height: 15px
                  display: inline-block
                  text-align: center
                  bottom: -1px
                  right: -2px
                  background: #4ab7fc
                  border-radius: 50%
                  line-height: 15px
                  .iconfont 
                    color: #fff
                    font-size: 12px
              dt > span:nth-of-type(1)
                color: #333333
                font-size: 14px
                margin-right: 10px
                margin-left: 13px
              dt > span:nth-of-type(2)
                color: #ffa42f
                font-size: 12px
          .likenum
            font-size: 18px
            color: #333333
            display: inherit
            dl
              display: inherit
              align-items: center
              .iconfont
                color: #aaaaaa
                font-size: 18px
</style>
<style lang="sass">
.videomanage
  .el-card
    border: none
    border-radius: none
    background: none
  .el-card.is-always-shadow 
    box-shadow: none
  .el-date-editor--datetimerange.el-input__inner
    width: 100%
  .el-date-editor .el-range-separator
    padding: 0px
  .search
    height: 74px
    display: flex
    align-items: center
    background-color: #fff
    padding-left: 30px
    .el-input
      width: 276px !important
      .el-input__inner
        font-size: 16px;
        height: 46px;
    .el-input__inner
      border-radius: 20px !important;
  .block 
    margin-left: 40px
    .el-date-editor
      width: 400px
      height: 46px
      border-radius: 20px
      .el-range-input 
        font-size: 16px
    .el-range-separator
      width: 10%
    .el-button
      font-size: 16px
      margin-left: 10px !important
  .offlind_card
    .row-bg 
      .el-card__body 
        padding: 0 12px 20px
</style>

