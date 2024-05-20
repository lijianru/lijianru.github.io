import{_ as o,c as r,o as a,a1 as e}from"./chunks/framework.Bw_Y1HHt.js";const _=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"notebook/es6/Iterator和for...of循环.md","filePath":"notebook/es6/Iterator和for...of循环.md"}'),t={name:"notebook/es6/Iterator和for...of循环.md"},l=e('<h2 id="iterator-遍历器-的概念" tabindex="-1">Iterator(遍历器)的概念 <a class="header-anchor" href="#iterator-遍历器-的概念" aria-label="Permalink to &quot;Iterator(遍历器)的概念&quot;">​</a></h2><blockquote><p>JS 表示集合的数据结构一共 4 种，Array，Object，Map，Set。这样就需要一种统一的接口机制来处理所有的数据结构。Iterator 就是这样一种机制。 作用有三：</p></blockquote><ul><li>为各种数据结构提供统一的简便的访问接口。</li><li>使得数据结构的成员能够按照某种次序排列</li><li>ES6 创造了一种新的遍历命令 for...of 循环，Iterator 接口主要供 for...of 消费</li></ul><h2 id="默认-iterator-接口" tabindex="-1">默认 Iterator 接口 <a class="header-anchor" href="#默认-iterator-接口" aria-label="Permalink to &quot;默认 Iterator 接口&quot;">​</a></h2><blockquote><p>ES6 规定，默认的 Iterator 接口部署在数据结构的 Symbol.iterator 属性，或者 说，一个数据结构只要具有 Symbol.iterator 属性，就可以认为是“可遍历 的”（iterable）。</p></blockquote><p>原生具备 Iterator 接口的数据结构：</p><ul><li>Array</li><li>Map</li><li>Set</li><li>String</li><li>TypedArray</li><li>函数的 arguments 对象</li><li>NodeList 对象</li></ul><h2 id="调用-iterator-接口的场合" tabindex="-1">调用 Iterator 接口的场合 <a class="header-anchor" href="#调用-iterator-接口的场合" aria-label="Permalink to &quot;调用 Iterator 接口的场合&quot;">​</a></h2><ul><li>解构赋值：对数组和 Set 解构进行解构赋值时</li><li>扩展运算符</li><li>yield*</li><li>其他场合 <ul><li>for...of</li><li>Array.from()</li><li>Map(),Set(),WeakMap(),WeakSet()</li><li>Promise.all()</li><li>Promise.race()</li></ul></li></ul><h2 id="for-of-循环" tabindex="-1">for...of 循环 <a class="header-anchor" href="#for-of-循环" aria-label="Permalink to &quot;for...of 循环&quot;">​</a></h2><blockquote><p>一个数据结构只要部署了 Symbol.iterator 属性它就被视为具有 Iterator 接口，就可以使用 for...of 它有一个重要的特点就是能够正确的识别 32 位 UTF-16 字符</p></blockquote><h2 id="以数组为例-js-提供了多种遍历语法" tabindex="-1">以数组为例，JS 提供了多种遍历语法 <a class="header-anchor" href="#以数组为例-js-提供了多种遍历语法" aria-label="Permalink to &quot;以数组为例，JS 提供了多种遍历语法&quot;">​</a></h2><h4 id="for" tabindex="-1">for <a class="header-anchor" href="#for" aria-label="Permalink to &quot;for&quot;">​</a></h4><h4 id="foreach" tabindex="-1">forEach <a class="header-anchor" href="#foreach" aria-label="Permalink to &quot;forEach&quot;">​</a></h4><blockquote><p>数组内置提供此方法，但是无法中途跳出循环，break 或 return 命令都不能奏效。</p></blockquote><h4 id="for-in" tabindex="-1">for...in <a class="header-anchor" href="#for-in" aria-label="Permalink to &quot;for...in&quot;">​</a></h4><blockquote><p>可以遍历数组的键名但有以下缺点：</p></blockquote><ul><li>数组的键名是数字，但是 for...in 循环是以字符串作为键名“0”、“1”、“2”等等。</li><li>for...in 循环不仅遍历数字键名，还会遍历手动添加的其他键，甚至包括原型链上的键。</li><li>某些情况下， for...in 循环会以任意顺序遍历键名</li><li>主要用于对象的遍历</li></ul><h4 id="for-of" tabindex="-1">for...of <a class="header-anchor" href="#for-of" aria-label="Permalink to &quot;for...of&quot;">​</a></h4><blockquote><p>相比于上面几种遍历做法有一些显著的优点</p></blockquote><ul><li>有着同 for...in 一样的简洁语法，但是没有 for...in 那些缺点</li><li>不同于 forEach 方法，它可以与 break 、 continue 和 return 配合使用</li><li>提供了遍历所有数据结构的统一操作接口</li></ul>',21),i=[l];function f(n,c,h,u,s,d){return a(),r("div",null,i)}const k=o(t,[["render",f]]);export{_ as __pageData,k as default};
