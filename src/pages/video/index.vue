<template>
    <div class='videomanage content'>
      <div class="content-title">视频列表<Button type="primary"  round @click="newput"><i class="iconfont icon-jiahao"></i>新建视频</Button></div>
      <div class="table_content">
        <Table :data="data.list">
          <TableColumn prop="id" label="id"/>
          <TableColumn prop="name" label="视频名称"/>
          <TableColumn prop="videoUrl" label="视频地址" />
          <TableColumn prop="userId" label="管理员id"/>
          <TableColumn prop="classifyId" label="分类id"/>
          <TableColumn prop="createTime" label="创建时间"/>
          <TableColumn prop="updateTime" label="创建时间"/>                
          <TableColumn label="操作" width="240" fixed="right">
            <template slot-scope="scope">
              <Button type="primary" plain size="small" @click="edit(scope.row)">编辑</Button>
              <Button type="danger" plain size="small" @click="del(scope.row.id)" >删除</Button>
            </template>
          </TableColumn>
        </Table>
      </div>
        <Dialog :visible.sync="dialogFormVisible" :append-to-body="true" custom-class="dialogone">
          <Form :model="formOption" label-position="right" label-width="80px" :ref="ruleForm">
            <FormItem label="视频名称" >
              <Input v-model="formOption.name"/>
            </FormItem>
            <FormItem label="分类">
              <Select v-model="value" placeholder="请选择">
                <Option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </Option>
              </Select>
            </FormItem>
            <FormItem label="上传视频">
              <Col :span="24">
                <div class="uploadimgShow">
                  <UploadFile :defaultPic="formOption.videoUrl || ''" method="success2" width='100%' height="180" @success2="successIdCardBack2"></UploadFile>
                </div>
              </Col>
            </FormItem>                
          </Form> 
          <div slot="footer" class="dialog-footer">
          <Button @click="admin.show = false">取消</Button>
          <Button type="primary" @click="save">确定</Button>
          </div>
        </Dialog >

        <!-- 分页 -->
        <div class="pre_search">
            <MyPagination 
                :page="data.pageNum" 
                :pageSize="data.pageSize" 
                :pageSizes="[10]" 
                :total="data.total" 
                :method='getData' />
        </div>
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
  Dialog,
  Form,
  FormItem,
  Select,
  Option,
  MessageBox 
  } from 'element-ui';
import MyPagination from '../../components/MyPagination.vue'
import UploadFile from '../../components/UploadFile.vue'
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
      MyPagination,
      Dialog,
      Form,
      FormItem,
      Select,
      Option,
      UploadFile,
      MessageBox 
    },
    data () {
		return {
      value5: "",
      title: '新建',
      seek:{
        page: 1,
        pageSize: 8,
        topicsName: null,//搜索
      },
      data:{
        pageNum:1,
        pageSize:10,
        total:null,
        list:[],  
      },
      formOption: {
        acount: '',
        videoUrl: '' 
      },
      dialogFormVisible: false,
      options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
      value: '',
      option:{
        list:[
          {acount:15827605599,url:'http://www.baidu.com',password:'......',createTime:'2018.5.6',id:1},
          {acount:15827605599,url:'http://www.baidu.com',password:'......',createTime:'2018.5.6',id:2},
          {acount:15827605599,url:'http://www.baidu.com',password:'.....',createTime:'2018.5.6',id:3},
          {acount:15827605599,url:'http://www.baidu.com',password:'......',createTime:'2018.5.6',id:4},
        ]
      }
		}
    },

    created () {
        vm.config.title("视频管理");
    },

    methods: {
      edit() {
        this.dialogFormVisible = true 
        this.title = '编辑'

      },
      // 新建
      newput(){
        this.dialogFormVisible = true 
        this.title = '新建'
      },
     save() {
          this.dialogFormVisible = false 
          console.log(this.title)
          if(this.title == '新建')
          {

          }
          
     },
     getData(){
        vm.fetch.get(`/video/list?page=${this.data.pageNum}&pageSize=${this.data.pageSize}`).then(data=>{
         console.log(data)
         this.data = {data}
      })
     },
     successIdCardBack2(val) {
       this.formOption.videoUrl = val
     },
    successIdCardBack2() {

    },
    del(id) {
          MessageBox.confirm(`你删除?`, 'warning', '取消确认')
    .then(() =>
        vm.fetch.delete(`/video/delete${id}`)
        .then(res=>{
            if(res && res.resultCode === 200){
                vm.$message({
                    type: 'success',
                    message: '删除成功',
                    duration: 1000
                })
            }
        })
        .catch(({ msg }) => error(msg || '取消失败！请稍后重试...'))
    )
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
</style>
<style lang="sass">
.videomanage
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
.dialogone
  width: 600px !important;  
</style>


