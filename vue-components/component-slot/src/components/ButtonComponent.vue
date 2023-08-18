<script setup>
// defineProps(["clickHandler", "label"]);
defineProps(["clickHandler"]);
</script>
<template>
  <button
    @click="clickHandler()"
    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
  >
    <slot>Click Me</slot>
  </button>
</template>
