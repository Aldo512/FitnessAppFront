import axios from "axios";
import store from "@/store";
import { newUser, loginUser } from "@/types/userTypes";
import { newNutritionPlan, nutritionPlans } from "@/types/dataTypes";

export const authClient = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  withCredentials: true, // required to handle the CSRF token
});

/*
 * Add a response interceptor
 */
authClient.interceptors.response.use(
  (response) => {
    return response;
  },
  function (error) {
    if (
      error.response &&
      [401, 419].includes(error.response.status) &&
      store.getters["auth/authUser"] &&
      !store.getters["auth/guest"]
    ) {
      store.dispatch("auth/logout");
    }
    return Promise.reject(error);
  }
);

export default {
  async login(payload: loginUser) {
    await authClient.get("/sanctum/csrf-cookie");
    return authClient.post("/login", payload);
  },
  logout() {
    return authClient.post("/logout");
  },
  async forgotPassword(payload: string) {
    await authClient.get("/sanctum/csrf-cookie");
    return authClient.post("/forgot-password", payload);
  },
  getAuthUser() {
    return authClient.get("/api/users/auth");
  },
  async resetPassword(payload: string) {
    await authClient.get("/sanctum/csrf-cookie");
    return authClient.post("/reset-password", payload);
  },
  updatePassword(payload: string) {
    return authClient.put("/user/password", payload);
  },
  async registerUser(payload: newUser) {
    await authClient.get("/sanctum/csrf-cookie");
    return authClient.post("/register", payload);
  },
  sendVerification(payload: string) {
    return authClient.post("/email/verification-notification", payload);
  },
  updateUser(payload: string) {
    return authClient.put("/user/profile-information", payload);
  },
  async nutritionPlans() {
    await authClient.get("/sanctum/csrf-cookie");
    return authClient.get("/api/nutrition_plan");
  },
  async createNutritionPlan(payload: newNutritionPlan) {
    await authClient.get("/sanctum/csrf-cookie");
    return authClient.post("/api/nutrition_plan", payload);
  },
};
