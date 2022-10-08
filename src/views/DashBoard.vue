<script setup lang="ts">
import { ref } from "vue";

import { useToast } from "primevue/usetoast";

// import { useUserStore } from "../store/userStore";

// const userStore = useUserStore();
</script>

<template>
  <div
    class="boxselect flex grid justify-content-center gap-3 p-3 m-0 bg-white w-100 h-screen"
  >
    <router-link
      to="/nutrition"
      class="boxselect flex align-items-center justify-content-center col-5 font-bold border-round-xl no-underline text-color"
      style="
        background-image: url('../assets/images/pexels-trang-doan-1092730.jpg');
        background-size: cover;
        background-repeat: no-repeat;
        background-position-x: center;
        background-position-y: center;
        overflow: hidden;
      "
    >
      <div class="card bg-white border-round p-1">
        <h2>Planes nutricionales</h2>
      </div>
    </router-link>
    <router-link
      to="/trainings"
      class="boxselect flex align-items-center justify-content-center col-5 font-bold border-round-xl no-underline text-color"
      style="
        background-image: url('../assets/images/pexels-tima-miroshnichenko-6389075.jpg');
        background-size: cover;
        background-repeat: no-repeat;
        background-position-x: center;
        background-position-y: center;
        overflow: hidden;
      "
    >
      <div class="card bg-white border-round p-1">
        <h2>Entrenamientos</h2>
      </div>
    </router-link>

    <router-link
      to="/workouts"
      class="boxselect flex align-items-center justify-content-center col-5 font-bold border-round-xl no-underline text-color"
      style="
        background-image: url('../assets/images/pexels-li-sun-2294361.jpg');
        background-size: cover;
        background-repeat: no-repeat;
        background-position-x: center;
        background-position-y: center;
        overflow: hidden;
      "
    >
      <div class="card bg-white border-round p-1">
        <h2>Ejercicios</h2>
      </div>
    </router-link>
    <router-link
      to="/statistics"
      class="boxselect flex align-items-center justify-content-center col-5 font-bold border-round-xl no-underline text-color"
      style="
        background-image: url('../assets/images/pexels-ds-stories-6005255.jpg');
        background-size: cover;
        background-repeat: no-repeat;
        background-position-x: center;
        background-position-y: center;
        overflow: hidden;
      "
    >
      <div class="card bg-white border-round p-1">
        <h2>Estadísticas</h2>
      </div>
    </router-link>
  </div>
</template>

<style lang="scss">
.boxselect:hover {
  box-shadow: inset 0 0 1rem white;
}
.menuelement:hover {
  box-shadow: inset 0 0 1rem #00eb9a;
}
</style>
