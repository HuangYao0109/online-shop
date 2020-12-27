import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/pages/Index';

const Login = resolve => require(['@/pages/Login'], resolve);
const SignUp = resolve => require(['@/pages/SignUp'], resolve);
const CheckPhone = resolve => require(['@/components/Register/CheckPhone'], resolve);
const InputInfo = resolve => require(['@/components/Register/InputInfo'], resolve);
const SignUpDone = resolve => require(['@/components/Register/SignUpDone'], resolve);
const GoodsList = resolve => require(['@/pages/GoodsList'], resolve);
const GoodsDetail = resolve => require(['@/pages/GoodsDetail'], resolve);
const ShoppingCart = resolve => require(['@/pages/ShoppingCart'], resolve);
const Order = resolve => require(['@/pages/Order'], resolve);
const Pay = resolve => require(['@/pages/Pay'], resolve);
const PayDone = resolve => require(['@/pages/PayDone'], resolve);
const Home = resolve => require(['@/pages/Home'], resolve);
const MyAddress = resolve => require(['@/components/MyPage/MyAddress'], resolve);
const AddAddress = resolve => require(['@/components/MyPage/AddAddress'], resolve);
const MyOrder = resolve => require(['@/components/MyPage/MyOrder'], resolve);
const MyShoppingCart = resolve => require(['@/components/MyPage/MyShoppingCart'], resolve);
const Merchant = resolve => require(['@/pages/Merchant'], resolve);

Vue.use(Router);



export default new Router({
    routes: [
        {
            path: '/', // 首页
            name: 'Index',
            component: Index
        },
        {
            path: '/Login', // 登录
            name: 'Login',
            component: Login
        },
        {
            path: '/SignUp', // 注册
            name: 'SignUp',
            component: SignUp,
            children: [
                {
                    path: '/',
                    name: 'index',
                    component: CheckPhone
                },
                {
                    path: 'checkPhone',
                    name: 'CheckPhone',
                    component: CheckPhone
                },
                {
                    path: 'inputInfo',
                    name: 'InputInfo',
                    component: InputInfo
                },
                {
                    path: 'signUpDone',
                    name: 'SignUpDone',
                    component: SignUpDone
                }
            ]
        },
        {
            path: '/goodsList', // 商品列表
            name: 'GoodsList',
            component: GoodsList
        },
        {
            path: '/goodsDetail', // 商品详情
            name: 'GoodsDetail',
            component: GoodsDetail
        },
        {
            path: '/shoppingCart', // 商品详情
            name: 'ShoppingCart',
            component: ShoppingCart
        },
        {
            path: '/order', // 订单页面
            name: 'Order',
            component: Order
        },
        {
            path: '/pay', // 支付页面
            name: 'Pay',
            component: Pay
        },
        {
            path: '/payDone', // 支付成功页面
            name: 'PayDone',
            component: PayDone
        },
        {
            path: '/MyPage', // 主页
            name: 'Home',
            component: Home,
            children: [
                {
                    path: '/',
                    name: 'HomeIndex',
                    component: MyOrder
                },
                {
                    path: 'myAddress',
                    name: 'MyAddress',
                    component: MyAddress
                },
                {
                    path: 'addAddress',
                    name: 'AddAddress',
                    component: AddAddress
                },
                {
                    path: 'myOrder',
                    name: 'MyOrder',
                    component: MyOrder
                },
                {
                    path: 'myShoppingCart',
                    name: 'MyShoppingCart',
                    component: MyShoppingCart
                }
            ]
        },
        {
            path: '/merchant',
            name: 'Merchant',
            component: Merchant
        }
    ]
});
