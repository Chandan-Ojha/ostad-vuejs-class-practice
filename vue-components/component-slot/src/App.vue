<script setup>
import { ref } from "vue";
import ButtonComponent from "./components/ButtonComponent.vue";
import SlotComponent from "./components/SlotComponent.vue";

const msg = ref("Hello Vue 3");

function clickHandlerOne() {
  msg.value = "Click One";
}

function clickHandlerTwo() {
  msg.value = "Click Two";
}
</script>

<template>
  <h2 class="text-2xl my-10">Slot</h2>
  <p class="my-5">
    {{ msg }}
  </p>
  <p>
    <ButtonComponent :click-handler="clickHandlerOne">
      <!-- <em class="text-orange-600">Button One</em> -->
    </ButtonComponent>
  </p>
  <p class="my-5">
    <ButtonComponent :click-handler="clickHandlerTwo">
      <em>Button Two</em>
    </ButtonComponent>
  </p>

  <SlotComponent>
    Default Content 123
    <template #header>
      <h2 class="text-2xl my-10">This is Heading</h2>
    </template>
    <template v-slot:footer>
      <h2 class="text-xl my-10">This is Footer</h2>
    </template>
  </SlotComponent>
</template>
