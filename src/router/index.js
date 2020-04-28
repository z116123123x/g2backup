import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/main',
    name: 'Home',
    component: () => import('@/views/Home.vue'),
  },
  {
    path: '/main/book',
    name: 'Book',
    component: () => import('@/views/Book.vue'),
  },
  {
    path: '/main/blog-landing',
    name: 'Blog-landing',
    component: () => import('@/views/Blog-landing.vue'),
  },
  {
    path: '/main/blog-post',
    name: 'Blog-post',
    component: () => import('@/views/Blog-post.vue'),
  },
  {
    path: '/main/blog-post2',
    name: 'Blog-post2',
    component: () => import('@/views/Blog-post2.vue'),
  },
  {
    path: '/main/shop',
    name: 'Shop',
    component: () => import('@/views/Shop.vue'),
  },
  {
    path: '/main/member',
    name: 'Member',
    component: () => import('@/views/Member.vue'),
    children: [
      {
        // children 指的是 member router（路由）內的"子頁"，例如網址只要符合 /member/information 就會嵌入 Member.vue 樣板及 Information.vue 元件
        path: 'information',
        name: 'Information',
        component: () => import('@/views/MemberInfo.vue'),
      },
      {
        path: 'update',
        name: 'Update',
        component: () => import('@/views/MemberUpdate.vue'),
      },
      {
        path: 'order',
        name: 'Order',
        component: () => import('@/views/MemberOrder.vue'),
      },
      {
        path: 'track',
        name: 'Track',
        component: () => import('@/views/MemberTrack.vue'),
      },
      {
        path: 'shopping',
        name: 'Shopping',
        component: () => import('@/views/MemberShopping.vue'),
      },
      {
        path: 'checkInfo',
        name: 'CheckInfo',
        component: () => import('@/views/MemberCheckInfo.vue'),
      },
      {
        path: 'farmRegistered',
        name: 'FarmRegistered',
        component: () => import('@/views/FarmRegistered.vue'),
      },
    ],
  },

  {
    path: "/farm",
    name: "Farm",
    component: () => import("@/views/FarmMember.vue"),
    children:[{
      path:"info",
      name:"Info",
      component:() => import("@/views/FarmMemberInfo.vue"),

    },
    {
      path: "update",
      name: "Update",
      component: () => import("@/views/FarmMemberupdate.vue"),
    },
    {
      path: "order",
      name: "Order",
      component: () => import("@/views/FarmMemberOrder.vue"),
    },
    {
      path: "Product",
      name: "Product",
      component: () => import("@/views/FarmMemberProductUpdate.vue"),
    },
  ]
  },
  {
    path: '/admin',
    name: 'AdminLogin',
    component: () => import('@/views/AdminLogin.vue'),
  },
  {
    path: '/center',
    name: 'Center',
    component: () => import('@/views/AdminCenter.vue'),
    children: [
      {
        path: 'manage',
        name: 'Manage',
        component: () => import('@/views/AdminManage.vue'),
      },
      {
        path: 'fan',
        name: 'Fan',
        component: () => import('@/views/AdminFanManage.vue'),
      },
      {
        path: 'seller',
        name: 'Seller',
        component: () => import('@/views/AdminSellerManage.vue'),
      },
      {
        path: 'ency',
        name: 'Ency',
        component: () => import('@/views/AdminEncyManage.vue'),
      },
      {
        path: 'blog',
        name: 'Blog',
        component: () => import('@/views/AdminBlog.vue'),
      },
      {
        path: 'comment',
        name: 'Comment',
        component: () => import('@/views/AdminComment.vue'),
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
