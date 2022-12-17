import { createWebHistory, createRouter } from "vue-router";
import home from "../views/home.vue";
import documentation from "../views/documentation.vue";

import NotFound from '../views/404.vue'
const routes = [
  {
    path: "/",
    name: "home",
    component: home,
  },
  {
    path: "/documentation/",
    name: "documentation",
    component: documentation,
  },
  {
    path: "/documentation/:catchAll(.*)",
    component: NotFound,
  },
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
        return ({
            el: to.hash,
            behavior: 'smooth',
        })
    } else if (savedPosition) {
        return (savedPosition);
    } else {
        return {left: 0, top: 0}
    }
},
});

export default router;