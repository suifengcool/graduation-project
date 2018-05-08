<template>
    <div class='artical'>
        <div class="content-title">文章管理<Button type="primary"  round class="add" @click="edit()">新增文章</Button></div>

        <div class="table_content">
            <Table :data="dataList">
                <TableColumn prop="title" label="标题"/>
                <TableColumn prop="classify" label="类别" />
                <TableColumn prop="content" label="内容简介" min-width='300'>
                    <template slot-scope="scope">
                        <span v-html="scope.row.content"></span>
                    </template>
                </TableColumn>
                <TableColumn prop="createTime" label="创建时间"/>           
                <TableColumn prop="updateTime" label="更新时间"/>           
                <TableColumn prop="auth" label="发布人"/>           
                <TableColumn label="操作" width="180" fixed="right">
                    <template slot-scope="scope">
                        <Button type="primary" plain size="small" @click="edit(scope.row)">编辑</Button>
                        <Button type="danger" plain size="small" @click="del(scope.row.id)" >删除</Button>
                    </template>
                </TableColumn>
            </Table>
        </div>

        <div class="dialog">
            <Dialog :visible.sync="dialogFormVisible" :append-to-body="true"  :center="true">
                <Form :model="formOption" label-position="right" label-width="80px" :rules="FormRules">
                    <FormItem label="标题" prop="title">
                        <Input v-model="formOption.title"/>
                    </FormItem>
                    <FormItem label="分类" prop="classify">
                        <Cascader
                            :options="options2"
                            @active-item-change="handleItemChange"
                            :props="props"
                        ></Cascader>
                    </FormItem>  
                    <FormItem label="文章内容" prop="content">
                        <vue-editor v-model="formOption.content" useCustomImageHandler @imageAdded="handleImageAdded"></vue-editor>
                    </FormItem>                
                </Form> 
                <div slot="footer" class="dialog-footer">
                    <Button >取消</Button>
                    <Button type="primary" @click="save">确定</Button>
                </div>
            </Dialog >
        </div>

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
import { Button,Table,TableColumn,Dialog,Form,FormItem,Input,Cascader,MessageBox} from 'element-ui';
import MyPagination from "../../components/MyPagination.vue"
import { VueEditor } from 'vue2-editor'
import md5 from 'md5'
import moment from 'moment'

export default {
    name: 'artical',
    components: {
    	Button,
        VueEditor,
        Table,
        TableColumn,
        Dialog,
        Form,
        FormItem,
        Input,
        Cascader,
        MyPagination,
        MessageBox
    },
    data () {
		return {
            dataList: [{
                title: '',
                classify: '',
                content: '',
                createTime: '',
                updateTime: '',
                auth: ''
            }],
            dialogFormVisible: false,
            modalType: 0,                 // 弹框类型，0新增，1编辑
            formOption: {},
            FormRules: {
                title: [{ required: true, message: '请输入标题', trigger: 'blur' }],
                classify: [{ required: true, message: '请输入正确的邮箱地址', trigger: ['blur'] }],
                content: [{ required: true, message: '请输入正确的邮箱地址', trigger: ['blur'] }],
            },
            options2: [{
                label: '江苏',
                cities: []
            }, {
                label: '浙江',
                cities: []
            }],
            props: {
                value: 'label',
                children: 'cities'
            },
            data:{
                pageNum: 0,
                pageSize:10,
                total: null,
            }

		}
    },

    created () {
    },

    watch:{
        formOption(val){
            console.log('val:',val)
        }
    },

    methods: {
        edit(data){
            this.modalType = data ? 1 : 0
            this.formOption = data
            this.dialogFormVisible = true
        },
        
        del(id){
            MessageBox.confirm(`你删除?`, 'warning', '取消确认')
            .then(() =>
                vm.fetch.delete(`/articles/delete/${id}`)
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
        },

        save(){
            if(this.modalType){

            }
        },

        handleItemChange(val) {
            console.log('active item:', val);
            setTimeout(_ => {
              if (val.indexOf('江苏') > -1 && !this.options2[0].cities.length) {
                this.options2[0].cities = [{
                  label: '南京'
                }];
              } else if (val.indexOf('浙江') > -1 && !this.options2[1].cities.length) {
                this.options2[1].cities = [{
                  label: '杭州'
                }];
              }
            }, 300);
        },

        handleImageAdded: function(file, Editor, cursorLocation) {
            vm.fetch.get(`/articles/system/qiniu`).then((token) => {

            var formData = new FormData();
            formData.append('key', moment().format('YYYYMMDDHHmmssSSS') + md5(file.name) + file.name.substring(file.name.lastIndexOf('.'), file.name.length))
            formData.append('token', token.uptoken);
            formData.append('file', file);

            const UPLOAD_URL = location.protocol === 'https:' ? 'https://up.qbox.me' : 'http://up-z0.qiniu.com'

            vm.fetch.post(UPLOAD_URL, formData, {headers: {'Content-Type': 'multipart/form-data'}}).then(result=>{
                if(result){
                    let url = token.path + result.key 
                    Editor.insertEmbed(cursorLocation, 'image', url);
                }
            })
           })
        },

        getData(){
            vm.fetch.get(`/articles/list?page=${this.data.pageNum}&pageSize=${this.data.pageSize}`).then(data=>{
                this.dataList = data.list
                this.data.pageNum = data.nextPage
                this.data.total = data.total

                console.log('this.data:',this.data)
            })
        }
	}
}
</script>
<style lang='sass' scoped>

</style>