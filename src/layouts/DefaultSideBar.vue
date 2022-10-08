<script setup lang="ts">
import { computed } from "@vue/reactivity";
import Sidebar from "primevue/sidebar";
import { useMouse } from "@/services/MouseTrack";
import router from "@/router";
import Button from "primevue/button";
import authClient from "@/services/AuthClient";
import { useToast } from "primevue/usetoast";
import { useUserStore } from "@/store/userStore";
import Image from "primevue/image";

const userStore = useUserStore();
const { x, y } = useMouse();
const toast = useToast();
const sidePanel = computed(() => {
  return x.value < 320;
});
const logOut = () => {
  return authClient.logout().then((response) => {
    userStore.logOut();
    router.push({ name: "login" });
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
      <Image
        src="../assets/images/Fitness App/Recurso 2FA-negro.png"
        alt="FitnessApp logo"
        imageStyle="width: 50%"
        class="flex align-items-center justify-content-center"
      />
      <div class="flex flex-column card-container green-container">
        <router-link
          to="/dashboard"
          class="boxselect flex align-items-center justify-content-center font-bold border-round-xl no-underline text-color h-4rem menuelement"
        >
          DashBoard
        </router-link>
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
  <router-view />
</template>
