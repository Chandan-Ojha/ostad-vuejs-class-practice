<script setup>
import { ref, watch } from "vue";

const fruitsWithPrice = ref([
  { name: "Apple", price: 1.2 },
  { name: "Orange", price: 0.95 },
  { name: "Banana", price: 2.3 },
  { name: "Mango", price: 3.5 },
  { name: "Pineapple", price: 4.0 },
]);

const totalPrice = ref(0);
// for (let i = 0; i < fruitsWithPrice.value.length; i++) {
//   totalPrice.value += fruitsWithPrice.value[i].price;
// }
// totalPrice.value = totalPrice.value.toFixed(2);

watch(
  fruitsWithPrice,
  (newVal, oldVal) => {
    let total = 0;
    for (let i = 0; i < newVal.length; i++) {
      total += newVal[i].price * 1;
    }
    totalPrice.value = total.toFixed(2);
  },
  { deep: true, immediate: true }
);
</script>

<template>
  <p>{{ fruitsWithPrice }}</p>
  <p class="mt-5">Total Price: {{ totalPrice }}</p>
  <p class="mt-5">
    <button
      @click="fruitsWithPrice.pop()"
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      Remove Fruit
    </button>
  </p>
</template>

<style scoped></style>
