<script setup>
import { ref, reactive } from "vue";
import Person from "./components/Person.vue";
import SingleItem from "./components/SingleItem.vue";
import SingleItemY from "./components/SingleItemY.vue";
import MultipleItem from "./components/MultipleItem.vue";
import ButtonItem from "./components/ButtonItem.vue";
import NameComponent from "./components/NameComponent.vue";
import CheckBox from "./components/CheckBox.vue";

const person = reactive({
  name: "John Doe",
  age: 30,
  occupation: "Web Developer",
});

// const name = ref("Jane Doe");

const taskDone = ref(true);
</script>

<template>
  <!-- <section class="mx-auto container"> -->
  <!-- <h1 class="my-10">Component Model</h1>
  <p class="my-5">
    <h2 class="text-xl">Parent</h2>
    {{ person.name }} is {{ person.age }} years old and works as a {{ person.occupation }}.
  </p> -->

  <!-- <Person :person="person"/> -->
  <!-- <SingleItem v-model="person.name" label="Name"/> -->

  <!-- <MultipleItem v-model:name="person.name" v-model:age="person.age" v-model:occupation="person.occupation"/> -->

  <!-- <hr/> -->

  <!-- <SingleItemY v-model:name="person.name" label="Name"/> -->

  <!-- <hr/> -->

  <!-- <ButtonItem v-model:name="person.name" label="Name"/>
  <ButtonItem v-model:name="person.occupation" label="Occupation"/> -->

  <!-- </section> -->

  <div class="container mx-auto">
    <div class="flex items-center mt-5">
      <img class="logo" src="./assets/vue.svg" alt="Vue logo" />
      <h1 class="text-2xl">Component Model</h1>
    </div>

    <div class="mt-10">
      Original Name: {{ person.name }}<br />
      Task Done: {{ taskDone }}
    </div>

    <div class="mt-10">
      <label>Component</label><br /><br />
      <CheckBox v-model="taskDone" label="Completed this episode" />
    </div>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  padding-left: 0;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
