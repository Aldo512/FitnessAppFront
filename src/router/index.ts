import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import LogIn from "../views/LogIn.vue";
import SignUp from "../views/SignUp.vue";
import DashBoard from "../views/DashBoard.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: LogIn,
  },
  {
    path: "/signup",
    name: "signup",
    component: SignUp,
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: DashBoard,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
