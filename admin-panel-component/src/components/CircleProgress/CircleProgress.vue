<script setup>
import "vue3-circle-progress/dist/circle-progress.css";
import CircleProgress from "vue3-circle-progress";
</script>

<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-3 p-2">
        <circle-progress :percent="40" />
      </div>

      <div class="col-3 p-2">
        <circle-progress
          linecap="stright"
          :show-percent="true"
          :is-gradient="true"
          :gradient="{ angle: 90, startColor: '#145d15', stopColor: '#37a44b' }"
        />
      </div>
    </div>
  </div>
</template>
