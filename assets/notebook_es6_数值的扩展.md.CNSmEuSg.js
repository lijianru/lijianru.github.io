import{_ as a,c as e,o as s,a1 as n}from"./chunks/framework.Bw_Y1HHt.js";const h=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"notebook/es6/数值的扩展.md","filePath":"notebook/es6/数值的扩展.md"}'),i={name:"notebook/es6/数值的扩展.md"},t=n(`<h2 id="二进制和八进制表示法" tabindex="-1">二进制和八进制表示法 <a class="header-anchor" href="#二进制和八进制表示法" aria-label="Permalink to &quot;二进制和八进制表示法&quot;">​</a></h2><ul><li>二进制: 0b110</li><li>八进制： 0o767</li></ul><h2 id="number-isfinite-number-isnan" tabindex="-1">Number.isFinite(), Number.isNaN() <a class="header-anchor" href="#number-isfinite-number-isnan" aria-label="Permalink to &quot;Number.isFinite(), Number.isNaN()&quot;">​</a></h2><ul><li>Number.isFinite()用来检查一个数值是否为有限的，参数不为数字或不能通过 Number()转换为数字的字符串时返回 false</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>Number.isFinite(15); // true</span></span>
<span class="line"><span>Number.isFinite(0.8); // true</span></span>
<span class="line"><span>Number.isFinite(NaN); // false</span></span>
<span class="line"><span>Number.isFinite(Infinity); // false</span></span>
<span class="line"><span>Number.isFinite(-Infinity); // false</span></span>
<span class="line"><span>Number.isFinite(&#39;foo&#39;); // false</span></span>
<span class="line"><span>Number.isFinite(&#39;15&#39;); // false</span></span>
<span class="line"><span>Number.isFinite(true); // false</span></span></code></pre></div><ul><li>Number.isNaN() 用来检查一个值是否为 NaN,参数非 NaN 返回 false</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>Number.isNaN(NaN) // true</span></span>
<span class="line"><span>Number.isNaN(15) // false</span></span>
<span class="line"><span>Number.isNaN(&#39;15&#39;) // false</span></span>
<span class="line"><span>Number.isNaN(true) // false</span></span>
<span class="line"><span>Number.isNaN(9/NaN) // true</span></span>
<span class="line"><span>Number.isNaN(&#39;true&#39;/0) // true</span></span>
<span class="line"><span>Number.isNaN(&#39;true&#39;/&#39;true&#39;) // true</span></span>
<span class="line"><span>Number.isNaN(&quot;NaN&quot;) // false</span></span></code></pre></div><h2 id="number-parseint-number-parsefloat" tabindex="-1">Number.parseInt(), Number.parseFloat() <a class="header-anchor" href="#number-parseint-number-parsefloat" aria-label="Permalink to &quot;Number.parseInt(), Number.parseFloat()&quot;">​</a></h2><blockquote><p>行为与之前相同</p></blockquote><h2 id="number-isinteger" tabindex="-1">Number.isInteger() <a class="header-anchor" href="#number-isinteger" aria-label="Permalink to &quot;Number.isInteger()&quot;">​</a></h2><blockquote><p>判断一个值是否为整数，3 和 3.1 是一样的</p></blockquote><h2 id="number-epsilon" tabindex="-1">Number.EPSILON <a class="header-anchor" href="#number-epsilon" aria-label="Permalink to &quot;Number.EPSILON&quot;">​</a></h2><blockquote><p>一个极小的常量, 常用来判定误差</p></blockquote><h2 id="安全整数和-number-issafeinteger" tabindex="-1">安全整数和 Number.isSafeInteger() <a class="header-anchor" href="#安全整数和-number-issafeinteger" aria-label="Permalink to &quot;安全整数和 Number.isSafeInteger()&quot;">​</a></h2><blockquote><p>JS 能够表示的整数范围为 -2^53 到 2^53 之间（不含两个端点），Number.isSafeInteger() 则是用来判断一个整数是否落在这个范围之内</p></blockquote><h2 id="a-b-指数运算符" tabindex="-1">a**b 指数运算符 <a class="header-anchor" href="#a-b-指数运算符" aria-label="Permalink to &quot;a\\*\\*b 指数运算符&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>2**3 // 8</span></span></code></pre></div>`,17),r=[t];function l(p,o,u,b,c,N){return s(),e("div",null,r)}const d=a(i,[["render",l]]);export{h as __pageData,d as default};
