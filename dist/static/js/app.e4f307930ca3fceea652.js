webpackJsonp([3],{"/Hv2":function(e,t){},HBSQ:function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("IvJb"),a={name:"App",components:{Login:n("xJsL").default}},o={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var s=n("vSla")(a,o,!1,function(e){n("QNzy")},null,null).exports,u=n("zO6J");r.default.use(u.a);var i=new u.a({routes:[{path:"/",redirect:{name:"login"}},{name:"login",path:"/Login",component:function(){return new Promise(function(e){e()}).then(n.bind(null,"xJsL"))}},{name:"dashboard",path:"/dashboard",component:function(){return n.e(1).then(n.bind(null,"TGvd"))},children:[{name:"table",path:"table",component:function(){return n.e(0).then(n.bind(null,"ABj6"))}}]}]}),l=n("9rMa");r.default.use(l.a);var c=new l.a.Store({state:{token:""},getters:{},mutations:{settoken:function(e,t){}},actions:{}}),d=(n("m7aY"),n("HBSQ"),n("aozt")),p=n.n(d),m=n("t+b9"),f=n.n(m);n("/Hv2");p.a.defaults.baseURL="http://jx-tongan.com/vueapi/",r.default.prototype.$http=p.a,r.default.use(f.a),r.default.config.productionTip=!1,new r.default({el:"#app",router:i,store:c,components:{App:s},template:"<App/>"})},QNzy:function(e,t){},dcru:function(e,t){},m7aY:function(e,t){},xJsL:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={name:"Login",data:function(){return{form:{username:"",password:""},rules:{username:[{validator:function(e,t,n){return t?t.length<3||t.length>10?(n(new Error("长度在 3 到 10 个字符")),!1):0==/^[a-zA-Z]\w+$/.test(t)?(n(new Error("字母开头，允许字母、数字或者下划线")),!1):void n():(n(new Error("请输入用户名！")),!1)},trigger:"blur"}],password:[{required:!0,message:"请输入密码！",trigger:"blur"},{min:6,message:"密码至少6位数！",trigger:"blur"}]}}},mounted:function(){var e=this;this.$http.get("check_is_logined.php?token=fsdaf").then(function(t){400==t.data[0].code&&e.$router})},methods:{submitForm:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return console.log("填写有误！"),!1;var n=t.form.username.trim(),r=t.form.password.trim(),a=new URLSearchParams;a.append("username",n),a.append("password",r),t.$http.post("check_login.php",a).then(function(e){404==e.data[0].code&&alert(e.data[0].msg),200==e.data[0].code&&t.$router.push("/dashboard/table")})})}}},a={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"login"},[n("h2",[e._v("系统登录")]),e._v(" "),n("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules}},[n("el-form-item",{attrs:{prop:"username"}},[n("el-input",{attrs:{placeholder:"账号"},model:{value:e.form.username,callback:function(t){e.$set(e.form,"username",t)},expression:"form.username"}})],1),e._v(" "),n("el-form-item",{attrs:{prop:"password"}},[n("el-input",{attrs:{type:"password",placeholder:"密码"},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}})],1),e._v(" "),n("el-form-item",[n("el-button",{staticStyle:{width:"100%"},attrs:{type:"primary"},on:{click:function(t){e.submitForm("form")}}},[e._v("登录")])],1)],1)],1)},staticRenderFns:[]};var o=n("vSla")(r,a,!1,function(e){n("dcru")},"data-v-6b396022",null);t.default=o.exports}},["NHnr"]);
//# sourceMappingURL=app.e4f307930ca3fceea652.js.map