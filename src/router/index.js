import Vue from 'vue'
import Router from 'vue-router'


import Nav from '@/nav/nav.vue'
import Index from '@/index/index.vue'
import News from '@/news/news.vue'
import Newsinfo from '@/news/newsinfo.vue'
import Cart from '@/cart/cart.vue'
import Sum from '@/cart/sum.vue'

import Culture from '@/culture/culture.vue'//盆景文化
import Call from '@/call/call.vue'//联系我们
import Login from '@/login/login.vue'//登录
import Register from '@/register/register.vue'//祖册
import Detail from '@/detail/detail.vue'//详细信息
import Product from '@/product/product.vue'//产品
import Usercenter from '@/usercenter/usercenter.vue'
import Myorder from '@/usercenter/MyOrder.vue'
import Comment from '@/usercenter/comment.vue'
import Message from '@/usercenter/message.vue'
import Address from '@/usercenter/address.vue'

// 测试

import ManagerHome from '@/manager/home'
import ManagerSelf from '@/manager/selfinfo'
import ManagerMgP from '@/manager/mgperson'
import ManagerDeal from '@/manager/dealthing'
import ManagerNews from '@/manager/news'




Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/nav',
      name: 'nav',
      component: Nav,
        children:[
          
          {
        path:'/nav/index/detail',
        name:'Detail',
        component:Detail,
       
          },
          {
              path:'/nav/news',
        name:'News',
        component:News
      },
         {
           path:'/nav/news/newsinfo',
        name:'Newsinfo',
        component:Newsinfo,
         },
        
          {
              path:'/nav/cart',
        name:'Cart',
        component:Cart,
          },
          {
              path:'/nav/cart/sum',
        name:'Sum',
        component:Sum,

       
          }, 
          {
              path:'/nav/culture',
        name:'Culture',
        component:Culture,
          },
          {
              path:'/nav/call',
        name:'Call',
        component:Call,
          },
          {
              path:'/nav/product',
        name:'Product',
        component:Product,
          }, 
           {
              path:'/nav/index',
        name:'Index',
        component:Index,

       
          }, 
          {
              path:'/nav/usercenter',
        name:'Usercenter',
        component:Usercenter,
              children:[
                {
                  path:'/nav/usercenter/myorder',
                  name:'Myorder',
                  component:Myorder,
                },
                {
                  path:'/nav/usercenter/comment',
                  name:'Comment',
                  component:Comment,
                },
{
                  path:'/nav/usercenter/message',
                  name:'Message',
                  component:Message,
                },
{
                  path:'/nav/usercenter/address',
                  name:'Address',
                  component:Address,
                },

              ]
       
          }, 
        ]
    },
    
         
          {
              path:'/',
        name:'Login',
        component:Login,
          },
           {
              path:'/register',
        name:'Register',
        component:Register,
          },
   
        {
        path: '/mg/Home',
        component: ManagerHome,
        name: 'ManagerHome',
        children : [{
            path : '/mg/Home/selfinfo',
            // 懒加载
            component : resolve => require(['../manager/selfinfo.vue'],resolve)
        },{
          path : '/mg/Home/mgperson',
          // 懒加载
          component : resolve => require(['../manager/mgperson.vue'],resolve)
        },{
          path : '/mg/Home/dealthing',
          // 懒加载
          component : resolve => require(['../manager/dealthing.vue'],resolve)
        },,{
          path : '/mg/Home/news',
          // 懒加载
          component : resolve => require(['../manager/news.vue'],resolve)
        }
        ]
    
          },
  ]
})
