<script setup lang="ts">
import { useEventStore } from "../store/eventStore";
import { useUserStore } from "../store/userStore";
import { ref } from "vue";
import Button from "primevue/button";
import Password from "primevue/password";
import InputText from "primevue/inputtext";

const eventStore = useEventStore();
const userStore = useUserStore();
interface Props {
  initialCount?: number;
  test1?: number;
  test2?: number;
}

const props = withDefaults(defineProps<Props>(), {
  initialCount: 0,
  test1: 1,
  test2: 22,
});
const a = ref(props.test2);
</script>

<template>
  <div
    class="bg-no-repeat w-full h-full bg-center grid"
    style="
      background-image: url('../assets/pexels-victor-freitas-841130.jpg');
      background-size: 100%;
    "
  >
    <div class="col-6 col-offset-3"></div>
    <form
      class="bg-white border-bluegray-500 border-3 border-round-md col-6 col-offset-3 h-30rem"
    >
      <h1 class="p-3">Create a new account</h1>
      <div class="field grid">
        <label for="firstname3" class="col-3 col-offset-2">E-mail</label>
        <div class="col-3">
          <InputText type="email" />
        </div>
      </div>
      <div class="field grid">
        <label for="lastname3" class="col-3 col-offset-2">Password</label>
        <div class="col-3">
          <Password />
        </div>
      </div>
      <div class="field grid">
        <label for="lastname3" class="col-3 col-offset-2"
          >Repeat password</label
        >
        <div class="col-3">
          <Password :feedback="false" />
        </div>
      </div>
      <Button class="p-button-success col-2" label="Register" />
      <div class="col-4"></div>
      <Button class="col-2 mt-2" label="Login" />
      <h4 class="pt-5">I'm not a robot... Yet.</h4>
    </form>
  </div>
</template>
