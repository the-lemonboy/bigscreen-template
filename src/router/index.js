import { createRouter, createWebHashHistory } from 'vue-router';

const Main = () => import('@/views/main.vue');
const Login = () => import('@/views/login/index.vue');

const routes = [
  { path: '/', name: 'home', component: Main, meta: { requiresAuth: true } },
  { path: '/login', name: 'login', component: Login },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some((r) => r.meta && r.meta.requiresAuth);
  if (!requiresAuth) return next();
  // const app = useAppStore()
  // if (!app?.token) {
  //   return next({ name: 'login', query: { redirect: to.fullPath } })
  // }
  return next();
});

export default router;
