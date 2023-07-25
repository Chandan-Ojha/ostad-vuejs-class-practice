<script setup>
import { ref } from "vue";
const location = "Dhaka";
const weather = ref("s");
</script>

<template>
  <section class="container mx-auto flex items-center flex-col">
    <h1 class="text-center text-2xl py-10">Logic in Vue.js</h1>
    <div class="w-1/3 bg-gray-200 p-10 flex items-center flex-col space-y-10">
      <h1 class="text-3xl">{{ location }}</h1>

      <!-- <div v-show="weather == 's'">
        <h2 class="text-2xl">Weather: Sunny</h2>
        <img id="sunny" class="w-32" src="https://creazilla-store.fra1.digitaloceanspaces.com/icons/7911203/weather-icon-md.png" alt="">
        document.getElementById('sunny').addEventListener('click',function(){
            alert("Sunny Weather")
        })
      </div> -->

      <template v-if="weather == 's'">
        <h2 class="text-2xl">Weather: Sunny</h2>
        <img
          id="sunny"
          class="w-32"
          src="https://creazilla-store.fra1.digitaloceanspaces.com/icons/7911203/weather-icon-md.png"
          alt=""
        />
      </template>

      <template v-if="weather == 'pc'">
        <h2 class="text-2xl">Weather: Partly Cloudy</h2>
        <img
          class="w-32"
          src="https://creazilla-store.fra1.digitaloceanspaces.com/icons/7912718/weather-icon-md.png"
          alt=""
        />
      </template>

      <template v-if="weather == 'r'">
        <h2 class="text-2xl">Weather: Rainy</h2>
        <img
          class="w-32"
          src="https://creazilla-store.fra1.digitaloceanspaces.com/icons/7913380/weather-icon-md.png"
          alt=""
        />
      </template>

      <template v-if="weather == 't'">
        <h2 class="text-2xl">Weather: Thunderstorm</h2>
        <img
          class="w-32"
          src="https://creazilla-store.fra1.digitaloceanspaces.com/icons/7912589/weather-icon-md.png"
          alt=""
        />
      </template>

      <input
        type="text"
        placeholder="Weather Status"
        class="text-center p-5"
        v-model="weather"
      />
    </div>
  </section>
</template>

<style scoped></style>
