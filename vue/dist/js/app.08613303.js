(function(e){function t(t){for(var n,o,i=t[0],p=t[1],d=t[2],_=0,s=[];_<i.length;_++)o=i[_],Object.prototype.hasOwnProperty.call(c,o)&&c[o]&&s.push(c[o][0]),c[o]=0;for(n in p)Object.prototype.hasOwnProperty.call(p,n)&&(e[n]=p[n]);u&&u(t);while(s.length)s.shift()();return a.push.apply(a,d||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,i=1;i<r.length;i++){var p=r[i];0!==c[p]&&(n=!1)}n&&(a.splice(t--,1),e=o(o.s=r[0]))}return e}var n={},c={app:0},a=[];function o(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=n,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],p=i.push.bind(i);i.push=t,i=i.slice();for(var d=0;d<i.length;d++)t(i[d]);var u=p;a.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d"),r("483b"),r("aeed");var n=r("7a23"),c=(r("b0c0"),{key:0,id:"product-details"}),a={class:"name"},o={class:"price"};function i(e,t,r,i,p,d){var u=Object(n["resolveComponent"])("DxTreeView");return Object(n["openBlock"])(),Object(n["createBlock"])("div",null,[Object(n["createVNode"])(u,{id:"treeView","data-source":p.products,dataStructure:"plain","key-expr":"ID","display-expr":"name","parent-id-expr":"categoryId","item-template":"product-template","search-enabled":!0,"search-mode":"startswith",selectionMode:"single","select-by-click":!0,onItemSelectionChanged:d.selectProduct},{"product-template":Object(n["withCtx"])((function(e){return[Object(n["createTextVNode"])(Object(n["toDisplayString"])(e.data.price?e.data.name+" ($"+e.data.price+")":e.data.name),1)]})),_:1},8,["data-source","onItemSelectionChanged"]),p.currentProduct.price?(Object(n["openBlock"])(),Object(n["createBlock"])("div",c,[Object(n["createVNode"])("img",{src:p.currentProduct.image},null,8,["src"]),Object(n["createVNode"])("div",a,Object(n["toDisplayString"])(p.currentProduct.name),1),Object(n["createVNode"])("div",o,"$"+Object(n["toDisplayString"])(p.currentProduct.price),1)])):Object(n["createCommentVNode"])("",!0)])}var p=r("2824"),d=r.n(p),u="https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/products/",_=[{ID:"1",name:"Stores",expanded:!0},{ID:"1_1",categoryId:"1",name:"Super Mart of the West",expanded:!0},{ID:"1_1_1",categoryId:"1_1",name:"Video Players"},{ID:"1_1_1_1",categoryId:"1_1_1",name:"HD Video Player",image:u+"1.png",price:220},{ID:"1_1_1_2",categoryId:"1_1_1",name:"SuperHD Video Player",image:u+"2.png",price:270},{ID:"1_1_2",categoryId:"1_1",name:"Televisions",expanded:!0},{ID:"1_1_2_1",categoryId:"1_1_2",name:"SuperLCD 42",image:u+"7.png",price:1200},{ID:"1_1_2_2",categoryId:"1_1_2",name:"SuperLED 42",image:u+"5.png",price:1450},{ID:"1_1_2_3",categoryId:"1_1_2",name:"SuperLED 50",image:u+"4.png",price:1600},{ID:"1_1_2_4",categoryId:"1_1_2",name:"SuperLCD 55",image:u+"6.png",price:1750},{ID:"1_1_2_5",categoryId:"1_1_2",name:"SuperLCD 70",image:u+"9.png",price:4e3},{ID:"1_1_3",categoryId:"1_1",name:"Monitors"},{ID:"1_1_3_1",categoryId:"1_1_3",name:'19"'},{ID:"1_1_3_1_1",categoryId:"1_1_3_1",name:"DesktopLCD 19",image:u+"10.png",price:160},{ID:"1_1_4",categoryId:"1_1",name:"Projectors"},{ID:"1_1_4_1",categoryId:"1_1_4",name:"Projector Plus",image:u+"14.png",price:550},{ID:"1_1_4_2",categoryId:"1_1_4",name:"Projector PlusHD",image:u+"15.png",price:750}],s=_,l={components:{DxTreeView:d.a},data:function(){return{products:s,currentProduct:s[0]}},methods:{selectProduct:function(e){this.currentProduct=e.itemData}}};r("fabe");l.render=i;var g=l;Object(n["createApp"])(g).mount("#app")},"618c":function(e,t,r){},fabe:function(e,t,r){"use strict";r("618c")}});
//# sourceMappingURL=app.08613303.js.map