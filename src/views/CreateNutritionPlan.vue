<script setup lang="ts">
import Editor from "primevue/editor";
import Button from "primevue/button";
import { newNutritionPlan } from "@/types/dataTypes";
import { ref } from "vue";
import authClient from "@/services/AuthClient";
import InputText from "primevue/inputtext";

const newPlan = ref<newNutritionPlan>({
  title: "",
  description: "",
  body: "",
});

const createPlan = (plan: newNutritionPlan) => {
  plan.body = plan.body.replaceAll(
    "<img",
    '<img style="max-width: 100%; max-height: 100%"'
  );
  authClient.createNutritionPlan(plan).then((response) => {
    console.log(response);
  });
};
</script>
<template>
  <section>
    <InputText type="text" v-model="newPlan.title" />
    <Button class="flexbox" @click="createPlan(newPlan)" label="Create Plan" />
    <InputText type="text" v-model="newPlan.description" />
    <Editor
      v-model="newPlan.body"
      editorStyle="height: 80vh"
      placeholder="Write your post here..."
      updatecon
    />
  </section>
</template>
