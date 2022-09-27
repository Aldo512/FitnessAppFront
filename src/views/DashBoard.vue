<script setup lang="ts">
import Sidebar from "primevue/sidebar";
import { ref } from "vue";
import Button from "primevue/button";
import authClient from "@/services/AuthClient";
import { useToast } from "primevue/usetoast";
import router from "@/router";
import { computed } from "@vue/reactivity";
import { useMouse } from "@/services/MouseTrack";
// import { useUserStore } from "../store/userStore";

// const userStore = useUserStore();
const toast = useToast();
const { x, y } = useMouse();
const sidePanel = computed(() => {
  return x.value < 320;
});
const logOut = () => {
  return authClient.logout().then((response) => {
    router.push({ name: "login" });
    console.log(response);
    toast.add({
      severity: "info",
      summary: "Logged Out",
      detail: "Logged out successfully",
      life: 3000,
    });
  });
};
</script>

<template>
  <Sidebar :visible="sidePanel" :showCloseIcon="false">
    <div class="card">
      <div class="flex flex-column card-container green-container">
        <router-link
          to="/nutrition"
          class="boxselect flex align-items-center justify-content-center font-bold border-round-xl no-underline text-color h-4rem menuelement"
        >
          Planes nutricionales
        </router-link>
        <router-link
          to="/workouts"
          class="boxselect flex align-items-center justify-content-center font-bold border-round-xl no-underline text-color h-4rem menuelement"
        >
          Ejercicios
        </router-link>
        <router-link
          to="/trainings"
          class="boxselect flex align-items-center justify-content-center font-bold border-round-xl no-underline text-color h-4rem menuelement"
        >
          Entrenamientos
        </router-link>
        <router-link
          to="/statistics"
          class="boxselect flex align-items-center justify-content-center font-bold border-round-xl no-underline text-color h-4rem menuelement"
        >
          Estadísticas
        </router-link>
        <div
          class="flex align-items-center justify-content-center h-4rem font-bold"
        ></div>
        <div
          class="flex align-items-center justify-content-center h-4rem font-bold"
        >
          <Button label="Settings" @click="logOut()" class="p-button-info" />
        </div>
        <div
          class="flex align-items-center justify-content-center h-4rem font-bold"
        >
          <Button label="LogOut" @click="logOut()" class="p-button-warning" />
        </div>
      </div>
    </div>
  </Sidebar>

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
