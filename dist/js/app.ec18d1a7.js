(function(t){function e(e){for(var r,o,u=e[0],a=e[1],s=e[2],d=0,l=[];d<u.length;d++)o=u[d],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&l.push(i[o][0]),i[o]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(t[r]=a[r]);p&&p(e);while(l.length)l.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],r=!0,o=1;o<n.length;o++){var u=n[o];0!==i[u]&&(r=!1)}r&&(c.splice(e--,1),t=a(a.s=n[0]))}return t}var r={},o={app:0},i={app:0},c=[];function u(t){return a.p+"js/"+({}[t]||t)+"."+{"chunk-c839c96e":"5943a565","chunk-00cbde3d":"1d2ac7d0","chunk-30195768":"3142fcb2","chunk-75fc47d6":"17a9aba8"}[t]+".js"}function a(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.e=function(t){var e=[],n={"chunk-c839c96e":1,"chunk-00cbde3d":1,"chunk-30195768":1,"chunk-75fc47d6":1};o[t]?e.push(o[t]):0!==o[t]&&n[t]&&e.push(o[t]=new Promise(function(e,n){for(var r="css/"+({}[t]||t)+"."+{"chunk-c839c96e":"9ab70b72","chunk-00cbde3d":"e3e6c2c3","chunk-30195768":"54393d0b","chunk-75fc47d6":"f822ee79"}[t]+".css",i=a.p+r,c=document.getElementsByTagName("link"),u=0;u<c.length;u++){var s=c[u],d=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(d===r||d===i))return e()}var l=document.getElementsByTagName("style");for(u=0;u<l.length;u++){s=l[u],d=s.getAttribute("data-href");if(d===r||d===i)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var r=e&&e.target&&e.target.src||i,c=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete o[t],p.parentNode.removeChild(p),n(c)},p.href=i;var f=document.getElementsByTagName("head")[0];f.appendChild(p)}).then(function(){o[t]=0}));var r=i[t];if(0!==r)if(r)e.push(r[2]);else{var c=new Promise(function(e,n){r=i[t]=[e,n]});e.push(r[2]=c);var s,d=document.createElement("script");d.charset="utf-8",d.timeout=120,a.nc&&d.setAttribute("nonce",a.nc),d.src=u(t);var l=new Error;s=function(e){d.onerror=d.onload=null,clearTimeout(p);var n=i[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+r+": "+o+")",l.name="ChunkLoadError",l.type=r,l.request=o,n[1](l)}i[t]=void 0}};var p=setTimeout(function(){s({type:"timeout",target:d})},12e4);d.onerror=d.onload=s,document.head.appendChild(d)}return Promise.all(e)},a.m=t,a.c=r,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(n,r,function(e){return t[e]}.bind(null,r));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/TildaTask/",a.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],d=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var p=d;c.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0c45":function(t,e,n){},1243:function(t,e,n){"use strict";var r=n("c6b8"),o=n.n(r);o.a},"25d9":function(t,e,n){"use strict";var r=n("6bf9"),o=n.n(r);o.a},"2a7d":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"button",style:{"background-color":t.color},attrs:{type:t.type,form:t.formID},on:{click:t.action}},[t._v(t._s(t.text))])},o=[],i={name:"Button",props:{action:{type:Function,required:!1,default:null},color:{type:String,required:!1,default:"#000000"},type:{type:String,required:!1,default:"button"},text:{type:String,required:!0},formID:{type:String,required:!1,default:null}}},c=i,u=(n("af83"),n("2877")),a=Object(u["a"])(c,r,o,!1,null,"100e4e83",null);e["a"]=a.exports},"3e1a":function(t,e,n){"use strict";var r=n("a1a0"),o=n.n(r);o.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Basket",{attrs:{emptyColor:"#ffffff",fullColor:"#E44807"}}),n("router-view")],1)},i=[],c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"basket"},[n("router-link",{staticClass:"basket__link",attrs:{to:"/basket"}}),n("svg",{staticStyle:{"enable-background":"new 0 0 510 510"},attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",version:"1.1",id:"Capa_1",x:"0px",y:"0px",width:"100%",height:"100%",viewBox:"0 0 510 510","xml:space":"preserve"}},[n("g",{attrs:{id:"shopping-cart"}},[n("path",{staticClass:"active-path",attrs:{d:"M153,408c-28.05,0-51,22.95-51,51s22.95,51,51,51s51-22.95,51-51S181.05,\n        408,153,408z  M0,0v51h51l91.8,193.8L107.1,306\n        c-2.55,7.65-5.1,17.85-5.1,25.5c0,28.05,22.95,51,51,51h306v-51H163.2c-2.55,\n        0-5.1-2.55-5.1-5.1v-2.551l22.95-43.35h188.7\n        c20.4,0,35.7-10.2,43.35-25.5L504.9,89.25c5.1-5.1,5.1-7.65,\n        5.1-12.75c0-15.3-10.2-25.5-25.5-25.5H107.1L84.15,0H0z  M408,408\n        c-28.05,0-51,22.95-51,51s22.95,51,51,51s51-22.95,51-51S436.05,408,408,408z","data-original":"#000000","data-old_color":"#000000",fill:t.currentColor}})])])],1)},u=[],a=(n("7514"),n("6168")),s={name:"Basket",props:{emptyColor:{type:String,require:!1,default:"#ffffff"},fullColor:{type:String,require:!1,default:"#000000"}},computed:{basket:function(){return this.$store.getters.BASKET},currentColor:function(){return this.basket.length>0?this.fullColor:this.emptyColor}},created:function(){a["a"].$on("add-product-to-basket",this.addProduct)},methods:{addProduct:function(t){var e=this.basket.find(function(e){return+e.id===+t.id});e||this.$store.commit("ADD_BASKET",t)}}},d=s,l=(n("d3d6"),n("2877")),p=Object(l["a"])(d,c,u,!1,null,"01812a6e",null),f=p.exports,h={name:"App",components:{Basket:f}},m=h,_=(n("5c0b"),Object(l["a"])(m,o,i,!1,null,null,null)),v=_.exports,b=n("8c4f"),T=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("ShopHeader",{attrs:{mainTitle:"Juicy",subTitle:"Будь ярче!"}}),n("ProductList")],1)},S=[],y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header"},[n("h1",{staticClass:"header__title header__title_main"},[t._v(" "+t._s(t.mainTitle)+" ")]),t.subTitle?n("h2",{staticClass:"header__title header__title_sub"},[t._v(" "+t._s(t.subTitle)+" ")]):t._e(),n("div",{staticClass:"header__img"})])},g=[],O={name:"ShopHeader",props:{mainTitle:{type:String,required:!0},subTitle:{type:String,required:!1}}},k=O,E=(n("3e1a"),Object(l["a"])(k,y,g,!1,null,"3829f005",null)),C=E.exports,P=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"product-list"},t._l(t.products,function(t){return n("div",{key:t.id},[n("Product",{attrs:{productID:t.id}})],1)}),0)},I=[],w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"product"},[n("div",{staticClass:"product__img"}),n("p",{staticClass:"product__name"},[t._v(t._s(t.product.name))]),n("p",{staticClass:"product__description"},[t._v(t._s(t.product.description))]),n("Button",{staticClass:"product__button",attrs:{color:"#E44807",action:t.addToBusket,text:"Купить"}})],1)},x=[],D=(n("c5f6"),n("2a7d")),N={name:"Product",components:{Button:D["a"]},props:{productID:{type:Number,required:!0}},computed:{product:function(){var t=this,e=this.$store.getters.PRODUCTS;return console.log(e),e.find(function(e){return e.id===t.productID})}},methods:{addToBusket:function(){a["a"].$emit("add-product-to-basket",this.product)}}},j=N,B=(n("1243"),Object(l["a"])(j,w,x,!1,null,"56cb2080",null)),R=B.exports,U={name:"ProductList",components:{Product:R},data:function(){return{count:16}},computed:{products:function(){var t=this.$store.getters.PRODUCTS;return t.slice(0,this.count)}}},q=U,A=(n("25d9"),Object(l["a"])(q,P,I,!1,null,"55dbe2e2",null)),$=A.exports,L={name:"home",components:{ShopHeader:C,ProductList:$},beforeCreate:function(){this.$store.dispatch("INIT_PRODUCTS")}},H=L,K=Object(l["a"])(H,T,S,!1,null,null,null),M=K.exports;r["a"].use(b["a"]);var Y=new b["a"]({mode:"history",base:"/TildaTask/",routes:[{path:"/",name:"home",component:M},{path:"/basket",name:"basket",component:function(){return n.e("chunk-c839c96e").then(n.bind(null,"c00b"))}},{path:"*",redirect:"/"}]}),J=n("2f62"),z=n("bc3a"),F=n.n(z),G=n("f4d2"),Q=n("e51c");r["a"].use(J["a"]);var V=F.a.create({baseURL:"https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/",timeout:1e3,headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:"Token 042645573d283b5a10ca964d5db112dd9e0b53be"}}),W=new J["a"].Store({state:{products:[],basket:[],pickups:[],cityOptions:[],streetOptions:[],houseOptions:[],order:null},getters:{PRODUCTS:function(t){return t.products},BASKET:function(t){return t.basket},PICKUPS:function(t){return t.pickups},CITY_OPTIONS:function(t){return t.cityOptions},STREET_OPTIONS:function(t){return t.streetOptions},HOUSE_OPTIONS:function(t){return t.houseOptions},CITY:function(t){return t.city},STREET:function(t){return t.street},HOUSE:function(t){return t.house},ORDER:function(t){return t.order}},mutations:{SET_PRODUCTS:function(t,e){t.products=e},ADD_PRODUCTS:function(t,e){t.products.add(e)},SET_BASKET:function(t,e){t.basket=e},ADD_BASKET:function(t,e){t.basket.push(e)},DELETE_PRODUCT_FROM_BASKET:function(t,e){t.basket=t.basket.filter(function(t){return t.id!==e})},SET_PICKUPS:function(t,e){t.pickups=e},SET_CITY_OPTIONS:function(t,e){t.cityOptions=e},SET_STREET_OPTIONS:function(t,e){t.streetOptions=e},SET_HOUSE_OPTIONS:function(t,e){t.houseOptions=e},SET_CITY:function(t,e){t.city=e},SET_ORDER:function(t,e){t.order=e}},actions:{INIT_PRODUCTS:function(t){t.commit("SET_PRODUCTS",G.products)},INIT_PICKUPS:function(t){t.commit("SET_PICKUPS",Q.pickups)},GET_CITY_OPTIONS:function(t,e){var n=e.query;V.post("/address",{query:n,count:10,from_bound:{value:"city"},to_bound:{value:"city"},restrict_value:!0}).then(function(e){t.commit("SET_CITY_OPTIONS",e.data.suggestions.map(function(t){return t.data.city}))})},GET_STREET_OPTIONS:function(t,e){var n=e.query;V.post("/address",{query:n,count:10,from_bound:{value:"street"},to_bound:{value:"street"},restrict_value:!0}).then(function(e){t.commit("SET_STREET_OPTIONS",e.data.suggestions.map(function(t){return t.data.street_with_type}))})},GET_HOUSE_OPTIONS:function(t,e){var n=e.query;V.post("/address",{query:n,count:10,from_bound:{value:"house"},restrict_value:!0}).then(function(e){t.commit("SET_HOUSE_OPTIONS",e.data.suggestions.map(function(t){return t.data.house}))})}}});r["a"].config.productionTip=!1,new r["a"]({router:Y,store:W,render:function(t){return t(v)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var r=n("e332"),o=n.n(r);o.a},6168:function(t,e,n){"use strict";var r=n("2b0e"),o=new r["a"];e["a"]=o},"6bf9":function(t,e,n){},a1a0:function(t,e,n){},af83:function(t,e,n){"use strict";var r=n("e7c8"),o=n.n(r);o.a},c6b8:function(t,e,n){},d3d6:function(t,e,n){"use strict";var r=n("0c45"),o=n.n(r);o.a},e332:function(t,e,n){},e51c:function(t){t.exports=JSON.parse('{"pickups":[{"id":1,"coords":[55.774745,37.548609],"title":"На Беговой","description":"Выдача с 10:00-19:00","address":"Хорошевское шоссе, 12к1"},{"id":2,"coords":[55.766202,37.604535],"title":"На Тверской","description":"Выдача с 10:00-20:00","address":"Тверская ул., 18, корп. 1, оф. 808, 810"},{"id":3,"coords":[55.757754,37.61833],"title":"Модный сезон","description":"Выдача с 10:00-19:00","address":"ул. Охотный Ряд, 2"}]}')},e7c8:function(t,e,n){},f4d2:function(t){t.exports=JSON.parse('{"products":[{"id":1,"name":"Джинсы \\"Mango\\"","description":"Синие, зауженные","price":"2500","currentCount":"1","count":"20","img":"","delivery":["courier"],"payment":["card","cash"]},{"id":2,"name":"Свитер \\"Banana\\"","description":"Светлый, хлопок","price":"3000","currentCount":"1","count":"15","img":"","delivery":["pickup"],"payment":["card"]},{"id":3,"name":"Куртка \\"Sunny\\"","description":"Красная, с карманами","price":"6400","currentCount":"1","count":"6","img":"","delivery":["courier","pickup"],"payment":["cash"]},{"id":4,"name":"Джинсы \\"Like\\"","description":"Серые, зауженные","price":"3400","currentCount":"1","count":"10","img":"","delivery":["courier","pickup"],"payment":["card","cash"]},{"id":5,"name":"Свитер \\"Bright\\"","description":"Светлый, хлопок","price":"5000","currentCount":"1","count":"10","img":"","delivery":["courier"],"payment":["card","cash"]},{"id":6,"name":"Жакет \\"Shine\\"","description":"Прямой крой, с карманами","price":"7400","currentCount":"1","count":"6","img":"","delivery":["pickup"],"payment":["card","cash"]}]}')}});
//# sourceMappingURL=app.ec18d1a7.js.map