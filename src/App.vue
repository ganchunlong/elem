<template>
  <div id="app">
   
  
  <router-view></router-view>
  </div>
</template>

<script>
import Login from '@/components/Login'
export default {
  name: 'App',
  components:{
  Login
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
 
  color: #2c3e50;
  
}

body{
   
  background: rgba(33, 180, 70, 0.75);
}
</style>
