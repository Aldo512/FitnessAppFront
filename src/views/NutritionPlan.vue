<script setup lang="ts">
import { useRoute } from "vue-router";
import { useNutritionStore } from "../store/nutritionStore";
import authClient from "@/services/AuthClient";
import Button from "primevue/button";
import { nutritionPlans } from "@/types/dataTypes";
import { ref } from "vue";
import { useConfirm } from "primevue/useconfirm";
import ConfirmDialog from "primevue/confirmdialog";
import router from "@/router";

const nutritionStore = useNutritionStore();

const route = useRoute();
const nutritionData = ref<nutritionPlans>({
  id: 0,
  title: "",
  description: "",
  body: "",
});

const planId: number = parseInt(route.params.id[0]);
const deletePost = () => {
  nutritionStore.deleteNutritionPlan(planId);
  authClient.deleteNutritionPlan(planId);
  router.push("/nutrition");
};
const confirm = useConfirm();

const confirmDeletion = () => {
  confirm.require({
    message: "Are you sure you want to proceed?",
    header: "Confirmation",
    icon: "pi pi-exclamation-triangle",
    accept: () => {
      deletePost();
    },
  });
};
authClient.getNutritionPlan(planId).then((response) => {
  nutritionData.value = response.data;
});
</script>
<template>
  <section class="bg-white">
    <Button
      label="Update post"
      @click="router.push('/update_nutrition/' + route.params.id[0])"
      class="p-button-warning mr-2"
    />
    <Button
      label="Delete post"
      @click="confirmDeletion"
      class="p-button-danger ml-2"
    />
    <div
      class="flex flex-row flex-wrap card-container blue-container mt-5 pb-6"
    >
      <div
        class="flex align-items-center justify-content-center col-3"
        style="border-bottom: 1px solid gray"
      >
        Plan Category
      </div>
      <div
        class="flex align-items-center justify-content-center col-3"
        style="border-bottom: 1px solid gray"
      >
        Creator
      </div>
      <ConfirmDialog></ConfirmDialog>
      <div
        class="flex align-items-center justify-content-center col-3"
        style="border-bottom: 1px solid gray"
      >
        Publication date
      </div>
      <div
        class="flex align-items-center justify-content-center col-3"
        style="border-bottom: 1px solid gray"
      >
        Avg. Rating
      </div>
    </div>
  </section>
  <section class="bg-white h-auto p-5" style="min-height: 100vh">
    <h1 class="pb-5">{{ nutritionData.title }}</h1>
    <h2 class="pb-5">{{ nutritionData.description }}</h2>
    <hr class="mb-6" style="border-bottom: 1px solid gray" />
    <div v-show="nutritionData.body.length" v-html="nutritionData.body"></div>
  </section>
</template>
<style scoped></style>
