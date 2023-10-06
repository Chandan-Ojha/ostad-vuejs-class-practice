<script setup>
import { shallowRef } from "vue";
import ComponentA from "./components/ComponentA.vue";
import ComponentB from "./components/ComponentB.vue";

const activeComponent = shallowRef(ComponentA);

function setAActive() {
  activeComponent.value = ComponentA;
}

function setBActive() {
  activeComponent.value = ComponentB;
}
</script>

<template>
  <p>
    <component :is="activeComponent" />
  </p>
  <button
    @click="setAActive()"
    class="mt-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
  >
    Show A
  </button>
  <button
    @click="setBActive()"
    class="ml-5 mt-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
  >
    Show B
  </button>
</template>

<style scoped></style>
