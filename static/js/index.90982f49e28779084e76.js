webpackJsonp([3],{0:function(t,e,a){"use strict";var n={hotLists:"/index/hotLists",banner:"/index/banner",topList:"/category/topList",subList:"/category/subList",rank:"/category/rank",searchList:"/search/list",details:"/goods/details",deal:"/goods/deal",cartAdd:"/cart/add",cartLists:"/cart/list",cartReduce:"/cart/reduce",cartRemove:"/cart/remove",cartMremove:"/cart/mremove",cartUpdate:"/cart/update",addressLists:"/address/list",addressAdd:"/address/add",addressRemove:"/address/remove",addressUpdate:"/address/update",addressSetDefault:"/address/setDefault"};for(var s in n)n.hasOwnProperty(s)&&(n[s]="http://rap2api.taobao.org/app/mock/7058"+n[s]);e.a=n},10:function(t,e){},11:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bottom-nav"},[a("ul",t._l(t.navConfig,function(e,n){return a("li",{class:{active:n==t.curIndex},on:{click:function(a){return t.changeNav(e,n)}}},[a("a",[a("i",{class:e.icon}),t._v(" "),a("div",[t._v(t._s(e.name))])])])}),0)])},staticRenderFns:[]}},112:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(74),s=(a.n(n),a(88)),i=a.n(s),r=a(14),o=(a.n(r),a(86)),c=(a.n(o),a(2)),d=a(4),l=a.n(d),u=a(0),p=a(8),f=a.n(p),h=a(22),g=a.n(h);c.default.use(i.a),new c.default({el:"#app",data:{lists:null,pageNum:1,pageSize:6,loading:!1,allLoaded:!1,bannerLists:null,obj:{age:20}},created:function(){this.getLists(),this.getBanner()},methods:{getLists:function(){var t=this;this.allLoaded||(this.loading=!0,l.a.get(u.a.hotLists,{pageNum:this.pageNum,pageSize:this.pageSize}).then(function(e){var a=e.data.lists;a.length<t.pageSize&&(t.allLoaded=!0),t.lists?t.lists=t.lists.concat(a):t.lists=a,t.loading=!1,t.pageNum++}))},getBanner:function(){var t=this;l.a.get(u.a.banner).then(function(e){t.bannerLists=e.data.lists})}},components:{Foot:f.a,Swipe:g.a}})},14:function(t,e){},22:function(t,e,a){function n(t){a(40)}var s=a(6)(a(29),a(42),n,null,null);t.exports=s.exports},29:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(72),s=a(39);a.n(s);e.default={name:"swipe",props:["lists"],created:function(){},mounted:function(){new n.a(".swiper-container",{loop:!0,pagination:{el:".swiper-pagination"}})}}},39:function(t,e){},40:function(t,e){},42:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"swiper-container"},[a("div",{staticClass:"swiper-wrapper"},t._l(t.lists,function(t){return a("div",{staticClass:"swp-page swiper-slide"},[a("a",{staticClass:"js-no-follow",attrs:{href:t.clickUrl}},[a("img",{staticClass:"goods-main-photo fadeIn",attrs:{src:t.img}})])])}),0),t._v(" "),a("div",{staticClass:"swiper-pagination"})])},staticRenderFns:[]}},74:function(t,e){},8:function(t,e,a){function n(t){a(10)}var s=a(6)(a(9),a(11),n,null,null);t.exports=s.exports},86:function(t,e){},9:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(12),s=a.n(n),i=s.a.parse(location.search.substr(1)),r=(i.index,[{name:"有赞",icon:"icon-home",href:"index.html"},{name:"分类",icon:"icon-category",href:"category.html"},{name:"购物车",icon:"icon-cart",href:"cart.html"},{name:"我",icon:"icon-user",href:"member.html"}]);e.default={props:["obj"],data:function(){return{navConfig:r,curIndex:parseInt(s.a.parse(location.search.substr(1).index))||0,ob:this.obj}},created:function(){var t=this;setTimeout(function(){t.ob.age=18},5e3)},methods:{changeNav:function(t,e){console.log(e),location.href=t.href+"?index="+e}}}}},[112]);
//# sourceMappingURL=index.90982f49e28779084e76.js.map