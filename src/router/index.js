import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)
const routes=[]
export default new Router({
  
  routes:[
    {path:'/',redirect:{name:"login"}},
    {name:'login', path:'/Login',component:()=>import('@/components/Login')},
    {name:'dashboard', path:'/dashboard',component:()=>import('@/components/Dashboard'),
  children:[
    { name:'table',path:'table',component:()=>import('@/components/Table')}
  ]
  }
  

  ]
})
