<script setup>
import { inject } from "vue";
import ChildComponent from "./ChildComponent.vue";
import ChildComponentX from "./ChildComponentX.vue";

const data = inject("mydata"); //inject data from parent component
</script>
<template>
  <h2>Parent Component</h2>
  <p class="my-2 text-green-700">{{ data.message }} | {{ data.count }}</p>
  <p>
    <ChildComponent />
  </p>
  <p>
    <ChildComponentX />
  </p>
</template>
