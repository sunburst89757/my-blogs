(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[514],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(n),d=a,f=p["".concat(i,".").concat(d)]||p[d]||m[d]||l;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=p;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4118:function(e,t,n){"use strict";n.d(t,{Z:function(){return N}});var r=n(3366),a=n(7294),l=n(6010),o=n(1849),c=n(9960),i=n(5999),s="sidebar_TMXw",u="sidebarItemTitle_V4zb",m="sidebarItemList_uHd5",p="sidebarItem_spIe",d="sidebarItemLink_eqrF",f="sidebarItemLinkActive_XZSJ";function g(e){var t=e.sidebar;return a.createElement("aside",{className:"col col--3"},a.createElement("nav",{className:(0,l.Z)(s,"thin-scrollbar"),"aria-label":(0,i.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},a.createElement("div",{className:(0,l.Z)(u,"margin-bottom--md")},t.title),a.createElement("ul",{className:(0,l.Z)(m,"clean-list")},t.items.map((function(e){return a.createElement("li",{key:e.permalink,className:p},a.createElement(c.Z,{isNavLink:!0,to:e.permalink,className:d,activeClassName:f},e.title))})))))}var h=n(3102);function v(e){var t=e.sidebar;return a.createElement("ul",{className:"menu__list"},t.items.map((function(e){return a.createElement("li",{key:e.permalink,className:"menu__list-item"},a.createElement(c.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active"},e.title))})))}function b(e){return a.createElement(h.Zo,{component:v,props:e})}var y=n(7524);function E(e){var t=e.sidebar,n=(0,y.i)();return null!=t&&t.items.length?"mobile"===n?a.createElement(b,{sidebar:t}):a.createElement(g,{sidebar:t}):null}var k=["sidebar","toc","children"];function N(e){var t=e.sidebar,n=e.toc,c=e.children,i=(0,r.Z)(e,k),s=t&&t.items.length>0;return a.createElement(o.Z,i,a.createElement("div",{className:"container margin-vert--lg"},a.createElement("div",{className:"row"},a.createElement(E,{sidebar:t}),a.createElement("main",{className:(0,l.Z)("col",{"col--7":s,"col--9 col--offset-1":!s}),itemScope:!0,itemType:"http://schema.org/Blog"},c),n&&a.createElement("div",{className:"col col--2"},n))))}},1702:function(e,t,n){"use strict";n.d(t,{Z:function(){return De}});var r=n(7294),a=n(6010),l=n(5999),o=n(9960),c=n(4996),i=n(8824),s=n(8780),u=n(3905),m=n(7462),p=n(3366),d=n(5742),f=["mdxType","originalType"];var g=n(2389),h=n(2949),v=n(6668);function b(){var e=(0,v.L)().prism,t=(0,h.I)().colorMode,n=e.theme,r=e.darkTheme||n;return"dark"===t?r:n}var y=n(6528),E=n(7594),k=n.n(E),N=(0,y.Z)(/title=(["'])(.*?)\1/,{quote:1,title:2}),_=(0,y.Z)(/\{([\d,-]+)\}/,{range:1}),Z={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}};function w(e,t){var n=e.map((function(e){var n=Z[e],r=n.start,a=n.end;return"(?:"+r+"\\s*("+t.flatMap((function(e){var t,n;return[e.line,null==(t=e.block)?void 0:t.start,null==(n=e.block)?void 0:n.end].filter(Boolean)})).join("|")+")\\s*"+a+")"})).join("|");return new RegExp("^\\s*(?:"+n+")\\s*$")}function T(e,t){var n=e.replace(/\n$/,""),r=t.language,a=t.magicComments,l=t.metastring;if(l&&_.test(l)){var o=l.match(_).groups.range;if(0===a.length)throw new Error("A highlight range has been given in code block's metastring (``` "+l+"), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.");var c=a[0].className,i=k()(o).filter((function(e){return e>0})).map((function(e){return[e-1,[c]]}));return{lineClassNames:Object.fromEntries(i),code:n}}if(void 0===r)return{lineClassNames:{},code:n};for(var s=function(e,t){switch(e){case"js":case"javascript":case"ts":case"typescript":return w(["js","jsBlock"],t);case"jsx":case"tsx":return w(["js","jsBlock","jsx"],t);case"html":return w(["js","jsBlock","html"],t);case"python":case"py":case"bash":return w(["bash"],t);case"markdown":case"md":return w(["html","jsx","bash"],t);default:return w(Object.keys(Z),t)}}(r,a),u=n.split("\n"),m=Object.fromEntries(a.map((function(e){return[e.className,{start:0,range:""}]}))),p=Object.fromEntries(a.filter((function(e){return e.line})).map((function(e){var t=e.className;return[e.line,t]}))),d=Object.fromEntries(a.filter((function(e){return e.block})).map((function(e){var t=e.className;return[e.block.start,t]}))),f=Object.fromEntries(a.filter((function(e){return e.block})).map((function(e){var t=e.className;return[e.block.end,t]}))),g=0;g<u.length;){var h=u[g].match(s);if(h){var v=h.slice(1).find((function(e){return void 0!==e}));p[v]?m[p[v]].range+=g+",":d[v]?m[d[v]].start=g:f[v]&&(m[f[v]].range+=m[f[v]].start+"-"+(g-1)+","),u.splice(g,1)}else g+=1}n=u.join("\n");var b={};return Object.entries(m).forEach((function(e){var t=e[0],n=e[1].range;k()(n).forEach((function(e){null!=b[e]||(b[e]=[]),b[e].push(t)}))})),{lineClassNames:b,code:n}}var B=n(5281),C="codeBlockContainer_MPoW",P=["as"];function j(e){var t=e.as,n=(0,p.Z)(e,P),l=function(e){var t={color:"--prism-color",backgroundColor:"--prism-background-color"},n={};return Object.entries(e.plain).forEach((function(e){var r=e[0],a=e[1],l=t[r];l&&"string"==typeof a&&(n[l]=a)})),n}(b());return r.createElement(t,(0,m.Z)({},n,{style:l,className:(0,a.Z)(n.className,C,B.k.common.codeBlock)}))}var O={codeBlockContent:"codeBlockContent_B9tL",codeBlockTitle:"codeBlockTitle_YYkX",codeBlock:"codeBlock__0OG",codeBlockStandalone:"codeBlockStandalone_Px3r",codeBlockLines:"codeBlockLines_gEuF",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_hGCP",buttonGroup:"buttonGroup_hRr1"};function L(e){var t=e.children,n=e.className;return r.createElement(j,{as:"pre",tabIndex:0,className:(0,a.Z)(O.codeBlockStandalone,"thin-scrollbar",n)},r.createElement("code",{className:O.codeBlockLines},t))}var x={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},S={Prism:n(7410).default,theme:x};function I(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function A(){return A=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},A.apply(this,arguments)}var D=/\r\n|\r|\n/,R=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},F=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},M=function(e,t){var n=e.plain,r=Object.create(null),a=e.styles.reduce((function(e,n){var r=n.languages,a=n.style;return r&&!r.includes(t)||n.types.forEach((function(t){var n=A({},e[t],a);e[t]=n})),e}),r);return a.root=n,a.plain=A({},n,{backgroundColor:null}),a};function z(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}var W=function(e){function t(){for(var t=this,n=[],r=arguments.length;r--;)n[r]=arguments[r];e.apply(this,n),I(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?M(e.theme,e.language):void 0;return t.themeDict=n})),I(this,"getLineProps",(function(e){var n=e.key,r=e.className,a=e.style,l=A({},z(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),o=t.getThemeDict(t.props);return void 0!==o&&(l.style=o.plain),void 0!==a&&(l.style=void 0!==l.style?A({},l.style,a):a),void 0!==n&&(l.key=n),r&&(l.className+=" "+r),l})),I(this,"getStyleForToken",(function(e){var n=e.types,r=e.empty,a=n.length,l=t.getThemeDict(t.props);if(void 0!==l){if(1===a&&"plain"===n[0])return r?{display:"inline-block"}:void 0;if(1===a&&!r)return l[n[0]];var o=r?{display:"inline-block"}:{},c=n.map((function(e){return l[e]}));return Object.assign.apply(Object,[o].concat(c))}})),I(this,"getTokenProps",(function(e){var n=e.key,r=e.className,a=e.style,l=e.token,o=A({},z(e,["key","className","style","token"]),{className:"token "+l.types.join(" "),children:l.content,style:t.getStyleForToken(l),key:void 0});return void 0!==a&&(o.style=void 0!==o.style?A({},o.style,a):a),void 0!==n&&(o.key=n),r&&(o.className+=" "+r),o})),I(this,"tokenize",(function(e,t,n,r){var a={code:t,grammar:n,language:r,tokens:[]};e.hooks.run("before-tokenize",a);var l=a.tokens=e.tokenize(a.code,a.grammar,a.language);return e.hooks.run("after-tokenize",a),l}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,r=e.code,a=e.children,l=this.getThemeDict(this.props),o=t.languages[n];return a({tokens:function(e){for(var t=[[]],n=[e],r=[0],a=[e.length],l=0,o=0,c=[],i=[c];o>-1;){for(;(l=r[o]++)<a[o];){var s=void 0,u=t[o],m=n[o][l];if("string"==typeof m?(u=o>0?u:["plain"],s=m):(u=F(u,m.type),m.alias&&(u=F(u,m.alias)),s=m.content),"string"==typeof s){var p=s.split(D),d=p.length;c.push({types:u,content:p[0]});for(var f=1;f<d;f++)R(c),i.push(c=[]),c.push({types:u,content:p[f]})}else o++,t.push(u),n.push(s),r.push(0),a.push(s.length)}o--,t.pop(),n.pop(),r.pop(),a.pop()}return R(c),i}(void 0!==o?this.tokenize(t,r,o,n):[r]),className:"prism-code language-"+n,style:void 0!==l?l.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(r.Component),V=W,H="codeLine_rqGN",U="codeLineNumber_hzTh",q="codeLineContent_hM6e";function G(e){var t=e.line,n=e.classNames,l=e.showLineNumbers,o=e.getLineProps,c=e.getTokenProps;1===t.length&&"\n"===t[0].content&&(t[0].content="");var i=o({line:t,className:(0,a.Z)(n,l&&H)}),s=t.map((function(e,t){return r.createElement("span",(0,m.Z)({key:t},c({token:e,key:t})))}));return r.createElement("span",i,l?r.createElement(r.Fragment,null,r.createElement("span",{className:U}),r.createElement("span",{className:q},s)):r.createElement(r.Fragment,null,s,r.createElement("br",null)))}var X={copyButtonCopied:"copyButtonCopied_ljy5",copyButtonIcons:"copyButtonIcons_W9eQ",copyButtonIcon:"copyButtonIcon_XEyF",copyButtonSuccessIcon:"copyButtonSuccessIcon_i9w9"};function Q(e){var t=e.code,n=e.className,o=(0,r.useState)(!1),c=o[0],i=o[1],s=(0,r.useRef)(void 0),u=(0,r.useCallback)((function(){!function(e,t){var n=(void 0===t?{}:t).target,r=void 0===n?document.body:n,a=document.createElement("textarea"),l=document.activeElement;a.value=e,a.setAttribute("readonly",""),a.style.contain="strict",a.style.position="absolute",a.style.left="-9999px",a.style.fontSize="12pt";var o=document.getSelection(),c=!1;o.rangeCount>0&&(c=o.getRangeAt(0)),r.append(a),a.select(),a.selectionStart=0,a.selectionEnd=e.length;var i=!1;try{i=document.execCommand("copy")}catch(s){}a.remove(),c&&(o.removeAllRanges(),o.addRange(c)),l&&l.focus()}(t),i(!0),s.current=window.setTimeout((function(){i(!1)}),1e3)}),[t]);return(0,r.useEffect)((function(){return function(){return window.clearTimeout(s.current)}}),[]),r.createElement("button",{type:"button","aria-label":c?(0,l.I)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,l.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,l.I)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,a.Z)("clean-btn",n,X.copyButton,c&&X.copyButtonCopied),onClick:u},r.createElement("span",{className:X.copyButtonIcons,"aria-hidden":"true"},r.createElement("svg",{className:X.copyButtonIcon,viewBox:"0 0 24 24"},r.createElement("path",{d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})),r.createElement("svg",{className:X.copyButtonSuccessIcon,viewBox:"0 0 24 24"},r.createElement("path",{d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"}))))}var $="wordWrapButtonIcon_azs1",Y="wordWrapButtonEnabled_Geot";function J(e){var t=e.className,n=e.onClick,o=e.isEnabled,c=(0,l.I)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return r.createElement("button",{type:"button",onClick:n,className:(0,a.Z)("clean-btn",t,o&&Y),"aria-label":c,title:c},r.createElement("svg",{className:$,viewBox:"0 0 24 24","aria-hidden":"true"},r.createElement("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})))}function K(e){var t,n,l,o,c,i,s,u,p,d,f,g=e.children,h=e.className,y=void 0===h?"":h,E=e.metastring,k=e.title,_=e.showLineNumbers,Z=e.language,w=(0,v.L)().prism,B=w.defaultLanguage,C=w.magicComments,P=null!=(t=null!=Z?Z:null==(n=y.split(" ").find((function(e){return e.startsWith("language-")})))?void 0:n.replace(/language-/,""))?t:B,L=b(),x=(l=(0,r.useState)(!1),o=l[0],c=l[1],i=(0,r.useState)(!1),s=i[0],u=i[1],p=(0,r.useRef)(null),d=(0,r.useCallback)((function(){var e=p.current.querySelector("code");o?e.removeAttribute("style"):e.style.whiteSpace="pre-wrap",c((function(e){return!e}))}),[p,o]),f=(0,r.useCallback)((function(){var e=p.current,t=e.scrollWidth>e.clientWidth||p.current.querySelector("code").hasAttribute("style");u(t)}),[p]),(0,r.useEffect)((function(){f()}),[o,f]),(0,r.useEffect)((function(){return window.addEventListener("resize",f,{passive:!0}),function(){window.removeEventListener("resize",f)}}),[f]),{codeBlockRef:p,isEnabled:o,isCodeScrollable:s,toggle:d}),I=function(e){var t,n;return null!=(t=null==e||null==(n=e.match(N))?void 0:n.groups.title)?t:""}(E)||k,A=T(g,{metastring:E,language:P,magicComments:C}),D=A.lineClassNames,R=A.code,F=_||function(e){return(null==e?void 0:e.includes("showLineNumbers"))||!1}(E);return r.createElement(j,{as:"div",className:(0,a.Z)(y,P&&!y.includes("language-"+P)&&"language-"+P)},I&&r.createElement("div",{className:O.codeBlockTitle},I),r.createElement("div",{className:O.codeBlockContent},r.createElement(V,(0,m.Z)({},S,{theme:L,code:R,language:null!=P?P:"text"}),(function(e){var t=e.className,n=e.tokens,l=e.getLineProps,o=e.getTokenProps;return r.createElement("pre",{tabIndex:0,ref:x.codeBlockRef,className:(0,a.Z)(t,O.codeBlock,"thin-scrollbar")},r.createElement("code",{className:(0,a.Z)(O.codeBlockLines,F&&O.codeBlockLinesWithNumbering)},n.map((function(e,t){return r.createElement(G,{key:t,line:e,getLineProps:l,getTokenProps:o,classNames:D[t],showLineNumbers:F})}))))})),r.createElement("div",{className:O.buttonGroup},(x.isEnabled||x.isCodeScrollable)&&r.createElement(J,{className:O.codeButton,onClick:function(){return x.toggle()},isEnabled:x.isEnabled}),r.createElement(Q,{className:O.codeButton,code:R}))))}var ee=["children"];function te(e){var t=e.children,n=(0,p.Z)(e,ee),a=(0,g.Z)(),l=function(e){return r.Children.toArray(e).some((function(e){return(0,r.isValidElement)(e)}))?e:Array.isArray(e)?e.join(""):e}(t),o="string"==typeof l?K:L;return r.createElement(o,(0,m.Z)({key:String(a)},n),l)}var ne=n(6043),re="details_lb9f",ae="isBrowser_bmU9",le="collapsibleContent_i85q",oe=["summary","children"];function ce(e){return!!e&&("SUMMARY"===e.tagName||ce(e.parentElement))}function ie(e,t){return!!e&&(e===t||ie(e.parentElement,t))}function se(e){var t=e.summary,n=e.children,l=(0,p.Z)(e,oe),o=(0,g.Z)(),c=(0,r.useRef)(null),i=(0,ne.u)({initialState:!l.open}),s=i.collapsed,u=i.setCollapsed,m=(0,r.useState)(l.open),d=m[0],f=m[1];return r.createElement("details",Object.assign({},l,{ref:c,open:d,"data-collapsed":s,className:(0,a.Z)(re,o&&ae,l.className),onMouseDown:function(e){ce(e.target)&&e.detail>1&&e.preventDefault()},onClick:function(e){e.stopPropagation();var t=e.target;ce(t)&&ie(t,c.current)&&(e.preventDefault(),s?(u(!1),f(!0)):u(!0))}}),t||r.createElement("summary",null,"Details"),r.createElement(ne.z,{lazy:!1,collapsed:s,disableSSRStyle:!0,onCollapseTransitionEnd:function(e){u(e),f(!e)}},r.createElement("div",{className:le},n)))}var ue="details_BAp3";function me(e){var t=Object.assign({},e);return r.createElement(se,(0,m.Z)({},t,{className:(0,a.Z)("alert alert--info",ue,t.className)}))}var pe="anchorWithStickyNavbar_mojV",de="anchorWithHideOnScrollNavbar_R0VQ",fe=["as","id"];function ge(e){var t=e.as,n=e.id,o=(0,p.Z)(e,fe),c=(0,v.L)().navbar.hideOnScroll;return"h1"!==t&&n?r.createElement(t,(0,m.Z)({},o,{className:(0,a.Z)("anchor",c?de:pe),id:n}),o.children,r.createElement("a",{className:"hash-link",href:"#"+n,title:(0,l.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):r.createElement(t,(0,m.Z)({},o,{id:void 0}))}function he(e){return r.createElement(ge,e)}var ve="img_E7b_";var be={head:function(e){var t=r.Children.map(e.children,(function(e){return function(e){var t,n;if(null!=e&&null!=(t=e.props)&&t.mdxType&&null!=e&&null!=(n=e.props)&&n.originalType){var a=e.props,l=(a.mdxType,a.originalType,(0,p.Z)(a,f));return r.createElement(e.props.originalType,l)}return e}(e)}));return r.createElement(d.Z,e,t)},code:function(e){var t=["a","b","big","i","span","em","strong","sup","sub","small"];return r.Children.toArray(e.children).every((function(e){return"string"==typeof e&&!e.includes("\n")||(0,r.isValidElement)(e)&&t.includes(e.props.mdxType)}))?r.createElement("code",e):r.createElement(te,e)},a:function(e){return r.createElement(o.Z,e)},pre:function(e){var t;return r.createElement(te,(0,r.isValidElement)(e.children)&&"code"===e.children.props.originalType?null==(t=e.children)?void 0:t.props:Object.assign({},e))},details:function(e){var t=r.Children.toArray(e.children),n=t.find((function(e){var t;return"summary"===(null==e||null==(t=e.props)?void 0:t.mdxType)})),a=r.createElement(r.Fragment,null,t.filter((function(e){return e!==n})));return r.createElement(me,(0,m.Z)({},e,{summary:n}),a)},ul:function(e){return r.createElement("ul",(0,m.Z)({},e,{className:(t=e.className,(0,a.Z)(t,(null==t?void 0:t.includes("contains-task-list"))&&"clean-list"))}));var t},img:function(e){return r.createElement("img",(0,m.Z)({loading:"lazy"},e,{className:(t=e.className,(0,a.Z)(t,ve))}));var t},h1:function(e){return r.createElement(he,(0,m.Z)({as:"h1"},e))},h2:function(e){return r.createElement(he,(0,m.Z)({as:"h2"},e))},h3:function(e){return r.createElement(he,(0,m.Z)({as:"h3"},e))},h4:function(e){return r.createElement(he,(0,m.Z)({as:"h4"},e))},h5:function(e){return r.createElement(he,(0,m.Z)({as:"h5"},e))},h6:function(e){return r.createElement(he,(0,m.Z)({as:"h6"},e))}};function ye(e){var t=e.children;return r.createElement(u.Zo,{components:be},t)}var Ee="iconEdit_dcUD",ke=["className"];function Ne(e){var t=e.className,n=(0,p.Z)(e,ke);return r.createElement("svg",(0,m.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,a.Z)(Ee,t),"aria-hidden":"true"},n),r.createElement("g",null,r.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function _e(e){var t=e.editUrl;return r.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:B.k.common.editThisPage},r.createElement(Ne,null),r.createElement(l.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}var Ze="blogPostTitle_rzP5",we="blogPostData_Zg1s",Te="blogPostDetailsFull_h6_j",Be=n(7774),Ce="tags_XVD_",Pe="tag_JSN8";function je(e){var t=e.tags;return r.createElement(r.Fragment,null,r.createElement("b",null,r.createElement(l.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),r.createElement("ul",{className:(0,a.Z)(Ce,"padding--none","margin-left--sm")},t.map((function(e){var t=e.label,n=e.permalink;return r.createElement("li",{key:n,className:Pe},r.createElement(Be.Z,{label:t,permalink:n}))}))))}function Oe(e){return e.href?r.createElement(o.Z,e):r.createElement(r.Fragment,null,e.children)}function Le(e){var t=e.author,n=t.name,a=t.title,l=t.url,o=t.imageURL,c=t.email,i=l||c&&"mailto:"+c||void 0;return r.createElement("div",{className:"avatar margin-bottom--sm"},o&&r.createElement(Oe,{href:i,className:"avatar__photo-link"},r.createElement("img",{className:"avatar__photo",src:o,alt:n})),n&&r.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},r.createElement("div",{className:"avatar__name"},r.createElement(Oe,{href:i,itemProp:"url"},r.createElement("span",{itemProp:"name"},n))),a&&r.createElement("small",{className:"avatar__subtitle",itemProp:"description"},a)))}var xe="authorCol_FlmR",Se="imageOnlyAuthorRow_trpF",Ie="imageOnlyAuthorCol_S2np";function Ae(e){var t=e.authors,n=e.assets;if(0===t.length)return null;var l=t.every((function(e){return!e.name}));return r.createElement("div",{className:(0,a.Z)("margin-top--md margin-bottom--sm",l?Se:"row")},t.map((function(e,t){var o;return r.createElement("div",{className:(0,a.Z)(!l&&"col col--6",l?Ie:xe),key:t},r.createElement(Le,{author:Object.assign({},e,{imageURL:null!=(o=n.authorsImageUrls[t])?o:e.imageURL})}))})))}function De(e){var t,n,u=(n=(0,i.c)().selectMessage,function(e){var t=Math.ceil(e);return n(t,(0,l.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))}),m=(0,c.C)().withBaseUrl,p=e.children,d=e.frontMatter,f=e.assets,g=e.metadata,h=e.truncated,v=e.isBlogPostPage,b=void 0!==v&&v,y=g.date,E=g.formattedDate,k=g.permalink,N=g.tags,_=g.readingTime,Z=g.title,w=g.editUrl,T=g.authors,B=null!=(t=f.image)?t:d.image,C=!b&&h,P=N.length>0,j=b?"h1":"h2";return r.createElement("article",{className:b?void 0:"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},r.createElement("header",null,r.createElement(j,{className:Ze,itemProp:"headline"},b?Z:r.createElement(o.Z,{itemProp:"url",to:k},Z)),r.createElement("div",{className:(0,a.Z)(we,"margin-vert--md")},r.createElement("time",{dateTime:y,itemProp:"datePublished"},E),void 0!==_&&r.createElement(r.Fragment,null," \xb7 ",u(_))),r.createElement(Ae,{authors:T,assets:f})),B&&r.createElement("meta",{itemProp:"image",content:m(B,{absolute:!0})}),r.createElement("div",{id:b?s.blogPostContainerID:void 0,className:"markdown",itemProp:"articleBody"},r.createElement(ye,null,p)),(P||h)&&r.createElement("footer",{className:(0,a.Z)("row docusaurus-mt-lg",b&&Te)},P&&r.createElement("div",{className:(0,a.Z)("col",{"col--9":C})},r.createElement(je,{tags:N})),b&&w&&r.createElement("div",{className:"col margin-top--sm"},r.createElement(_e,{editUrl:w})),C&&r.createElement("div",{className:(0,a.Z)("col text--right",{"col--3":P})},r.createElement(o.Z,{to:g.permalink,"aria-label":(0,l.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:Z})},r.createElement("b",null,r.createElement(l.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))))}},1750:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(7294),a=n(6010),l=n(9960);function o(e){var t=e.permalink,n=e.title,o=e.subLabel,c=e.isNext;return r.createElement(l.Z,{className:(0,a.Z)("pagination-nav__link",c?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},o&&r.createElement("div",{className:"pagination-nav__sublabel"},o),r.createElement("div",{className:"pagination-nav__label"},n))}},7774:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(7294),a=n(6010),l=n(9960),o="tag_hD8n",c="tagRegular_D6E_",i="tagWithCount_i0QQ";function s(e){var t=e.permalink,n=e.label,s=e.count;return r.createElement(l.Z,{href:t,className:(0,a.Z)(o,s?i:c)},n,s&&r.createElement("span",null,s))}},8824:function(e,t,n){"use strict";n.d(t,{c:function(){return s}});var r=n(7294),a=n(2263),l=["zero","one","two","few","many","other"];function o(e){return l.filter((function(t){return e.includes(t)}))}var c={locale:"en",pluralForms:o(["one","other"]),select:function(e){return 1===e?"one":"other"}};function i(){var e=(0,a.Z)().i18n.currentLocale;return(0,r.useMemo)((function(){try{return t=e,n=new Intl.PluralRules(t),{locale:t,pluralForms:o(n.resolvedOptions().pluralCategories),select:function(e){return n.select(e)}}}catch(r){return console.error('Failed to use Intl.PluralRules for locale "'+e+'".\nDocusaurus will fallback to the default (English) implementation.\nError: '+r.message+"\n"),c}var t,n}),[e])}function s(){var e=i();return{selectMessage:function(t,n){return function(e,t,n){var r=e.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&console.error("For locale="+n.locale+", a maximum of "+n.pluralForms.length+" plural forms are expected ("+n.pluralForms+"), but the message contains "+r.length+": "+e);var a=n.select(t),l=n.pluralForms.indexOf(a);return r[Math.min(l,r.length-1)]}(n,t,e)}}}},7594:function(e,t){function n(e){let t,n=[];for(let r of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(r))n.push(parseInt(r,10));else if(t=r.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,r,a,l]=t;if(r&&l){r=parseInt(r),l=parseInt(l);const e=r<l?1:-1;"-"!==a&&".."!==a&&"\u2025"!==a||(l+=e);for(let t=r;t!==l;t+=e)n.push(t)}}return n}t.default=n,e.exports=n}}]);