<script setup lang="ts">
// import { useEventStore } from "../store/eventStore";
import { useUserStore } from "../store/userStore";
// import { useRouter } from "vue-router";
import { ref, computed } from "vue";
import Button from "primevue/button";
import Password from "primevue/password";
import InputText from "primevue/inputtext";
import authClient from "@/services/AuthClient";
import type { newUser } from "@/types/userTypes";
import router from "@/router";
// const eventStore = useEventStore();
// const userStore = useUserStore();
// const router = useRouter();
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
const emailError = ref<string>("p-invalid");
const emailIsError = computed(() => {
  if (
    email.value.length > 0 &&
    !email.value.match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
  ) {
    return true;
  } else {
    return false;
  }
});
const userStore = useUserStore();
const firstName = ref<string>("");
const lastName = ref<string>("");
const email = ref<string>("");
const password = ref<string>("");
const passwordConfirmation = ref<string>("");
const isLoading = computed(() => {
  return userStore.isLoading;
});

const register = () => {
  userStore.toggleLoading(true);
  const userData: newUser = {
    name: `${firstName.value} ${lastName.value}`,
    email: email.value,
    password: password.value,
    password_confirmation: passwordConfirmation.value,
  };
  return authClient.registerUser(userData).then(() => {
    userStore.toggleLoading(false);
    router.push({ name: "login" });
  });
};
</script>

<template>
  <div
    class="bg-no-repeat w-full h-full bg-center grid p-0 m-0"
    style="
      background-image: url('../assets/images/pexels-victor-freitas-841130.jpg');
      background-size: 150%;
    "
  >
    <div class="col-6 col-offset-3"></div>
    <form
      class="bg-white border-bluegray-500 border-3 border-round-md col-6 col-offset-3 h-auto pt-8"
    >
      <h1 class="p-3">Create a new account</h1>
      <div class="field grid">
        <label for="name" class="col-3 col-offset-2">Name</label>
        <div class="col-3">
          <InputText
            type="text"
            id="name"
            v-model="firstName"
            :disabled="isLoading"
          />
        </div>
      </div>
      <div class="field grid">
        <label for="lastName" class="col-3 col-offset-2">Last name</label>
        <div class="col-3">
          <InputText
            type="text"
            id="lastName"
            v-model="lastName"
            :disabled="isLoading"
          />
        </div>
      </div>
      <div class="field grid">
        <label for="e-mail" class="col-3 col-offset-2">E-mail</label>
        <div class="col-3">
          <InputText
            type="email"
            id="e-mail"
            v-model="email"
            :disabled="isLoading"
            :class="[emailIsError ? emailError : '']"
            v-tooltip.focus="'example@example.com'"
          />
        </div>
      </div>
      <div class="field grid">
        <label for="password" class="col-3 col-offset-2">Password</label>
        <div class="col-3">
          <Password id="password" v-model="password" :disabled="isLoading" />
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
            @keydown.enter="register"
            :disabled="isLoading"
          />
        </div>
      </div>
      <Button
        class="p-button-success p-button-md"
        label="Register"
        @click="register"
        :loading="isLoading"
      />
      <div class="col-4"></div>
      <router-link to="/login"
        ><Button class="p-button-md p-button-link" label="Login"
      /></router-link>
      <h4 class="pt-5">I'm not a robot... Yet.</h4>
    </form>
    <div class="col-6 col-offset-3"></div>
  </div>
</template>
