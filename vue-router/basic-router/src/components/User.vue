<script setup></script>
<template>
  <h2>This is our user page</h2>
  <h3 v-if="$route.params.id">user id = {{ $route.params.id }}</h3>
  <h3 v-else>No User Specified</h3>
  <router-view />
</template>

<style></style>
