//存放路由


import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/home'
import Index from './pages/index'
import Product from './pages/product'
import Detail from './pages/detail'
import Cart from './pages/cart'
import Order from './pages/order'
import OrderConfirm from './pages/orderConfirm'
import OrderList from './pages/orderList'
import OrderPay from './pages/orderPay'
import AliPay  from './pages/alipay'

//加载插件
Vue.use(Router);

//导出
export default new Router({
    //配置子路由
    routes:[
        {//副路由
            path:'/',
            name:'home',
            //引入主键
            component:Home,
            //重定向
            redirect:'/index',
            children:[
                {
                    path:'/index',
                    name:'index',
                    component:Index,
                },
                {
                    path:'/product/:id',
                    name:'product',
                    component:Product,
                },
                {
                    path:'/detail/:id',
                    name:'detail',
                    component:Detail,
                }
            ]
        },
        {
            path:'/cart',
            name:'cart',
            component:Cart,
        },
        {
            path:'/order',
            name:'order',
            component:Order,
            children:[
                {
                    path:'list',
                    name:'order-list',
                    component:OrderList,
                },
                {
                    path:'comfirm',
                    name:'order-confirm',
                    component:OrderConfirm,
                },
                {
                    path:'pay',
                    name:'order-pay',
                    component:OrderPay,
                },
                {
                    path:'alipay',
                    name:'alipay',
                    component:AliPay,
                }
            ]
        }
    ]
})