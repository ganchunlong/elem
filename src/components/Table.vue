<template>
    <div class="table">  
        <div class="loading" v-show="isLoading"></div>
       
    <el-dialog title="新增文章" :visible.sync="dialogAddFormVisible" @open="resetForm('form')">
        <el-form :model="form" ref="form" :rules="rules">


            <el-form-item label="所属分类" prop="cateid"   :label-width="formLabelWidth">
            <el-cascader v-model="form.cateid" :options="cates" :props="catesProps"></el-cascader>
            {{form.cateid}}
            </el-form-item>

            <el-form-item label="文章标题"  prop="title" :label-width="formLabelWidth">
                <el-input v-model="form.title" auto-complete="off"></el-input>
            </el-form-item>

            <el-form-item label="文章作者"   prop="author" :label-width="formLabelWidth">
                <el-input v-model="form.author" auto-complete="off"></el-input>
            </el-form-item>

            <el-form-item label="文章内容"   prop="content" :label-width="formLabelWidth">
                <el-input type="textarea" :rows="4"  v-model="form.content"></el-input>
            </el-form-item>

             <el-form-item label="排序号码"   prop="orderid" :label-width="formLabelWidth">
                <el-input type="textarea" :rows="4"  v-model="form.orderid"></el-input>
            </el-form-item>

        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button @click="resetForm('form')">重置</el-button>
            <el-button type="primary"  @click="submitAddForm('form')" >确 定</el-button>
        </div>
    </el-dialog>

<!-- // -->

<!-- 修改文章 -->
  <el-dialog title="新增文章" :visible.sync="dialogEditFormVisible" >
        <el-form :model="form" ref="form" :rules="rules">


            <el-form-item label="所属分类" prop="cateid"   :label-width="formLabelWidth">
            <el-cascader v-model="form.cateid" :options="cates" :props="catesProps"></el-cascader>
            {{form.cateid}}
            </el-form-item>

            <el-form-item label="文章标题"  prop="title" :label-width="formLabelWidth">
                <el-input v-model="form.title" auto-complete="off"></el-input>
            </el-form-item>

            <el-form-item label="文章作者"   prop="author" :label-width="formLabelWidth">
                <el-input v-model="form.author" auto-complete="off"></el-input>
            </el-form-item>

            <el-form-item label="文章内容"   prop="content" :label-width="formLabelWidth">
                <el-input type="textarea" :rows="4"  v-model="form.content"></el-input>
            </el-form-item>

             <el-form-item label="排序号码"   prop="orderid" :label-width="formLabelWidth">
                <el-input type="textarea" :rows="4"  v-model="form.orderid"></el-input>
            </el-form-item>

        </el-form>
        <div slot="footer" class="dialog-footer">
         <el-button @click="resetForm('form')">重置</el-button>
            <el-button type="primary"  @click="submitEditForm('form')" >确 定</el-button>
        </div>
    </el-dialog>

<!-- 修改文章结束 -->





        <div class="nav">
             <h2 >表格</h2>
          
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{}">首页</el-breadcrumb-item>
            <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
            <el-breadcrumb-item>活动列表</el-breadcrumb-item>
            <el-breadcrumb-item>活动详情</el-breadcrumb-item>
        </el-breadcrumb>
        </div>
        <div class="seach">
            <el-input v-model="input" placeholder="请输入内容" class="input"></el-input>
            <el-button type="danger" @click="chaxun">查询</el-button>
            <el-button type="primary" @click="dialogAddFormVisible = true">新增</el-button>
        </div>
        <div class="table">
           <el-table :data="chaxun()" style="width: 100%" :default-sort = "{prop: 'date', order: 'descending'}">
                <el-table-column type="selection" width="55"></el-table-column>
                <el-table-column label="#"   sortable width="180"  >
                   <template slot-scope="scope">
                       <a href="">{{scope.row.id}}</a>
                   </template>

                </el-table-column>
                <el-table-column prop="author" label="作者" sortable width="180"></el-table-column>
                <el-table-column prop="cnaddtime" label="日期" ></el-table-column>
                <el-table-column prop="content" label="内容" ></el-table-column>
                <el-table-column prop="orderid" label="个数" ></el-table-column>
                <el-table-column prop="title" label="标题" ></el-table-column>
                <el-table-column label="操作" width="150">
                    <template slot-scope="scope">
                        <el-button size="mini"  @click="editItem(scope.row)" >编辑</el-button>
                        <el-button type="danger" size="mini" @click="delItem(scope.$index, scope.row.id)">删除</el-button>
                    </template>
                </el-table-column>
                <!-- <el-table-column prop="address" label="地址" :formatter="formatter"></el-table-column> -->
           </el-table>
        </div>
    </div>
</template>
<script>
export default {
    name:'Table',
    data:function(){
   var checkCateId=function(rule,value,callback){
  if(value.length===0){
      callback(new Error('请选择所属分类'));
      return false;
  }
  callback();
   }

        return {
            isLoading:true,
            input:'',
             keyword: '',
            dialogAddFormVisible: false,
             dialogEditFormVisible: false,
            formLabelWidth: '120px',
            cates:[],
          
            catesProps:{
              label:'name',
              value:'id'
            },
            lists:[
             
            ],
            form: {
                cateid:[],
                title: '',
                author: '',
                content: '',
                orderid:''

            },
            editid:0,
            rules:{
                cateid: [
                    {validator:checkCateId,message:'请选择所属分类',trigger:'blur'}
                ],
                title: [
                    {required:true,message:'请输入文章标题',trigger:'blur'}
                ],
                author: [
                    {required:true,message:'请输入文章作者',trigger:'blur'}
                ],
                content: [
                    {required:true,message:'请输入文章内容',trigger:'blur'}
                ],
                orderid: [
                    {required:true,message:'请输入文章排序号',trigger:'blur'}
                ]
        }
            
        }
    },
  
   mounted: function() {
             //获取一级分类数组接口
            //  this.$http.get('get_cate_list.php').then(res =>{
            //      res.data.forEach(item =>{
            //          this.$http.get('get_cate_list.php?pid='+item.id).then(res =>{
            //              item.children=res.data|| []
            //          })
            //      })
            //      this.cates=res.data ||[];
            //  })
 
 this.$http.get('get_all_cate_list.php').then(res =>{
     this.cates=res.data||[];
 })

         this.$http.get('get_article_list.php?page=1&perpage=8').then(res => {
            //  console.log(res.data)
            this.isLoading=false;
            this.lists=res.data||[];
         })
    },
    methods:{
         resetForm(form){
             this.$nextTick(_ =>{
            // this.$refs[form].resetFields();
            this.form={
                 cateid:[],
                title: '',
                author: '',
                content: '',
                orderid:''
            }
             }) 
         },
     submitAddForm(form){
         this.$refs[form].validate(vaid =>{
             //
             if(vaid){
           var param=new URLSearchParams();
           param.append('bigid',this.form.cateid[0]);
           param.append('smallid',this.form.cateid[1]);
           param.append('title',this.form.title);
           param.append('author',this.form.author);
           param.append('content',this.form.content);
           param.append('orderid',this.form.orderid);
           
           this.$http.post('add_article.php',param).then(res =>{
                 console.log(res.data);
                 //在表格的前面追加一行新的记录
                 this.lists.unshift(res.data[0]);
                 this.dialogAddFormVisible = false;
           })
         }else{
                 console.log('填写有误');
                 return false;
         }
         })
     },


 submitEditForm(form){
         this.$refs[form].validate(vaid =>{
             //
             if(vaid){
           var param=new URLSearchParams();
           param.append('id',this.edited);
           param.append('bigid',this.form.cateid[0]);
           param.append('smallid',this.form.cateid[1]);
           param.append('title',this.form.title);
           param.append('author',this.form.author);
           param.append('content',this.form.content);
           param.append('orderid',this.form.orderid);
           
           this.$http.post('edit_article.php',param).then(res =>{
                 console.log(res.data);
                 //在表格的前面追加一行新的记录
                 this.lists.unshift(res.data[0]);
                 this.dialogEditFormVisible = false;
           })
         }else{
                 console.log('填写有误');
                 return false;
         }
         })
     },
        chaxun:function(){
            
           var arr= this.lists.filter(function(item){

                return item.title.indexOf(this.input)!=-1;

            }.bind(this))
           
            console.log(arr)

             return arr;
        },
editItem(row){
    this.dialogEditFormVisible=true;
    this.editid=row.id;
    this.form={
        cateid:[row.bigid,row.smallid],
        title:row.title,
        author:row.author,
        content:row.content,
        orderid:row.orderid,
    }

},
  delItem:function(index,id){
      this.$http.get('del_article.php?id='+id).then(res =>{
          this.lists.splice(index,1);
      })
  }

    }
    
}
</script>
<style scoped>
.table{
    position: relative;
}
.loading{
    position: absolute;
    width: 200px;
    height: 200px;
    left: 50%;
    margin-left: -100px;
    top: 50%;
    margin-top: -100px;
    background: url(../assets/loading.gif) no-repeat 50% 50%;
    z-index: 999;
}
.table-hd{
    overflow: hidden;
    margin-bottom: 20px;
}
.el-breadcrumb{
    float: right;
    padding-top: 10px;
}
.table-hd h1{
    margin: 0;
    font-size: 20px;
}

.table-search{
    background-color: #f2f2f2;
    padding: 10px;
}
h2{
    margin: 0;
    margin-top:-5px;
}
.nav{
    display: flex;
  justify-content: space-between;
}
.seach{
    padding: 10px 0;
    margin: 10px 0;
    background-color: #eeeeee;
    
}
.seach .input{
    max-width: 170px;
    margin-left: 10px;
    margin-right: 10px;
}
.table{
    width: 100%;
}
</style>

