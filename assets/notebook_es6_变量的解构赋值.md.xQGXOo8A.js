import{_ as a,c as s,o as n,a1 as p}from"./chunks/framework.Bw_Y1HHt.js";const g=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"notebook/es6/变量的解构赋值.md","filePath":"notebook/es6/变量的解构赋值.md"}'),e={name:"notebook/es6/变量的解构赋值.md"},l=p(`<h2 id="数组的解构赋值" tabindex="-1">数组的解构赋值 <a class="header-anchor" href="#数组的解构赋值" aria-label="Permalink to &quot;数组的解构赋值&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>let [foo, [[bar], baz]] = [1, [[2], 3]];</span></span>
<span class="line"><span>foo // 1</span></span>
<span class="line"><span>bar // 2</span></span>
<span class="line"><span>baz // 3</span></span>
<span class="line"><span></span></span>
<span class="line"><span>let [ , , third] = [&quot;foo&quot;, &quot;bar&quot;, &quot;baz&quot;];</span></span>
<span class="line"><span>third // &quot;baz&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>let [x, , y] = [1, 2, 3];</span></span>
<span class="line"><span>x // 1</span></span>
<span class="line"><span>y // 3</span></span>
<span class="line"><span></span></span>
<span class="line"><span>let [head, ...tail] = [1, 2, 3, 4];</span></span>
<span class="line"><span>head // 1</span></span>
<span class="line"><span>tail // [2, 3, 4]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>let [x, y, ...z] = [&#39;a&#39;];</span></span>
<span class="line"><span>x // &quot;a&quot;</span></span>
<span class="line"><span>y // undefined</span></span>
<span class="line"><span>z // []</span></span></code></pre></div><ul><li>只要转换为对象或者本省具有 Iterator 接口就可以使用数组解构</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>let [x, y, z] = new Set([&#39;a&#39;, &#39;b&#39;, &#39;c&#39;]);</span></span>
<span class="line"><span>x // &quot;a&quot;</span></span></code></pre></div><ul><li>默认值:ES6 内部使用严格相等运算符（ === ），判断一个位置是否有值。如果一个数组成员不严格等于 undefined ，默认值是不会生效的 <ul><li>默认值是惰性求值的</li><li>默认值可以引用解构赋值成功后的其他变量</li></ul></li></ul><h2 id="对象的解构" tabindex="-1">对象的解构 <a class="header-anchor" href="#对象的解构" aria-label="Permalink to &quot;对象的解构&quot;">​</a></h2><blockquote><p>对象的解构与数组有一个重要的不同。数组的元素是按次序排列的，变量的取值由 它的位置决定；而对象的属性没有次序，变量必须与属性同名，才能取到正确的 值。如果变量名与属性名不一致，必须写成下面这样:</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>var { foo: baz } = { foo: &#39;aaa&#39;, bar: &#39;bbb&#39; };</span></span>
<span class="line"><span>baz // &quot;aaa&quot;</span></span></code></pre></div><ul><li>对象的解构赋值的内部机制，是先找到同名属性，然后再赋给对应的变量。真正被赋值的是后者，而不是前者。</li><li>默认值：默认值生效的条件是对象的属性严格等于 undefined</li><li>一些特殊的解构：</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>let x;</span></span>
<span class="line"><span>({x} = {x: 1});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>({} = [true, false]);</span></span>
<span class="line"><span>({} = &#39;abc&#39;);</span></span>
<span class="line"><span>({} = []);</span></span></code></pre></div><h2 id="字符串的解构赋值" tabindex="-1">字符串的解构赋值 <a class="header-anchor" href="#字符串的解构赋值" aria-label="Permalink to &quot;字符串的解构赋值&quot;">​</a></h2><ul><li>字符串被转换成了一个类似数组的对象</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>const [a, b, c, d, e] = &#39;hello&#39;;</span></span>
<span class="line"><span>a // &quot;h&quot;</span></span>
<span class="line"><span>b // &quot;e&quot;</span></span>
<span class="line"><span>c // &quot;l&quot;</span></span>
<span class="line"><span>d // &quot;l&quot;</span></span>
<span class="line"><span>e // &quot;o&quot;</span></span></code></pre></div><ul><li>类似数组的对象都有一个 length 属性</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>let {length : len} = &#39;hello&#39;;</span></span>
<span class="line"><span>len // 5</span></span></code></pre></div><h2 id="数值和布尔值的解构赋值" tabindex="-1">数值和布尔值的解构赋值 <a class="header-anchor" href="#数值和布尔值的解构赋值" aria-label="Permalink to &quot;数值和布尔值的解构赋值&quot;">​</a></h2><blockquote><p>解构赋值时，如果等号右边是数值和布尔值，则会先转为对象。解构赋值的规则是，只要等号右边的值不是对象或数组，就先将其转为对象。由 于 undefined 和 null 无法转为对象，所以对它们进行解构赋值，都会报错。</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>let {toString: s} = 123;</span></span>
<span class="line"><span>s === Number.prototype.toString // true</span></span>
<span class="line"><span></span></span>
<span class="line"><span>let {toString: s} = true;</span></span>
<span class="line"><span>s === Boolean.prototype.toString // true</span></span></code></pre></div><h2 id="函数参数的解构赋值" tabindex="-1">函数参数的解构赋值 <a class="header-anchor" href="#函数参数的解构赋值" aria-label="Permalink to &quot;函数参数的解构赋值&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>function add([x, y]){</span></span>
<span class="line"><span>return x + y;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>add([1, 2]); // 3</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function move({x = 0, y = 0} = {}) {</span></span>
<span class="line"><span>return [x, y];</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>move({x: 3, y: 8}); // [3, 8]</span></span>
<span class="line"><span>move({x: 3}); // [3, 0]</span></span>
<span class="line"><span>move({}); // [0, 0]</span></span>
<span class="line"><span>move(); // [0, 0]</span></span></code></pre></div>`,20),t=[l];function i(o,c,d,u,h,r){return n(),s("div",null,t)}const v=a(e,[["render",i]]);export{g as __pageData,v as default};
