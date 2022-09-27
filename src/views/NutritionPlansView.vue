<script setup lang="ts">
import authClient from "@/services/AuthClient";
import { nutritionPlans, newNutritionPlan } from "@/types/dataTypes";
import { onBeforeMount, ref } from "vue";
import { useNutritionStore } from "../store/nutritionStore";

const nutritionStore = useNutritionStore();
const nutritionData = ref<nutritionPlans[]>([]);
const getData = () => {
  return authClient.nutritionPlans().then((response) => {
    nutritionStore.setNutritionPlansData = response.data;
    return (nutritionData.value = response.data);
  });
};
const newPlan: newNutritionPlan = ref(
  title: "",
);
const createPlan = () => {
  authClient.createNutritionPlan(newPlan);
};
onBeforeMount(getData);
</script>

<template>
  <section id="nutritionPlans" class="card">
    <div
      class="flex flex-wrap card-container blue-container grid justify-content-center pt-8"
    >
      <div
        v-for="plan in nutritionData"
        :key="plan.id"
        class="flex bg-white m-2 border-round col-5 h-15rem card"
      >
        <div
          class="card-container h-full w-full border-solid border-1 border-green-500"
        >
          <div
            class="flex font-bold h-4rem col-12 border-green-500 align-items-center justify-content-center"
            style="border-bottom: 1px solid"
          >
            {{ plan.title }}
          </div>
          <div
            class="flex col-12 h-10rem align-items-center justify-content-center"
          >
            {{ plan.description }}
          </div>
        </div>
      </div>
    </div>
    <Button
      class="p-button-md"
      label="Login"
      @click="login"
      :loading="isLoading"
    />
  </section>
</template>

<style></style>
