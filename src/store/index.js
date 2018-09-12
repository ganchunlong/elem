import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default  new Vuex.Store({
    state:{
        token:''
    },  //仓库
    getters:{},  //计算属性
    mutations:{
        settoken(state,val){
            
        }
    }, //仓库管理员
    actions:{},//异步
})