webpackJsonp([0],[,,function(t,e,a){"use strict";var r=a(1),n=a(21),s=a(14),o=a.n(s);r.a.use(n.a),e.a=new n.a({routes:[{path:"/",name:"Hello",component:o.a}]})},function(t,e,a){function r(t){a(12)}var n=a(0)(a(5),a(19),r,null,null);t.exports=n.exports},,function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=a(15),n=a.n(r),s=a(16),o=a.n(s);e.default={name:"app",components:{TranslateForm:n.a,TranslateOutput:o.a},data:function(){return{translatedText:""}},methods:{translateText:function(t,e){var a=this;this.$http.get("https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20170820T192304Z.23450cf5594e6814.944eb0812b61c8705cb701917729207f8abd7337&lang="+e+"&text="+t).then(function(t){a.translatedText=t.body.text[0]})}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"hello",data:function(){return{msg:"Welcome to Your Vue.js App"}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"translateForm",data:function(){return{textToTranslate:"",language:""}},created:function(){this.language="el"},methods:{formSubmit:function(t){this.$emit("formSubmit",this.textToTranslate,this.language),t.preventDefault()}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"translateOutput",props:["translatedTextProp"]}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=a(1),n=a(3),s=a.n(n),o=a(4),l=a(2);r.a.config.productionTip=!1,r.a.use(o.a),new r.a({el:"#app",router:l.a,template:"<App/>",components:{App:s.a}})},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e,a){function r(t){a(10)}var n=a(0)(a(6),a(17),r,"data-v-11f501ee",null);t.exports=n.exports},function(t,e,a){function r(t){a(11)}var n=a(0)(a(7),a(18),r,null,null);t.exports=n.exports},function(t,e,a){function r(t){a(13)}var n=a(0)(a(8),a(20),r,null,null);t.exports=n.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"hello"},[a("h1",[t._v(t._s(t.msg))]),t._v(" "),a("h2",[t._v("Essential Links")]),t._v(" "),t._m(0),t._v(" "),a("h2",[t._v("Ecosystem")]),t._v(" "),t._m(1)])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",[a("li",[a("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[t._v("Core Docs")])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[t._v("Forum")])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://gitter.im/vuejs/vue",target:"_blank"}},[t._v("Gitter Chat")])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[t._v("Twitter")])]),t._v(" "),a("br"),t._v(" "),a("li",[a("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank"}},[t._v("Docs for This Template")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",[a("li",[a("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank"}},[t._v("vue-router")])]),t._v(" "),a("li",[a("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank"}},[t._v("vuex")])]),t._v(" "),a("li",[a("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank"}},[t._v("vue-loader")])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[t._v("awesome-vue")])])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row",attrs:{id:"translateForm"}},[a("div",{staticClass:"col-md-6 col-sm-8 col-md-offset-3 col-sm-offset-2"},[a("form",{staticClass:"well",attrs:{id:"transForm"},on:{submit:t.formSubmit}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.textToTranslate,expression:"textToTranslate"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Enter your Text..."},domProps:{value:t.textToTranslate},on:{input:function(e){e.target.composing||(t.textToTranslate=e.target.value)}}}),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.language,expression:"language"}],staticClass:"form-control",on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.language=e.target.multiple?a:a[0]}}},[a("option",{attrs:{value:"el"}},[t._v("Greek")]),t._v(" "),a("option",{attrs:{value:"en"}},[t._v("English")]),t._v(" "),a("option",{attrs:{value:"fr"}},[t._v("French")]),t._v(" "),a("option",{attrs:{value:"de"}},[t._v("German")])]),t._v(" "),a("br"),t._v(" "),a("input",{staticClass:"btn btn-primary",attrs:{type:"submit",value:"Translate"}})])])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"text-center",attrs:{id:"app"}},[a("h1",[t._v("Word Translator")]),t._v(" "),a("h5",[t._v("Powered by Vue.js")]),t._v(" "),a("hr"),t._v(" "),a("TranslateForm",{on:{formSubmit:t.translateText}}),t._v(" "),a("TranslateOutput",{attrs:{translatedTextProp:t.translatedText}})],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"translateOutput"}},[a("h2",[t._v(t._s(t.translatedTextProp))])])},staticRenderFns:[]}},,,,function(t,e){}],[9]);
//# sourceMappingURL=app.a6206c7c2bce447a8f2b.js.map