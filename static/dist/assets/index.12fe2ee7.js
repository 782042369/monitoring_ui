import{d as a,r as c,o as t,c as e,a as s,p as n,b as i,e as o,f as r,g as l,h as d,i as p}from"./vendor.9aa017b4.js";var m=a({setup:a=>(a,s)=>{const n=c("router-view");return t(),e(n)}});const v=s();let f;const h={},_=function(a,c){if(!c||0===c.length)return a();if(void 0===f){const a=document.createElement("link").relList;f=a&&a.supports&&a.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(c.map((a=>{if(a in h)return;h[a]=!0;const c=a.endsWith(".css"),t=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${t}`))return;const e=document.createElement("link");return e.rel=c?"stylesheet":f,c||(e.as="script",e.crossOrigin=""),e.href=a,document.head.appendChild(e),c?new Promise(((a,c)=>{e.addEventListener("load",a),e.addEventListener("error",c)})):void 0}))).then((()=>a()))};n("data-v-6cccf778");const u={class:"com_side"},E=o('<div class="list" id="side-main-nav" data-v-6cccf778><a href="/web/home" data-v-6cccf778><li class="item active" data-mark="home" data-v-6cccf778><span class="iconfont" data-v-6cccf778></span><span class="title" data-v-6cccf778>数据分析</span></li></a><a href="/web/top" data-v-6cccf778><li class="item" data-mark="top" data-v-6cccf778><span class="iconfont" data-v-6cccf778></span><span class="title" data-v-6cccf778>TOP分析</span></li></a><a href="/web/pagesavg" data-v-6cccf778><li class="item" data-mark="pages" data-v-6cccf778><span class="iconfont" data-v-6cccf778></span><span class="title" data-v-6cccf778>访问页面</span></li></a><a href="/web/ajaxavg" data-v-6cccf778><li class="item" data-mark="ajax" data-v-6cccf778><span class="iconfont" data-v-6cccf778></span><span class="title" data-v-6cccf778>AJAX性能</span></li></a><a href="/web/erroravg" data-v-6cccf778><li class="item" data-mark="error" data-v-6cccf778><span class="iconfont" data-v-6cccf778></span><span class="title" data-v-6cccf778>脚本错误</span></li></a><a href="/web/pagesavg" data-v-6cccf778><li class="item" data-mark="slowpages" data-v-6cccf778><span class="iconfont" data-v-6cccf778></span><span class="title" data-v-6cccf778>慢页面追踪</span></li></a><a href="/web/resourcesavg" data-v-6cccf778><li class="item" data-mark="resources" data-v-6cccf778><span class="iconfont" data-v-6cccf778></span><span class="title" data-v-6cccf778>慢资源追踪</span></li></a><a href="/web/analysislist" data-v-6cccf778><li class="item" data-mark="analysis" data-v-6cccf778><span class="iconfont" data-v-6cccf778></span><span class="title" data-v-6cccf778>用户轨迹</span></li></a><a href="/web/diagram" data-v-6cccf778><li class="item" data-mark="diagram" data-v-6cccf778><span class="iconfont" data-v-6cccf778></span><span class="title" data-v-6cccf778>流量热力图</span></li></a><a href="/web/alarm" data-v-6cccf778><li class="item" data-mark="alarm" data-v-6cccf778><span class="iconfont" data-v-6cccf778></span><span class="title" data-v-6cccf778>应用告警</span></li></a><a href="/web/setting" data-v-6cccf778><li class="item" data-mark="setting" data-v-6cccf778><span class="iconfont" data-v-6cccf778></span><span class="title" data-v-6cccf778>系统设置</span></li></a></div>',1);i();var g=a({setup:a=>(a,c)=>(t(),e("div",u,[E]))});g.__scopeId="data-v-6cccf778",n("data-v-d18eb08c");const b={class:"layout",flex:"dir:top"},x=o('<div class="layout-header" data-v-d18eb08c><a href="/test/index.html" data-v-d18eb08c>测试页面</a><a href="/test/resourceError.html" data-v-d18eb08c>资源加载测试页面</a><a href="/test/vue2error.html" data-v-d18eb08c>vue2测试页面</a><a href="/test/xhrerror.html" data-v-d18eb08c>请求测试页面</a></div>',1),w={class:"layout-main",flex:""},P={class:"layout-content"};i();var j=a({setup:a=>(a,s)=>{const n=c("router-view");return t(),e("div",b,[x,r("div",w,[r(g),r("div",P,[r(n)])])])}});j.__scopeId="data-v-d18eb08c";const A=[{path:"/login",component:()=>_((()=>import("./index.b20e0ffd.js")),["/assets/index.b20e0ffd.js","/assets/index.e105f09f.css","/assets/vendor.9aa017b4.js","/assets/index.a5f54600.js","/assets/index.3976e4a9.css"]),name:"login"},{path:"/",redirect:"/web/home"},{path:"/web",component:j,redirect:"/web/home",children:[{path:"home",component:()=>_((()=>import("./index.4c11e4c2.js")),["/assets/index.4c11e4c2.js","/assets/index.c25c1942.css","/assets/vendor.9aa017b4.js","/assets/index.a5f54600.js","/assets/index.3976e4a9.css"]),name:"home",title:"数据分析"},{path:"top",component:()=>_((()=>import("./index.4c11e4c2.js")),["/assets/index.4c11e4c2.js","/assets/index.c25c1942.css","/assets/vendor.9aa017b4.js","/assets/index.a5f54600.js","/assets/index.3976e4a9.css"]),name:"home",title:"TOP分析"},{path:"pagesavg",component:()=>_((()=>import("./index.4c11e4c2.js")),["/assets/index.4c11e4c2.js","/assets/index.c25c1942.css","/assets/vendor.9aa017b4.js","/assets/index.a5f54600.js","/assets/index.3976e4a9.css"]),name:"home",title:"访问页面"},{path:"ajaxavg",component:()=>_((()=>import("./index.4c11e4c2.js")),["/assets/index.4c11e4c2.js","/assets/index.c25c1942.css","/assets/vendor.9aa017b4.js","/assets/index.a5f54600.js","/assets/index.3976e4a9.css"]),name:"home",title:"AJAX性能"},{path:"erroravg",component:()=>_((()=>import("./index.4c11e4c2.js")),["/assets/index.4c11e4c2.js","/assets/index.c25c1942.css","/assets/vendor.9aa017b4.js","/assets/index.a5f54600.js","/assets/index.3976e4a9.css"]),name:"home",title:"脚本错误"},{path:"pagesavg",component:()=>_((()=>import("./index.4c11e4c2.js")),["/assets/index.4c11e4c2.js","/assets/index.c25c1942.css","/assets/vendor.9aa017b4.js","/assets/index.a5f54600.js","/assets/index.3976e4a9.css"]),name:"home",title:"慢页面追踪"},{path:"resourcesavg",component:()=>_((()=>import("./index.4c11e4c2.js")),["/assets/index.4c11e4c2.js","/assets/index.c25c1942.css","/assets/vendor.9aa017b4.js","/assets/index.a5f54600.js","/assets/index.3976e4a9.css"]),name:"home",title:"慢资源追踪"},{path:"analysislist",component:()=>_((()=>import("./index.4c11e4c2.js")),["/assets/index.4c11e4c2.js","/assets/index.c25c1942.css","/assets/vendor.9aa017b4.js","/assets/index.a5f54600.js","/assets/index.3976e4a9.css"]),name:"home",title:"用户轨迹"},{path:"diagram",component:()=>_((()=>import("./index.4c11e4c2.js")),["/assets/index.4c11e4c2.js","/assets/index.c25c1942.css","/assets/vendor.9aa017b4.js","/assets/index.a5f54600.js","/assets/index.3976e4a9.css"]),name:"home",title:"流量热力图"},{path:"alarm",component:()=>_((()=>import("./index.4c11e4c2.js")),["/assets/index.4c11e4c2.js","/assets/index.c25c1942.css","/assets/vendor.9aa017b4.js","/assets/index.a5f54600.js","/assets/index.3976e4a9.css"]),name:"home",title:"应用告警"},{path:"setting",component:()=>_((()=>import("./index.4c11e4c2.js")),["/assets/index.4c11e4c2.js","/assets/index.c25c1942.css","/assets/vendor.9aa017b4.js","/assets/index.a5f54600.js","/assets/index.3976e4a9.css"]),name:"home",title:"数据分析"},{path:"home",component:()=>_((()=>import("./index.4c11e4c2.js")),["/assets/index.4c11e4c2.js","/assets/index.c25c1942.css","/assets/vendor.9aa017b4.js","/assets/index.a5f54600.js","/assets/index.3976e4a9.css"]),name:"home",title:"系统设置"}]}],L=l({history:d(),routes:A});(()=>{return a=this,c=null,t=function*(){const a=p(m);a.use(L),function(a){a.use(v)}(a),a.mount("#app")},new Promise(((e,s)=>{var n=a=>{try{o(t.next(a))}catch(c){s(c)}},i=a=>{try{o(t.throw(a))}catch(c){s(c)}},o=a=>a.done?e(a.value):Promise.resolve(a.value).then(n,i);o((t=t.apply(a,c)).next())}));var a,c,t})();export{L as r};