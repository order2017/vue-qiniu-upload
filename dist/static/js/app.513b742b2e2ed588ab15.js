webpackJsonp([0],[,,function(t,e,n){function a(t){n(7)}var o=n(0)(n(15),n(5),a,null,null);t.exports=o.exports},,function(t,e,n){function a(t){n(8)}var o=n(0)(n(16),n(6),a,"data-v-46dd337e",null);t.exports=o.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("upload",{attrs:{action:t.action,token:t.token,multiple:t.multiple,accept:t.accept},on:{"on-upload":t.uploadFile,"on-error":t.uploadErr,"on-progress":t.progress}},[n("template",{slot:"form"}),t._v(" "),n("template",{slot:"picker"},[n("span",{staticClass:"btn"},[t._v("上传图片")])])],2),t._v(" "),n("div",{staticClass:"block"},[n("h2",[t._v("上传结果")]),t._v(" "),n("div",{attrs:{id:"result"}},[n("p",[t._v("hash: "+t._s(t.hashes))]),t._v(" "),n("p",[t._v("key: "+t._s(t.keys))])]),t._v(" "),n("div",t._l(t.hashes,function(t){return n("img",{key:t,staticClass:"viewimg",attrs:{src:t,alt:"hashes"}})})),t._v(" "),n("div",t._l(t.keys,function(t){return n("img",{key:t,staticClass:"viewimg",attrs:{src:t,alt:"keys"}})}))]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.uploadMsg.length,expression:"uploadMsg.length"}],staticClass:"block",attrs:{id:"ajaxErr"}},[n("h4",[t._v("uploadMsg: ")]),t._v(" "),t._l(t.uploadMsg,function(e,a){return n("p",{key:a},[t._v(t._s(e))])})],2)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("form",{attrs:{id:t.formId,method:t.method,enctype:"multipart/form-data"}},[n("input",{attrs:{name:"token",type:"hidden"},domProps:{value:t.token}}),t._v(" "),n("input",{attrs:{name:"file",id:t.pickerId,type:"file",accept:t.accept,multiple:t.multiple},on:{change:t.upload}}),t._v(" "),n("input",{attrs:{name:"accept",type:"hidden"}}),t._v(" "),t._t("form")],2),t._v(" "),n("label",{attrs:{for:t.pickerId}},[t._t("picker",[n("em",[t._v("upload")])])],2)])},staticRenderFns:[]}},function(t,e){},function(t,e){},,,,,,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(3),o=n(2),i=n.n(o),s=n(1);a.a.use(s.a),a.a.config.productionTip=!1,new a.a({el:"#app",template:"<App/>",components:{App:i.a}})},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(13),o=n.n(a),i=n(4),s=n.n(i);e.default={name:"app",components:{upload:s.a},data:function(){return{action:"http://upload.qiniu.com/",accept:"image/png, image/jpeg, image/gif",multiple:!0,token:"QWYn5TFQsLLU1pL5MFEmX3s5DmHdUThav9WyOWOm:ZIpAGEJRtGVzfLjqDTjJwF4FbeY=:eyJkZWxldGVBZnRlckRheXMiOjcsInNjb3BlIjoianNzZGsiLCJkZWFkbGluZSI6MTUwNDQ0NDk1MH0=",hashes:[],keys:[],uploadMsg:[]}},methods:{uploadFile:function(t){this.hashes.push("http://7j1xky.com2.z0.glb.qiniucdn.com/"+t.hash),this.keys.push("http://7j1xky.com2.z0.glb.qiniucdn.com/"+t.key)},uploadErr:function(t){this.uploadMsg.push(o()(t))},progress:function(t){this.uploadMsg.push("e.loaded: "+t.loaded+", e.total: "+t.total+", percent: "+t.loaded/t.total*100)}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{method:{type:String,default:"post"},action:{type:String,default:""},token:{type:String,default:""},accept:{type:String,default:"image/png, image/jpeg, image/gif"},multiple:{type:Boolean,default:!1},callback:{type:Function,default:function(){}}},data:function(){return{key:"",formId:"upload"+(new Date).getTime(),pickerId:"picker"+(new Date).getTime()}},methods:{upload:function(){var t=this;this.$nextTick(function(){var e=new FormData(document.getElementById(t.formId));if(t.multiple)for(var n=0,a=e.getAll("file"),o=a.length;n<o;n++)e.set("file",a[n]),t.$http.post(t.action,e).then(function(e){t.$emit("on-upload",e.body)});else t.$http.post(t.action,e).then(function(e){t.$emit("on-upload",e.body)})})}}}},function(t,e){}],[14]);
//# sourceMappingURL=app.513b742b2e2ed588ab15.js.map