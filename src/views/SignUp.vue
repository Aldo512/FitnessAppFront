<script setup lang="ts">
// import { useEventStore } from "../store/eventStore";
// import { useUserStore } from "../store/userStore";
import { useRouter } from "vue-router";
import { ref } from "vue";
import Button from "primevue/button";
import Password from "primevue/password";
import InputText from "primevue/inputtext";
import authClient from "@/services/AuthClient";
import type { newUser } from "@/types/userTypes";
// const eventStore = useEventStore();
// const userStore = useUserStore();
const router = useRouter();
// interface Props {
//   initialCount?: number;
//   test1?: number;
//   test2?: number;
// }

// const props = withDefaults(defineProps<Props>(), {
//   initialCount: 0,
//   test1: 1,
//   test2: 22,
// });

const firstName = ref<string>("");
const lastName = ref<string>("");
const email = ref<string>("");
const password = ref<string>("");
const passwordConfirmation = ref<string>("");

const register = () => {
  const userData: newUser = {
    name: `${firstName.value} ${lastName.value}`,
    email: email.value,
    password: password.value,
    password_confirmation: passwordConfirmation.value,
  };
  return authClient.registerUser(userData).then((response) => {
    console.log(response);
  });
};
const goLogin = () => {
  router.push("/");
};
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
        <label for="name" class="col-3 col-offset-2">Name</label>
        <div class="col-3">
          <InputText type="text" id="name" v-model="firstName" />
        </div>
      </div>
      <div class="field grid">
        <label for="lastName" class="col-3 col-offset-2">Last name</label>
        <div class="col-3">
          <InputText type="text" id="lastName" v-model="lastName" />
        </div>
      </div>
      <div class="field grid">
        <label for="e-mail" class="col-3 col-offset-2">E-mail</label>
        <div class="col-3">
          <InputText type="email" id="e-mail" v-model="email" />
        </div>
      </div>
      <div class="field grid">
        <label for="password" class="col-3 col-offset-2">Password</label>
        <div class="col-3">
          <Password id="password" v-model="password" />
        </div>
      </div>
      <div class="field grid">
        <label for="passwordConfirmation" class="col-3 col-offset-2"
          >Repeat password</label
        >
        <div class="col-3">
          <Password
            :feedback="false"
            id="passwordConfirmation"
            v-model="passwordConfirmation"
          />
        </div>
      </div>
      <Button
        class="p-button-success col-2"
        label="Register"
        @click="register"
      />
      <div class="col-4"></div>
      <Button class="col-2 mt-2" label="Login" />
      <h4 class="pt-5">I'm not a robot... Yet.</h4>
    </form>
  </div>
</template>
