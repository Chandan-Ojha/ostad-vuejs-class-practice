//two way data binding and v-model
<script setup>
import { ref, computed } from "vue";
const age = ref(0);

function getAgeLabel() {
  if (age.value == 0) {
    return "Not Born Yet";
  } else if (age.value <= 5) {
    return "Toddler";
  } else if (age.value <= 12) {
    return "Kid";
  } else if (age.value <= 18) {
    return "Teenager";
  } else {
    return "Senior";
  }
}

// const ageLabel = computed(getAgeLabel);

// const ageLabel = computed(() => {
//   if (age.value == 0) {
//     return "Not Born Yet";
//   } else if (age.value <= 5) {
//     return "Toddler";
//   } else if (age.value <= 12) {
//     return "Kid";
//   } else if (age.value <= 18) {
//     return "Teenager";
//   } else {
//     return "Senior";
//   }
// });
</script>

<template>
  <section class="mx-auto container">
    <h1 class="text-2xl mb-10">Vue Form</h1>
    <p class="pb-5">Your Age: {{ age }}</p>
    <p>
      Your Age:
      <input class="p-5" v-model="age" />
    </p>
    <P>You are {{ getAgeLabel() }}</P>
  </section>
</template>

<style scoped></style>
