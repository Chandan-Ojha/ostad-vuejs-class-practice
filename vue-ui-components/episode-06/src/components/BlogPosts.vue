<script setup>
import BlogPost from "./BlogPost.vue";
import { posts } from "../data/posts.js";
</script>
<template>
  <BlogPost v-for="(post, index) in posts" :post="post" :key="index" />
</template>

<style scoped></style>
