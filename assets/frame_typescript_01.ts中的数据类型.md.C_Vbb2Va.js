import{_ as n,c as s,o as a,a1 as p}from"./chunks/framework.Bw_Y1HHt.js";const f=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"frame/typescript/01.ts中的数据类型.md","filePath":"frame/typescript/01.ts中的数据类型.md"}'),l={name:"frame/typescript/01.ts中的数据类型.md"},e=p(`<h2 id="基本数据类型" tabindex="-1">基本数据类型 <a class="header-anchor" href="#基本数据类型" aria-label="Permalink to &quot;基本数据类型&quot;">​</a></h2><blockquote><p>TypeScript 支持与 JavaScript 几乎相同的数据类型，此外还提供了枚举类型</p></blockquote><ul><li>布尔值</li><li>数字</li><li>字符串</li><li>数组（数组内元素类型相同）</li><li>元组（元组内元素类型可以不相同） <ul><li>访问一个已知元素会得到正确的类型</li><li>访问越界元素会报错（高版本）</li></ul></li><li>枚举（默认情况下元素编号从 0 开始，可以手动指定编号）</li><li>null</li><li>undefined</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// 布尔值 boolean</span></span>
<span class="line"><span>const isDone: boolean = false</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 数字 number</span></span>
<span class="line"><span>const decLiteral: number = 1</span></span>
<span class="line"><span>const hexLiteral: number = 0xf00d</span></span>
<span class="line"><span>const binaryLiteral: number = 0b10</span></span>
<span class="line"><span>const octalLiteral: number = 0o3</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 字符串 string</span></span>
<span class="line"><span>const str: string = &#39;123&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 空值 void</span></span>
<span class="line"><span>function alert(): void {</span></span>
<span class="line"><span>  alert(&#39;test!&#39;)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// null 和 undefined</span></span>
<span class="line"><span>// 指定&quot;strictNullChecks&quot;: false时，null和undefined是所有类型的子类型</span></span>
<span class="line"><span>// 指定&quot;strictNullChecks&quot;: true时b, c, d, g, h会报错</span></span>
<span class="line"><span>const a: void = undefined</span></span>
<span class="line"><span>const b: void = null</span></span>
<span class="line"><span>const c: number = null</span></span>
<span class="line"><span>const d: number = undefined</span></span>
<span class="line"><span>const e: null = null</span></span>
<span class="line"><span>const f: undefined = undefined</span></span>
<span class="line"><span>const g: null = undefined</span></span>
<span class="line"><span>const h: undefined = null</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// Symbol</span></span>
<span class="line"><span>const sym: symbol = Symbol(&#39;key&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// BigInt</span></span>
<span class="line"><span>// 需要使用BigInt将数字转换为BigInt</span></span>
<span class="line"><span>const big: bigint = BigInt(2**55)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// any</span></span>
<span class="line"><span>let notSure: any = 2</span></span>
<span class="line"><span>notSure = &#39;2&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// unknown</span></span>
<span class="line"><span>// unknown 是any类型对应的安全类型，在使用前必须对类型做出判断</span></span>
<span class="line"><span>let value: unknown</span></span>
<span class="line"><span>value = 123</span></span>
<span class="line"><span>if (typeof value === &quot;number&quot;) {</span></span>
<span class="line"><span>  value += 1</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>value = [1,2,3]</span></span>
<span class="line"><span>if (value instanceof Array) {</span></span>
<span class="line"><span>  value.push(4)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// never</span></span>
<span class="line"><span>function error(msg: string): never {</span></span>
<span class="line"><span>  throw new Error(msg)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>// 空数组，而且永远为空，不能添加元素</span></span>
<span class="line"><span>const empty: never[] = []</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 数组</span></span>
<span class="line"><span>const arr: number[] = [1, 2]</span></span>
<span class="line"><span>const arr1: Array&lt;number&gt; = [1, 2]</span></span>
<span class="line"><span>interface NumberArray {</span></span>
<span class="line"><span>  [index: number]: number</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>const arr2: NumberArray = [1, 2]</span></span>
<span class="line"><span>// 注：类数组不是数组类型，比如arguments等，事实上常见的类数组都有自己的接口定义，如 IArguments, NodeList, HTMLCollection 等</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 元组</span></span>
<span class="line"><span>const list: [string, number] = [&#39;123&#39;, 123]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 枚举</span></span>
<span class="line"><span>// 数字枚举</span></span>
<span class="line"><span>enum Color {Red = 1, Green, Blue}</span></span>
<span class="line"><span>const color: Color = Color.Green    // 2</span></span>
<span class="line"><span>const colorName: string = Color[2]  // Green</span></span>
<span class="line"><span>// 字符串枚举</span></span>
<span class="line"><span>enum Direction {</span></span>
<span class="line"><span>  Up = &#39;Up&#39;,</span></span>
<span class="line"><span>  Down = &#39;Down&#39;,</span></span>
<span class="line"><span>  Left = &#39;Left&#39;,</span></span>
<span class="line"><span>  Right = &#39;Right&#39;,</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>// 异构枚举</span></span>
<span class="line"><span>enum BooleanLike {</span></span>
<span class="line"><span>  No = 0,</span></span>
<span class="line"><span>  Yes = &#39;Yes&#39;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>// 常量枚举</span></span>
<span class="line"><span>const enum ValueEnums {</span></span>
<span class="line"><span>  a = &#39;A&#39;,</span></span>
<span class="line"><span>  b = &#39;B&#39;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>const enumValue = ValueEnums.a</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// Object</span></span>
<span class="line"><span>// object 表示非原始类型，也就是除 number，string，boolean，symbol，null 或 undefined 之外的类型。</span></span>
<span class="line"><span>// 我们看到,普通对象、枚举、数组、元组通通都是 object 类型。</span></span>
<span class="line"><span>let obj: object</span></span>
<span class="line"><span>obj = {}</span></span>
<span class="line"><span>obj = []</span></span>
<span class="line"><span>obj = Color</span></span></code></pre></div><blockquote><p>注：TypeScript 的原始类型写为 boolean、number、string 等等，在 JavaScript 中都有类似的关键字 Boolean、Number、String。 后者是 JavaScript 中的构造函数，而 Typescript 中 number 仅仅便是类型。</p></blockquote>`,5),i=[e];function c(t,o,r,u,d,b){return a(),s("div",null,i)}const _=n(l,[["render",c]]);export{f as __pageData,_ as default};
