<script setup lang="ts">
// import { useEventStore } from "../store/eventStore";
import { useUserStore } from "../store/userStore";
import { ref, computed } from "vue";
import Button from "primevue/button";
import Password from "primevue/password";
import InputText from "primevue/inputtext";
import authClient from "@/services/AuthClient";
import { loginUser } from "@/types/userTypes";
import router from "@/router";

// const eventStore = useEventStore();
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
const userStore = useUserStore();
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
const passwordError = computed(() => {
  if (password.value.length >= 1) {
    return true;
  } else {
    return false;
  }
});
const email = ref<string>("");
const password = ref<string>("");
const isLoading = computed(() => {
  return userStore.isLoading;
});
const login = async () => {
  userStore.toggleLoading(true);
  var userData: loginUser = {
    email: email.value,
    password: password.value,
  };
  return authClient
    .login(userData)
    .then((response) => {
      userStore.toggleLoading(false);
      let user: string = response.data.user.name
        ? response.data.user.name
        : response.data.name;
      let token: string = response.data.token ? response.data.token : "";
      userStore.setUser(user);
      userStore.authenticateUser(token);
      router.push({ name: "dashboard" });
    })
    .catch((error) => {
      console.log(error);
    });
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
        <label for="firstname3" class="col-3 col-offset-2 p-invalid"
          >E-mail</label
        >
        <div class="col-4">
          <InputText
            :class="[emailIsError ? emailError : '']"
            type="email"
            v-model="email"
            @keydown.enter="login"
            :disabled="isLoading"
          />
          <small v-if="emailIsError" id="username2-help" class="p-error"
            >Email must be in the format 'example@example.com'</small
          >
        </div>
      </div>
      <div class="field grid">
        <label for="lastname3" class="col-3 col-offset-2">Password</label>
        <div class="col-4">
          <Password
            :feedback="false"
            v-model="password"
            @keydown.enter="login"
            :disabled="isLoading"
          />
          <small v-if="passwordError" id="username2-help" class="p-error"
            >Password field cannot be empty</small
          >
        </div>
      </div>
      <Button
        class="p-button-md"
        label="Login"
        @click="login"
        :loading="isLoading"
      />
      <div class="col-4"></div>
      <router-link to="/signup"
        ><Button
          class="p-button-success p-button-md p-button-link"
          label="Register"
      /></router-link>
      <h4 class="pt-5">I'm not a robot... Yet.</h4>
    </form>
  </div>
</template>
