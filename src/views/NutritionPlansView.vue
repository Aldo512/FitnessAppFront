<script setup lang="ts">
import authClient from "@/services/AuthClient";
import { nutritionPlans, newNutritionPlan } from "@/types/dataTypes";
import { onBeforeMount, ref } from "vue";
import { useNutritionStore } from "../store/nutritionStore";
import router from "@/router";
import Button from "primevue/button";
import Toolbar from "primevue/toolbar";
import Dialog from "primevue/dialog";
import InputText from "primevue/inputtext";
import Textarea from "primevue/textarea";

const nutritionStore = useNutritionStore();
const nutritionData = ref<nutritionPlans[]>([]);
const display = ref(false);
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
const newPlan = ref<newNutritionPlan>({
  title: "",
  description: "",
  body: "",
});
const createPlan = (plan: newNutritionPlan) => {
  authClient.createNutritionPlan(plan).then((response) => {
    console.log(response);
  });
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
      <Button label="Upload" icon="pi pi-upload" class="p-button-success" />
      <i class="pi pi-bars p-toolbar-separator mr-2" />
      <SplitButton
        label="Save"
        icon="pi pi-check"
        class="p-button-warning"
      ></SplitButton>
    </template>

    <template #end>
      <Button icon="pi pi-search" class="mr-2" />
      <Button icon="pi pi-calendar" class="p-button-success mr-2" />
      <Button icon="pi pi-times" class="p-button-danger" />
    </template>
  </Toolbar>
  <!--  <Dialog
    header="Create new Nutrition Plan"
    class="h-6 w-6"
    v-model:visible="display"
  >
    <div class="field grid">
      <label for="title" class="col-3 col-offset-1 p-invalid">Title</label>
      <InputText type="text" class="col-6" v-model="newPlan.title" autofocus />
    </div>
    <div class="field grid">
      <label for="firstname3" class="col-3 col-offset-1 p-invalid">Body</label>
      <Textarea
        v-model="newPlan.body"
        rows="5"
        cols="60"
        style="resize: none"
      />
    </div>

    <Button
      @click="createPlan(newPlan)"
      icon="pi pi-check"
      label="Confirm"
    ></Button>
  </Dialog>-->
  <section id="nutritionPlans" class="card">
    <div
      class="flex flex-wrap card-container blue-container grid justify-content-center pt-8"
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
  </section>
</template>

<style scoped>
.plans:hover {
  transform: scale(1.01);
}
</style>
<style module>
.red {
  color: red;
}
</style>
