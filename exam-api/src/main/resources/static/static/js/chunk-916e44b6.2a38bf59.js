(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-916e44b6"],{"4ee14":function(e,t,r){"use strict";r.r(t);var o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"app-container"},[r("el-form",{ref:"postForm",attrs:{model:e.postForm,rules:e.rules,"label-position":"left","label-width":"120px"}},[r("el-card",[r("el-form-item",{attrs:{label:"考试名称",prop:"title"}},[r("el-input",{model:{value:e.postForm.title,callback:function(t){e.$set(e.postForm,"title",t)},expression:"postForm.title"}})],1),r("el-form-item",{attrs:{label:"考试描述",prop:"content"}},[r("el-input",{attrs:{type:"textarea"},model:{value:e.postForm.content,callback:function(t){e.$set(e.postForm,"content",t)},expression:"postForm.content"}})],1),r("el-form-item",{attrs:{label:"考试权限",prop:"open"}},[r("el-switch",{staticStyle:{display:"block"},attrs:{"active-color":"#13ce66","inactive-color":"#ff4949","active-text":"公开考试","inactive-text":"内部考试"},model:{value:e.postForm.open,callback:function(t){e.$set(e.postForm,"open",t)},expression:"postForm.open"}})],1),e.postForm.open?e._e():r("el-form-item",{attrs:{label:"考试口令",prop:"password"}},[r("el-input",{attrs:{placeholder:"只有输入正确的口令才可以考试"},model:{value:e.postForm.password,callback:function(t){e.$set(e.postForm,"password",t)},expression:"postForm.password"}})],1),r("el-form-item",{attrs:{label:"考试规则",prop:"ruleId"}},[r("rule-select",{model:{value:e.postForm.ruleId,callback:function(t){e.$set(e.postForm,"ruleId",t)},expression:"postForm.ruleId"}})],1)],1),r("div",{staticStyle:{"margin-top":"20px"}},[r("el-button",{attrs:{type:"primary"},on:{click:e.submitForm}},[e._v("保存")]),r("el-button",{attrs:{type:"info"},on:{click:e.onCancel}},[e._v("返回")])],1)],1)],1)},n=[],a=r("955d"),s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-select",{staticClass:"filter-item",attrs:{filterable:"",remote:"","reserve-keyword":"",clearable:"","automatic-dropdown":"",placeholder:"选择或搜索规则","remote-method":e.fetchData},on:{change:e.handlerChange},model:{value:e.currentValue,callback:function(t){e.currentValue=t},expression:"currentValue"}},e._l(e.catalogs,(function(e){return r("el-option",{key:e.id,attrs:{label:e.title,value:e.id}})})),1)},l=[],i=r("b2fe"),c={name:"MeetCatalog",props:{value:String,default:String},data:function(){return{catalogs:[],currentValue:""}},watch:{value:{handler:function(){this.currentValue=this.value}}},created:function(){this.currentValue=this.value,this.fetchData()},methods:{fetchData:function(){var e=this;Object(i["b"])().then((function(t){e.catalogs=t.data}))},handlerChange:function(e){this.$emit("change",e),this.$emit("input",e)}}},u=c,p=r("2877"),m=Object(p["a"])(u,s,l,!1,null,null,null),d=m.exports,f={name:"ExamDetail",components:{RuleSelect:d},data:function(){return{postForm:{repoList:[],open:!0},rules:{title:[{required:!0,message:"考试名称不能为空！"}],open:[{required:!0,message:"考试权限不能为空！"}],content:[{required:!0,message:"课程描述不能为空"}],ruleId:[{required:!0,message:"考试规则不能为空"}],password:[{required:!0,message:"考试口令不能为空！"}]}}},created:function(){var e=this.$route.params.id;"undefined"!==typeof e&&this.fetchData(e)},methods:{fetchData:function(e){var t=this;Object(a["a"])(e).then((function(e){t.postForm=e.data}))},submitForm:function(){var e=this;this.$refs.postForm.validate((function(t){t&&Object(a["b"])(e.postForm).then((function(){e.$notify({title:"成功",message:"考试保存成功！",type:"success",duration:2e3}),e.$router.push({name:"ListExam"})}))}))},onCancel:function(){this.$router.push({name:"ListExam"})}}},b=f,h=Object(p["a"])(b,o,n,!1,null,"5f5894ea",null);t["default"]=h.exports},"955d":function(e,t,r){"use strict";r.d(t,"a",(function(){return n})),r.d(t,"b",(function(){return a}));var o=r("b775");function n(e){return Object(o["b"])("/exam/exam/detail",{id:e})}function a(e){return Object(o["b"])("/exam/exam/save",e)}},b2fe:function(e,t,r){"use strict";r.d(t,"a",(function(){return n})),r.d(t,"c",(function(){return a})),r.d(t,"b",(function(){return s}));var o=r("b775");function n(e){return Object(o["b"])("/paper/rule/detail",{id:e})}function a(e){return Object(o["b"])("/paper/rule/save",e)}function s(){return Object(o["b"])("/paper/rule/list",{})}}}]);