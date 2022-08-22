import { defineStore } from "pinia";

export const useUserStore = defineStore("UserStore", {
  state: () => ({
    user: "",
    authenticated: "",
    nowLoading: false,
  }),
  getters: {
    firstName: (state) => state.user,
    isAuthenticated: (state) => state.authenticated,
    isLoading: (state) => state.nowLoading,
  },
  actions: {
    setUser(payload: string) {
      this.user = payload;
    },
    authenticateUser(payload: string) {
      this.authenticated = payload;
    },
    toggleLoading(payload: boolean) {
      this.nowLoading = payload;
    },
  },
});
