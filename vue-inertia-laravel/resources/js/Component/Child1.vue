<script setup>
const props = defineProps({ data: Object });
</script>

<template>
    <div>
        <p>Name: {{ props.data.name }}</p>
        <p>Age: {{ props.data.age }}</p>
        <p>City: {{ props.data.city }}</p>
    </div>
</template>

<style scoped></style>
