<script setup>
import TodoList from "./components/TodoList.vue";
const myTasks = [
  { title: "Weed front garden.", completed: false },
  { title: "Chill and smoke some Old Toby.", completed: true },
  { title: "Keep ring secret and safe.", completed: false },
  { title: "Meet Gandalf at Bree.", completed: false },
  { title: "Destroy ring and defeat dark lord.", completed: true },
];
</script>

<template>
  <section class="mx-auto">
    <h1 class="my-10 text-center">Components</h1>
    <div class="flex items-center justify-center h-[600px] font-medium">
      <div
        class="flex flex-grow items-center justify-center h-full text-gray-600 bg-gray-100"
      >
        <TodoList :tasks="myTasks" background="bg-white" />
      </div>
      <div
        class="flex flex-grow items-center justify-center bg-gray-900 h-full"
      >
        <TodoList
          title="Our Next Tasks"
          :tasks="myTasks"
          background="bg-gray-800"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
input[type="checkbox"]:checked + label span:first-of-type {
  background-color: #10b981;
  border-color: #10b981;
  color: #fff;
}

input[type="checkbox"]:checked + label span:nth-of-type(2) {
  text-decoration: line-through;
  color: #9ca3af;
}
</style>
