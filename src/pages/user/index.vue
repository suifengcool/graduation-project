<template>
    <div class='user'>
       <div class="content-title">管理员列表<Button type="primary"  round class="add">新增管理员</Button></div>
       <div class="table_content">
         <Table :data="option.list">
            <TableColumn prop="acount" label="账号"/>
            <TableColumn prop="name" label="姓名" />
            <TableColumn prop="password" label="密码"/>
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
                <Dialog :visible.sync="dialogFormVisible" :append-to-body="true">
               <Form :model="formOption" label-position="right" label-width="80px">
                 <FormItem label="账号" >
                    <Input v-model="formOption.acount" disabled/>
                 </FormItem>
                 <FormItem label="新密码">
                    <Input v-model="formOption.password"/>
                 </FormItem>                
              </Form> 
               <div slot="footer" class="dialog-footer">
                <Button @click="admin.show = false">取消</Button>
                <Button type="primary" @click="save">确定修改</Button>
               </div>
            </Dialog >
        </div>
        
    </div>
</template>

<script>
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
      FormItem
    },
    data () {
		return {
      dialogFormVisible:false,
      formOption:{},
      option:{
        list:[
          {acount:15827605599,name:'isName',password:'......',createTime:'2018.5.6',id:1},
          {acount:15827605599,name:'isName',password:'......',createTime:'2018.5.6',id:2},
          {acount:15827605599,name:'isName',password:'.....',createTime:'2018.5.6',id:3},
          {acount:15827605599,name:'isName',password:'......',createTime:'2018.5.6',id:4},
        ]
      }
		}
    },

    created () {
    },

    methods: {
     edit(){
       this.dialogFormVisible = true 
     },
     del(){

     }   
	}
}
</script>
<style lang="less">
  .user{
      .table_content{
       text-align: center ;
     }
     .table_content thead th{
       text-align: center;
     }

     .log{
       .el-dialog__wrapper{
          .el-dialog{
            width:25% !important;
       }
          
    }
     }

  }
</style>

<style lang='less' scoped>
   .user{
     .content-title{
        .add{         
           position: relative;
           right:-75%; 
        } 
     }

   } 
</style>