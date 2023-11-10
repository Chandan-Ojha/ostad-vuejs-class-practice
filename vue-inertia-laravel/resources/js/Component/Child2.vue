<script setup>
import { usePage } from "@inertiajs/vue3";
const page = usePage();
</script>

<template>
    <h4>Page 3 Data From Child</h4>
    <h6>Message: {{ page.props.message }}</h6>
    <h6>Status: {{ page.props.status }}</h6>
    <h6>Shared Data: {{ page.props.shared_data }}</h6>
</template>

<style scoped></style>
