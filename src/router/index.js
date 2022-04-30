import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: '',
      redirect:'/index'
      
    },
    {
      path:'/',
      component:resolve => require(['../components/Home.vue'], resolve),
      
      children:[
        {
          path:'/index',
          component:resolve => require(['../components/Index.vue'],resolve),
          meta:{title:"首页"}
        },
        {
          path:'/job',
          component:resolve => require(['../components/Job.vue'],resolve),
          meta:{title:"岗位招聘"}
        },
        {
          path:'/news',
          component:resolve => require(['../components/News.vue'],resolve),
          meta:{title:"新闻传递"}
        },
        {
          path:'/aboutus',
          component:resolve => require(['../components/AboutUs.vue'],resolve),
          meta:{title:"联系我们"}
        },
        {
          path:'/center',
          component:resolve => require(['../components/Center.vue'],resolve),
          meta:{title:"个人中心"}
        },
      ]
    }
    
      ]
    }
)


export default router
