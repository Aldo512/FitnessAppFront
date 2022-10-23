import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import LogIn from "../views/LogIn.vue";
import SignUp from "../views/SignUp.vue";
import DashBoard from "../views/DashBoard.vue";
import WorkOutsView from "../views/WorkOutsView.vue";
import NutritionPlansView from "../views/NutritionPlansView.vue";
import StatisticsView from "../views/StatisticsView.vue";
import TrainingsView from "../views/TrainingsView.vue";
import NutritionPlan from "../views/NutritionPlan.vue";
import CreateNutritionPlan from "../views/CreateNutritionPlan.vue";
import UpdateNutritionPlan from "../views/UpdateNutritionPlan.vue";
import { useUserStore } from "../store/userStore";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    meta: { layout: "no-sidebar" },
    redirect: "/login",
  },
  {
    path: "/login",
    name: "login",
    meta: { layout: "no-sidebar" },
    component: LogIn,
  },
  {
    path: "/signup",
    name: "signup",
    meta: { layout: "no-sidebar" },
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
    path: "/nutrition/:id",
    name: "nutritionPlan",
    component: NutritionPlan,
  },
  {
    path: "/create_nutrition",
    name: "createNutritionPlan",
    component: CreateNutritionPlan,
  },
  {
    path: "/update_nutrition/:id",
    name: "updateNutritionPlan",
    component: UpdateNutritionPlan,
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
    path: "/trainings",
    name: "trainings",
    component: TrainingsView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from) => {
  const userStore = useUserStore();
  if (
    // make sure the user is authenticated
    !userStore.isAuthenticated &&
    // ❗️ Avoid an infinite redirect
    to.name !== "login"
  ) {
    // redirect the user to the login page
    return { name: "login" };
  }
});
export default router;
