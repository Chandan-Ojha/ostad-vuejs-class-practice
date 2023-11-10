<script setup>
import NavBar from "@/Component/NavBar.vue";
import { Head } from "@inertiajs/vue3";
const props = defineProps({ meta: Object });
</script>

<template>
    <NavBar />
    <Head>
        <title>{{ props.meta.title }}</title>
    </Head>
    <div class="container">
        <h4 class="text-center mt-5">Inertia Head</h4>
        <p>
            Page Title: <strong>{{ props.meta.title }}</strong>
        </p>
    </div>
</template>

<style scoped></style>
