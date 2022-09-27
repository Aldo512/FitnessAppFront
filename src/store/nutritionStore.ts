import { nutritionPlans } from "@/types/dataTypes";
import { defineStore } from "pinia";

export const useNutritionStore = defineStore("NutritionStore", {
  state: () => ({
    nutritionPlansData: [] as nutritionPlans[],
  }),
  getters: {
    getNutritionPlansData: (state) => state.nutritionPlansData,
  },
  actions: {
    setNutritionPlansData(payload: []) {
      this.nutritionPlansData = payload;
    },
    addNutritionPlanData(payload: nutritionPlans) {
      this.nutritionPlansData.push(payload);
    },
  },
});
