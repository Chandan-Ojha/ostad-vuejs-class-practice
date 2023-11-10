<script setup>
import NavBar from "@/Component/NavBar.vue";
import Child1 from "@/Component/Child1.vue";
const props = defineProps({ data: Object });
document.title = "Page 1";
</script>

<template>
    <NavBar />
    <div class="container">
        <h4 class="text-center mt-5">
            Data passing controller to vue component
        </h4>

        <h6>This Data from Page1</h6>
        <p>Name: {{ props.data.name }}</p>
        <p>Age: {{ props.data.age }}</p>
        <p>City: {{ props.data.city }}</p>
        <br />
        <h6>This Data from Child1</h6>
        <Child1 :data="props.data" />
    </div>
</template>

<style scoped></style>
