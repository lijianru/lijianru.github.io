import{_ as a,c as e,o as t,a1 as s}from"./chunks/framework.Bw_Y1HHt.js";const f=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"daily/javaScript-01-简介、脚本的引入.md","filePath":"daily/javaScript-01-简介、脚本的引入.md"}'),i={name:"daily/javaScript-01-简介、脚本的引入.md"},r=s('<h2 id="js-异步加载的方式有哪些" tabindex="-1">JS 异步加载的方式有哪些？ <a class="header-anchor" href="#js-异步加载的方式有哪些" aria-label="Permalink to &quot;JS 异步加载的方式有哪些？&quot;">​</a></h2><details class="details custom-block"><summary>查看详情</summary><ul><li>script 标签的 defer 属性</li><li>script 标签的 async 属性</li><li>动态插入 script 脚本</li></ul></details><h2 id="script-标签的-defer-和-async-属性的区别是什么" tabindex="-1">script 标签的 defer 和 async 属性的区别是什么？ <a class="header-anchor" href="#script-标签的-defer-和-async-属性的区别是什么" aria-label="Permalink to &quot;script 标签的 defer 和 async 属性的区别是什么？&quot;">​</a></h2><details class="details custom-block"><summary>查看详情</summary><ul><li>渲染引擎遇见 defer 属性就会开始下载外部脚本，但不会等它下载和执行，等到整个页面正常渲染结束（DOM 结构完全生成，以及其他脚本执行完成），在 window.onload 之前执行。</li><li>async 的下载不会阻塞渲染，但是一旦下载完成渲染引擎就会中断渲染，执行这个脚本之后再继续渲染。</li><li>在加载多个脚本的时候 async 加载是没有顺序的，而 defer 是有顺序的</li></ul></details>',4),c=[r];function l(d,o,_,n,p,m){return t(),e("div",null,c)}const h=a(i,[["render",l]]);export{f as __pageData,h as default};
