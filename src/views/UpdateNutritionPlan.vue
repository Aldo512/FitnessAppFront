<script setup lang="ts">
import Editor from "primevue/editor";
import Button from "primevue/button";
import { nutritionPlans } from "@/types/dataTypes";
import { onBeforeMount, ref } from "vue";
import authClient from "@/services/AuthClient";
import InputText from "primevue/inputtext";
import Textarea from "primevue/textarea";
import { useRoute } from "vue-router";
import router from "@/router";

const route = useRoute();

const nutritionData = ref<nutritionPlans>({
  id: 0,
  title: "",
  description: "",
  body: "",
});
const loadData = () => {
  if (route.params.id[0]) {
    authClient
      .getNutritionPlan(parseInt(route.params.id[0]))
      .then((response) => {
        nutritionData.value = response.data;
      });
  }
};

const updatePlan = (plan: nutritionPlans) => {
  plan.body = plan.body.replaceAll(
    "<img",
    '<img style="max-width: 100%; max-height: 100%"'
  );
  authClient.updateNutritionPlan(plan).then(() => {
    router.push("/nutrition/" + nutritionData.value.id);
  });
};

onBeforeMount(loadData);
</script>
<template>
  <section>
    <Button
      class="flex flexbox col-4 col-offset-4"
      @click="updatePlan(nutritionData)"
      label="Update Plan"
    />
    <div class="flex">
      <label for="title" class="col-2 col-offset-3 p-invalid">Title</label>
      <InputText type="text" class="col-4" v-model="nutritionData.title" />
    </div>
    <div class="flex">
      <label for="description" class="col-2 col-offset-3 p-invalid"
        >Description</label
      >
      <Textarea
        v-model="nutritionData.description"
        class="col-4"
        rows="5"
        cols="30"
        style="resize: none"
      />
    </div>
    <Editor
      v-model="nutritionData.body"
      editorStyle="height: 80vh"
      placeholder="Write your post here..."
      updatecon
    />
  </section>
</template>
