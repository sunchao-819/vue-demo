// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Layout from './components/layout'
import VueRouter from 'vue-router'
import IndexPage from './pages/index'
import DetailPage from './pages/detail'
import DetailAnalysisPage from './pages/detail/analysis'
import DetailCountPage from './pages/detail/count'
import DetailForecastPage from './pages/detail/forecast'
import DetailPublishPage from './pages/detail/publish'
import ElementUI from 'element-ui'
import VueResource from 'vue-resource'
import 'element-ui/lib/theme-chalk/index.css'
import '../theme/index.css'
import locale from 'element-ui/lib/locale/lang/zh-CN'

Vue.config.productionTip = false;

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(ElementUI)
Vue.use(ElementUI, {locale})


let router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: IndexPage,
      meta: {
        title: '首页'
      }
    },
    {
      path: '/detail',
      component: DetailPage,
      redirect: '/detail/analysis',
      children: [
        {
          path: 'analysis',
          component: DetailAnalysisPage,
          meta:{
            title:'流量分析'
          }
        },
        {
          path: 'forecast',
          component: DetailForecastPage,
          meta:{
            title:'数据预测'
          }
        },
        {
          path: 'count',
          component: DetailCountPage,
          meta:{
            title:'数据统计'
          }
        },
        {
          path: 'publish',
          component: DetailPublishPage,
          meta:{
            title:'广告发布'
          }
        }
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {Layout},
  template: '<Layout/>'
})
