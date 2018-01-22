// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Layout from './components/layout'
import VueRouter from 'vue-router'
import IndexPage from './pages/index'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/zh-CN'

Vue.use(VueRouter)
Vue.use(ElementUI)
Vue.use(ElementUI, { locale })

let router = new VueRouter({
    mode: 'history',
    routes: [
      {
        path: '/',
        component: IndexPage
      }
    ]
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { Layout },
  template: '<Layout/>'
})
