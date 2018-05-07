<template>
    <div class='user'>
       <div class="content-title">管理员列表<Button type="primary"  round class="add" @click="add">新增管理员</Button></div>
       <div class="table_content">
         <Table :data="option.list">
            <TableColumn prop="acount" label="账号"/>
            <TableColumn prop="name" label="姓名" />
            <TableColumn prop="userImg" label="头像">
              <template slot-scope="scope">
                <span class="img_box"><img :src="scope.row.userImg" alt=""></span>
              </template>
            </TableColumn>
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
              <Dialog :visible.sync="dialogFormVisible" :append-to-body="true"  :center="true" class="user_log">
               <Form :model="formOption" label-position="right" label-width="80px">
                 <Avaters :defaultPic="formOption.userImg"  method="success" @success="getImg" width='100' height="100"></Avaters>
                 <FormItem label="账号" >
                    <Input v-model="formOption.acount" disabled/>
                 </FormItem>
                 <FormItem label="新密码">
                    <Input v-model="formOption.password"/>
                 </FormItem>                
              </Form> 
               <div slot="footer" class="dialog-footer">
                <Button>取消</Button>
                <Button type="primary" @click="save">确定修改</Button>
               </div>
            </Dialog >
            <Dialog :visible.sync="addNumber" :append-to-body="true" :center="true" class="user_log">
               <Form :model="addOption" status-icon label-position="right" label-width="80px" :rules="FormRules" ref="addOption">
                  <Avaters :defaultPic="addOption.userImg || 'http://www.qqzhi.com/uploadpic/2014-10-08/210702213.jpg'"  method="success1" @success1="getImg1" width='100' height="100"></Avaters>
                 <FormItem label="账号" prop="acount">
                    <Input v-model="addOption.acount"  placeholder="请输入账号"/>
                 </FormItem>
                 <FormItem label="密码" prop="pwd">
                    <Input v-model="addOption.pwd"  placeholder="请输入密码"/>
                 </FormItem>
                 <FormItem label="确认密码" prop="surePwd">
                    <Input v-model="addOption.surePwd" placeholder="请在次输入密码"/>
                 </FormItem>                
              </Form> 
               <div slot="footer" class="dialog-footer">
                <Button @click="AddClear">取消</Button>
                <Button type="primary" @click="addAcount">确定添加</Button>
               </div>
            </Dialog >
        </div>
        
    </div>
</template>

<script>
import Avaters from "../../components/Avaters.vue"
import { Button,Table,TableColumn,Input,Dialog,Form,FormItem} from 'element-ui';
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
      Avaters
    },
    data () {
		return {
      dialogFormVisible:false,
      addNumber:false,
      formOption:{
        id:null,
        acount:null,
        userImg:null,
        password:null,
      },
      addOption:{
        acount:null,
        pwd:null,
        surePwd:null,
        userImg:null,
      },
      FormRules:{
        pwd:[{ 
           required: true,
          validator:  (rule, value, callback)=>{
           if(!value){
              callback(new Error('请输入密码'));
           }else if(this.addOption.surePwd !== ''){
              this.$refs.addOption.validateField('surePwd');
           }
           callback() 
        },
        trigger: 'blur',
       
        }],
        surePwd:[ {
            required: true,
           validator: (rule, value, callback)=>{
            if (!value) {
              callback(new Error('请再次输入密码'));
            } else if (value !== this.addOption.pwd) {
              callback(new Error('两次输入密码不一致!'));
            } else {
              callback();
            } 
        } , 
        trigger: 'blur' ,      
         }],
        acount:[{
          required: true,
          validator:(rule, value, callback)=>{
            if(!value){
               callback(new Error('请输入账号')); 
            }else{
              callback();
            }  
          },
          trigger: 'blur' ,
          }]
      },
      option:{
        list:[
          {acount:15827605588,name:'isName',userImg:'http://cdn.duitang.com/uploads/item/201409/08/20140908120442_vBjPY.thumb.700_0.jpeg',createTime:'2018.5.6',id:1},
          {acount:15827605599,name:'isName',userImg:'http://cdn.duitang.com/uploads/item/201409/08/20140908120442_vBjPY.thumb.700_0.jpeg',createTime:'2018.5.6',id:2},
          {acount:15827605529,name:'isName',userImg:'http://cdn.duitang.com/uploads/item/201409/08/20140908120442_vBjPY.thumb.700_0.jpeg',createTime:'2018.5.6',id:3},
          {acount:15827605566,name:'isName',userImg:'http://cdn.duitang.com/uploads/item/201409/08/20140908120442_vBjPY.thumb.700_0.jpeg',createTime:'2018.5.6',id:4},
        ]
      }
		}
    },

    created () {
    },

    methods: {
     edit(option){
       this.dialogFormVisible = true;
       this.formOption.acount = option.acount;
       this.formOption.id = option.id;
       this.formOption.userImg = option.userImg;
     },
     del(){

     },
     save(){
       console.log("formOption",this.formOption.acount,this.formOption.password,this.formOption.id) 
     },
     add(){
       this.addNumber = true;
        
     },
     addAcount(){
       this.$refs.addOption.validate((valid)=>{
          if(valid){
           alert("can add")
          }else{
            return false
          }  
        })
     },
     getImg(url){
        this.formOption.userImg = url
     },
     getImg1(url){
       this.addOption.userImg = url
     },
     AddClear(){
       this.addOption = {};
       this.addNumber = false;
       this.$refs.addOption.clearValidate()
     } 
	}
}
</script>
<style lang="less">
  .user_log{
    .el-dialog{
      width: 450px;
    }
    .avatar_box{
      position: relative;
      margin:auto;
    }
  }
  .user{
      .table_content{
       text-align: center;
       .img_box{
         width: 80px;
         height: 80px;
         display: inline-block;
         img{
           width:100%;
           height:100%;
         }
       }
     }
     .table_content thead th{
       text-align: center;
     }
    .el-dialog__wrapper{
        .el-dialog{
          width:25% !important;
       }
       .dialog-footer {
         text-align: center;
       }         
      }
  }
</style>

<style lang='less' scoped>

</style>