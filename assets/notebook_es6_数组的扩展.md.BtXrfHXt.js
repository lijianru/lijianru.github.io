import{_ as a,c as s,o as e,a1 as n}from"./chunks/framework.Bw_Y1HHt.js";const g=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"notebook/es6/数组的扩展.md","filePath":"notebook/es6/数组的扩展.md"}'),l={name:"notebook/es6/数组的扩展.md"},t=n(`<h2 id="扩展运算符" tabindex="-1">扩展运算符（...） <a class="header-anchor" href="#扩展运算符" aria-label="Permalink to &quot;扩展运算符（...）&quot;">​</a></h2><blockquote><p>它好比 rest 参数的逆运算，将一个数组转为用逗号分隔的参数序列。</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>const arr = [ ...(1 &gt; 0 ? [1] :  []), &#39;b&#39; ]     // [1, &#39;b&#39;]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[ ...[], 1 ]        // [1]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Math.max(...[14, 3, 45])    // 接受一个参数序列而不是数组</span></span></code></pre></div><h4 id="应用" tabindex="-1">应用 <a class="header-anchor" href="#应用" aria-label="Permalink to &quot;应用&quot;">​</a></h4><ul><li>合并数组</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>[1, 2, [3, 4]]</span></span></code></pre></div><ul><li>与解构赋值结合</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>const [first, ...rest] = [1,2,3]</span></span>
<span class="line"><span>// first 1</span></span>
<span class="line"><span>// rest [2,3]</span></span></code></pre></div><ul><li>处理字符串</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>[...&#39;hello&#39;]  // [&#39;h&#39;, &#39;e&#39;, &#39;l&#39; , &#39;l&#39;, &#39;o&#39;]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&#39;𠮷&#39;.length // 2</span></span>
<span class="line"><span>[...&quot;𠮷&quot;].length  // 1</span></span></code></pre></div><h2 id="array-from" tabindex="-1">Array.from() <a class="header-anchor" href="#array-from" aria-label="Permalink to &quot;Array.from()&quot;">​</a></h2><blockquote><p>用于将两类对象转为真正的数组：类似数组的对象（array-like-object）和可遍历（iterable）的对象（包括 ES6 新增的数据结构 Set 和 Map）。 第一个参数是要处理的类似数组的对象，第二个参数是对每个元素处理的函数</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>let arrayLike = {</span></span>
<span class="line"><span>    &#39;0&#39;: &#39;a&#39;,</span></span>
<span class="line"><span>    &#39;1&#39;: &#39;b&#39;,</span></span>
<span class="line"><span>    &#39;2&#39;: &#39;c&#39;,</span></span>
<span class="line"><span>    length: 3</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span>const arr = Array.from(ArrayLike) // [&#39;a&#39;,&#39;b&#39;,&#39;c&#39;]</span></span></code></pre></div><blockquote><p>DOM 操作返回的 NodeList 以及函数内部的 arguments 对象都是类似数组的对象，可以使用 Array.from()转换为数组</p></blockquote><h4 id="应用-1" tabindex="-1">应用 <a class="header-anchor" href="#应用-1" aria-label="Permalink to &quot;应用&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>Array.from({ length: 2 }, () =&gt; &#39;jack&#39; )    // [&#39;jack&#39;, &#39;jack&#39;]</span></span></code></pre></div><h2 id="array-of" tabindex="-1">Array.of() <a class="header-anchor" href="#array-of" aria-label="Permalink to &quot;Array.of()&quot;">​</a></h2><blockquote><p>将一组值转换为数组，替代 Array()或 new Array()</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>Array.of(1,2,3) // [1,2,3]</span></span></code></pre></div><h2 id="copywithin" tabindex="-1">copyWithin <a class="header-anchor" href="#copywithin" aria-label="Permalink to &quot;copyWithin&quot;">​</a></h2><blockquote><p>在当前数组内部将指定位置的成员复制到其他位置，覆盖原有成员。接受 3 个参数：</p></blockquote><ul><li>target（必需）：从该位置开始替换数据</li><li>start（可选）：从该位置开始读取数据，默认为 0。如果为负值，表示倒数</li><li>end（可选）：到该位置前停止读取数据，默认等于数组长度。如果为负值，表示倒数</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>[1, 2, 3, 4, 5].copyWithin(0, 3)</span></span>
<span class="line"><span>// [4, 5, 3, 4, 5]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[1, 2, 3, 4, 5].copyWithin(0, 3, 4)</span></span>
<span class="line"><span>// [4, 2, 3, 4, 5]</span></span></code></pre></div><h2 id="find-和-findindex" tabindex="-1">find() 和 findIndex() <a class="header-anchor" href="#find-和-findindex" aria-label="Permalink to &quot;find() 和 findIndex()&quot;">​</a></h2><blockquote><p>find()查找当前数组中第一个符合条件的数组成员，没有找到是返回 undefined。 findIndex()返回索引，没找到返回-1。它们的第一个参数是一个回调函数，回调函数有三个参数，以此为当前值当前位置，原数组。 第二个参数用来绑定回调函数的 this 对象。</p></blockquote><h2 id="fill" tabindex="-1">fill() <a class="header-anchor" href="#fill" aria-label="Permalink to &quot;fill()&quot;">​</a></h2><blockquote><p>使用给定值填充一个数组，数组中已有的值会被全部抹去。参数依次为要填充的值，起始位置，结束位置。</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>[&#39;a&#39;, &#39;b&#39;, &#39;c&#39;].fill(7, 1, 2)</span></span>
<span class="line"><span>// [&#39;a&#39;, 7, &#39;c&#39;]</span></span></code></pre></div><h2 id="entries-keys-values" tabindex="-1">entries(), keys(), values() <a class="header-anchor" href="#entries-keys-values" aria-label="Permalink to &quot;entries(), keys(), values()&quot;">​</a></h2><blockquote><p>ES6 提供三个新的方法—— entries() ， keys() 和 values() ——用于遍历数组。它们都返回一个遍历器对象，可以 用 for...of 循环进行遍历，唯一的区别是 keys() 是对键名的遍历、 values() 是对键值的遍历， entries() 是对键值对的遍历。</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>for (let index of [&#39;a&#39;, &#39;b&#39;].keys()) {</span></span>
<span class="line"><span>    console.log(index);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>// 0</span></span>
<span class="line"><span>// 1</span></span>
<span class="line"><span>for (let elem of [&#39;a&#39;, &#39;b&#39;].values()) {</span></span>
<span class="line"><span>    console.log(elem);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>// &#39;a&#39;</span></span>
<span class="line"><span>// &#39;b&#39;</span></span>
<span class="line"><span>for (let [index, elem] of [&#39;a&#39;, &#39;b&#39;].entries()) {</span></span>
<span class="line"><span>    console.log(index, elem);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>// 0 &quot;a&quot;</span></span>
<span class="line"><span>// 1 &quot;b&quot;</span></span></code></pre></div><blockquote><p>手动调用遍历器的 next()方法</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>let letter = [&#39;a&#39;, &#39;b&#39;, &#39;c&#39;];</span></span>
<span class="line"><span>let entries = letter.entries();</span></span>
<span class="line"><span>console.log(entries.next().value); // [0, &#39;a&#39;]</span></span>
<span class="line"><span>console.log(entries.next().value); // [1, &#39;b&#39;]</span></span>
<span class="line"><span>console.log(entries.next().value); // [2, &#39;c&#39;]</span></span></code></pre></div><h2 id="includes-boolean" tabindex="-1">includes() =&gt; boolean <a class="header-anchor" href="#includes-boolean" aria-label="Permalink to &quot;includes() =&gt; boolean&quot;">​</a></h2><blockquote><p>返回一个布尔值表示是否包含给定值，第一个参数为查找元素，第二个为起始位置</p></blockquote><h2 id="数组空位" tabindex="-1">数组空位 <a class="header-anchor" href="#数组空位" aria-label="Permalink to &quot;数组空位&quot;">​</a></h2><blockquote><p>ES6 将空位转为 undefined</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>Array(3) // [, , ,]</span></span></code></pre></div><h2 id="filter-callback-thisobject-any" tabindex="-1">filter(callback[, thisObject]) =&gt; any[] <a class="header-anchor" href="#filter-callback-thisobject-any" aria-label="Permalink to &quot;filter(callback[, thisObject]) =&gt; any[]&quot;">​</a></h2><p>参数：</p><ul><li>callback: 数组中每个元素都会执行的函数，有三个参数 <ul><li>element：当前元素</li><li>index：当前元素索引</li><li>array：当前数组对象</li></ul></li><li>thisObject：回调函数内部的 this 对象</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>[1,2,3,4].filter(item =&gt; item &gt; 2) // [3,4]</span></span></code></pre></div><h2 id="map-callback-any" tabindex="-1">map(callback) =&gt; any[] <a class="header-anchor" href="#map-callback-any" aria-label="Permalink to &quot;map(callback) =&gt; any[]&quot;">​</a></h2><blockquote><p>遍历每一个元素，返回新数组。 参数：</p></blockquote><ul><li>callback: 数组中每个元素都会执行的函数，有三个参数 <ul><li>element：当前元素</li><li>index：当前元素索引</li><li>array：当前数组对象</li></ul></li></ul><h2 id="some-callback-boolean" tabindex="-1">some(callback) =&gt; boolean <a class="header-anchor" href="#some-callback-boolean" aria-label="Permalink to &quot;some(callback) =&gt; boolean&quot;">​</a></h2><blockquote><p>对每一个元素执行一次回调函数，直到此函数返回 true，some 将返回 true,如果每个元素执行后都返回 false，some 将返回 false 参数：</p></blockquote><ul><li>callback: 数组中每个元素都会执行的函数，有三个参数 <ul><li>element：当前元素</li><li>index：当前元素索引</li><li>array：当前数组对象</li></ul></li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>[1,2,3,4].some(item =&gt; item &gt;=3) // true</span></span>
<span class="line"><span>[1,2,3,4].some(item =&gt; item &gt;=5) // false</span></span></code></pre></div><h2 id="every-callback-boolean" tabindex="-1">every(callback) =&gt; boolean <a class="header-anchor" href="#every-callback-boolean" aria-label="Permalink to &quot;every(callback) =&gt; boolean&quot;">​</a></h2><blockquote><p>对每一个元素执行一次回调函数，直到此函数返回 false，every 将返回 false，如果每个元素执行后都返回 true，every 将返回 false 参数：</p></blockquote><ul><li>callback: 数组中每个元素都会执行的函数，有三个参数 <ul><li>element：当前元素</li><li>index：当前元素索引</li><li>array：当前数组对象</li></ul></li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>[1,2,3,4].every(item =&gt; item &gt;=3) // false</span></span>
<span class="line"><span>[1,2,3,4].every(item =&gt; item &gt;=1) // true</span></span></code></pre></div><h2 id="flat-number-any" tabindex="-1">flat(number) =&gt; any[] <a class="header-anchor" href="#flat-number-any" aria-label="Permalink to &quot;flat(number) =&gt; any[]&quot;">​</a></h2><blockquote><p>按照指定的深度(number)递归遍历数组，返回新数组</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>[1, 2, [3, 4, [5, 6]]].flat() // [1, 2, 3, 4, [5, 6]]</span></span>
<span class="line"><span>[1, 2, [3, 4, [5, 6]]].flat(2) // [1, 2, 3, 4, 5, 6]</span></span></code></pre></div><h2 id="flatmap" tabindex="-1">flatMap() <a class="header-anchor" href="#flatmap" aria-label="Permalink to &quot;flatMap()&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>[1, 2, 3, 4].flatMap(item =&gt; [item * 2]) // [2, 4, 6, 8]</span></span>
<span class="line"><span>[1, 2, 3, 4].flatMap(item =&gt; [[item * 2]]) // [[2], [4], [6], [8]]</span></span></code></pre></div>`,58),i=[t];function p(o,c,r,d,h,u){return e(),s("div",null,i)}const k=a(l,[["render",p]]);export{g as __pageData,k as default};
