<script setup>
import NavBar from "@/Component/NavBar.vue";
import { usePage } from "@inertiajs/vue3";
import Child2 from "@/Component/Child2.vue";
const page = usePage();
document.title = "Page 3";
</script>

<template>
    <NavBar />
    <div class="container">
        <h3 class="text-center mt-5">
            Global Shared data from HandleInertiaRequests
        </h3>
        <h4>Page 3 From Parent</h4>
        <h6>Message: {{ page.props.message }}</h6>
        <h6>Status: {{ page.props.status }}</h6>
        <h6>Shared Data: {{ page.props.shared_data }}</h6>
        <br />
        <Child2 />
    </div>
</template>

<style scoped></style>
