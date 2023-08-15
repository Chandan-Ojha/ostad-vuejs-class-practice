<script setup>
defineProps(['person'])
</script>
<template>
     <p class="my-5">
        <h2 class="text-xl">Child</h2>
        {{ person.name }} is {{ person.age }} years old and works as a {{ person.occupation }}.
    </p>
    <p>
        <form class="flex flex-col">
            <label for="name">Name</label>
            <input type="text" id="name" v-model="person.name" />
            <label for="age">Age</label>
            <input type="number" id="age" v-model="person.age" />
            <label for="occupation">Occupation</label>
            <input type="text" id="occupation" v-model="person.occupation" />
        </form>
    </p>
</template>

<style scoped></style>
