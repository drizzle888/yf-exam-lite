(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1ba614e2"],{"02e3":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("data-table",{ref:"pagingTable",attrs:{options:t.options,"list-query":t.listQuery}},[n("template",{slot:"filter-content"},[n("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{placeholder:"搜索规则名称"},model:{value:t.listQuery.params.title,callback:function(e){t.$set(t.listQuery.params,"title",e)},expression:"listQuery.params.title"}})],1),n("template",{slot:"data-columns"},[n("el-table-column",{attrs:{label:"考生姓名",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.realName)+" ")]}}])}),n("el-table-column",{attrs:{label:"考试时间",align:"center",prop:"createTime"}}),n("el-table-column",{attrs:{label:"考试时长(分钟)",align:"center",prop:"totalTime"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.userTime)+" / "+t._s(e.row.totalTime)+" ")]}}])}),n("el-table-column",{attrs:{label:"总分",align:"center",prop:"userScore"}}),n("el-table-column",{attrs:{label:"考试状态",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(t._f("paperStateFilter")(e.row.state))+" ")]}}])}),n("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[2===e.row.state?n("el-button",{attrs:{round:"",size:"small"},on:{click:function(n){return t.handleView(e.row.id)}}},[t._v("查看")]):t._e()]}}])})],1)],2)},i=[],l=n("7845"),s={name:"QuList",components:{DataTable:l["a"]},data:function(){return{listQuery:{current:1,size:10,params:{title:""}},options:{multi:!1,listUrl:"/paper/paper/paging"}}},methods:{handleView:function(t){this.$router.push({name:"ShowExam",params:{id:t}})}}},o=s,r=n("2877"),u=Object(r["a"])(o,a,i,!1,null,null,null);e["default"]=u.exports},"0f93":function(t,e,n){},"1c18":function(t,e,n){},5103:function(t,e,n){"use strict";var a=n("0f93"),i=n.n(a);i.a},7845:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container"},[n("div",{staticClass:"filter-container"},[t._t("filter-content"),t.options.addRoute?n("el-button",{staticClass:"filter-item",staticStyle:{float:"right"},attrs:{type:"primary",icon:"el-icon-plus"},on:{click:t.handleAdd}},[t._v(" 添加 ")]):t._e()],2),n("div",{directives:[{name:"show",rawName:"v-show",value:t.multiShow&&t.options.multiActions,expression:"multiShow && options.multiActions"}],staticClass:"filter-container"},[n("el-select",{staticClass:"filter-item",staticStyle:{width:"130px"},attrs:{placeholder:t.selectedLabel},on:{change:t.handleOption},model:{value:t.multiNow,callback:function(e){t.multiNow=e},expression:"multiNow"}},t._l(t.options.multiActions,(function(t){return n("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],attrs:{data:t.dataList.records,border:"",fit:"","highlight-current-row":"","header-cell-style":{background:"#f2f3f4",color:"#555","font-weight":"bold","line-height":"32px"}},on:{"selection-change":t.handleSelection}},[t.options.multi?n("el-table-column",{attrs:{align:"center",type:"selection",width:"55"}}):t._e(),t._t("data-columns")],2),n("pagination",{directives:[{name:"show",rawName:"v-show",value:t.dataList.total>0,expression:"dataList.total>0"}],attrs:{total:t.dataList.total,page:t.listQuery.current,limit:t.listQuery.size},on:{"update:page":function(e){return t.$set(t.listQuery,"current",e)},"update:limit":function(e){return t.$set(t.listQuery,"size",e)},pagination:t.getList}})],1)},i=[],l=(n("ac6a"),n("b775"));function s(t,e){return Object(l["a"])({url:t,method:"post",data:e})}function o(t,e){return Object(l["a"])({url:t,method:"post",data:{ids:e}})}function r(t,e,n){return Object(l["a"])({url:t,method:"post",data:{ids:e,state:n}})}var u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pagination-container",class:{hidden:t.hidden}},[n("el-pagination",t._b({attrs:{background:t.background,"current-page":t.currentPage,"page-size":t.pageSize,layout:t.layout,"page-sizes":t.pageSizes,total:t.total},on:{"update:currentPage":function(e){t.currentPage=e},"update:current-page":function(e){t.currentPage=e},"update:pageSize":function(e){t.pageSize=e},"update:page-size":function(e){t.pageSize=e},"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}},"el-pagination",t.$attrs,!1))],1)},c=[];n("c5f6");Math.easeInOutQuad=function(t,e,n,a){return t/=a/2,t<1?n/2*t*t+e:(t--,-n/2*(t*(t-2)-1)+e)};var d=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)}}();function p(t){document.documentElement.scrollTop=t,document.body.parentNode.scrollTop=t,document.body.scrollTop=t}function h(){return document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop}function m(t,e,n){var a=h(),i=t-a,l=20,s=0;e="undefined"===typeof e?500:e;var o=function t(){s+=l;var o=Math.easeInOutQuad(s,a,i,e);p(o),s<e?d(t):n&&"function"===typeof n&&n()};o()}var f={name:"Pagination",props:{total:{required:!0,type:Number},page:{type:Number,default:1},limit:{type:Number,default:20},pageSizes:{type:Array,default:function(){return[10,20,30,50]}},layout:{type:String,default:"total, sizes, prev, pager, next, jumper"},background:{type:Boolean,default:!0},autoScroll:{type:Boolean,default:!0},hidden:{type:Boolean,default:!1}},computed:{currentPage:{get:function(){return this.page},set:function(t){this.$emit("update:page",t)}},pageSize:{get:function(){return this.limit},set:function(t){this.$emit("update:limit",t)}}},methods:{handleSizeChange:function(t){this.$emit("pagination",{page:this.currentPage,limit:t}),this.autoScroll&&m(0,800)},handleCurrentChange:function(t){this.$emit("pagination",{page:t,limit:this.pageSize}),this.autoScroll&&m(0,800)}}},g=f,b=(n("e498"),n("2877")),y=Object(b["a"])(g,u,c,!1,null,"6af373ef",null),w=y.exports,v={name:"PagingTable",components:{Pagination:w},props:{options:{type:Object,default:function(){return{multiActions:[],listUrl:"",deleteUrl:"",stateUrl:"",multi:!1}}},listQuery:{type:Object,default:function(){return{current:1,size:10,params:{},t:0}}}},data:function(){return{dataList:{total:0},listLoading:!0,selectedIds:[],selectedObjs:[],selectedLabel:"",multiShow:!1,multiNow:""}},watch:{listQuery:{handler:function(){this.getList()},deep:!0}},created:function(){this.getList()},methods:{handleAdd:function(){this.options.addRoute?this.$router.push({name:this.options.addRoute,params:{}}):console.log("未设置添加数据跳转路由！")},getList:function(){var t=this;this.listLoading=!0,this.listQuery.t=(new Date).getTime(),s(this.options.listUrl,this.listQuery).then((function(e){t.dataList=e.data,t.listLoading=!1}))},handleFilter:function(){this.getList()},handleOption:function(t){this.multiNow="","delete"!==t?"enable"!==t?"disable"!==t?this.$emit("multi-actions",{opt:t,ids:this.selectedIds}):this.handleState(1):this.handleState(0):this.handleDelete()},handleState:function(t){var e=this;r(this.options.stateUrl,this.selectedIds,t).then((function(t){0===t.code&&(e.$message({type:"success",message:"状态修改成功!"}),e.getList())}))},handleDelete:function(){var t=this;0!==this.selectedIds.length?this.$confirm("确实要删除吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){o(t.options.deleteUrl,t.selectedIds).then((function(){t.$message({type:"success",message:"删除成功!"}),t.getList()}))})):this.$message({message:"请至少选择一条数据！",type:"warning"})},handleSelection:function(t){var e=[];t.forEach((function(t){e.push(t.id)})),this.selectedObjs=t,this.selectedIds=e,this.multiShow=e.length>0,this.selectedLabel="已选"+e.length+"项",this.$emit("select-changed",{ids:this.selectedIds,objs:this.selectedObjs})}}},S=v,_=(n("5103"),Object(b["a"])(S,a,i,!1,null,null,null));e["a"]=_.exports},e498:function(t,e,n){"use strict";var a=n("1c18"),i=n.n(a);i.a}}]);