<script setup lang="ts">
import { useEventStore } from "../store/eventStore";
import { useUserStore } from "../store/userStore";
import { ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import Button from "primevue/button";
import Password from "primevue/password";
import InputText from "primevue/inputtext";
import { ApiService } from "@/services/ApiService";

const eventStore = useEventStore();
const userStore = useUserStore();
const router = useRouter();
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

const goSignup = () => {
  router.push("/signup");
};
// const authClient = axios.create({
//   baseURL: process.env.VUE_APP_API_URL,
//   withCredentials: true, // required to handle the CSRF token
// });
const login = async () => {
  return ApiService.post(
    "/login",
    {
      email: "a2ssxesd@a2.com",
      password: "987654321",
    },
    {
      headers: {
        Accept: "application/json",
      },
    }
  );
};
</script>

<template>
  <div
    class="bg-no-repeat w-full h-full bg-center grid"
    style="
      background-image: url('../assets/images/pexels-victor-freitas-841130.jpg');
      background-size: 100%;
    "
  >
    <div class="col-6 col-offset-3"></div>
    <form
      class="bg-white border-bluegray-500 border-3 border-round-md col-6 col-offset-3 h-30rem"
    >
      <h1 class="p-3">Welcome to FitnessApp!</h1>
      <h3 class="pb-5">Please log-in to continue</h3>
      <div class="field grid">
        <label for="firstname3" class="col-3 col-offset-2">E-mail</label>
        <div class="col-3">
          <InputText type="email" />
        </div>
      </div>
      <div class="field grid">
        <label for="lastname3" class="col-3 col-offset-2">Password</label>
        <div class="col-3">
          <Password :feedback="false" />
        </div>
      </div>
      <Button class="col-2 mt-2" label="Login" />
      <div class="col-4"></div>
      <Button
        class="p-button-success col-2"
        label="Register"
        @click="login()"
      />
      <h4 class="pt-5">I'm not a robot... Yet.</h4>
    </form>
  </div>
</template>
