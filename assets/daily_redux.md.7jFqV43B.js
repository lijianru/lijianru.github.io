import{_ as e,c as t,o as r,a3 as a}from"./chunks/framework.CScuXPqu.js";const p=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"daily/redux.md","filePath":"daily/redux.md"}'),s={name:"daily/redux.md"},l=a('<h2 id="redux-中的-action-是什么" tabindex="-1">redux 中的 action 是什么？ <a class="header-anchor" href="#redux-中的-action-是什么" aria-label="Permalink to &quot;redux 中的 action 是什么？&quot;">​</a></h2><details class="details custom-block"><summary>查看详情</summary><p>Action 是把数据从应用（页面上或接口请求返回处）传递到 store 的有效载荷，它是 store 数据的唯一来源。Action 本质上是一个包含 type 字段的 JS 对象。</p></details><h2 id="redux-中的-reducer-是什么" tabindex="-1">redux 中的 reducer 是什么？ <a class="header-anchor" href="#redux-中的-reducer-是什么" aria-label="Permalink to &quot;redux 中的 reducer 是什么？&quot;">​</a></h2><details class="details custom-block"><summary>查看详情</summary><p>Reducers 指定了如何响应 actions 并更新 store，actions 只是描述了有事情发生了这一事实，而reducer描述如何更新 store。</p></details><h2 id="redux-的工作流程" tabindex="-1">redux 的工作流程 <a class="header-anchor" href="#redux-的工作流程" aria-label="Permalink to &quot;redux 的工作流程&quot;">​</a></h2><details class="details custom-block"><summary>查看详情</summary><ul><li>用户点击按钮或者进入视图 dispatch 一个 action</li><li>store 自动调用 reducer，并传入两个参数：当前 state 和接收的 action，reducer 会返回新的 state</li><li>state 一旦有变化，store 就会调用监听函数，来更新 view</li></ul></details><h2 id="react-redux-是如何工作的" tabindex="-1">react-redux 是如何工作的？ <a class="header-anchor" href="#react-redux-是如何工作的" aria-label="Permalink to &quot;react-redux 是如何工作的？&quot;">​</a></h2><details class="details custom-block"><summary>查看详情</summary><p>react-redux 利用 react 的 context API 将 react 和 redux 绑定起来。react-redux 提供了三个主要的 API: Provider, usDispatch, useSelector。这三个 API 的作用是：</p><ul><li>Provider: 用于将 redux 的 store 注入当前应用</li><li>usDispatch: 提供更改 redux 的 store 的能力</li><li>useSelector: 提供订阅 redux 的 store 的能力</li></ul></details><h2 id="useselector的实现原理是什么" tabindex="-1">useSelector的实现原理是什么？ <a class="header-anchor" href="#useselector的实现原理是什么" aria-label="Permalink to &quot;useSelector的实现原理是什么？&quot;">​</a></h2><details class="details custom-block"><summary>查看详情</summary><p>useSelector 通过使用 React context 获取 Redux store，使用 selector 函数提取所需状态，并订阅 store 的变化。当 store 中的状态发生变化且影响到当前组件时，useSelector 会重新计算选取的状态并触发组件更新，从而实现数据与视图的同步。</p><ul><li>selector 返回的结果可以是任何值，而不仅仅是一个对象。selector 的返回值将被作为 useSelector() hook 的返回值被使用。</li><li>当 dispatch 一个 action 时，useSelector() 将对 selector 的前一个结果值和当前的结果值做一个引用比较。如果它们不同，该组件将被强制重新渲染。如果它们相同，组件将不会重新渲染。</li><li>useSelector() 默认使用严格的 === 引用全等检查，而不是浅层全等比较。可以修改useSelector的第二个参数以修改比较方式。</li></ul></details><h2 id="reselect-作用" tabindex="-1">reselect 作用 <a class="header-anchor" href="#reselect-作用" aria-label="Permalink to &quot;reselect 作用&quot;">​</a></h2><details class="details custom-block"><summary>查看详情</summary><ol><li><p>提高性能: 在没有 Reselect 的情况下，每当 Redux store 更新时，所有依赖该 store 的组件都会重新计算其需要的数据，即使这些数据实际上没有变化。这会导致性能问题，尤其是在大型应用中。Reselect 通过记忆功能解决了这个问题。只要输入参数（通常是 Redux store 的某些部分状态）没有变化，selector 就不会重新计算结果，从而避免了不必要的重新渲染和性能开销。</p></li><li><p>简化代码: Reselect 使得创建和组合 selector 更加简洁和直观。它支持将多个简单的 selector 组合成一个复杂的 selector，从而使代码更具可读性和可维护性。</p></li></ol></details><h2 id="redux-toolkit是什么" tabindex="-1">redux-toolkit是什么 <a class="header-anchor" href="#redux-toolkit是什么" aria-label="Permalink to &quot;redux-toolkit是什么&quot;">​</a></h2><details class="details custom-block"><summary>查看详情</summary><p>Redux Toolkit（RTK）是 Redux 官方推荐的工具集，旨在简化 Redux 的使用，减少样板代码，提高开发效率。它提供了一系列简洁而强大的工具和最佳实践，以帮助开发者更容易地构建 Redux 应用。RTK 包含几个核心 API，如 configureStore、createSlice、createAsyncThunk 等。</p></details>',14),o=[l];function c(i,d,u,n,m,x){return r(),t("div",null,o)}const _=e(s,[["render",c]]);export{p as __pageData,_ as default};