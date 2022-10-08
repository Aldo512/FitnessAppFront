<script setup lang="ts">
import { computed } from "@vue/reactivity";
import Toast from "primevue/toast";
import { useRoute } from "vue-router";
import Image from "primevue/image";

const route = useRoute();

const layout = computed(() => {
  let default_layout = "default-sidebar";
  return (route.meta.layout || default_layout) + "-layout";
});
</script>

<template>
  <div id="app" class="relative h-screen col-8 col-offset-2 p-0">
    <Image
      src="../assets/images/Fitness App/Recurso 2FA-negro.png"
      alt="FitnessApp logo"
      imageStyle="position: fixed; left: 3%; top:3%; width: 7%"
      class="flex align-items-center justify-content-center"
    />
    <Toast />
    <component :is="layout">
      <router-view />
    </component>
    <footer
      class="relative bottom-0 flex align-items-center justify-content-center col-12"
    >
      Developed by Aldo Lotito using Vue3 - Pinia - PrimeVue - PrimeFlex
    </footer>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

$primary-color: #3af0aa;
$secondary-color: #3cfa7b;

html {
  background-color: #36cfad;
  // background-image: linear-gradient(
  //   to bottom right,
  //   $primary-color,
  //   $secondary-color
  // );
  height: 100vh;
}

@import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");

* {
  font-family: "Montserrat", sans-serif;
}
</style>
