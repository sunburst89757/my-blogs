"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6103],{2144:function(e,t,n){n.r(t),n.d(t,{default:function(){return w}});var a=n(7294),r=n(4118),l=n(1702),i=n(7462),o=n(5999),c=n(1750);function s(e){var t=e.nextItem,n=e.prevItem;return a.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,o.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"})},n&&a.createElement(c.Z,(0,i.Z)({},n,{subLabel:a.createElement(o.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post"},"Newer Post")})),t&&a.createElement(c.Z,(0,i.Z)({},t,{subLabel:a.createElement(o.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post"},"Older Post"),isNext:!0})))}var m=n(1944),u=n(5281),d=n(3366),v=n(6010);function f(e){var t=e.toc,n=e.className,r=e.linkClassName,l=e.isChild;return t.length?a.createElement("ul",{className:l?void 0:n},t.map((function(e){return a.createElement("li",{key:e.id},a.createElement("a",{href:"#"+e.id,className:null!=r?r:void 0,dangerouslySetInnerHTML:{__html:e.value}}),a.createElement(f,{isChild:!0,toc:e.children,className:n,linkClassName:r}))}))):null}var g=a.memo(f),p=n(6668),h=["parentIndex"];function b(e){var t=e.map((function(e){return Object.assign({},e,{parentIndex:-1,children:[]})})),n=Array(7).fill(-1);t.forEach((function(e,t){var a=n.slice(2,e.level);e.parentIndex=Math.max.apply(Math,a),n[e.level]=t}));var a=[];return t.forEach((function(e){var n=e.parentIndex,r=(0,d.Z)(e,h);n>=0?t[n].children.push(r):a.push(r)})),a}function L(e){var t=e.toc,n=e.minHeadingLevel,a=e.maxHeadingLevel;return t.flatMap((function(e){var t=L({toc:e.children,minHeadingLevel:n,maxHeadingLevel:a});return function(e){return e.level>=n&&e.level<=a}(e)?[Object.assign({},e,{children:t})]:t}))}function E(e){var t=e.getBoundingClientRect();return t.top===t.bottom?E(e.parentNode):t}function N(e,t){var n,a,r=t.anchorTopOffset,l=e.find((function(e){return E(e).top>=r}));return l?function(e){return e.top>0&&e.bottom<window.innerHeight/2}(E(l))?l:null!=(a=e[e.indexOf(l)-1])?a:null:null!=(n=e[e.length-1])?n:null}function H(){var e=(0,a.useRef)(0),t=(0,p.L)().navbar.hideOnScroll;return(0,a.useEffect)((function(){e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function x(e){var t=(0,a.useRef)(void 0),n=H();(0,a.useEffect)((function(){if(!e)return function(){};var a=e.linkClassName,r=e.linkActiveClassName,l=e.minHeadingLevel,i=e.maxHeadingLevel;function o(){var e=function(e){return Array.from(document.getElementsByClassName(e))}(a),o=function(e){for(var t=e.minHeadingLevel,n=e.maxHeadingLevel,a=[],r=t;r<=n;r+=1)a.push("h"+r+".anchor");return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:l,maxHeadingLevel:i}),c=N(o,{anchorTopOffset:n.current}),s=e.find((function(e){return c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)}));e.forEach((function(e){!function(e,n){if(n){var a;t.current&&t.current!==e&&(null==(a=t.current)||a.classList.remove(r)),e.classList.add(r),t.current=e}else e.classList.remove(r)}(e,e===s)}))}return document.addEventListener("scroll",o),document.addEventListener("resize",o),o(),function(){document.removeEventListener("scroll",o),document.removeEventListener("resize",o)}}),[e,n])}var k=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function C(e){var t=e.toc,n=e.className,r=void 0===n?"table-of-contents table-of-contents__left-border":n,l=e.linkClassName,o=void 0===l?"table-of-contents__link":l,c=e.linkActiveClassName,s=void 0===c?void 0:c,m=e.minHeadingLevel,u=e.maxHeadingLevel,v=(0,d.Z)(e,k),f=(0,p.L)(),h=null!=m?m:f.tableOfContents.minHeadingLevel,E=null!=u?u:f.tableOfContents.maxHeadingLevel,N=function(e){var t=e.toc,n=e.minHeadingLevel,r=e.maxHeadingLevel;return(0,a.useMemo)((function(){return L({toc:b(t),minHeadingLevel:n,maxHeadingLevel:r})}),[t,n,r])}({toc:t,minHeadingLevel:h,maxHeadingLevel:E});return x((0,a.useMemo)((function(){if(o&&s)return{linkClassName:o,linkActiveClassName:s,minHeadingLevel:h,maxHeadingLevel:E}}),[o,s,h,E])),a.createElement(g,(0,i.Z)({toc:N,className:r,linkClassName:o},v))}var _="tableOfContents_cNA8",y=["className"];function Z(e){var t=e.className,n=(0,d.Z)(e,y);return a.createElement("div",{className:(0,v.Z)(_,"thin-scrollbar",t)},a.createElement(C,(0,i.Z)({},n,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}function I(e){var t,n=e.content,r=n.assets,l=n.metadata,i=l.title,o=l.description,c=l.date,s=l.tags,u=l.authors,d=l.frontMatter,v=d.keywords,f=null!=(t=r.image)?t:d.image;return a.createElement(m.d,{title:i,description:o,keywords:v,image:f},a.createElement("meta",{property:"og:type",content:"article"}),a.createElement("meta",{property:"article:published_time",content:c}),u.some((function(e){return e.url}))&&a.createElement("meta",{property:"article:author",content:u.map((function(e){return e.url})).filter(Boolean).join(",")}),s.length>0&&a.createElement("meta",{property:"article:tag",content:s.map((function(e){return e.label})).join(",")}))}function A(e){var t=e.content,n=e.sidebar,i=t.assets,o=t.metadata,c=o.nextItem,m=o.prevItem,u=o.frontMatter,d=u.hide_table_of_contents,v=u.toc_min_heading_level,f=u.toc_max_heading_level;return a.createElement(r.Z,{sidebar:n,toc:!d&&t.toc&&t.toc.length>0?a.createElement(Z,{toc:t.toc,minHeadingLevel:v,maxHeadingLevel:f}):void 0},a.createElement(l.Z,{frontMatter:u,assets:i,metadata:o,isBlogPostPage:!0},a.createElement(t,null)),(c||m)&&a.createElement(s,{nextItem:c,prevItem:m}))}function w(e){return a.createElement(m.FG,{className:(0,v.Z)(u.k.wrapper.blogPages,u.k.page.blogPostPage)},a.createElement(I,e),a.createElement(A,e))}}}]);