<script setup lang="ts">
// import { useEventStore } from "../store/eventStore";
// import { useUserStore } from "../store/userStore";
import { ref } from "vue";
import { useRouter } from "vue-router";
import Button from "primevue/button";
import Password from "primevue/password";
import InputText from "primevue/inputtext";
import authClient from "@/services/AuthClient";

// const eventStore = useEventStore();
// const userStore = useUserStore();
const router = useRouter();
// interface Props {
//   initialCount?: number;
//   test1?: number;
//   test2?: number;
//   email: string;
// }

// const props = withDefaults(defineProps<Props>(), {
//   initialCount: 0,
//   test1: 1,
//   test2: 22,
// });
const email = ref<string>("");
const password = ref<string>("");

const signup = () => {
  router.push("/signup");
};

const login = async () => {
  return authClient
    .login({ email: email.value, password: password.value })
    .then((response) => console.log(response));
};
</script>

<template>
  <div
    class="bg-no-repeat w-full h-full p-0 m-0 bg-center grid"
    style="
      background-image: url('../assets/images/pexels-mister-mister-3490348.jpg');
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
          <InputText type="email" v-model="email" />
        </div>
      </div>
      <div class="field grid">
        <label for="lastname3" class="col-3 col-offset-2">Password</label>
        <div class="col-3">
          <Password :feedback="false" v-model="password" />
        </div>
      </div>
      <Button class="col-2 mt-2" label="Login" @click="login" />
      <div class="col-4"></div>
      <Button
        class="p-button-success col-2"
        label="Register"
        @click="signup()"
      />
      <h4 class="pt-5">I'm not a robot... Yet.</h4>
    </form>
  </div>
</template>
