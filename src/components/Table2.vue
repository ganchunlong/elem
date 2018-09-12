<template>
<div>
    <h2>表格

    </h2>
    <el-breadcrumb separator-class="el-icon-arrow-right">
  <el-breadcrumb-item  >首页</el-breadcrumb-item>
  <el-breadcrumb-item>活动管理</el-breadcrumb-item>
  <el-breadcrumb-item>活动列表</el-breadcrumb-item>
  <el-breadcrumb-item>活动详情</el-breadcrumb-item>
</el-breadcrumb>
</div>
    
</template>
<script>
export default {
    name:'Table'
}
</script>
<style scoped>
h2{
    float: left;
    margin: 0;
}
.el-breadcrumb{
    float: right;
}
.el-breadcrumb-item {
    line-height: 58px;
}

</style>
