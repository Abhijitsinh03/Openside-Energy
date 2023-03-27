(()=>{var e,t={271:(e,t,r)=>{"use strict";const n=window.wp.element;var o=r(184),l=r.n(o);const a=window.wp.blocks,i=window.wp.i18n,s=window.wp.primitives,c=(0,n.createElement)(s.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,n.createElement)(s.Path,{d:"M15.6 7.2H14v1.5h1.6c2 0 3.7 1.7 3.7 3.7s-1.7 3.7-3.7 3.7H14v1.5h1.6c2.8 0 5.2-2.3 5.2-5.2 0-2.9-2.3-5.2-5.2-5.2zM4.7 12.4c0-2 1.7-3.7 3.7-3.7H10V7.2H8.4c-2.9 0-5.2 2.3-5.2 5.2 0 2.9 2.3 5.2 5.2 5.2H10v-1.5H8.4c-2 0-3.7-1.7-3.7-3.7zm4.6.9h5.3v-1.5H9.3v1.5z"})),p=window.wp.blockEditor;function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},u.apply(this,arguments)}const k=window.wp.data,g=window.wp.components,m=window.wp.keycodes,d=(0,n.createElement)(s.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,n.createElement)(s.Path,{d:"M15.6 7.3h-.7l1.6-3.5-.9-.4-3.9 8.5H9v1.5h2l-1.3 2.8H8.4c-2 0-3.7-1.7-3.7-3.7s1.7-3.7 3.7-3.7H10V7.3H8.4c-2.9 0-5.2 2.3-5.2 5.2 0 2.9 2.3 5.2 5.2 5.2H9l-1.4 3.2.9.4 5.7-12.5h1.4c2 0 3.7 1.7 3.7 3.7s-1.7 3.7-3.7 3.7H14v1.5h1.6c2.9 0 5.2-2.3 5.2-5.2 0-2.9-2.4-5.2-5.2-5.2z"})),h=window.wp.coreData,b=p.__experimentalUseInnerBlocksProps||p.useInnerBlocksProps,f=p.__experimentalLinkControl||p.LinkControl,v="noreferrer noopener",y=JSON.parse('{"apiVersion":2,"name":"tiptip/hyperlink-group-block","title":"Hyperlink Group","category":"design","supports":{"html":true,"anchor":true,"align":true,"color":{"background":true,"gradients":true},"spacing":{"maring":true,"padding":true}},"usesContext":["postId","postType","queryId"],"attributes":{"url":{"type":"string","default":""},"title":{"type":"string"},"linkTarget":{"type":"string"},"rel":{"type":"string"},"backgroundColor":{"type":"string"},"textColor":{"type":"string"},"gradient":{"type":"string"},"queryLoopLink":{"type":"boolean","default":false}},"textdomain":"hyperlink-group-block","editorScript":"file:./build/index.js","style":"file:./build/style-index.css"}'),{name:w}=y;(0,a.registerBlockType)(w,{...y,icon:c,description:(0,i.__)("Combine blocks into a group wrapped with an hyperlink.","hyperlink-group-block"),keywords:[(0,i.__)("container"),(0,i.__)("wrapper"),(0,i.__)("anchor"),(0,i.__)("a"),(0,i.__)("hyperlink"),(0,i.__)("link"),(0,i.__)("tiptoppress")],deprecated:[{...y,save(e){let{attributes:t,className:r}=e;const{linkTarget:o,rel:a,title:i,url:s}=t,c=l()("wp-block-hyperlink-group"),u=l()(r);return(0,n.createElement)("div",p.useBlockProps.save({className:u}),(0,n.createElement)("a",{className:c,href:s,title:i,target:o,rel:a},(0,n.createElement)(p.InnerBlocks.Content,null)))}}],example:{attributes:{style:{color:{text:"#000000",background:"#ffffff"}}},innerBlocks:[{name:"core/paragraph",attributes:{customTextColor:"#cf2e2e",fontSize:"large",content:(0,i.__)("One.")}},{name:"core/paragraph",attributes:{customTextColor:"#ff6900",fontSize:"large",content:(0,i.__)("Two.")}},{name:"core/paragraph",attributes:{customTextColor:"#fcb900",fontSize:"large",content:(0,i.__)("Three.")}},{name:"core/paragraph",attributes:{customTextColor:"#00d084",fontSize:"large",content:(0,i.__)("Four.")}},{name:"core/paragraph",attributes:{customTextColor:"#0693e3",fontSize:"large",content:(0,i.__)("Five.")}},{name:"core/paragraph",attributes:{customTextColor:"#9b51e0",fontSize:"large",content:(0,i.__)("Six.")}}]},transforms:{from:[{type:"block",isMultiBlock:!0,blocks:["*"],__experimentalConvert(e){if(1===e.length&&"tiptip/hyperlink-group-block"===e[0].name)return;const t=e.map((e=>(0,a.createBlock)(e.name,e.attributes,e.innerBlocks)));return(0,a.createBlock)("tiptip/hyperlink-group-block",{},t)}}]},edit:function(e){let{attributes:t,setAttributes:r,isSelected:o,clientId:a,context:{postType:s,postId:y,queryId:w}}=e;const{linkTarget:_,rel:T,url:C,queryLoopLink:x}=t,[S]=(0,h.useEntityProp)("postType",s,"link",y),{hasInnerBlocks:E}=(0,k.useSelect)((e=>{const{getBlock:t,getSettings:r}=e(p.store),n=t(a);return{hasInnerBlocks:!(!n||!n.innerBlocks.length),themeSupportsLayout:r()?.supportsLayout}}),[a]),B=(0,n.useRef)(),O=(0,p.useBlockProps)({ref:B}),I=b(O,{renderAppender:E?void 0:p.InnerBlocks.ButtonBlockAppender}),L=(0,n.useCallback)((e=>{r({queryLoopLink:e})}),[r]),N=(0,n.useCallback)((e=>{r({rel:e})}),[r]),H=(0,n.useCallback)((e=>{const t=e?"_blank":void 0;let n=T;t&&!T?n=v:t||T!==v||(n=void 0),r({linkTarget:t,rel:n})}),[T,r]);return(0,n.createElement)(n.Fragment,null,(0,n.createElement)("div",u({},O,{className:l()(O.className)}),(0,n.createElement)((function(e){let{isSelected:t,url:r,setAttributes:o,opensInNewTab:l,onToggleOpenInNewTab:a,anchorRef:s}=e;r=x?S:r;const[u,k]=(0,n.useState)(!1),h=!!r,b=h&&t,v=()=>(k(!0),!1),y=()=>{o({url:void 0,linkTarget:void 0,rel:void 0}),k(!1)},w=(u||b)&&(0,n.createElement)(g.Popover,{focusOnMount:!1,position:"bottom center",onClose:()=>k(!1),anchorRef:s?.current},(0,n.createElement)(f,{className:"wp-block-navigation-link__inline-link-input",value:{url:r,opensInNewTab:l},onChange:e=>{let{url:t="",opensInNewTab:r}=e;o({url:t}),l!==r&&a(r)}}));return(0,n.createElement)(n.Fragment,null,(0,n.createElement)(p.BlockControls,{group:"block"},!h&&(0,n.createElement)(g.ToolbarButton,{name:"link",icon:c,title:(0,i.__)("Link"),shortcut:m.displayShortcut.primary("k"),onClick:v}),b&&(0,n.createElement)(g.ToolbarButton,{name:"link",icon:d,title:(0,i.__)("Unlink"),shortcut:m.displayShortcut.primaryShift("k"),onClick:y,isActive:!0})),t&&(0,n.createElement)(g.KeyboardShortcuts,{bindGlobal:!0,shortcuts:{[m.rawShortcut.primary("k")]:v,[m.rawShortcut.primaryShift("k")]:y}}),w)}),{url:C,setAttributes:r,isSelected:o,opensInNewTab:"_blank"===_,onToggleOpenInNewTab:H,anchorRef:B}),(0,n.createElement)(p.InspectorControls,null,(0,n.createElement)(g.PanelBody,{title:(0,i.__)("Link settings")},(0,n.createElement)(g.ToggleControl,{label:"Use link from Query Loop Block",help:"Link to the current post when using inside a Query Loop Block.",checked:x,onChange:L}))),(0,n.createElement)(p.InspectorAdvancedControls,null,(0,n.createElement)(g.TextControl,{label:(0,i.__)("Link rel"),value:T||"",onChange:N})),(0,n.createElement)("a",I)))},save:function(e){let{attributes:t}=e;const{linkTarget:r,rel:o,title:a,url:i,className:s}=t,c=l()("wp-block-hyperlink-group"),u=l()(s);return(0,n.createElement)("a",{className:c,href:i,title:a,target:r,rel:o},(0,n.createElement)("div",p.useBlockProps.save({className:u}),(0,n.createElement)(p.InnerBlocks.Content,null)))}})},184:(e,t)=>{var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var l=typeof r;if("string"===l||"number"===l)e.push(r);else if(Array.isArray(r)){if(r.length){var a=o.apply(null,r);a&&e.push(a)}}else if("object"===l){if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]")){e.push(r.toString());continue}for(var i in r)n.call(r,i)&&r[i]&&e.push(i)}}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()}},r={};function n(e){var o=r[e];if(void 0!==o)return o.exports;var l=r[e]={exports:{}};return t[e](l,l.exports,n),l.exports}n.m=t,e=[],n.O=(t,r,o,l)=>{if(!r){var a=1/0;for(p=0;p<e.length;p++){for(var[r,o,l]=e[p],i=!0,s=0;s<r.length;s++)(!1&l||a>=l)&&Object.keys(n.O).every((e=>n.O[e](r[s])))?r.splice(s--,1):(i=!1,l<a&&(a=l));if(i){e.splice(p--,1);var c=o();void 0!==c&&(t=c)}}return t}l=l||0;for(var p=e.length;p>0&&e[p-1][2]>l;p--)e[p]=e[p-1];e[p]=[r,o,l]},n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={826:0,431:0};n.O.j=t=>0===e[t];var t=(t,r)=>{var o,l,[a,i,s]=r,c=0;if(a.some((t=>0!==e[t]))){for(o in i)n.o(i,o)&&(n.m[o]=i[o]);if(s)var p=s(n)}for(t&&t(r);c<a.length;c++)l=a[c],n.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return n.O(p)},r=globalThis.webpackChunkhyperlink_group=globalThis.webpackChunkhyperlink_group||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var o=n.O(void 0,[431],(()=>n(271)));o=n.O(o)})();