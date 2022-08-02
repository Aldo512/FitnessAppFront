import { defineStore } from "pinia";

export const useUserStore = defineStore("UserStore", {
  state: () => ({
    user: "Laura Mesa",
  }),
  getters: {
    firstName: (state) => state.user.split(" ")[0],
  },
});
