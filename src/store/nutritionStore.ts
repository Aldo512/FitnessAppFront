import { nutritionPlans } from "@/types/dataTypes";
import { defineStore } from "pinia";

export const useNutritionStore = defineStore("NutritionStore", {
  state: () => ({
    nutritionPlansData: [] as nutritionPlans[],
  }),
  getters: {
    getNutritionPlansData: (state): nutritionPlans[] =>
      state.nutritionPlansData,
  },
  actions: {
    setNutritionPlansData(payload: []) {
      this.nutritionPlansData = payload;
    },
    addNutritionPlanData(payload: nutritionPlans) {
      this.nutritionPlansData.push(payload);
    },
    deleteNutritionPlan(payload: number) {
      this.nutritionPlansData.filter((obj, index) => {
        if (obj.id === payload) {
          this.nutritionPlansData.splice(index, 1);
        }
      });
    },
  },
});
