<template>
    <div class='videomanage content'>
      <div class="content-title">视频列表<Button type="primary"  round @click=""><i class="iconfont icon-jiahao"></i>新建视频</Button></div>
      <div class="table_content">
        <Table :data="option.list">
          <TableColumn prop="acount" label="视频名称"/>
          <TableColumn prop="url" label="视频地址" />
          <TableColumn prop="password" label="分类"/>
          <TableColumn prop="createTime" label="创建时间"/>           
          <TableColumn label="操作" width="240" fixed="right">
            <template slot-scope="scope">
              <Button type="primary" plain size="small" @click="edit(scope.row)">编辑</Button>
              <Button type="danger" plain size="small" @click="del(scope.row)" >删除</Button>
            </template>
          </TableColumn>
        </Table>
      </div>
        <Dialog :visible.sync="dialogFormVisible" :append-to-body="true" custom-class="dialogone">
          <Form :model="formOption" label-position="right" label-width="80px">
            <FormItem label="视频名称" >
              <Input v-model="formOption.acount" />
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
      seek:{
        page: 1,
        pageSize: 8,
        topicsName: null,//搜索
      },
      formOption: {},
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
      },
      schedule() {

      },
      search() {

      },
     reset() {

     },
     save() {

     },
     successIdCardBack2() {

     },
    success2() {

    },
    successIdCardBack2() {

    },
    del() {
       MessageBox.confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
          center: true
        }).then(() => {
          // delgoodsCategory(res.id).then((data)=>{ //获取商品分类
          //  if(data.code==815||data.code==811){
          //     return;
          //   }
          //   this.init()
             vm.$message({
              type: 'success',
              message: '删除成功!'
            });
          // });
        }).catch(() => {
          vm.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
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


