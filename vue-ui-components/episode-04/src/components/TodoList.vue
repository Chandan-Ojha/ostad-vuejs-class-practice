<script setup>
// defineProps(["title", "tasks"]);
defineProps({
  title: {
    type: String,
    default: "My Tasks",
  },
  tasks: Array,
  background: {
    type: String,
    default: "bg-red-200",
  },
});
</script>
<template>
  <!-- Component Start -->
  <div class="max-w-full p-8 rounded-lg shadow-lg w-96" :class="background">
    <div class="flex items-center mb-6">
      <svg
        class="h-8 w-8 text-indigo-500 stroke-current"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
        ></path>
      </svg>
      <h4 class="font-semibold ml-3 text-lg">{{ title }}</h4>
    </div>
    <div v-for="(task, index) in tasks" :key="task.index">
      <input
        class="hidden"
        type="checkbox"
        id="task_1"
        :checked="task.completed"
      />
      <label
        class="flex items-center h-10 px-2 rounded cursor-pointer hover:bg-gray-100"
        for="task_1"
      >
        <span
          class="flex items-center justify-center w-5 h-5 text-transparent border-2 border-gray-300 rounded-full"
        >
          <svg
            class="w-4 h-4 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </span>
        <span class="ml-4 text-sm">{{ task.title }}</span>
      </label>
    </div>
  </div>
  <!-- Component End  -->
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
