"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[89],{7329:function(e,t,a){a.r(t),a.d(t,{default:function(){return d}});var n=a(7294),r=a(2263),i=a(4118),l=a(4627),o=a(6299),s=a(1944),m=a(5281),c=a(4739),g=a(6010);function p(e){var t=e.metadata,a=(0,r.Z)().siteConfig.title,i=t.blogDescription,l=t.blogTitle,o="/"===t.permalink?a:l;return n.createElement(n.Fragment,null,n.createElement(s.d,{title:o,description:i}),n.createElement(c.Z,{tag:"blog_posts_list"}))}function u(e){var t=e.metadata,a=e.items,r=e.sidebar;return n.createElement(i.Z,{sidebar:r},a.map((function(e){var t=e.content;return n.createElement(l.Z,{key:t.metadata.permalink,frontMatter:t.frontMatter,assets:t.assets,metadata:t.metadata,truncated:t.metadata.truncated},n.createElement(t,null))})),n.createElement(o.Z,{metadata:t}))}function d(e){return n.createElement(s.FG,{className:(0,g.Z)(m.k.wrapper.blogPages,m.k.page.blogListPage)},n.createElement(p,e),n.createElement(u,e))}},6299:function(e,t,a){a.d(t,{Z:function(){return l}});var n=a(7294),r=a(5999),i=a(1750);function l(e){var t=e.metadata,a=t.previousPage,l=t.nextPage;return n.createElement("nav",{className:"pagination-nav","aria-label":(0,r.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},a&&n.createElement(i.Z,{permalink:a,title:n.createElement(r.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")}),l&&n.createElement(i.Z,{permalink:l,title:n.createElement(r.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries"),isNext:!0}))}}}]);