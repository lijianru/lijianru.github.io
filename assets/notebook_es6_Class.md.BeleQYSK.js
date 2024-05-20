import{_ as s,c as a,o as n,a1 as p}from"./chunks/framework.Bw_Y1HHt.js";const g=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"notebook/es6/Class.md","filePath":"notebook/es6/Class.md"}'),l={name:"notebook/es6/Class.md"},e=p(`<h2 id="class-的基本语法" tabindex="-1">Class 的基本语法 <a class="header-anchor" href="#class-的基本语法" aria-label="Permalink to &quot;Class 的基本语法&quot;">​</a></h2><h3 id="简介" tabindex="-1">简介 <a class="header-anchor" href="#简介" aria-label="Permalink to &quot;简介&quot;">​</a></h3><ul><li>ES6 的 class 可以看作只是一个语法糖，它的绝大部分功能，ES5 都可以做到</li><li>定义类方法的时候前面不需要加 function 关键字，且方法之间不用加都好分隔</li><li>类的数据类型就是函数，类本身就是指向构造函数</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>class Point {</span></span>
<span class="line"><span>    // ...</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>typeof Point // &quot;function&quot;</span></span>
<span class="line"><span>Point === Point.prototype.constructor // true</span></span></code></pre></div><ul><li>使用的时候直接对类使用 new 命令</li><li>构造函数的 prototype 属性在类上面继续存在，事实上类的所有方法都定义在类的 prototype 上面 在类的实例上调用方法其实就是调用原型上的方法</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>class B {}</span></span>
<span class="line"><span>let b = new B();</span></span>
<span class="line"><span>b.constructor === B.prototype.constructor // true</span></span></code></pre></div><ul><li>Object.assign 方法可以很方便地一次向类添加多个方法</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>class Point {</span></span>
<span class="line"><span>    constructor(){</span></span>
<span class="line"><span>        // ...</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>Object.assign(Point.prototype, {</span></span>
<span class="line"><span>    toString(){},</span></span>
<span class="line"><span>    toValue(){}</span></span>
<span class="line"><span>});</span></span></code></pre></div><ul><li>类 prototype 对象的 constructor 属性，直接指向“类”的本身</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>Point.prototype.constructor === Point // true</span></span></code></pre></div><ul><li>类的内部所有定义的方法，都是不可枚举的，这与 ES5 不一致</li><li>类和模块的内部，默认就是严格模式</li></ul><h3 id="constructor-方法" tabindex="-1">constructor 方法 <a class="header-anchor" href="#constructor-方法" aria-label="Permalink to &quot;constructor 方法&quot;">​</a></h3><blockquote><p>constructor 方法是类的默认方法，通过 new 命令生成对象实例时，自动调用该方法。 如果没有显式定义，会默认添加一个空的 constructor 方法。constructor 方法默认返回实例对象（即 this ）</p></blockquote><h3 id="类的实例对象" tabindex="-1">类的实例对象 <a class="header-anchor" href="#类的实例对象" aria-label="Permalink to &quot;类的实例对象&quot;">​</a></h3><ul><li>与 ES5 一样，实例的属性除非显式定义在其本身（即定义在 this 对象上），否则都是定义在原型上（即定义在 class 上）</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>class Point {</span></span>
<span class="line"><span>    constructor(x, y) {</span></span>
<span class="line"><span>        this.x = x;</span></span>
<span class="line"><span>        this.y = y;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    toString() {</span></span>
<span class="line"><span>        return &#39;(&#39; + this.x + &#39;, &#39; + this.y + &#39;)&#39;;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>var point = new Point(2, 3);</span></span>
<span class="line"><span>point.toString() // (2, 3)</span></span>
<span class="line"><span>point.hasOwnProperty(&#39;x&#39;) // true</span></span>
<span class="line"><span>point.hasOwnProperty(&#39;y&#39;) // true</span></span>
<span class="line"><span>point.hasOwnProperty(&#39;toString&#39;) // false</span></span>
<span class="line"><span>point.__proto__.hasOwnProperty(&#39;toString&#39;) // true</span></span></code></pre></div><ul><li>类的所有实例共享一个原型对象</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>var p1 = new Point(2,3);</span></span>
<span class="line"><span>var p2 = new Point(3,2);</span></span>
<span class="line"><span>p1.__proto__ === p2.__proto__</span></span>
<span class="line"><span>//true</span></span></code></pre></div><ul><li>Object.getPrototypeOf 方法来获取实例对象的原型，然后再来为原型添加方法/属性</li></ul><h3 id="class-表达式" tabindex="-1">Class 表达式 <a class="header-anchor" href="#class-表达式" aria-label="Permalink to &quot;Class 表达式&quot;">​</a></h3><ul><li>与函数一样类也可以使用表达式形式定义</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>const MyClass = class Me {</span></span>
<span class="line"><span>    getClassName() {</span></span>
<span class="line"><span>        return Me.name;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>};</span></span></code></pre></div><ul><li>采用 Class 表达式，可以写出立即执行的 Class</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>let person = new class {}()</span></span></code></pre></div><h3 id="不存在变量提升" tabindex="-1">不存在变量提升 <a class="header-anchor" href="#不存在变量提升" aria-label="Permalink to &quot;不存在变量提升&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>new Foo(); // ReferenceError</span></span>
<span class="line"><span>class Foo {}</span></span></code></pre></div><h3 id="私有方法" tabindex="-1">私有方法 <a class="header-anchor" href="#私有方法" aria-label="Permalink to &quot;私有方法&quot;">​</a></h3><blockquote><p>ES6 不提供私有方法，只能通过变通方法模拟实现</p></blockquote><ul><li>在命名上加以区别</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// 私有方法</span></span>
<span class="line"><span>_bar(baz) {</span></span>
<span class="line"><span>    return this.snaf = baz;</span></span>
<span class="line"><span>}</span></span></code></pre></div><ul><li>将私有方法移出模块</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>class Widget {</span></span>
<span class="line"><span>    foo (baz) {</span></span>
<span class="line"><span>        bar.call(this, baz);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>function bar(baz) {</span></span>
<span class="line"><span>    return this.snaf = baz;</span></span>
<span class="line"><span>}</span></span></code></pre></div><ul><li>利用 Symbol 值的唯一性，将私有方法的名字命名为一个 Symbol 值</li></ul><h3 id="this-的指向" tabindex="-1">this 的指向 <a class="header-anchor" href="#this-的指向" aria-label="Permalink to &quot;this 的指向&quot;">​</a></h3><blockquote><p>类的方法内部如果含有 this ，它默认指向类的实例</p></blockquote><h3 id="class-的取值函数-getter-和存值函数-setter" tabindex="-1">Class 的取值函数（getter）和存值函数（setter） <a class="header-anchor" href="#class-的取值函数-getter-和存值函数-setter" aria-label="Permalink to &quot;Class 的取值函数（getter）和存值函数（setter）&quot;">​</a></h3><blockquote><p>与 ES5 一样，在“类”的内部可以使用 get 和 set 关键字，对某个属性设置存值 函数和取值函数，拦截该属性的存取行为。</p></blockquote><h3 id="class-的静态方法" tabindex="-1">Class 的静态方法 <a class="header-anchor" href="#class-的静态方法" aria-label="Permalink to &quot;Class 的静态方法&quot;">​</a></h3><blockquote><p>类相当于实例的原型，所有在类中定义的方法，都会被实例继承。如果在一个方法前， 加上 static 关键字，就表示该方法不会被实例继承，而是直接通过类来调用，这就称为“静态方法”。</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>class Foo {</span></span>
<span class="line"><span>    static classMethod() {</span></span>
<span class="line"><span>        return &#39;hello&#39;;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>Foo.classMethod() // &#39;hello&#39;</span></span>
<span class="line"><span>var foo = new Foo();</span></span>
<span class="line"><span>foo.classMethod()</span></span>
<span class="line"><span>// TypeError: foo.classMethod is not a function</span></span></code></pre></div><ul><li>如果静态方法包含 this 关键字，这个 this 指的是类，而不是实例</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>class Foo {</span></span>
<span class="line"><span>    static bar () {</span></span>
<span class="line"><span>        this.baz();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    static baz () {</span></span>
<span class="line"><span>        console.log(&#39;hello&#39;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    baz () {</span></span>
<span class="line"><span>        console.log(&#39;world&#39;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>Foo.bar() // hello</span></span></code></pre></div><ul><li>父类的静态方法，可以被子类继承</li></ul><h3 id="class-的静态属性和实例属性" tabindex="-1">Class 的静态属性和实例属性 <a class="header-anchor" href="#class-的静态属性和实例属性" aria-label="Permalink to &quot;Class 的静态属性和实例属性&quot;">​</a></h3><blockquote><p>静态属性指的是 Class 本身的属性，即 Class.propName ，而不是定义在实例对 象（ this ）上的属性。目前有一个静态属性的提案，对实例属性和静态属性都规定了新的写法。</p></blockquote><ul><li>类的实例属性</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>class MyClass {</span></span>
<span class="line"><span>    myProp = 42</span></span>
<span class="line"><span>}</span></span></code></pre></div><ul><li>类的静态属性</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>class MyClass {</span></span>
<span class="line"><span>    static myProp = 42</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="new-target-属性" tabindex="-1">new.target 属性 <a class="header-anchor" href="#new-target-属性" aria-label="Permalink to &quot;new.target 属性&quot;">​</a></h3><blockquote><p>该属性一般用在构造函数中，返回 new 命令作用的那个构造函数，如果构造函数不是通过 new 命令调用的会返回 undefined Class 内部调用 new.target 返回当前 Class，子类继承父类时会返回子类</p></blockquote><h2 id="class-的继承" tabindex="-1">Class 的继承 <a class="header-anchor" href="#class-的继承" aria-label="Permalink to &quot;Class 的继承&quot;">​</a></h2><h3 id="简介-1" tabindex="-1">简介 <a class="header-anchor" href="#简介-1" aria-label="Permalink to &quot;简介&quot;">​</a></h3><blockquote><p>Class 可以通过 extends 关键字实现继承。</p></blockquote><ul><li><p>子类必须在 constructor 方法中调用 super 方法，否则在新建实例时会报错。这是因为子类没有自己的 this 对象 而是继承父类的 this 对象。</p></li><li><p>ES6 的继承机制实质是先创造父类的实例对象 this （所以必须先调用 super 方法），然后再用子类的构造函数修改 this 。</p></li><li><p>如果子类没有定义 constructor 方法，会被默认添加并调用 super 方法</p></li></ul><h3 id="super-关键字" tabindex="-1">super 关键字 <a class="header-anchor" href="#super-关键字" aria-label="Permalink to &quot;super 关键字&quot;">​</a></h3><blockquote><p>既可以当作函数使用也可以当作对象使用</p></blockquote><ul><li>当作函数调用时，代表父类的构造函数，只能用在子类的构造函数中</li><li>当作对象时，在普通当法中只想父类的原型对象，在静态方法中指向父类</li></ul>`,58),t=[e];function i(o,c,r,h,u,d){return n(),a("div",null,t)}const k=s(l,[["render",i]]);export{g as __pageData,k as default};
