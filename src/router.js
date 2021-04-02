import Vue from 'vue';
import VueRouter from 'vue-router';
import List from 'list';

Vue.use(VueRouter);

const routes = [
  {
    path: '/list',
    name: 'list',
    component: List
  },
  {
    path: '/new',
    name: 'new',
    component: () => import(/* webpackChunkName: "new" */ 'new')
  },
  {
    path: '/404',
    name: 'error-404',
    component: () => import(/* webpackChunkName: "new" */ 'error-404')
  },
  {
    path: '/',
    redirect: '/list'
  },
  {
    path: '*',
    redirect: '/404'
  }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;
