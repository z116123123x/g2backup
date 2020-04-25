import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home';

Vue.use(VueRouter);

const routes = [{
  path: '/',
  name: 'Home',
  component: Home,
},
{
  path: '/book',
  name: 'Book',
  component: () => import("@/views/Book.vue"),
},
{
  path: '/blog-landing',
  name: 'Blog-landing',
  component: () => import("@/views/Blog-landing.vue"),
},
{
  path: '/blog-post',
  name: 'Blog-post',
  component: () => import("@/views/Blog-post.vue"),
},
{
  path: '/shop',
  name: 'Shop',
  component: () => import("@/views/Shop.vue"),
},
{
  path: '/member',
  name: 'Member',
  component: () => import("@/views/Member.vue"),
  children: [{
    path: "track",
    component: () => import("@/views/track.vue"),
  },
  {
    // children 指的是 member router（路由）內的"子頁"，例如網址只要符合 /member/information 就會嵌入 Member.vue 樣板及 Information.vue 元件
    path: "information",
    component: () => import("@/views/Information.vue"),
  },
  {
    path: "order",
    component: () => import("@/views/Order.vue"),
  }
  ]
},
{
  path: '/adminLogin',
  name: 'AdminLogin',
  component: () => import("@/views/AdminLogin.vue"),
},
{
  path: '/adminManage',
  name: 'AdminManage',
  component: () => import("@/views/AdminManage.vue"),
},
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;