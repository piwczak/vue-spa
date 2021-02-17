import Vue from 'vue'
import AppLayout from './theme/Layout.vue'
import router from './router'
import store from './vuex/index'

// Vue.component('app', {
//   template: `
//     <div id="app">
//       <nav class="nav has-shadow">
//         <div class="container">
//           <a href="/">
//             <img src="http://bit.ly/vue-img"
//               alt="Vue SPA" />
//           </a>
//         </div>
//       </nav>
//       <section class="main-section section"></section>
//       <footer class="footer">
//         <div class="container">
//           <div class="content has-text-centered">
//             Follow us on
//             <a href="https://twitter.com/bstavroulakis"
//             target="_blank">Twitter</a>
//           </div>
//         </div>
//       </footer>
//     </div>
//   `
// })

const app = new Vue({
  // data: {
  //   hello: 'hi there6'
  // },
  // template: '<div id="app">{{hello}}</div>'
  // render: h => h(AppLayout)
  router,
  ...AppLayout,
  store
})

export { app, router, store }
