(function(t){function e(e){for(var r,a,o=e[0],u=e[1],s=e[2],l=0,f=[];l<o.length;l++)a=o[l],i[a]&&f.push(i[a][0]),i[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);p&&p(e);while(f.length)f.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],r=!0,o=1;o<n.length;o++){var u=n[o];0!==i[u]&&(r=!1)}r&&(c.splice(e--,1),t=a(a.s=n[0]))}return t}var r={},i={app:0},c=[];function a(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=r,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(n,r,function(e){return t[e]}.bind(null,r));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],u=o.push.bind(o);o.push=e,o=o.slice();for(var s=0;s<o.length;s++)e(o[s]);var p=u;c.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"01b2":function(t,e,n){"use strict";var r=n("b4fd"),i=n.n(r);i.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var r=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("xkcd-comic",{attrs:{number:"657"}}),n("xkcd-comic")],1)},c=[],a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[t.api.success?n("div",[n("p",{staticClass:"title"},[t._v("xkcd #"+t._s(t.comic.num)+" - "+t._s(t.comic.title))]),n("p",{staticClass:"date"},[t._v("Published "+t._s(t.formattedDate))]),n("a",{attrs:{href:t.linkUrl}},[n("img",{attrs:{src:t.comic.img,title:t.comic.alt}})])]):t._e(),t.api.pending?n("p",{staticClass:"title"},[t._v("\n        "+t._s(t.api.pendingMessage)+"\n    ")]):t._e(),t.api.failure?n("p",{staticClass:"title"},[t._v("\n        "+t._s(t.api.failureMessage)+"\n    ")]):t._e()])},o=[],u=(n("96cf"),n("1da1")),s=(n("c5f6"),n("34a9")),p=n.n(s),l=function(){var t=Object(u["a"])(regeneratorRuntime.mark(function t(){var e,n=arguments;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e=n.length>0&&void 0!==n[0]?n[0]:void 0,t.next=3,p()(`http://dynamic.xkcd.com/api-0/jsonp/comic/${e}`).promise;case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),f={name:"XkcdComic",props:{number:{type:Number,default:void 0}},data:function(){return{comic:{title:"",alt:"",img:"",day:0,month:0,year:0,num:0},api:{success:!1,pending:!1,pendingMessage:"Getting latest xkcd comic",failure:!1,failureMessage:"Unable to get the latest xkcd comic"}}},computed:{linkUrl:function(){return"https://xkcd.com/".concat(this.comic.num)},formattedDate:function(){return"".concat(this.comic.day,"/").concat(this.comic.month,"/").concat(this.comic.year)}},created:function(){var t=Object(u["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,this.api.pending=!0,t.next=4,l(this.number);case 4:e=t.sent,this.number||(this.comic.num=e.num),this.comic=e,this.api.pending=!1,this.api.success=!0,t.next=15;break;case 11:t.prev=11,t.t0=t["catch"](0),this.api.pending=!1,this.api.failure=!0;case 15:case"end":return t.stop()}},t,this,[[0,11]])}));return function(){return t.apply(this,arguments)}}()},d=f,m=(n("01b2"),n("2877")),h=Object(m["a"])(d,a,o,!1,null,null,null);h.options.__file="xkcd-comic.vue";var v=h.exports,b={name:"App",components:{XkcdComic:v}},g=b,_=(n("5c0b"),Object(m["a"])(g,i,c,!1,null,null,null));_.options.__file="App.vue";var y=_.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(y)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var r=n("5e27"),i=n.n(r);i.a},"5e27":function(t,e,n){},b4fd:function(t,e,n){}});
//# sourceMappingURL=app.655fad72.js.map