import{_ as s,c as n,o as a,a3 as e}from"./chunks/framework.CScuXPqu.js";const g=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"frame/react/11.Hooks.md","filePath":"frame/react/11.Hooks.md"}'),p={name:"frame/react/11.Hooks.md"},t=e(`<h2 id="usesate" tabindex="-1">useSate() <a class="header-anchor" href="#usesate" aria-label="Permalink to &quot;useSate()&quot;">​</a></h2><p>返回一个 state 和更新 state 的函数</p><ul><li><p>在初始渲染阶段，返回的 state 和传入 useState 的参数一致</p></li><li><p>如果新的 state 需要通过前一次的 state 计算得出，那么可以将函数传递给 setState 函数</p></li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;button onClick={() =&gt; setCount(prevCount =&gt; prevCount - 1)}&gt;-&lt;/button&gt;</span></span></code></pre></div><ul><li>如果初始化 state 需要经过复杂的计算的出则可以使用惰性初始化</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// bad</span></span>
<span class="line"><span>// 在组件每次渲染的时候都会执行此函数，但是只有在组件第一次初始化的时候使用</span></span>
<span class="line"><span>const count = someExpensiveComputation()</span></span>
<span class="line"><span>const [state, setState] = useState(count)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// good</span></span>
<span class="line"><span>const [state, setState] = useState(() =&gt; someExpensiveComputation())</span></span></code></pre></div><ul><li>给 setState 函数传入相同的 state 不会导致组件的重新渲染。（React 使用 Object.is()来判断）</li></ul><h2 id="useeffect" tabindex="-1">useEffect() <a class="header-anchor" href="#useeffect" aria-label="Permalink to &quot;useEffect()&quot;">​</a></h2><p>在组件渲染到页面能上后异步执行副作用函数</p><ul><li>清除副作用，如果不给 useEffect 函数传递第二个参数，它会在组件更新前清除副作用，然后在组件更新完成后在执行副作用</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>useEffect(() =&gt; {</span></span>
<span class="line"><span>  // 订阅</span></span>
<span class="line"><span>  const subscription = props.source.subscribe();</span></span>
<span class="line"><span>  return () =&gt; {</span></span>
<span class="line"><span>    // 清除订阅</span></span>
<span class="line"><span>    subscription.unsubscribe();</span></span>
<span class="line"><span>  };</span></span>
<span class="line"><span>});</span></span></code></pre></div><ul><li><p>与 componentDidMount、componentDidUpdate 不同的是，在浏览器完成布局与绘制之后，传给 useEffect 的函数会延迟调用。</p></li><li><p>给 useEffect 添加第二个参数指定依赖，在依赖发生变化的时候会执行</p></li></ul><h2 id="uselayouteffect" tabindex="-1">useLayoutEffect() <a class="header-anchor" href="#uselayouteffect" aria-label="Permalink to &quot;useLayoutEffect()&quot;">​</a></h2><p>其函数签名与 useEffect 一致，但执行时机和 useEffect 不同。</p><ul><li><p>它会在所有的 DOM 变更之后同步调用 effect。可以使用它来读取 DOM 布局并同步触发重渲染。在浏览器执行绘制之前，useLayoutEffect 内部的更新计划将被同步刷新。</p></li><li><p>尽可能使用标准的 useEffect 以避免阻塞视觉更新。</p></li><li><p>useLayoutEffect 与 componentDidMount、componentDidUpdate 的调用阶段是一样的。</p></li></ul><h2 id="usememo" tabindex="-1">useMemo() <a class="header-anchor" href="#usememo" aria-label="Permalink to &quot;useMemo()&quot;">​</a></h2><p>返回一个记忆的值（memoized value ）。把“创建”函数和依赖项数组作为参数传入 useMemo，它仅会在某个依赖项改变时才重新计算 memoized 值。这种优化有助于避免在每次渲染时都进行高开销的计算。</p><h2 id="usecallback" tabindex="-1">useCallback() <a class="header-anchor" href="#usecallback" aria-label="Permalink to &quot;useCallback()&quot;">​</a></h2><p>返回一个 memoized 回调函数。把内联回调函数及依赖项数组作为参数传入 useCallback，它将返回该回调函数的 memoized 版本，该回调函数仅在某个依赖项改变时才会更新。当你把回调函数传递给经过优化的并使用引用相等性去避免非必要渲染（例如 shouldComponentUpdate）的子组件时，它将非常有用。</p><ul><li>useCallback(fn, deps) 相当于 useMemo(() =&gt; fn, deps)。</li></ul><h2 id="useref" tabindex="-1">useRef() <a class="header-anchor" href="#useref" aria-label="Permalink to &quot;useRef()&quot;">​</a></h2><p>useRef 返回一个可变的 ref 对象，其 .current 属性被初始化为传入的参数（initialValue）。返回的 ref 对象在组件的整个生命周期内保持不变。</p><ul><li>用于获取 DOM 节点</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>export function TextInputWithFocusButton() {</span></span>
<span class="line"><span>  const inputEl = useRef()</span></span>
<span class="line"><span>  const onButtonClick = () =&gt; {</span></span>
<span class="line"><span>    // \`current\` 指向已挂载到 DOM 上的文本输入元素</span></span>
<span class="line"><span>    console.log(inputEl.current)</span></span>
<span class="line"><span>    inputEl.current.focus()</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  return (</span></span>
<span class="line"><span>    &lt;&gt;</span></span>
<span class="line"><span>      &lt;input ref={inputEl} type=&quot;text&quot; /&gt;</span></span>
<span class="line"><span>      &lt;button onClick={onButtonClick}&gt;Focus the input&lt;/button&gt;</span></span>
<span class="line"><span>    &lt;/&gt;</span></span>
<span class="line"><span>  )</span></span>
<span class="line"><span>}</span></span></code></pre></div><ul><li>获取上一次渲染的 state</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>export function PrevState() {</span></span>
<span class="line"><span>  const [count, setCount] = useState(0)</span></span>
<span class="line"><span>  const prevCount = useRef(null)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  useEffect(() =&gt; {</span></span>
<span class="line"><span>    prevCount.current = count</span></span>
<span class="line"><span>  }, [count])</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  return (</span></span>
<span class="line"><span>    &lt;div&gt;</span></span>
<span class="line"><span>      &lt;button onClick={() =&gt; setCount((count) =&gt; count + 1)}&gt;Click {count}&lt;/button&gt;</span></span>
<span class="line"><span>      &lt;p&gt;Prev Count: {prevCount.current}&lt;/p&gt;</span></span>
<span class="line"><span>      &lt;p&gt;Current Count: {count}&lt;/p&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>  )</span></span>
<span class="line"><span>}</span></span></code></pre></div><ul><li>保存句柄</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>export function ClearInterval() {</span></span>
<span class="line"><span>  const [count, setCount] = useState(0)</span></span>
<span class="line"><span>  const it = useRef()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  useEffect(() =&gt; {</span></span>
<span class="line"><span>    it.current = setInterval(() =&gt; {</span></span>
<span class="line"><span>      setCount((count) =&gt; count + 1)</span></span>
<span class="line"><span>    }, 1000)</span></span>
<span class="line"><span>  }, [])</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  useEffect(() =&gt; {</span></span>
<span class="line"><span>    if (count &gt; 10) {</span></span>
<span class="line"><span>      clearInterval(it.current)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }, [count])</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  return &lt;p&gt;{count}&lt;/p&gt;</span></span>
<span class="line"><span>}</span></span></code></pre></div>`,28),l=[t];function i(c,o,u,r,d,h){return a(),n("div",null,l)}const b=s(p,[["render",i]]);export{g as __pageData,b as default};
