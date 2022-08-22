import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import LogIn from "../views/LogIn.vue";
import SignUp from "../views/SignUp.vue";
import DashBoard from "../views/DashBoard.vue";
import WorkOutsView from "../views/WorkOutsView.vue";
import NutritionPlansView from "../views/NutritionPlansView.vue";
import StatisticsView from "../views/StatisticsView.vue";
import TrainingsView from "../views/TrainingsView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: LogIn,
  },
  {
    path: "/login",
    name: "login",
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
  {
    path: "/nutrition",
    name: "nutrition",
    component: NutritionPlansView,
  },
  {
    path: "/statistics",
    name: "statistics",
    component: StatisticsView,
  },
  {
    path: "/workouts",
    name: "workouts",
    component: WorkOutsView,
  },
  {
    path: "/training",
    name: "training",
    component: TrainingsView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from) => {
  console.log(to.path);
  console.log(from.path);
  return true;
});
export default router;
