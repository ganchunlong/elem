<template>
    <div class="login">

<h2>系统登录</h2>

<el-form ref="form" :model="form" :rules="rules">

    <el-form-item prop="username">
        <el-input v-model="form.username" placeholder="账号"></el-input>
    </el-form-item>
    
    <el-form-item prop="password">
        <el-input v-model="form.password" type="password" placeholder="密码"></el-input>
    </el-form-item>

    <el-form-item>
        <el-button type="primary" style="width:100%"  @click="submitForm('form')">登录</el-button>
    </el-form-item>

</el-form>

    </div>
</template>
<script>
export default {
    name: 'Login',
    data: function(){
   //自定义规则
   var checkUserName=function(rule,value,callback){
       if(!value){
           callback(new Error('请输入用户名！'));
           return false;
       }


       if(value.length<3||value.length>10){
           callback(new Error('长度在 3 到 10 个字符'));
           return false;
       }



       if(/^[a-zA-Z]\w+$/.test(value)==false){
           callback(new Error('字母开头，允许字母、数字或者下划线'));
           return  false;
       }
           callback();//回调一个空错误，意思是没有错误，代表正确
       
   }

        return {
            form: {username: '',
            password: ''},
          rules:{
             username:[
            // //       {
            // //  required:true,message:'请输入用户名！',trigger:'blur'      
            // //   },
            // //   {min:3,max:10,message: '', trigger: 'blur'},
              {validator:checkUserName,trigger:'blur'}//自定义的规则
             ],
          password: [
                    { required: true, message: '请输入密码！', trigger: 'blur' },
                    { min: 6, message: '密码至少6位数！', trigger: 'blur' }
                ]
          }  
        }
    },
     mounted(){
          var token="fsdaf";
          this.$http.get('check_is_logined.php?token='+token).then(res=>{
            if(res.data[0].code==400){
               this.$router
            }
          })
    },
    methods:{
        submitForm:function(formName){
            var that=this;
            this.$refs[formName].validate(function(valid){
                if(valid){
            var username=that.form.username.trim();
            var password=that.form.password.trim();

            var param=new URLSearchParams();
            param.append('username',username);
            param.append('password',password);
            that.$http.post('check_login.php',param).then(function(res){
                if(res.data[0].code==404){
                    alert(res.data[0].msg);
                }
                if(res.data[0].code==200){
                   that.$router.push('/dashboard/table');
                   //登录正确，跳转到控制面板页面
                }
            })
        }else{
               console.log('填写有误！');
                    return false;
        }

            
            })
              }
    }
}
</script>

<style scoped>

*{
    box-sizing: border-box;
}
.login{
    background: white;
    padding: 35px;
    position: fixed;
    width: 400px;
    left: 50%;
    top: 27vh;
    margin-left: -200px;
    border-radius: 4px;
    box-shadow: 0 0 15px rgba(0, 0, 0, .3);
}
.login h2{
    text-align: center;
    margin: 0;
    margin-bottom: 30px;
    font-weight: normal;
}

</style>

