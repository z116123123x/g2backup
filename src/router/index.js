import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [{
  path: '/',
  name: 'Home',
  component: () => import("@/views/Home.vue"),
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
  children: [
    {
      // children 指的是 member router（路由）內的"子頁"，例如網址只要符合 /member/information 就會嵌入 Member.vue 樣板及 Information.vue 元件
      path: "information",
      name: "Information",
      component: () => import("@/views/MemberInfo.vue"),
    },
    {
      path: "update",
      name: "Update",
      component: () => import("@/views/MemberUpdate.vue"),
    },
    {
      path: "order",
      name: "Order",
      component: () => import("@/views/MemberOrder.vue"),
    },
    {
      path: "track",
      name: "Track",
      component: () => import("@/views/MemberTrack.vue"),
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