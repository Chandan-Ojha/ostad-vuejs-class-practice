<script setup>
import { ref, reactive, provide } from "vue";
import ParentComponent from "./components/ParentComponent.vue";
import { ydata } from "./data/ydata";
const msg = ref("Hello World");
const data = reactive({
  message: "Hello World",
  count: 0,
  increase() {
    this.count++;
  },
  decrease() {
    this.count--;
  },
});

provide("mydata", data);
provide("message", msg); //register data to be available to all child components
</script>

<template>
  <h2 class="my-10 text-2xl">Prop Drilling</h2>
  <p class="text-red-500 my-10">{{ data.message }} | {{ data.count }}</p>
  <p class="text-red-500 my-10">
    Ydata {{ ydata.message }} | {{ ydata.count }}
  </p>
  <ParentComponent />
</template>
