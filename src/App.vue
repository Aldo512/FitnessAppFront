<script setup lang="ts">
import Toast from "primevue/toast";
</script>

<template>
  <div id="app" class="relative h-screen col-8 col-offset-2 p-0">
    <Toast />
    <router-view />
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
  background-image: linear-gradient(
    to bottom right,
    $primary-color,
    $secondary-color
  );
  height: 100vh;
}
</style>
