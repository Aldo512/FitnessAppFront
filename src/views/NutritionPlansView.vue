<script setup lang="ts">
import authClient from "@/services/AuthClient";
import { nutritionPlans } from "@/types/dataTypes";
import { onBeforeMount, ref } from "vue";
import { useNutritionStore } from "../store/nutritionStore";
import router from "@/router";
import Button from "primevue/button";
import Toolbar from "primevue/toolbar";
import EmptyPage from "@/components/EmptyPage.vue";

const nutritionStore = useNutritionStore();
const nutritionData = ref<nutritionPlans[]>([]);
const getData = () => {
  if (nutritionStore.getNutritionPlansData.length) {
    nutritionData.value = nutritionStore.getNutritionPlansData;
  } else {
    return authClient.nutritionPlans().then((response) => {
      nutritionStore.setNutritionPlansData(response.data);
      console.table(nutritionStore.getNutritionPlansData);
      return (nutritionData.value = response.data);
    });
  }
};
const tests = (something: any) => {
  router.push("nutrition/" + something);
};

onBeforeMount(getData);
</script>

<template>
  <Toolbar>
    <template #start>
      <Button
        @click="router.push({ name: 'createNutritionPlan' })"
        label="New"
        icon="pi
      pi-plus"
        class="mr-2"
      />
      <i class="pi pi-bars p-toolbar-separator mr-2" />
    </template>

    <template #end>
      <Button icon="pi pi-search" class="mr-2" />
      <Button icon="pi pi-calendar" class="p-button-success mr-2" />
    </template>
  </Toolbar>
  <section id="nutritionPlans" class="card">
    <div
      class="flex flex-wrap card-container blue-container grid justify-content-center pt-8"
      v-if="nutritionData.length"
    >
      <div
        v-for="plan in nutritionData"
        :id="'plan-' + plan.id"
        @click="tests(plan.id)"
        :key="plan.id"
        class="flex bg-white m-2 border-round col-12 h-15rem card plans"
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
    <div v-else><EmptyPage /></div>
  </section>
</template>

<style scoped>
.plans:hover {
  transform: scale(1.01);
}
</style>
