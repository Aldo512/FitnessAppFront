<script setup lang="ts">
import { ref } from "vue";
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
</script>

<template>
  <h1>Welcome to FitnessApp!</h1>
  <div class="field grid">
    <label for="firstname3" class="col-fixed" style="width: 100px"
      >First name
    </label>
    <div class="col">
      <input
        v-model="a"
        id="firstname3"
        type="text"
        class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary"
      />
    </div>
  </div>
  <div class="field grid">
    <label for="lastname3" class="col-fixed" style="width: 100px"
      >Lastname</label
    >
    <div class="col">
      <input
        id="lastname3"
        type="text"
        class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary"
      />
    </div>
  </div>
</template>
