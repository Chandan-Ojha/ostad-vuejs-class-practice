<script setup>
import { ref, computed } from "vue";
const fruitsWithPrice = [
  { name: "Apple", price: 1.2 },
  { name: "Orange", price: 1.4 },
  { name: "Banana", price: 1.6 },
  { name: "Mango", price: 1.8 },
  { name: "Pineapple", price: 2.1 },
];
const index = ref(0);
// const currentFruit = ref(fruitsWithPrice[index.value]);

const currentFruit = computed(() => fruitsWithPrice[index.value]);

//change the value of index
const next = () => {
  index.value = (index.value + 1) % fruitsWithPrice.length;
  //   currentFruit.value = fruitsWithPrice[index.value];
};

//calculate total fruit price
const totalPrice = computed(() => {
  let total = 0;
  for (const fruit of fruitsWithPrice) {
    total += fruit.price;
  }
  return total.toFixed(2);
});
</script>
<template>
  <p class="mb-2">Index: {{ index }}</p>
  <p class="mb-2">Fruit: {{ currentFruit.name }}</p>
  <!-- <p class="mb-2">Fruit: {{ fruitsWithPrice[index].name }}</p> -->
  <p class="mb-2">Price: {{ currentFruit.price }}</p>
  <p class="mb-2">Total Price: {{ totalPrice }}</p>
  <!-- <p class="mb-2">Price: {{ fruitsWithPrice[index].price }}</p> -->
  <p class="mt-5">
    <button
      @click="next()"
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      Next Fruit
    </button>
  </p>
</template>
