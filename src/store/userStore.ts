import { defineStore } from "pinia";

export const useUserStore = defineStore("UserStore", {
  state: () => ({
    user: "",
    authenticated: false,
    nowLoading: false,
  }),
  getters: {
    firstName: (state) => state.user,
    isAuthenticated: (state) => {
      return state.authenticated || localStorage.getItem("isAuthenticated");
    },
    isLoading: (state) => state.nowLoading,
  },
  actions: {
    setUser(payload: string) {
      this.user = payload;
    },
    authenticateUser() {
      this.authenticated = true;
      localStorage.setItem("isAuthenticated", "true");
    },
    toggleLoading(payload: boolean) {
      this.nowLoading = payload;
    },
    logOut() {
      this.authenticated = false;
      localStorage.setItem("isAuthenticated", "");
    },
  },
});
