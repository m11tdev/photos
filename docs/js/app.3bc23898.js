(function(t){function e(e){for(var o,r,s=e[0],c=e[1],l=e[2],d=0,h=[];d<s.length;d++)r=s[d],a[r]&&h.push(a[r][0]),a[r]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);u&&u(e);while(h.length)h.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],o=!0,s=1;s<n.length;s++){var c=n[s];0!==a[c]&&(o=!1)}o&&(i.splice(e--,1),t=r(r.s=n[0]))}return t}var o={},a={app:0},i=[];function r(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=o,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/photos/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=c;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"4b58":function(t,e,n){"use strict";var o=n("91ee"),a=n.n(o);a.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var o=n("a026"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("router-view")],1)},i=[],r={name:"app"},s=r,c=n("2877"),l=Object(c["a"])(s,a,i,!1,null,null,null),u=l.exports,d=n("8c4f"),h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:{"modal-active":t.modalBg}},[n("div",[n("img",{staticClass:"logo ml-auto mt-5 mr-auto mb-5 d-block",attrs:{src:t.publicPath+"logo.png",alt:"logo"}})]),n("div",{staticClass:"d-flex flex-wrap ml-auto mt-3 mr-auto mb-5 photos"},[t._l(t.photos,function(e,o){return n("div",{key:e.name,staticClass:"photo"},[n("div",[n("div",{class:{show:e.show},style:t.backgroundImage(e.name),on:{click:function(e){t.id=o+1}}}),n("div",{staticClass:"close-photo",on:{click:t.reset}},[t._v("×")])])])}),t.modalBg?n("div",{staticClass:"modal-bg",on:{click:t.reset}}):t._e(),t.modalBg?n("div",{staticClass:"reset",on:{click:t.reset}}):t._e(),t.modalBg&&t.id>1?n("div",{staticClass:"prev",on:{click:t.prev}},[t._v("\n\t\t\t←\n\t\t")]):t._e(),t.modalBg&&t.id<t.photos.length?n("div",{staticClass:"next",on:{click:t.next}},[t._v("\n\t\t\t→\n\t\t")]):t._e()],2)])},p=[],f=(n("ac6a"),[{name:"angles.jpg"},{name:"double-vision.jpg"},{name:"cafe.jpg"},{name:"poses.jpg"},{name:"goma-01.jpg"},{name:"chess.jpg"},{name:"ferry.jpg"},{name:"twirls.jpg"},{name:"noo-yoik.jpg"},{name:"highline.jpg"},{name:"vanda-dundee-03.jpg"},{name:"vanda-dundee-01.jpg"},{name:"strath-steps.jpg"},{name:"misty-loch-fyne.jpg"},{name:"beach-footprints.jpg"},{name:"squiggles.jpg"},{name:"tree-b&w.jpg"},{name:"sunrise.jpg"}]),g={name:"homepage",data:function(){return{photos:f,publicPath:"/photos/",modalBg:!1,id:0}},methods:{backgroundImage:function(t){return{backgroundImage:"url(".concat(this.publicPath,"photos/").concat(t,")")}},showPhoto:function(t){t<0||(this.photos.forEach(function(e,n){return e.show=n==t-1}),this.modalBg=!0)},reset:function(){this.modalBg=!1,this.photos.forEach(function(t){return t.show=!1}),this.id=0},prev:function(){this.id>0&&--this.id},next:function(){this.id<this.photos.length&&++this.id}},watch:{id:function(){this.id&&this.id<this.photos.length+1&&this.showPhoto(this.id)}},mounted:function(){var t=this;this.id&&this.id<this.photos.length+1&&this.showPhoto(this.id),document.addEventListener("keydown",function(e){console.log(e.code),t.modalBg&&("Escape"==e.code&&t.reset(),"ArrowLeft"==e.code&&t.id>0&&--t.id,"ArrowRight"==e.code&&t.id<t.photos.length&&++t.id)});var e=0,n=0,o=document.querySelector(".photos"),a=function(){n<e-100&&t.next(),n>e+100&&t.prev()};o.addEventListener("touchstart",function(t){"reset"==t.target.className&&(e=t.changedTouches[0].screenX)}),o.addEventListener("touchend",function(t){"reset"==t.target.className&&(n=t.changedTouches[0].screenX,a())})}},m=g,v=(n("4b58"),Object(c["a"])(m,h,p,!1,null,null,null)),b=v.exports,j=[{path:"*",component:b,name:"404"}];o["a"].use(d["a"]);var w=new d["a"]({routes:j,linkActiveClass:"active"});new o["a"]({router:w,render:function(t){return t(u)}}).$mount("#app")},"91ee":function(t,e,n){}});