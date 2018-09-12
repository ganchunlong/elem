<template>

    <div class="table">
        <div class="loading" v-show="isLoading"></div>

        <el-dialog title="新增文章" :visible.sync="dialogFormVisible">
        <el-form :model="form">


            <el-form-item label="所属分类" :label-width="formLabelWidth">
            <el-select v-model="form.cateid" placeholder="请选择所属分类">
                <el-option label="随笔" value="1"></el-option>
                <el-option label="摄影" value="2"></el-option>
            </el-select>
            </el-form-item>

            <el-form-item label="文章标题" :label-width="formLabelWidth">
                <el-input v-model="form.title" auto-complete="off"></el-input>
            </el-form-item>

            <el-form-item label="文章作者" :label-width="formLabelWidth">
                <el-input v-model="form.author" auto-complete="off"></el-input>
            </el-form-item>

            <el-form-item label="文章内容" :label-width="formLabelWidth">
                <el-input type="textarea" :rows="4" placeholder="请输入文章内容" v-model="form.content"></el-input>
            </el-form-item>

        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
        </div>
        </el-dialog>


        <div class="table-hd">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item to="/dashboard">首页</el-breadcrumb-item>
                <el-breadcrumb-item to="/dashboard/table">导航一</el-breadcrumb-item>
                <el-breadcrumb-item>表格</el-breadcrumb-item>
            </el-breadcrumb>
            <h1>表格</h1>
        </div>

        <div class="table-search">
            <el-input v-model="keyword" placeholder="请输入姓名" style="width:200px"></el-input>
            <el-button type="primary">搜索</el-button>
            <el-button type="primary" @click="dialogFormVisible = true">新增</el-button>
        </div>

        <div class="table-bd">

            <el-table ref="mytable" :data="lists" style="width: 100%">

                <el-table-column type="selection" width="55"></el-table-column>

                <el-table-column label="ID" prop="id" width="100" sortable></el-table-column>

                <el-table-column label="文章标题" sortable>

                    <template slot-scope="scope">
                        <a href="#">{{scope.row.title}}</a>
                    </template>

                </el-table-column>

                <el-table-column label="文章作者" prop="author" width="150" sortable></el-table-column>

                <el-table-column label="发布日期" prop="addtime" width="200" sortable></el-table-column>

                <el-table-column label="操作" width="150">
                    <template slot-scope="scope">
                        <el-button size="mini">编辑</el-button>
                        <el-button type="danger" size="mini" @click="delItem(scope.$index, scope.row.id)">删除</el-button>
                    </template>
                </el-table-column>

            </el-table>

        </div>

    </div>
</template>

<script>
export default {
    name: 'Table',
    data: function(){
        return {
            isLoading: true,
            keyword: '',
            dialogFormVisible: false,
            formLabelWidth: '120px',
            lists: [],
            form: {
                cateid:'',
                title: '',
                author: '',
                content: ''
            }
        }
    },
    mounted() {

        this.$http.get('get_article_list.php?page=1').then( res => {
            this.isLoading = false;//隐藏loading
            this.lists = res.data;
        })

    },
    methods: {

        delItem: function( index, id ){

            //1.从数据库上删除
            this.$http.get('del_article.php?id='+id).then( res => {
                
                //2. 从界面上删除
                //if(){
                    this.lists.splice(index,1);
                //}
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

</style>

