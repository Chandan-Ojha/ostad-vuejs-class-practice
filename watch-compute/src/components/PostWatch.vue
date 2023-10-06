<script setup>
import { ref, watch } from "vue";

const postId = ref(1);
const data = ref("Post Id is: " + postId.value);

watch(postId, (newVal, oldVal) => {
  data.value = "Post Id is: " + newVal;
});
</script>

<template>
  <p>{{ data }}</p>
  <p>Post ID: {{ postId }}</p>
  <p>
    <input class="text-black" type="text" v-model="postId" />
  </p>
</template>

<style scoped></style>
