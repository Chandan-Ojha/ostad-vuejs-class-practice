<script setup>
// const items = [1, 2, 3, 4, 5];
const tasks = [
  { id: 1, title: "Complete project proposal", status: "In Progress" },
  { id: 2, title: "Update website content", status: "Completed" },
  { id: 3, title: "Fix bug in user authentication", status: "In Progress" },
  { id: 4, title: "Prepare presentation slides", status: "Pending" },
  { id: 5, title: "Test new feature implementation", status: "In Progress" },
];

function getCompletedTasks() {
  return tasks.filter((task) => "Completed" == task.status);
}

function getTasksInProgress() {
  return tasks.filter((task) => "In Progress" == task.status);
}
</script>

<template>
  <!-- <section
    class="mx-auto container flex items-center text-center flex-col space-y-2"
  >
    <div class="p-5 border border-gray-600 w-40" v-for="item in items">
      {{ item }}
    </div>
    <div class="p-5 border border-gray-600 w-40" v-for="n in 5">
      {{ n }}
    </div>
  </section> -->
  <section class="mx-auto container">
    <section class="mx-auto container space-y-3">
      <!-- <div
        class="p-5 border border-gray-600 text-left"
        v-for="task in tasks"
        :key="task.id"
      >
        {{ task.id }}. {{ task.title }}
      </div> -->
      <h2>Completed Task</h2>
      <div
        class="p-5 border border-gray-600 text-left"
        v-for="task in getCompletedTasks()"
        :key="task.id"
      >
        {{ task.id }}. {{ task.title }}
      </div>

      <hr />
      <h2>Tasks in Progress</h2>
      <div
        class="p-5 border border-gray-600 text-left"
        v-for="task in getTasksInProgress()"
        :key="task.id"
      >
        {{ task.id }}. {{ task.title }}
      </div>
      <h2>Pending</h2>
      <div
        class="p-5 border border-gray-600 text-left"
        v-for="(task, index) in tasks"
        v-show="'Pending' == task.status"
        :key="index"
      >
        {{ task.id }}. {{ task.title }}
      </div>
    </section>
  </section>
</template>

<style scoped></style>
