<script setup>
import { ref, reactive } from "vue";

const joke = reactive({
  value: "Chuck Norris can do a wheelie on a unicycle.",
});

function getJoke() {
  fetch("https://api.chucknorris.io/jokes/random")
    .then((response) => response.json())
    .then((data) => {
      joke.value = data.value;
    });
}
</script>

<template>
  <section class="flex flex-col items-center w-[500px]">
    <p>
      {{ joke.value }}
    </p>
    <button
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-48 mt-5"
      @click="getJoke()"
    >
      Get a new joke
    </button>
  </section>
</template>

<style scoped></style>
