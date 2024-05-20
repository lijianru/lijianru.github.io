import{_ as a,c as e,o as s,a1 as t}from"./chunks/framework.Bw_Y1HHt.js";const m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"frame/react/02.元素的渲染.md","filePath":"frame/react/02.元素的渲染.md"}'),n={name:"frame/react/02.元素的渲染.md"},l=t(`<h2 id="react-只会更新必要的部分" tabindex="-1">React 只会更新必要的部分 <a class="header-anchor" href="#react-只会更新必要的部分" aria-label="Permalink to &quot;React 只会更新必要的部分&quot;">​</a></h2><blockquote><p>React DOM 首先会比较元素内容先后的不同，而在渲染过程中只会更新改变了的部分。</p></blockquote><h2 id="条件渲染" tabindex="-1">条件渲染 <a class="header-anchor" href="#条件渲染" aria-label="Permalink to &quot;条件渲染&quot;">​</a></h2><h3 id="与运算符" tabindex="-1">与运算符 &amp;&amp; <a class="header-anchor" href="#与运算符" aria-label="Permalink to &quot;与运算符 &amp;&amp;&quot;">​</a></h3><blockquote><p>如果遇见 false，React 会忽略并跳过它</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;div&gt;</span></span>
<span class="line"><span>    &lt;h1&gt;Hello!&lt;/h1&gt;</span></span>
<span class="line"><span>    {unreadMessages.length &gt; 0 &amp;&amp;</span></span>
<span class="line"><span>        &lt;h2&gt;</span></span>
<span class="line"><span>        You have {unreadMessages.length} unread messages.</span></span>
<span class="line"><span>        &lt;/h2&gt;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>&lt;/div&gt;</span></span></code></pre></div><h3 id="三目运算符" tabindex="-1">三目运算符 <a class="header-anchor" href="#三目运算符" aria-label="Permalink to &quot;三目运算符&quot;">​</a></h3><h3 id="阻止组件渲染" tabindex="-1">阻止组件渲染 <a class="header-anchor" href="#阻止组件渲染" aria-label="Permalink to &quot;阻止组件渲染&quot;">​</a></h3><blockquote><p>若要阻止渲染，可让 render 方法直接返回 null，但它并不会影响组件的生命周期。</p></blockquote>`,9),o=[l];function p(c,r,i,h,d,_){return s(),e("div",null,o)}const b=a(n,[["render",p]]);export{m as __pageData,b as default};
