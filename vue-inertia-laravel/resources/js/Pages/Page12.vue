<script setup>
import NavBar from "@/Component/NavBar.vue";
import { router } from "@inertiajs/vue3";
document.title = "Page 12";

const btnOnClick = () => {
    //router.get("/Page7");

    router.post(
        "/Page1",
        {},
        {
            headers: {
                "X-Custom-Header": "Custom Value",
                Authorization: "Bearer YOUR_ACCESS_TOKEN",
            },
            replace: true,
            preserveScroll: true,
            onSuccess: () => {
                console.log("Form submitted successfully!");
            },
            onError: () => {
                console.log("Form submission failed!");
            },
        }
    );
};
</script>

<template>
    <NavBar />

    <div class="container mt-5">
        <h4 class="text-center">Inertia Router</h4>
        <button class="btn btn-primary" @click="btnOnClick">Click Me</button>
    </div>
</template>
