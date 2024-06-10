import{_ as s,c as i,o as a,a3 as l}from"./chunks/framework.CScuXPqu.js";const o=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"daily/typescript.md","filePath":"daily/typescript.md"}'),t={name:"daily/typescript.md"},n=l(`<h2 id="说说你对ts的理解-与js的区别" tabindex="-1">说说你对ts的理解？与js的区别？ <a class="header-anchor" href="#说说你对ts的理解-与js的区别" aria-label="Permalink to &quot;说说你对ts的理解？与js的区别？&quot;">​</a></h2><details class="details custom-block"><summary>查看详情</summary><ul><li>ts是由微软开发和维护的一个开源语言，它是js的超集，增加了静态类型检查和一些其他功能，支持最新的ES6+语法</li><li>区别： <ul><li>增加了类型系统</li><li>需要编译为js才能运行</li></ul></li></ul></details><h2 id="typescript内置的数据类型有哪些" tabindex="-1">typescript内置的数据类型有哪些？ <a class="header-anchor" href="#typescript内置的数据类型有哪些" aria-label="Permalink to &quot;typescript内置的数据类型有哪些？&quot;">​</a></h2><details class="details custom-block"><summary>查看详情</summary><ul><li>基本数据类型 <ul><li>boolean</li><li>number</li><li>string</li><li>数组（数组内元素类型相同）</li><li>元组（元组内元素类型可以不相同） <ul><li>访问一个已知元素会得到正确的类型</li><li>访问越界元素会报错（高版本）</li></ul></li><li>枚举（默认情况下元素编号从 0 开始，可以手动指定编号）</li><li>null</li><li>undefined</li><li>any</li><li>void</li><li>never</li><li>unknown</li></ul></li><li>复合类型 <ul><li>联合类型</li><li>交叉类型</li></ul></li></ul></details><h2 id="typescript中const和readonly的区别是什么" tabindex="-1">typescript中const和readonly的区别是什么？ <a class="header-anchor" href="#typescript中const和readonly的区别是什么" aria-label="Permalink to &quot;typescript中const和readonly的区别是什么？&quot;">​</a></h2><details class="details custom-block"><summary>查看详情</summary><ul><li>const可以防止变量的值被修改，在运行时检查，使用const变量保存的数组，可以使用push，pop等方法</li><li>readonly可以防止变量的属性被修改，在编译时检查，使用Readonly Array声明的数组不能使用push，pop等方法</li></ul></details><h2 id="typescript中any类型的作用是什么" tabindex="-1">typescript中any类型的作用是什么？ <a class="header-anchor" href="#typescript中any类型的作用是什么" aria-label="Permalink to &quot;typescript中any类型的作用是什么？&quot;">​</a></h2><details class="details custom-block"><summary>查看详情</summary><p>给未知类型的变量指定一个类型</p></details><h2 id="interface和type的区别是什么" tabindex="-1">interface和type的区别是什么？ <a class="header-anchor" href="#interface和type的区别是什么" aria-label="Permalink to &quot;interface和type的区别是什么？&quot;">​</a></h2><details class="details custom-block"><summary>查看详情</summary><ul><li>继承和扩展： <ul><li>interface 使用 extends 进行继承，适用于面向对象的设计模式。</li><li>type 使用交叉类型进行扩展，适用于函数式编程风格。</li></ul></li><li>功能和灵活性： <ul><li>interface 主要用于定义对象和类的结构。</li><li>type 更灵活，除了对象外，还可以定义联合类型、交叉类型、元组等。</li></ul></li><li>声明合并： <ul><li>interface 支持声明合并。</li><li>type 不支持声明合并。</li></ul></li></ul></details><h2 id="typescript中使用class定义类型与interface和type的优点是什么" tabindex="-1">typescript中使用class定义类型与interface和type的优点是什么？ <a class="header-anchor" href="#typescript中使用class定义类型与interface和type的优点是什么" aria-label="Permalink to &quot;typescript中使用class定义类型与interface和type的优点是什么？&quot;">​</a></h2><details class="details custom-block"><summary>查看详情</summary><ul><li>在定义类型的时候可以包含具体的实现</li><li>可以使用一些关键字：public，private，protected</li><li>可以实例化</li></ul></details><h2 id="void-any-never-和unknown的区别是什么" tabindex="-1">void, any, never 和unknown的区别是什么？ <a class="header-anchor" href="#void-any-never-和unknown的区别是什么" aria-label="Permalink to &quot;void, any, never 和unknown的区别是什么？&quot;">​</a></h2><details class="details custom-block"><summary>查看详情</summary><ul><li>void <ul><li>描述：void 类型表示没有任何类型。通常用于表示函数没有返回值。</li><li>用途：用于指定函数不返回值，或用于表示不会使用的变量。</li><li>特点： <ul><li>通常在函数返回类型中使用，表示函数没有返回值。</li><li>不能赋值为任何值，除了 undefined 和 null（在严格模式下只能赋值为 undefined）。</li></ul></li></ul></li><li>any <ul><li>描述：any 类型表示任意类型。使用 any 后，该值可以是任意类型的数据（如字符串、数字、对象等），并且对该值的操作不会进行类型检查。</li><li>用途：用于逃避类型检查，使得 TypeScript 对该变量的任何操作都视为合法。</li><li>特点： <ul><li>可以赋值为任意类型的值。</li><li>对 any 类型的变量可以进行任意操作，编译器不会报错。</li></ul></li></ul></li><li>never <ul><li>描述：never 类型表示永远不存在的值。通常用于表示那些永远不会正常完成的函数（如抛出异常或无限循环的函数）的返回类型。</li><li>用途：用于类型保护，表示不应该出现的情况。</li><li>特点： <ul><li>表示函数永远不会返回值（例如抛出异常或无限循环）。</li><li>在联合类型中，用于剔除不可能的类型分支。</li></ul></li></ul></li><li>unknown <ul><li>描述：unknown 类型表示未知类型。与 any 类似，但更安全，因为在对 unknown 类型的变量进行操作之前，必须进行类型检查。</li><li>用途：用于表示一个值可以是任意类型，但需要在使用它之前进行类型检查。</li><li>特点： <ul><li>可以赋值为任意类型的值。</li><li>在对 unknown 类型的变量进行操作之前，必须进行类型检查，否则编译器会报错。</li></ul></li></ul></li></ul></details><h2 id="typescript内置的工具类型有哪些" tabindex="-1">typescript内置的工具类型有哪些？ <a class="header-anchor" href="#typescript内置的工具类型有哪些" aria-label="Permalink to &quot;typescript内置的工具类型有哪些？&quot;">​</a></h2><p><a href="./../frame/typescript/02.类型.html#常用工具类型">工具类型</a></p><h2 id="解释一下typescript中的枚举类型" tabindex="-1">解释一下typescript中的枚举类型 <a class="header-anchor" href="#解释一下typescript中的枚举类型" aria-label="Permalink to &quot;解释一下typescript中的枚举类型&quot;">​</a></h2><details class="details custom-block"><summary>查看详情</summary><p>枚举（Enum）是一种特殊的数据类型，用于定义一组命名常量（一个变量所有可能的取值）。这些常量可以是数字或字符串。</p></details><h2 id="typescript中keyof-和-typeof-关键字的作用" tabindex="-1">typescript中keyof 和 typeof 关键字的作用？ <a class="header-anchor" href="#typescript中keyof-和-typeof-关键字的作用" aria-label="Permalink to &quot;typescript中keyof 和 typeof 关键字的作用？&quot;">​</a></h2><details class="details custom-block"><summary>查看详情</summary><ul><li>typeof <ul><li>类型查询（Type Query）：用于获取变量或对象的类型。</li><li>类型守卫（Type Guard）：在运行时检查变量的类型。</li></ul></li><li>keyof 关键字用于获取某个类型的所有键，并生成一个联合类型</li></ul></details><h2 id="typescript中泛型是什么" tabindex="-1">typescript中泛型是什么？ <a class="header-anchor" href="#typescript中泛型是什么" aria-label="Permalink to &quot;typescript中泛型是什么？&quot;">​</a></h2><details class="details custom-block"><summary>查看详情</summary><p>泛型允许在定义函数、接口或类时，不指定具体的类型，而是在使用时再指定具体的类型。</p></details><h2 id="typescript-中使用联合类型时有哪些注意事项" tabindex="-1">typeScript 中使用联合类型时有哪些注意事项？ <a class="header-anchor" href="#typescript-中使用联合类型时有哪些注意事项" aria-label="Permalink to &quot;typeScript 中使用联合类型时有哪些注意事项？&quot;">​</a></h2><details class="details custom-block"><summary>查看详情</summary><ul><li>进行必要的类型检查</li><li>未检查或断言时只能访问联合类型所有成员共有的属性和方法</li></ul></details><h2 id="typescript-中-interface-可以给函数、数组做声明吗" tabindex="-1">typeScript 中 interface 可以给函数、数组做声明吗？ <a class="header-anchor" href="#typescript-中-interface-可以给函数、数组做声明吗" aria-label="Permalink to &quot;typeScript 中 interface 可以给函数、数组做声明吗？&quot;">​</a></h2><details class="details custom-block"><summary>查看详情</summary><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 函数</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> SearchFunc</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">source</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">subString</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> boolean</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> mySearch</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> SearchFunc</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">src</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">sub</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> src.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">search</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(sub) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> -</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 数组</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> StringArray</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  [</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">index</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> myArray</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> StringArray</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Bob&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Fred&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">];</span></span></code></pre></div></details><h2 id="什么是重载" tabindex="-1">什么是重载？ <a class="header-anchor" href="#什么是重载" aria-label="Permalink to &quot;什么是重载？&quot;">​</a></h2><details class="details custom-block"><summary>查看详情</summary><p>重载：允许一个函数接受不同数量或者类型的参数，解决多个可选参数时函数的调用方式</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> IDirection</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  top</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  right</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  bottom</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  left</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> assigned</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">all</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> IDirection</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> assigned</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">topAndBottom</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">leftAndRight</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> IDirection</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> assigned</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">top</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">right</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">bottom</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">left</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> IDirection</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> assigned</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">a</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">b</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">c</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">d</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> any</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (b </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">===</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> undefined</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &amp;&amp;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> c </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">===</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> undefined</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &amp;&amp;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> d </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">===</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> undefined</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    b </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> c </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> d </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> a;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">else</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (c </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">===</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> undefined</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &amp;&amp;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> d </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">===</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> undefined</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    c </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> a;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    d </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> b;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    top: a,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    right: b,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    bottom: c,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    left: d,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  };</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">assigned</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">assigned</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">assigned</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 无此类型的调用方式</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// assigned(1,2,3)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// assigned(1,2,undefined,3)</span></span></code></pre></div></details><h2 id="typescript-中的类的-public、private-和-protected-修饰符作用是什么" tabindex="-1">TypeScript 中的类的 public、private 和 protected 修饰符作用是什么？ <a class="header-anchor" href="#typescript-中的类的-public、private-和-protected-修饰符作用是什么" aria-label="Permalink to &quot;TypeScript 中的类的 public、private 和 protected 修饰符作用是什么？&quot;">​</a></h2><details class="details custom-block"><summary>查看详情</summary><ul><li>public：默认的访问修饰符，公共成员可以在任何地方访问。</li><li>private：私有成员只能在当前类中访问，继承类和实例都不能访问。</li><li>protected：受保护的成员可以在当前类和继承类中访问，实例不能访问。</li></ul></details><h2 id="typescript中的declare关键字有什么作用" tabindex="-1">TypeScript中的declare关键字有什么作用？ <a class="header-anchor" href="#typescript中的declare关键字有什么作用" aria-label="Permalink to &quot;TypeScript中的declare关键字有什么作用？&quot;">​</a></h2><details class="details custom-block"><summary>查看详情</summary><p>declare关键字用于声明变量、函数、类、命名空间等的类型，而不需要提供具体的实现。这在与已有的JavaScript代码或第三方库进行集成时非常有用，因为它允许你在不改变已有代码的情况下，为它们提供类型信息。</p></details><h2 id="typescript中命名空间与模块的理解和区别" tabindex="-1">TypeScript中命名空间与模块的理解和区别 <a class="header-anchor" href="#typescript中命名空间与模块的理解和区别" aria-label="Permalink to &quot;TypeScript中命名空间与模块的理解和区别&quot;">​</a></h2><details class="details custom-block"><summary>查看详情</summary><ul><li>命名空间主要用于在全局范围内组织和封装代码，避免命名冲突。命名空间通过namespace关键字定义。</li><li>在 TypeScript 中，就像在 ECMAScript 2015 中一样，任何包含顶级import或的文件export都被视为模块</li><li>区别： <ul><li>定义和引用方式不同：namespace/export和import</li><li>加载方式不同：模块需要加载器进行加载</li></ul></li></ul></details><h2 id="tsconfig-json有什么作用" tabindex="-1">tsconfig.json有什么作用？ <a class="header-anchor" href="#tsconfig-json有什么作用" aria-label="Permalink to &quot;tsconfig.json有什么作用？&quot;">​</a></h2><details class="details custom-block"><summary>查看详情</summary><p>tsconfig.json 文件是 TypeScript 项目的配置文件，用于指定 TypeScript 编译器的配置选项。通过 tsconfig.json 文件，你可以定义哪些文件应该被编译，编译过程中的选项，以及生成的输出文件的结构和行为。</p></details><h2 id="如何将unknown类型指定为一个更具体的类型" tabindex="-1">如何将unknown类型指定为一个更具体的类型？ <a class="header-anchor" href="#如何将unknown类型指定为一个更具体的类型" aria-label="Permalink to &quot;如何将unknown类型指定为一个更具体的类型？&quot;">​</a></h2><details class="details custom-block"><summary>查看详情</summary><ul><li>类型断言</li><li>类型守卫 <ul><li>typeof</li><li>instanceof</li></ul></li></ul></details><h2 id="什么是typescript的映射文件" tabindex="-1">什么是TypeScript的映射文件？ <a class="header-anchor" href="#什么是typescript的映射文件" aria-label="Permalink to &quot;什么是TypeScript的映射文件？&quot;">​</a></h2><details class="details custom-block"><summary>查看详情</summary><p>映射文件（Source Map）可以将编译后的JavaScript代码与原始的TypeScript代码对应起来。这对于调试非常有用，因为你可以在浏览器的开发者工具中查看和调试TypeScript源代码，而不是生成的JavaScript代码。映射文件通常有一个.map扩展名，并包含有关源文件的位置信息。</p></details><h2 id="typescript中什么是装饰器-它们可以应用于什么" tabindex="-1">TypeScript中什么是装饰器，它们可以应用于什么？ <a class="header-anchor" href="#typescript中什么是装饰器-它们可以应用于什么" aria-label="Permalink to &quot;TypeScript中什么是装饰器，它们可以应用于什么？&quot;">​</a></h2><details class="details custom-block"><summary>查看详情</summary><p>装饰器（Decorators）是 TypeScript 中的一种特殊语法，用于修改类、方法、访问器、属性或参数的行为。装饰器提供了一种将横切关注点（如日志记录、性能监控、权限控制等）与业务逻辑分离的机制，使代码更加模块化和可重用。</p></details>`,42),p=[n];function h(e,k,r,d,y,c){return a(),i("div",null,p)}const g=s(t,[["render",h]]);export{o as __pageData,g as default};
