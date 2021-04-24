import"core-js/modules/es.object.assign.js";import{Grid as t,createRef as e,h as i,html as n}from"gridjs";import r from"element-ready";import{nanoid as s}from"nanoid";import"core-js/modules/es.regexp.exec.js";import"core-js/modules/es.string.search.js";import"core-js/modules/es.object.to-string.js";import"core-js/modules/es.promise.js";import"core-js/modules/es.array.concat.js";import o from"gridjs/dist/theme/mermaid.css";import a from"vue-runtime-helpers/dist/normalize-component.mjs";import d from"vue-runtime-helpers/dist/inject-style/browser.mjs";function u(){}function c(t,e,i){return i?e?e(t):t:(t&&t.then||(t=Promise.resolve(t)),e?t.then(e):t)}var h=a({render:function(){var t=this.$createElement;return(this._self._c||t)("article",{class:"gridjs__wrapper",attrs:{id:"gridjs__"+this.uuid,"data-uuid":this.uuid}})},staticRenderFns:[]},(function(t){t&&t("data-v-363960b8_0",{source:".gridjs__wrapper[data-v-363960b8]{align-items:center;display:flex;height:fit-content;justify-content:center;width:100%}",map:void 0,media:void 0})}),{name:"Grid",props:{autoWidth:{type:Boolean,default:!0},classNames:{type:Object,default:void 0},cols:{type:[Array,Function],default:void 0},from:{type:[String,Function],default:void 0},height:{type:[String],default:void 0},language:{type:Object,default:void 0},pagination:{type:[Object,Boolean],default:!1},rows:{type:[Array,Function],default:void 0},search:{type:[Object,Boolean],default:!1},server:{type:[Object,Function],default:void 0},sort:{type:[Object,Boolean],default:!1},styles:{type:Object,default:void 0},theme:{type:String,default:"mermaid"},width:{type:String,default:"100%"}},data:function(){return{dict:{error:{columnsUndefined:"Column headers are undefined",rowsUndefined:"No data to display"}},grid:null,uuid:null,wrapper:null,themes:{mermaid:o}}},computed:{options:function(){var t={autoWidth:this.autoWidth,columns:this.cols?this.cols:[this.dict.error.columnsUndefined],data:this.rows?this.rows:this.from||this.server?void 0:[[this.dict.error.rowsUndefined]],height:this.height,pagination:this.pagination,sort:this.sort,width:this.width};return this.classNames&&(t.className=this.classNames),this.from&&(t.from="string"==typeof this.from?document.querySelector(this.from):document.createRange().createContextualFragment(this.from())),this.language&&(t.language=this.language),this.search&&(t.search=this.search),this.server&&(t.server=this.server),this.styles&&(t.style=this.styles),t}},watch:{autoWidth:function(){this.update()},classNames:function(){this.update()},cols:function(){this.update()},from:function(){this.update()},height:function(){this.update()},language:function(){this.update()},pagination:function(){this.update()},rows:function(){this.update()},search:function(){this.update()},server:function(){this.update()},sort:function(){this.update()},styles:function(){this.update()},width:function(){this.update()}},mounted:function(){try{var e=this;return e.uuid=s(),c(r('[data-uuid="'.concat(e.uuid,'"]'),{stopOnDomReady:!1}),(function(i){return e.wrapper=i,n=function(){e.wrapper&&(e.options.data||e.options.from||e.options.server)&&(e.grid=new t(e.options).render(e.wrapper))},(r=function(){if("none"!==e.theme)return function(t,e){if(!e)return t&&t.then?t.then(u):Promise.resolve()}(e.assignTheme())}())&&r.then?r.then(n):n(r);var n,r}))}catch(t){return Promise.reject(t)}},destroyed:function(){this.grid=void 0,this.wrapper=void 0},methods:{assignTheme:function(){try{var t=document.getElementsByTagName("head")[0],e="gridjs__".concat(this.uuid),i=document.createRange().createContextualFragment('\n        <style title="'.concat(e,'_theme" type="text/css">\n          ').concat(this.themes[this.theme],"\n        </style>\n      "));for(var n in t.appendChild(i),document.styleSheets)document.styleSheets[n].title==="".concat(e,"_theme")&&(i=document.styleSheets[n]);if(i instanceof CSSStyleSheet)for(var r in i.cssRules){var s=i.cssRules[r].cssText;if(s&&!/@/g.test(s)){var o="#".concat(e," ").concat(s);i.deleteRule(r),i.insertRule(o,r)}}return c()}catch(t){return Promise.reject(t)}},update:function(){this.grid&&this.grid.updateConfig(this.options).forceRender()}}},"data-v-363960b8",!1,void 0,!1,d,void 0,void 0);function l(t){if(!l.installed){l.installed=!0;t.prototype.$gridjs||(t.prototype.$gridjs={createRef:e,h:i,html:n,render:function(e,i,n,s){return e&&e.current&&(e=e.current),"string"==typeof e&&i?r(e,{stopOnDomReady:!1}).then((function(){new t({render:function(t){return t(i,Object.assign({props:n},s),this.$slots.default)},components:{usrComponent:i}}).$mount(e)})).catch((function(t){console.error(t)})):void console.error("$gridjs.render() requires a target element and a component")},uuid:s}),t.component("Grid",h)}}var m={install:l},p=null;"undefined"!=typeof window?p=window.Vue:"undefined"!=typeof global&&(p=global.Vue),p&&p.use(m);export default h;export{h as Grid,m as GridGlobal,l as install};
//# sourceMappingURL=index.esm.js.map
