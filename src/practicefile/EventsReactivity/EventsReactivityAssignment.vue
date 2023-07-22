<script setup>
import { ref, reactive } from "vue";
const lights = reactive({
  lightOn: "//img.icons8.com/?size=512&id=12244&format=png",
  lightOff: "https://img.icons8.com/?size=512&id=75&format=png",
});

const colors = reactive({
  blue: "bg-blue-500 hover:bg-blue-700",
  gray: "bg-gray-500 hover:bg-gray-700",
});

const buttons = reactive({
  b1Status: true,
  b2Status: true,
  b3Status: false,
});

function buttonText(text) {
  return text == true ? "On" : "Off";
}
</script>

<template>
  <section class="container mx-auto flex items-center flex-col">
    <h1 class="text-center text-2xl py-10">Assignment</h1>
    <p class="p-5">Make These Buttons Work</p>
    <div class="flex justify-between space-x-6">
      <div class="p-10 border w-96 flex flex-col space-y-5">
        <button
          @click="buttons.b1Status = !buttons.b1Status"
          :class="buttons.b1Status == true ? colors.blue : colors.gray"
          class="text-white font-bold py-2 px-4 rounded"
        >
          Light 1 {{ buttonText(buttons.b1Status) }}
        </button>
        <button
          @click="buttons.b2Status = !buttons.b2Status"
          :class="buttons.b2Status == true ? colors.blue : colors.gray"
          class="text-white font-bold py-2 px-4 rounded"
        >
          Light 2 {{ buttonText(buttons.b2Status) }}
        </button>
        <button
          @click="buttons.b3Status = !buttons.b3Status"
          :class="buttons.b3Status == true ? colors.blue : colors.gray"
          class="text-white font-bold py-2 px-4 rounded"
        >
          Light 3 {{ buttonText(buttons.b3Status) }}
        </button>
      </div>
      <div class="p-10 border w-96 flex flex-col space-y-5">
        <img
          class="w-20"
          :src="buttons.b1Status == true ? lights.lightOn : lights.lightOff"
          alt=""
        />
        <img
          class="w-20"
          :src="buttons.b2Status == true ? lights.lightOn : lights.lightOff"
          alt=""
        />
        <img
          class="w-20"
          :src="buttons.b3Status == true ? lights.lightOn : lights.lightOff"
          alt=""
        />
      </div>
    </div>
  </section>
</template>

<style scoped></style>
