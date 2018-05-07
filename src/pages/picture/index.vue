<template>
  <div class='picture'>
    <div class="content-title">图片管理<Button type="primary"  round class="add" @click="add">新增管理员</Button></div>
    <div class="table_content">
      <Table :data="option.list">
        <TableColumn prop="name" label="图片名称"/>
        <TableColumn prop="imgUrl" label="封面图" min-width="210">
          <template slot-scope="scope">
            <ImgView :src="scope.row.imgUrl" width="187.5" height="103.5"/>
          </template>
        </TableColumn>
        <TableColumn prop="size" label="图片大小" />
        <TableColumn prop="type" label="图片格式"/>
        <TableColumn prop="createTime" label="创建时间"/>
        <TableColumn label="操作" width="240" fixed="right">
          <template slot-scope="scope">
            <Button type="primary" plain size="small" @click="edit(scope.row)">编辑</Button>
            <Button type="danger" plain size="small" @click="del(scope.row)" >删除</Button>
          </template>
        </TableColumn>
      </Table>
    </div>
    <div class="log">
      <Dialog :visible.sync="show" :append-to-body="true" class="dialog" :title="title">
        <Form :model="formOption" label-position="right" label-width="80px">
          <FormItem label="图片名称" >
            <Input v-model="formOption.name"/>
          </FormItem>
          <FormItem label="上传图片"  prop="imgUrl">
            <div class="img_box">
              <Avatar defaultPic="/static/admin.png" width="333" height="180" @success="success" method="success"/>
            </div>
            <Tag type="danger" style="margin-top: 30px">封面图建议宽高比：1.8：1，建议尺寸：750px*414px</Tag>
          </FormItem>
          <FormItem label="图片大小"  prop="size">
            <Input v-model="formOption.size"/>
          </FormItem>
          <FormItem label="图片格式"  prop="type">
            <Input v-model="formOption.type"/>
          </FormItem>
        </Form>
        <div slot="footer" class="dialog-footer">
          <Button @click="hide">取消</Button>
          <Button type="primary" @click="save">确定修改</Button>
        </div>
      </Dialog >
    </div>

  </div>
</template>

<script>
  import { Button,Table,TableColumn,Input,Dialog,Form,Upload,FormItem,Tag} from 'element-ui';
  import Avatar from '../../components/Avaters.vue'
  import ImgView from '../../components/ImgView.vue'

  export default {
    name: 'user',
    components: {
      Button,
      Table,
      TableColumn,
      Input,
      Dialog,
      Form,
      FormItem,
      Upload,
      Avatar,
      ImgView,
      Tag
    },
    data () {
      return {
        title:'',
        show:false,
        imgUrl:'',
        formOption:{
          name:'',
          imgUrl:'',
          size:'',
          type:'',
          id:''
        },
        option:{
          list:[
            {name:'小可爱1',imgUrl:'isName',size:'10k',type:'png',createTime:'2018.5.6',id:1},
            {name:'小可爱2',imgUrl:'isName',size:'10k',type:'png',createTime:'2018.5.6',id:2},
            {name:'小可爱3',imgUrl:'isName',size:'10k',type:'png',createTime:'2018.5.6',id:3},
            {name:'小可爱4',imgUrl:'isName',size:'10k',type:'png',createTime:'2018.5.6',id:4},
          ]
        },
        roles:[]
      }
    },

    created () {
      this.formOption={
        name:'',
        imgUrl:'',
        size:'',
        type:'',
        id:''
      }
    },

    methods: {
      add(){
        this.show=true
        this.title="新增"

        this.formOption={
          name:null,
          imgUrl:null,
          size:null,
          type:null,
          id:null
        }
      },
      edit(row){
        this.title="编辑"
        this.formOption={
          name:row.name,
          imgUrl:row.imgUrl,
          size:row.size,
          type:row.type,
          id:row.id
        }

        this.show = true
      },
      del(row){

      },
      hide(){
        this.show=false
      },
      save(){

        this.show=false
      },
      //获取图片
      successFun(data) {
        this.imgUrl = URL.createObjectURL(data.raw);
      },
      // 上传监听
      success(val){
        this.formOption.imgUrl  = val
        this.$refs.formOption && this.$refs.formOption.fields && this.$refs.formOption.fields[4].clearValidate()
      },



    }
  }
</script>
<style lang="less">
  .picture{
    .content-title{
      .add{
        position: relative;
        /*right:-75%;*/
      }
    }
    .table_content{
      text-align: center ;
    }

    .table_content thead th{
      text-align: center;
    }
  }
  .el-dialog{
    /*width:25% !important;*/
    .el-form{
      .el-form-item{
        .img_box {
          width: 100%;
          height: 180px;
        }
        .example {
          width: 150px;
          height: 120px;
          margin-top: 60px;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }

    }
    .dialog-footer{
      text-align: center;
    }
  }

</style>

