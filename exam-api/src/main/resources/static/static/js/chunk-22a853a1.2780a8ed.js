(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-22a853a1"],{"0f93":function(t,e,a){},"1c18":function(t,e,a){},2995:function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"a",(function(){return l}));var n=a("b775");function i(t){return Object(n["b"])("/sys/user/update",t)}function l(t){return Object(n["b"])("/sys/user/save",t)}},5103:function(t,e,a){"use strict";var n=a("0f93"),i=a.n(n);i.a},7845:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[a("div",{staticClass:"filter-container"},[t._t("filter-content"),a("el-row",[a("el-col",[t.options.addRoute?a("el-button",{attrs:{type:"primary",icon:"el-icon-plus"},on:{click:t.handleAdd}},[t._v("添加")]):t._e()],1)],1)],2),a("div",{directives:[{name:"show",rawName:"v-show",value:t.multiShow&&t.options.multiActions,expression:"multiShow && options.multiActions"}],staticClass:"filter-container"},[a("el-select",{staticClass:"filter-item",staticStyle:{width:"130px"},attrs:{placeholder:t.selectedLabel},on:{change:t.handleOption},model:{value:t.multiNow,callback:function(e){t.multiNow=e},expression:"multiNow"}},t._l(t.options.multiActions,(function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],attrs:{data:t.dataList.records,border:"",fit:"","highlight-current-row":"","header-cell-style":{background:"#f2f3f4",color:"#555","font-weight":"bold","line-height":"32px"}},on:{"selection-change":t.handleSelection}},[t.options.multi?a("el-table-column",{attrs:{align:"center",type:"selection",width:"55"}}):t._e(),t._t("data-columns")],2),a("pagination",{directives:[{name:"show",rawName:"v-show",value:t.dataList.total>0,expression:"dataList.total>0"}],attrs:{total:t.dataList.total,page:t.listQuery.current,limit:t.listQuery.size},on:{"update:page":function(e){return t.$set(t.listQuery,"current",e)},"update:limit":function(e){return t.$set(t.listQuery,"size",e)},pagination:t.getList}})],1)},i=[],l=(a("ac6a"),a("b775"));function s(t,e){return Object(l["b"])(t,e)}function o(t,e){return Object(l["b"])(t,{ids:e})}function r(t,e,a){return Object(l["b"])(t,{ids:e,state:a})}var u=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"pagination-container",class:{hidden:t.hidden}},[a("el-pagination",t._b({attrs:{background:t.background,"current-page":t.currentPage,"page-size":t.pageSize,layout:t.layout,"page-sizes":t.pageSizes,total:t.total},on:{"update:currentPage":function(e){t.currentPage=e},"update:current-page":function(e){t.currentPage=e},"update:pageSize":function(e){t.pageSize=e},"update:page-size":function(e){t.pageSize=e},"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}},"el-pagination",t.$attrs,!1))],1)},c=[];a("c5f6");Math.easeInOutQuad=function(t,e,a,n){return t/=n/2,t<1?a/2*t*t+e:(t--,-a/2*(t*(t-2)-1)+e)};var d=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)}}();function p(t){document.documentElement.scrollTop=t,document.body.parentNode.scrollTop=t,document.body.scrollTop=t}function f(){return document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop}function m(t,e,a){var n=f(),i=t-n,l=20,s=0;e="undefined"===typeof e?500:e;var o=function t(){s+=l;var o=Math.easeInOutQuad(s,n,i,e);p(o),s<e?d(t):a&&"function"===typeof a&&a()};o()}var h={name:"Pagination",props:{total:{required:!0,type:Number},page:{type:Number,default:1},limit:{type:Number,default:20},pageSizes:{type:Array,default:function(){return[10,20,30,50]}},layout:{type:String,default:"total, sizes, prev, pager, next, jumper"},background:{type:Boolean,default:!0},autoScroll:{type:Boolean,default:!0},hidden:{type:Boolean,default:!1}},computed:{currentPage:{get:function(){return this.page},set:function(t){this.$emit("update:page",t)}},pageSize:{get:function(){return this.limit},set:function(t){this.$emit("update:limit",t)}}},methods:{handleSizeChange:function(t){this.$emit("pagination",{page:this.currentPage,limit:t}),this.autoScroll&&m(0,800)},handleCurrentChange:function(t){this.$emit("pagination",{page:t,limit:this.pageSize}),this.autoScroll&&m(0,800)}}},g=h,b=(a("e498"),a("2877")),v=Object(b["a"])(g,u,c,!1,null,"6af373ef",null),y=v.exports,w={name:"PagingTable",components:{Pagination:y},props:{options:{type:Object,default:function(){return{multiActions:[],listUrl:"",deleteUrl:"",stateUrl:"",multi:!1}}},listQuery:{type:Object,default:function(){return{current:1,size:10,params:{},t:0}}}},data:function(){return{dataList:{total:0},listLoading:!0,selectedIds:[],selectedObjs:[],selectedLabel:"",multiShow:!1,multiNow:""}},watch:{listQuery:{handler:function(){this.getList()},deep:!0}},created:function(){this.getList()},methods:{handleAdd:function(){this.options.addRoute?this.$router.push({name:this.options.addRoute,params:{}}):console.log("未设置添加数据跳转路由！")},getList:function(){var t=this;this.listLoading=!0,this.listQuery.t=(new Date).getTime(),s(this.options.listUrl,this.listQuery).then((function(e){t.dataList=e.data,t.listLoading=!1}))},handleFilter:function(){this.getList()},handleOption:function(t){this.multiNow="","delete"!==t?"enable"!==t?"disable"!==t?this.$emit("multi-actions",{opt:t,ids:this.selectedIds}):this.handleState(1):this.handleState(0):this.handleDelete()},handleState:function(t){var e=this;r(this.options.stateUrl,this.selectedIds,t).then((function(t){0===t.code&&(e.$message({type:"success",message:"状态修改成功!"}),e.getList())}))},handleDelete:function(){var t=this;0!==this.selectedIds.length?this.$confirm("确实要删除吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){o(t.options.deleteUrl,t.selectedIds).then((function(){t.$message({type:"success",message:"删除成功!"}),t.getList()}))})):this.$message({message:"请至少选择一条数据！",type:"warning"})},handleSelection:function(t){var e=[];t.forEach((function(t){e.push(t.id)})),this.selectedObjs=t,this.selectedIds=e,this.multiShow=e.length>0,this.selectedLabel="已选"+e.length+"项",this.$emit("select-changed",{ids:this.selectedIds,objs:this.selectedObjs})}}},S=w,D=(a("5103"),Object(b["a"])(S,n,i,!1,null,null,null));e["a"]=D.exports},c2a2:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("data-table",{ref:"pagingTable",attrs:{options:t.options,"list-query":t.listQuery},on:{"multi-actions":t.handleMultiAction}},[a("template",{slot:"filter-content"},[a("el-button",{staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-plus"},on:{click:t.handleAdd}},[t._v(" 添加 ")])],1),a("template",{slot:"data-columns"},[a("el-table-column",{attrs:{type:"selection",width:"55"}}),a("el-table-column",{attrs:{align:"center",label:"用户名",prop:"userName"}}),a("el-table-column",{attrs:{align:"center",label:"姓名",prop:"realName"}}),a("el-table-column",{attrs:{align:"center",label:"角色",prop:"roleIds"}}),a("el-table-column",{attrs:{align:"center",label:"创建时间",prop:"createTime"}}),a("el-table-column",{attrs:{align:"center",label:"状态"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(t._f("stateFilter")(e.row.state))+" ")]}}])}),a("el-table-column",{attrs:{align:"center",label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{size:"small",icon:"el-icon-edit"},on:{click:function(a){return t.handleUpdate(e.row)}}},[t._v("修改")])]}}])})],1)],2),a("el-dialog",{attrs:{title:"添加用户",visible:t.dialogVisible,width:"500px"},on:{"update:visible":function(e){t.dialogVisible=e}}},[a("el-form",{attrs:{model:t.formData,"label-position":"left","label-width":"100px"}},[a("el-form-item",{attrs:{label:"用户名"}},[a("el-input",{model:{value:t.formData.userName,callback:function(e){t.$set(t.formData,"userName",e)},expression:"formData.userName"}})],1),a("el-form-item",{attrs:{label:"姓名"}},[a("el-input",{model:{value:t.formData.realName,callback:function(e){t.$set(t.formData,"realName",e)},expression:"formData.realName"}})],1),a("el-form-item",{attrs:{label:"密码"}},[a("el-input",{attrs:{placeholder:"不修改请留空",type:"password"},model:{value:t.formData.password,callback:function(e){t.$set(t.formData,"password",e)},expression:"formData.password"}})],1),a("el-form-item",{attrs:{label:"角色"}},[a("meet-role",{model:{value:t.formData.roles,callback:function(e){t.$set(t.formData,"roles",e)},expression:"formData.roles"}})],1),a("el-form-item",{attrs:{label:"头像",prop:"avatar"}},[a("el-upload",{staticClass:"avatar-uploader",attrs:{"show-file-list":!1,action:"/api/v1/common/oss/upload","on-success":t.handleUploadSuccess}},[t.formData.avatar?a("img",{staticClass:"avatar",attrs:{src:t.formData.avatar}}):a("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.dialogVisible=!1}}},[t._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:t.handleSave}},[t._v("确 定")])],1)],1)],1)},i=[],l=(a("28a5"),a("7845")),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-select",{staticStyle:{width:"100%"},attrs:{multiple:"",filterable:"",remote:"","reserve-keyword":"",clearable:"","automatic-dropdown":"",placeholder:"请选择角色","remote-method":t.fetchList},on:{change:t.handlerChange},model:{value:t.values,callback:function(e){t.values=e},expression:"values"}},t._l(t.list,(function(t){return a("el-option",{key:t.id,attrs:{label:t.title,value:t.id}})})),1)},o=[],r=a("b775");function u(){return Object(r["b"])("/sys/role/list",{})}var c={name:"MeetRole",props:{value:Array,default:Array},data:function(){return{list:[],values:[]}},watch:{value:{handler:function(){this.values=this.value},deep:!0}},created:function(){this.values=this.value,this.fetchList()},methods:{fetchList:function(){var t=this;u().then((function(e){t.list=e.data}))},handlerChange:function(t){this.$emit("change",t),this.$emit("input",t)}}},d=c,p=a("2877"),f=Object(p["a"])(d,s,o,!1,null,null,null),m=f.exports,h=a("2995"),g={name:"SysUserList",components:{DataTable:l["a"],MeetRole:m},filters:{userState:function(t){var e={0:"正常",1:"禁用"};return e[t]}},data:function(){return{dialogVisible:!1,listQuery:{current:1,size:10,params:{}},formData:{avatar:""},options:{listUrl:"/sys/user/paging",stateUrl:"/sys/user/state",multiActions:[{value:"enable",label:"启用"},{value:"disable",label:"禁用"}]}}},methods:{handleUploadSuccess:function(t){this.formData.avatar=t.data.url},handleAdd:function(){this.formData={},this.dialogVisible=!0},handleUpdate:function(t){this.dialogVisible=!0,this.formData=t,this.formData.roles=t.roleIds.split(","),this.formData.password=null,console.log(JSON.stringify(this.formData))},handleSave:function(){var t=this;Object(h["a"])(this.formData).then((function(){t.$message({type:"success",message:"用户修改成功!"}),t.dialogVisible=!1,t.$refs.pagingTable.getList()}))},handleMultiAction:function(t){"cancel"===t.opt&&this.handleCancelOrder(t.ids)}}},b=g,v=Object(p["a"])(b,n,i,!1,null,null,null);e["default"]=v.exports},e498:function(t,e,a){"use strict";var n=a("1c18"),i=a.n(n);i.a}}]);