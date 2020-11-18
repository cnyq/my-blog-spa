import Vue from "vue";
import VueRouter from "vue-router";
import generatedRouter from './routerPackage'
Vue.use(VueRouter);

const routes = [
  ...generatedRouter,
  {
    path: '/',
    redirect: '/home',
  }, {
    path: '/404',
    name: '404',
    component: () => import('@/components/pages/e404')
  }, {
    path: '*', redirect: '/404', hidden: true
  },
];
const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes
});
// const originalPush = VueRouter.prototype.push
// VueRouter.prototype.push = function push(location) {
//   return originalPush.call(this, location).catch(err => err)
// }
export default router;
