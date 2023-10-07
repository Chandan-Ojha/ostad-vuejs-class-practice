<script setup>
defineProps(["post"]);
</script>
<template>
  <div class="mb-8 border-dotted border-b pb-8 border-gray-300">
    <h2>
      <a class="block" :href="`/11r/post/${post.slug}`">{{ post.title }}</a>
    </h2>
    <p class="excerpt">{{ post.excerpt }}</p>
    <a
      class="tag"
      :class="tag.color"
      :href="`/11r/tag/${tag.slug}`"
      v-for="(tag, index) in post.tags"
      :key="index"
      >{{ tag.name }}</a
    >
    <span
      class="block md:inline md:float-right md:pt-4 pt-2 created-date"
      datetime="Sat Oct 08 2016 19:00:00 GMT-0500 (Central Daylight Time)"
    >
      October 9, 2016
    </span>
  </div>
</template>

<style scoped></style>
