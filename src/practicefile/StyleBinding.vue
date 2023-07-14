<script setup>
const bgOrange =
  "background-color: rgba(251, 146, 60, 1); color:white; font-size:24px";
const bgIndigo = "background-color: rgba(129, 140, 248, 1)";
const bgGreen = "background-color: rgba(52, 211, 153, 1)";

const bgRed = "background-color: rgba(220, 38, 38, 1)";
const bgDarkGreen = "background-color: rgba(5, 150, 105, 1)";

const colors = {
  borderColor: "rgba(20, 184, 166, 1)", //rgba(239, 68, 68,1)
  // 'border-color': 'rgba(20, 184, 166, 1)', //rgba(239, 68, 68,1)
  color: "rgba(19, 78, 74, 1)", //rgba(127, 29, 29,1)
  backgroundColor: "rgba(204, 251, 241, 1)", //rgba(254, 226, 226,1)
  fontSize: "18px",
};

const messageType = "error";
if ("error" == messageType) {
  colors.borderColor = "rgba(239, 68, 68,1)";
  colors.backgroundColor = "rgba(254, 226, 226,1)";
  colors.color = "rgba(127, 29, 29,1)";
}

const textProperties = {
  fontSize: "20px",
};

const weekday = false;
</script>

<template>
  <section class="container mx-auto">
    <h1 class="text-center text-2xl py-10">Style Binding</h1>

    <section class="flex space-x-10">
      <div class="w-1/3 h-16" :style="bgOrange">Hello World</div>
      <div class="w-1/3 h-16" :style="bgIndigo"></div>
      <div class="w-1/3 h-16" :style="bgGreen"></div>
    </section>

    <section class="mt-10">
      <div
        class="h-16 flex items-center justify-center text-white"
        :style="weekday == true ? bgRed : bgDarkGreen"
      >
        It's a weekday!
      </div>
    </section>

    <section class="mt-10">
      <div
        class="border-t-4 rounded-b px-4 py-3 shadow-md"
        :style="[colors, textProperties]"
      >
        <p class="font-bold">Our privacy policy has changed</p>
        <p class="text-sm">Make sure you know how these changes affect you.</p>
      </div>
    </section>
  </section>
</template>

<style scoped></style>
