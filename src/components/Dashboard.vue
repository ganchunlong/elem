<template>

    <el-container class="container">
        <el-header>
            
            <h2 class="logo" :class="{collapse:isCollapse}"> VUEADMIN </h2>
            <div class="rnav">
                <button class="togglebtn" @click="isCollapse=!isCollapse"><i class="fa fa-navicon"></i></button>
            </div>

        </el-header>
        <el-container>
            <el-aside width="auto">
                
                <el-menu default-active="1-1" class="treenav" :collapse="isCollapse" router>
               
                    <!-- 导航一开始 -->
                    <el-submenu index="1">

                        <template slot="title">
                            <i class="fa fa-envelope"></i>
                            <span slot="title">导航一</span>
                        </template>

                        <el-menu-item index="/dashboard/table">表格</el-menu-item>
                        <!-- //  -->
                        <el-menu-item index="1-2">表单</el-menu-item>
                        <el-menu-item index="1-3">列表</el-menu-item>
                        
                    </el-submenu>
                    <!-- 导航一结束 -->

                    <!-- 导航二开始 -->
                    <el-submenu index="2">

                        <template slot="title">
                            <i class="fa fa-id-card-o"></i>
                            <span slot="title">导航二</span>
                        </template>

                        <el-menu-item index="2-1">页面4</el-menu-item>
                        <el-menu-item index="2-2">页面5</el-menu-item>
        
                    </el-submenu>
                    <!-- 导航二结束 -->

                    <!-- 导航三开始 -->
                    <el-menu-item index="3">
                        <i class="fa fa-address-card"></i>
                        <span slot="title">导航三</span>
                    </el-menu-item>
                    <!-- 导航三结束 -->

                    <!-- 图表开始 -->
                    <el-submenu index="4">

                        <template slot="title">
                            <i class="fa fa-bar-chart"></i>
                            <span slot="title">图表</span>
                        </template>

                        <el-menu-item index="4-1">百度echarts</el-menu-item>
        
                    </el-submenu>
                    <!-- 图表结束 -->


                </el-menu>




            </el-aside>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>

</template>

<script>
export default {
    name: 'Dashboard',
    data: function(){
        return {
            isCollapse: false
        }
    }
}
</script>

<style scoped>
.container{
    height: 100vh;
}

.treenav{
    background-color: transparent ;
}

.treenav:not(.el-menu--collapse) {
    width: 230px;
}

.el-header{
    padding: 0;
    display: flex;
    align-items: center;
    height: 60px;
    background-color: #009688;
}
.el-header .logo{
    overflow: hidden;
    width: 230px;
    color: white;
    font-weight: normal;
    text-align: center;
}
.el-header .logo.collapse{
    width: 60px;
    text-indent: 999em;
}
.el-header .rnav{
    flex-grow: 1;
}
.el-header .rnav .togglebtn{
    padding: 10px 20px;
    background-color: transparent;
    border: none;
    color: white;
    font-size: 20px;
    cursor: pointer;
    outline: none;
}

.el-aside{
    background-color: #333d42;
    /* background-color: #4b5a61; */
    color: white!important;
}
.el-main{
    background-color: #fff;
}
</style>

<style>
.el-submenu__title{
    color: white!important;
}
.el-menu-item{
    color:white;
}
 .el-menu-item:hover,.el-submenu__title:hover{
   background-color: #4b5a61;
    }
    .el-menu{
          background-color: #333d42;
    }
</style>
